/**
 * Route-meta hydration.
 *
 * At build time, scripts/prerender.mjs fetches all live routes from the
 * WebWize Connect RM module and writes the result to /_data/route-meta.json.
 * The prerendered HTML for each route already has the correct <title>, meta,
 * OG, canonical, robots, and (optionally) schema tags baked in — so Google
 * sees the right tags on first byte.
 *
 * This module handles the SPA-navigation case: when a user clicks from
 * /services/centrifuge-repair to /services/gearbox-repair via Wouter, the
 * browser does NOT do a full page load. We fetch the static route-meta.json
 * once on app start, cache it in memory, and update document.title + meta
 * tags whenever the path changes.
 *
 * No API key is involved — route-meta.json is public-by-nature SEO data
 * served directly from Vercel's CDN.
 */

export interface RouteMeta {
  seo_title: string;
  meta_desc: string;
  og_title: string;
  og_desc: string;
  og_image: string;
  canonical: string;
  robots: string;
  twitter_card: string;
  schema_json: string;
}

type RouteMetaIndex = Record<string, RouteMeta>;

let cache: RouteMetaIndex | null = null;
let inflight: Promise<RouteMetaIndex> | null = null;

/**
 * Load /_data/route-meta.json. Cached after first call.
 * Returns an empty index on fetch failure so callers always get a usable map.
 */
export async function loadRouteMeta(): Promise<RouteMetaIndex> {
  if (cache) return cache;
  if (inflight) return inflight;
  inflight = fetch("/_data/route-meta.json", { cache: "force-cache" })
    .then((r) => (r.ok ? r.json() : {}))
    .then((data) => {
      cache = data as RouteMetaIndex;
      return cache;
    })
    .catch(() => {
      cache = {};
      return cache;
    });
  return inflight;
}

/**
 * Look up meta for a given path. Normalizes trailing slashes so the lookup
 * keys match what the prerender script writes (no trailing slash except root).
 */
export function getMeta(path: string, index: RouteMetaIndex): RouteMeta | null {
  const key = path === "/" ? "/" : path.replace(/\/$/, "");
  return index[key] || null;
}

/**
 * Apply meta to the live DOM. Used by useRouteMeta on Wouter path change.
 * The prerendered HTML already has these set; this updates them on SPA nav.
 */
export function applyMeta(meta: RouteMeta): void {
  if (meta.seo_title) document.title = meta.seo_title;

  setMeta("description", meta.meta_desc);
  setMeta("robots", meta.robots || "index, follow");

  setLink("canonical", meta.canonical);

  setOg("title", meta.og_title || meta.seo_title);
  setOg("description", meta.og_desc || meta.meta_desc);
  setOg("image", meta.og_image);
  setOg("type", "website");

  if (meta.twitter_card) setMeta("twitter:card", meta.twitter_card);

  // Schema: only swap if RM has one AND the page didn't already inject one
  // inline. data-rm-schema marks ours; absence means a page component
  // hardcoded it (5 service pages + KmsLayout.FaqSection). Don't fight those.
  if (meta.schema_json && meta.schema_json.trim()) {
    const inline = document.querySelector(
      'script[type="application/ld+json"]:not([data-rm-schema])'
    );
    if (!inline) {
      const existing = document.querySelector("script[data-rm-schema]");
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-rm-schema", "true");
      script.textContent = meta.schema_json;
      document.head.appendChild(script);
    }
  }
}

function setMeta(name: string, content: string | null | undefined): void {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOg(property: string, content: string | null | undefined): void {
  if (!content) return;
  let el = document.querySelector(`meta[property="og:${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", `og:${property}`);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string | null | undefined): void {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}
