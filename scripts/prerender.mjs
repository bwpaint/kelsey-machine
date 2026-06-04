/**
 * Build-time SEO prerender for KMS site — NO BROWSER required.
 *
 * Why no browser: Vercel's build container is missing system libraries
 * (libnss3, libgbm, libatk, etc.) that Chromium needs. Puppeteer +
 * @sparticuz/chromium + every other "headless Chrome on Vercel build"
 * trick fails on those missing libs. So we abandon browser-based rendering
 * and use pure string templating against Vite's SPA-shell index.html.
 *
 * What gets baked into the static HTML per-route:
 *   - <title>
 *   - <meta name="description">
 *   - <meta name="robots">
 *   - <link rel="canonical">
 *   - <meta property="og:title|og:description|og:image|og:type">
 *   - <meta name="twitter:card">
 *   - <script type="application/ld+json"> (RM schema_json, if set)
 *
 * What stays the same as the SPA shell:
 *   - <div id="root"></div> (React hydrates on load)
 *   - The bundled JS + CSS links
 *   - GTM, fonts, favicons
 *
 * This is enough for Google rich-result eligibility (title, meta desc, OG,
 * schema) and AI Overview citation. The body content is rendered by React
 * after JS loads; Googlebot executes JS so it sees that too. The win vs a
 * pure SPA: tags are correct on FIRST BYTE before any JS runs.
 *
 * Outputs (per route):
 *   dist/public/<route>/index.html  (e.g. dist/public/services/centrifuge-repair/index.html)
 *
 * Also writes:
 *   dist/public/_data/route-meta.json — consumed by client useRouteMeta hook
 *   dist/public/404.html              — copy of SPA shell for unknown routes
 */
