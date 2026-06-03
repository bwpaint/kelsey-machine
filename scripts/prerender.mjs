/**
 * Build-time prerender for KMS site.
 *
 * Runs after `vite build`. Loads the built SPA in headless Chrome, navigates
 * to each route we want as static HTML, and saves the fully-rendered DOM as
 * dist/public/<route>/index.html. Vercel then serves those files directly
 * from its CDN.
 *
 * Security:
 * - Blog slugs from cms.kmstx.com are validated against an allowlist
 *   (`/^[a-z0-9][a-z0-9-]{0,200}$/`) and the resolved write path must
 *   stay inside dist/public — prevents path traversal if the CMS returns
 *   a malicious slug.
 * - The static server binds to 127.0.0.1 only (not exposed on the CI runner).
 * - CMS_URL must be https — defeats env-var hijack that points at attacker.
 * - Graceful fallback: if Puppeteer can't launch, the script exits 0 so the
 *   SPA fallback still serves the same pages.
 */
import { createServer } from "http";
import { readFile, writeFile, mkdir, stat } from "fs/promises";
import { existsSync } from "fs";
import { dirname, extname, join, resolve as resolvePath, sep } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = resolvePath(ROOT, "dist/public");

// CMS URL — must be https to defeat env-var hijack (#12 in security review).
const RAW_CMS = (process.env.VITE_CMS_URL || "https://cms.kmstx.com").replace(/\/+$/, "");
let CMS_URL = null;
try {
  const u = new URL(RAW_CMS);
  if (u.protocol !== "https:") {
    console.warn(`⚠  VITE_CMS_URL must be https — got ${u.protocol}. Skipping blog slug fetch.`);
  } else {
    CMS_URL = `${u.protocol}//${u.host}`;
  }
} catch {
  console.warn(`⚠  VITE_CMS_URL is not a valid URL: ${RAW_CMS}. Skipping blog slug fetch.`);
}

const PORT = 4321;
const NAV_TIMEOUT_MS = 30000;
const RENDER_WAIT_MS = 800;
const CONCURRENCY = 4;

// Slug allowlist — WP normally hands out lowercase kebab-case slugs.
// Anything outside this character class is rejected.
const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,200}$/;

const STATIC_ROUTES = [
  "/",
  "/services",
  "/services/centrifuge-repair",
  "/services/gearbox-repair",
  "/services/industrial-blower-repair",
  "/services/industrial-compressors",
  "/services/fluid-power-end-repair",
  "/pump-service",
  "/competitors",
  "/warranty",
  "/emergency-service",
  "/contact",
  "/about",
  "/industries",
  "/privacy-policy",
  "/terms",
  "/blog",
  // Google Ads landing page aliases
  "/fluid-end-power-end-repair",
  "/gearbox-repair-service",
  "/services/centrifuge-repair-service",
  "/services/compressor-repair-service",
  "/blower-vacuum-pump-repair",
];

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".mjs":  "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg":  "image/svg+xml",
  ".ico":  "image/x-icon",
  ".xml":  "application/xml; charset=utf-8",
  ".txt":  "text/plain; charset=utf-8",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
  ".ttf":  "font/ttf",
};

function mimeFor(p) {
  return MIME[extname(p).toLowerCase()] || "application/octet-stream";
}

async function pathExists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function fetchBlogSlugs() {
  if (!CMS_URL) return [];
  const all = [];
  let page = 1;
  while (page < 50) {
    const url = `${CMS_URL}/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug`;
    let resp;
    try {
      resp = await fetch(url, { signal: AbortSignal.timeout(15000) });
    } catch (e) {
      console.warn(`  [warn] could not reach ${CMS_URL} for blog slugs:`, e.message);
      return all;
    }
    if (!resp.ok) {
      if (resp.status === 400 || resp.status === 404) break;
      console.warn(`  [warn] CMS returned ${resp.status} on page ${page}`);
      break;
    }
    const arr = await resp.json();
    if (!Array.isArray(arr) || arr.length === 0) break;
    for (const p of arr) {
      const slug = p?.slug;
      if (typeof slug !== "string") continue;
      if (!SLUG_RE.test(slug)) {
        console.warn(`  [warn] rejected unsafe slug from CMS: ${JSON.stringify(slug)}`);
        continue;
      }
      all.push(slug);
    }
    if (arr.length < 100) break;
    page++;
  }
  return all;
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        const urlPath = (req.url || "/").split("?")[0];
        let filePath = join(DIST, urlPath === "/" ? "index.html" : urlPath.replace(/\/$/, ""));
        let isFile = await pathExists(filePath);
        if (isFile) {
          const st = await stat(filePath);
          if (st.isDirectory()) {
            filePath = join(filePath, "index.html");
            isFile = await pathExists(filePath);
          }
        }
        if (!isFile) filePath = join(DIST, "index.html");
        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": mimeFor(filePath), "Cache-Control": "no-store" });
        res.end(data);
      } catch {
        res.writeHead(500); res.end("server error");
      }
    });
    // Bind to loopback only — never expose the in-progress build on the CI runner.
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

