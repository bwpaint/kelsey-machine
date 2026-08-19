// ─── /api/submit — LEGACY Vercel serverless function ─────────────────────────
//
// DEPRECATED as of the xCloud migration (2026-08-18). The live handler is now
// astro/src/pages/api/submit.ts, running on the Astro Node adapter at xCloud.
// This file is kept ONLY so the still-serving Vercel deployment keeps taking
// leads until DNS is cut over to xCloud. Delete it once www.kmstx.com resolves
// to xCloud and leads are confirmed landing in WordPress.
//
// It is a shim on purpose. All logic lives in the shared module below — this
// repo has twice had work built into the wrong one of two parallel codebases,
// so there is deliberately nothing here to get out of sync.

import { handleLead } from "../astro/src/lib/leadHandler";

export async function POST(req: Request): Promise<Response> {
  return handleLead(req);
}
