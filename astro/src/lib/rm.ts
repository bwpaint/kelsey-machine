/**
 * WebWize Connect RM (Route Meta) — build-time SEO fetcher for Astro.
 *
 * Fetches the full route-meta map ONCE per build from cms.kmstx.com.
 * Each page's frontmatter calls getMeta('/path') to pull title, desc,
 * canonical, OG tags, robots, schema — same shape as the React client.
 *
 * Pattern modeled after ProSWPPP's src/lib/seo.ts, adapted for Astro's
 * static build (no per-request fetch; we fetch once and cache for the
 * whole build).
 *
 * Falls back to a minimal default if RM is unreachable so a flaky CMS
 * never breaks the build.
 */

const WWRM_BASE = process.env.WWRM_API_BASE || "https://cms.kmstx.com/wp-json/webwize-rm/v1";
const WWRM_KEY  = process.env.WWRM_API_KEY  || "";

export interface RmEntry {
  path?: string;
  seo_title?: string;
  meta_desc?: string;
  canonical?: string;
  og_title?: string;
  og_desc?: string;
  og_image?: string;
  twitter_card?: string;
  robots?: string;
  schema_json?: string;
  page_status?: "draft" | "development" | "live";
}

type RmIndex = Record<string, RmEntry>;

// Build-time cache — one fetch per Astro build process.
let cache: RmIndex | null = null;
let inflight: Promise<RmIndex> | null = null;

async function load(): Promise<RmIndex> {
  if (cache) return cache;
  if (inflight) return inflight;

  inflight = (async () => {
    if (!WWRM_KEY) {
      // No key configured (preview build, fresh dev) — return empty so
      // each page falls back to its hardcoded defaults.
      console.warn("[rm] WWRM_API_KEY not set — using page fallbacks only");
      cache = {};
      return cache;
    }
    try {
      const res = await fetch(`${WWRM_BASE}/seo/all`, {
        headers: { "X-API-Key": WWRM_KEY },
      });
      if (!res.ok) {
        console.warn(`[rm] /seo/all returned ${res.status} — using fallbacks`);
        cache = {};
        return cache;
      }
      const data = (await res.json()) as RmEntry[] | Record<string, RmEntry>;
      // Normalize to path-keyed index regardless of API response shape
      const index: RmIndex = {};
      if (Array.isArray(data)) {
        for (const row of data) {
          if (row?.path) index[normalizePath(row.path)] = row;
        }
      } else if (data && typeof data === "object") {
        for (const [k, v] of Object.entries(data)) {
          index[normalizePath(k)] = v as RmEntry;
        }
      }
      cache = index;
      console.log(`[rm] loaded ${Object.keys(cache).length} route-meta entries`);
      return cache;
    } catch (err) {
      console.warn(`[rm] fetch failed:`, err);
      cache = {};
      return cache;
    }
  })();

  return inflight;
}

function normalizePath(p: string): string {
  if (!p) return "/";
  if (p === "/") return "/";
  return p.replace(/\/+$/, "");
}

export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  twitterCard: "summary" | "summary_large_image";
  robots: string;
  schemaJson?: string;
}

export interface MetaFallback {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

/**
 * Resolve the SEO meta for a path. RM entry wins for each field; falls back
 * to the supplied defaults if RM is missing or the field is empty.
 */
export async function getMeta(path: string, fallback: MetaFallback): Promise<PageMeta> {
  const index = await load();
  const rm = index[normalizePath(path)] ?? null;

  const title       = rm?.seo_title    || fallback.title;
  const description = rm?.meta_desc    || fallback.description;
  const ogTitle     = rm?.og_title     || title;
  const ogDescription = rm?.og_desc    || description;
  const ogImage     = rm?.og_image     || fallback.ogImage;
  const canonical   = rm?.canonical    || fallback.canonical;
  const robots      = rm?.robots       || (fallback.noindex ? "noindex,nofollow" : "index,follow");
  const twitterCard = (rm?.twitter_card === "summary" ? "summary" : "summary_large_image");

  return {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    twitterCard,
    robots,
    schemaJson: rm?.schema_json,
  };
}

/**
 * Export the entire index — used by the build-time script that writes
 * public/_data/route-meta.json (so client-side SPA hooks can read it too,
 * if we keep the Wouter fallback during transition).
 */
export async function getAllMeta(): Promise<RmIndex> {
  return load();
}