/**
 * Resolve the output directory for a route, refusing to escape DIST.
 * Returns null if the route is unsafe.
 */
function safeOutDir(route) {
  if (route === "/") return DIST;
  const rel = route.replace(/^\//, "");
  // Per-segment validation — every segment must match our allowlist.
  const segments = rel.split("/");
  for (const seg of segments) {
    if (seg === "" || seg === "." || seg === ".." || /[^a-z0-9-]/i.test(seg)) {
      return null;
    }
  }
  const out = resolvePath(DIST, rel);
  // Belt-and-suspenders: the resolved path must start with DIST + sep,
  // and equal DIST itself if rel was empty.
  if (out !== DIST && !out.startsWith(DIST + sep)) return null;
  return out;
}

async function renderOne(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  try {
    const outDir = safeOutDir(route);
    if (!outDir) {
      return { route, ok: false, error: "route rejected by path-confinement guard" };
    }
    const url = `http://127.0.0.1:${PORT}${route}`;
    await page.goto(url, { waitUntil: "networkidle0", timeout: NAV_TIMEOUT_MS });
    await new Promise((r) => setTimeout(r, RENDER_WAIT_MS));
    const html = await page.content();

    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), html, "utf8");
    return { route, ok: true, bytes: html.length };
  } catch (err) {
    return { route, ok: false, error: err?.message || String(err) };
  } finally {
    await page.close().catch(() => {});
  }
}

async function main() {
  if (!existsSync(DIST)) {
    console.error(`✗ dist/public not found at ${DIST} — did vite build run?`);
    process.exit(1);
  }

  let puppeteer;
  try {
    ({ default: puppeteer } = await import("puppeteer"));
  } catch {
    console.warn("⚠  puppeteer not installed — skipping prerender (SPA fallback will still work)");
    process.exit(0);
  }

  console.log(`▶ Fetching blog slugs from ${CMS_URL || "(disabled — bad VITE_CMS_URL)"}`);
  const blogSlugs = await fetchBlogSlugs();
  console.log(`  found ${blogSlugs.length} blog posts`);
  const blogRoutes = blogSlugs.map((s) => `/blog/${s}`);
  const allRoutes = [...STATIC_ROUTES, ...blogRoutes];
  console.log(`▶ Prerendering ${allRoutes.length} routes (concurrency ${CONCURRENCY})`);

  const server = await startServer();
  console.log(`  static server: http://127.0.0.1:${PORT}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    });
  } catch (e) {
    console.warn(`⚠  could not launch Chrome (${e.message}) — skipping prerender`);
    server.close();
    process.exit(0);
  }

  const results = [];
  let completed = 0;
  const queue = [...allRoutes];

  async function worker() {
    while (queue.length) {
      const route = queue.shift();
      if (!route) break;
      const r = await renderOne(browser, route);
      results.push(r);
      completed++;
      const tag = r.ok ? "✓" : "✗";
      const info = r.ok ? `${(r.bytes / 1024).toFixed(1)}kb` : r.error;
      process.stdout.write(`  [${String(completed).padStart(3)}/${allRoutes.length}] ${tag} ${route}  ${info}\n`);
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, worker);
  await Promise.all(workers);

  await browser.close();
  server.close();

  const ok = results.filter((r) => r.ok).length;
  const failed = results.filter((r) => !r.ok);
  console.log(`▶ Done: ${ok}/${results.length} routes prerendered`);
  if (failed.length) {
    console.log(`  ${failed.length} failures:`);
    for (const f of failed) console.log(`    ✗ ${f.route}: ${f.error}`);
  }
}

main().catch((err) => {
  console.error("prerender script failed:", err);
  process.exit(1);
});
