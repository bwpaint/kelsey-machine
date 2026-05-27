// ─── Lead submission helper ───────────────────────────────────────────────────
// Single source of truth for sending a lead from any form on the site.
// Today it POSTs to the Vercel serverless function at /api/submit (Resend email).
// When the headless WordPress CMS is live, point VITE_LEAD_ENDPOINT at
// https://cms.kmstx.com/wp-json/wwcf/v1/submit and nothing else has to change.

export type LeadFormType = "quote" | "contact" | "newsletter" | "landing";

export interface LeadPayload {
  formType: LeadFormType;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string; // service slug or label
  message?: string;
  source?: string; // page path, filled in automatically if omitted
}

const ENDPOINT =
  (import.meta.env.VITE_LEAD_ENDPOINT as string | undefined) || "/api/submit";

export async function submitLead(payload: LeadPayload): Promise<void> {
  const source =
    payload.source ||
    (typeof window !== "undefined" ? window.location.pathname : "");

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, source }),
  });

  if (!res.ok) {
    let message = `Submission failed (${res.status})`;
    try {
      const data = (await res.json()) as { error?: string };
      if (data?.error) message = data.error;
    } catch {
      /* response had no JSON body */
    }
    throw new Error(message);
  }
}