import { readFile, writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { dirname, join, resolve as resolvePath, sep } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = resolvePath(ROOT, "dist/public");

// CMS URL — must be https.
const RAW_CMS = (process.env.VITE_CMS_URL || "https://cms.kmstx.com").replace(/\/+$/, "");
let CMS_URL = null;
try {
  const u = new URL(RAW_CMS);
  if (u.protocol === "https:") CMS_URL = `${u.protocol}//${u.host}`;
  else console.warn(`⚠  VITE_CMS_URL must be https — got ${u.protocol}`);
} catch {
  console.warn(`⚠  VITE_CMS_URL invalid: ${RAW_CMS}`);
}

const WWRM_API_KEY = process.env.WWRM_API_KEY || "";
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
  "/fluid-end-power-end-repair",
  "/gearbox-repair-service",
  "/services/centrifuge-repair-service",
  "/services/compressor-repair-service",
  "/blower-vacuum-pump-repair",
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function safeOutDir(route) {
  if (route === "/") return DIST;
  const rel = route.replace(/^\//, "");
  for (const seg of rel.split("/")) {
    if (seg === "" || seg === "." || seg === ".." || /[^a-z0-9-]/i.test(seg)) return null;
  }
  const out = resolvePath(DIST, rel);
  if (out !== DIST && !out.startsWith(DIST + sep)) return null;
  return out;
}

// ─── Fetchers ───────────────────────────────────────────────────────────────

async function fetchBlogSlugs() {
  if (!CMS_URL) return [];
  const all = [];
  for (let page = 1; page < 50; page++) {
    const url = `${CMS_URL}/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug`;
    let resp;
    try {
      resp = await fetch(url, { signal: AbortSignal.timeout(15000) });
    } catch (e) {
      console.warn(`  [warn] CMS unreachable for slugs:`, e.message);
      return all;
    }
    if (!resp.ok) {
      if (resp.status === 400 || resp.status === 404) break;
      console.warn(`  [warn] CMS slug page ${page} returned ${resp.status}`);
      break;
    }
    const arr = await resp.json();
    if (!Array.isArray(arr) || arr.length === 0) break;
    for (const p of arr) {
      const slug = p?.slug;
      if (typeof slug === "string" && SLUG_RE.test(slug)) all.push(slug);
    }
    if (arr.length < 100) break;
  }
  return all;
}

async function fetchAllRouteMeta() {
  if (!CMS_URL) return new Map();
  if (!WWRM_API_KEY) {
    console.warn("⚠  WWRM_API_KEY not set — SEO tags will fall back to SPA shell defaults.");
    return new Map();
  }
  try {
    const url = `${CMS_URL}/wp-json/webwize-rm/v1/seo/all?status=live`;
    const resp = await fetch(url, { headers: { "X-API-Key": WWRM_API_KEY }, signal: AbortSignal.timeout(15000) });
    if (!resp.ok) {
      console.warn(`⚠  RM /seo/all returned ${resp.status}`);
      return new Map();
    }
    const json = await resp.json();
    const map = new Map();
    for (const p of (json?.pages || [])) {
      let path = p.path || "/";
      if (path !== "/" && path.endsWith("/")) path = path.slice(0, -1);
      map.set(path, p);
    }
    console.log(`  fetched ${map.size} RM route-meta entries`);
    return map;
  } catch (e) {
    console.warn(`⚠  RM fetch failed: ${e.message}`);
    return new Map();
  }
}

async function writeRouteMetaJson(metaMap) {
  const out = {};
  for (const [path, m] of metaMap.entries()) {
    out[path] = {
      seo_title: m.seo_title || "",
      meta_desc: m.meta_desc || "",
      og_title: m.og_title || "",
      og_desc: m.og_desc || "",
      og_image: m.og_image || "",
      canonical: m.canonical || "",
      robots: m.robots || "index, follow",
      twitter_card: m.twitter_card || "summary_large_image",
      schema_json: m.schema_json || "",
    };
  }
  const dataDir = join(DIST, "_data");
  await mkdir(dataDir, { recursive: true });
  await writeFile(join(dataDir, "route-meta.json"), JSON.stringify(out, null, 0), "utf8");
}

// ─── Per-route HTML synthesis ──────────────────────────────────────────────

/**
 * Take the SPA shell HTML and substitute the SEO tags from RM meta.
 * If an existing tag is present, replace its content; otherwise inject
 * a new tag before </head>.
 */
function applyMetaToShell(shell, meta) {
  if (!meta) return shell;
  let html = shell;

  // <title>
  if (meta.seo_title) {
    if (/<title>[^<]*<\/title>/i.test(html)) {
      html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(meta.seo_title)}</title>`);
    } else {
      html = html.replace(/<\/head>/i, `    <title>${escapeHtml(meta.seo_title)}</title>\n  </head>`);
    }
  }

  // meta name="description"
  if (meta.meta_desc) {
    const rx = /<meta\s+name=["']description["'][^>]*>/i;
    const tag = `<meta name="description" content="${escapeHtml(meta.meta_desc)}" />`;
    html = rx.test(html) ? html.replace(rx, tag) : html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
  }

  // meta name="robots"
  const robots = meta.robots || "index, follow";
  if (robots) {
    const rx = /<meta\s+name=["']robots["'][^>]*>/i;
    const tag = `<meta name="robots" content="${escapeHtml(robots)}" />`;
    html = rx.test(html) ? html.replace(rx, tag) : html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
  }

  // link rel="canonical"
  if (meta.canonical) {
    const rx = /<link\s+rel=["']canonical["'][^>]*>/i;
    const tag = `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`;
    html = rx.test(html) ? html.replace(rx, tag) : html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
  }

  // og:* (title, description, image, type)
  const ogPairs = [
    ["og:title", meta.og_title || meta.seo_title],
    ["og:description", meta.og_desc || meta.meta_desc],
    ["og:image", meta.og_image],
    ["og:type", "website"],
  ];
  for (const [prop, content] of ogPairs) {
    if (!content) continue;
    const rx = new RegExp(`<meta\\s+property=["']${prop}["'][^>]*>`, "i");
    const tag = `<meta property="${prop}" content="${escapeHtml(content)}" />`;
    html = rx.test(html) ? html.replace(rx, tag) : html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
  }

  // twitter:card
  if (meta.twitter_card) {
    const rx = /<meta\s+name=["']twitter:card["'][^>]*>/i;
    const tag = `<meta name="twitter:card" content="${escapeHtml(meta.twitter_card)}" />`;
    html = rx.test(html) ? html.replace(rx, tag) : html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
  }

  // schema JSON-LD (marked with data-rm-schema so client hook doesn't duplicate)
  if (meta.schema_json && meta.schema_json.trim()) {
    const script = `<script type="application/ld+json" data-rm-schema="true">${meta.schema_json}</script>`;
    html = html.replace(/<\/head>/i, `    ${script}\n  </head>`);
  }

  return html;
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  if (!existsSync(DIST)) {
    console.error(`✗ dist/public not found at ${DIST}`);
    process.exit(1);
  }

  console.log(`▶ Fetching from ${CMS_URL || "(disabled)"}`);
  const [blogSlugs, routeMetaMap] = await Promise.all([fetchBlogSlugs(), fetchAllRouteMeta()]);
  console.log(`  found ${blogSlugs.length} blog posts`);

  await writeRouteMetaJson(routeMetaMap);

  // Read the Vite-built SPA shell once
  const shellPath = join(DIST, "index.html");
  const shell = await readFile(shellPath, "utf8");

  // Save the unmodified shell as 404.html for SPA fallback on unknown routes
  await writeFile(join(DIST, "404.html"), shell, "utf8");
  console.log(`  saved SPA shell to 404.html`);

  const blogRoutes = blogSlugs.map((s) => `/blog/${s}`);
  const allRoutes = [...STATIC_ROUTES, ...blogRoutes];
  console.log(`▶ Writing ${allRoutes.length} prerendered HTML files (no browser needed)`);

  let ok = 0, failed = 0;
  for (const route of allRoutes) {
    const outDir = safeOutDir(route);
    if (!outDir) {
      console.log(`    ✗ ${route} — path-confinement rejected`);
      failed++;
      continue;
    }
    const routeKey = route === "/" ? "/" : route.replace(/\/$/, "");
    const meta = routeMetaMap.get(routeKey);
    const html = applyMetaToShell(shell, meta);

    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, "index.html"), html, "utf8");
    ok++;
    if (ok <= 5 || ok % 20 === 0 || ok === allRoutes.length) {
      const tag = meta ? `(meta: "${meta.seo_title || "(default)"}")` : "(no meta — shell only)";
      console.log(`    ✓ [${ok}/${allRoutes.length}] ${route} ${tag}`);
    }
  }

  console.log(`▶ Done: ${ok}/${allRoutes.length} routes prerendered, ${failed} failed`);
}

main().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
