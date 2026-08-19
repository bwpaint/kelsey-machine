// ─── /api/submit — Astro server route (xCloud / Node adapter) ────────────────
// The ONLY server-rendered route on this site. Everything else is prerendered
// to static HTML at build time; `prerender = false` opts this one route into
// the Node runtime so the WebWize Connect X-API-Key can live server-side.
//
// All logic lives in astro/src/lib/leadHandler.ts — shared with the legacy
// Vercel function at api/submit.ts. Do not fork it here.

import type { APIRoute } from "astro";
import { handleLead } from "../../lib/leadHandler";

export const prerender = false;

export const POST: APIRoute = ({ request, clientAddress }) =>
  // clientAddress is the direct socket peer. Behind the xCloud reverse proxy
  // that's the proxy itself, so handleLead prefers X-Forwarded-For and only
  // falls back to this. Wrapped in try/catch because Astro throws on
  // clientAddress access if an adapter doesn't support it.
  handleLead(request, safeClientAddress(() => clientAddress));

function safeClientAddress(get: () => string): string {
  try {
    return get() || "";
  } catch {
    return "";
  }
}

// Anything other than POST gets a clean 405 rather than Astro's 404 — makes
// misconfigured proxies obvious in the logs instead of looking like a routing bug.
export const ALL: APIRoute = () =>
  new Response(JSON.stringify({ error: "Method not allowed." }), {
    status: 405,
    headers: { "Content-Type": "application/json", Allow: "POST" },
  });
