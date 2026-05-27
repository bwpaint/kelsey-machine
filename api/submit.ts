// ─── KMS lead form handler (Vercel Serverless Function) ───────────────────────
// Receives a lead from any form on the site and emails it to the KMS team
// via Resend. Temporary stand-in until the headless WordPress endpoint
// (/wp-json/wwcf/v1/submit) is live — see client/src/lib/submitLead.ts.
//
// Required environment variables (set in the Vercel dashboard):
//   RESEND_API_KEY   — API key from resend.com
//   LEAD_TO_EMAIL    — where leads are delivered (default: service@kmstx.com)
//   LEAD_FROM_EMAIL  — verified Resend sender (default: leads@kmstx.com)

interface LeadBody {
  formType?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
  message?: string;
  source?: string;
}

const SERVICE_LABELS: Record<string, string> = {
  centrifuge: "Centrifuge Repair",
  blower: "Industrial Blower Repair",
  gearbox: "Gearbox Repair",
  compressor: "Industrial Compressors",
  "fluid-end": "Fluid & Power End Repair",
  emergency: "Emergency Service",
  other: "Other / Not Sure",
};

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string,
  );
}

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();

  if (!name || (!email && !phone)) {
    return json({ error: "Please include your name and a phone number or email." }, 400);
  }
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || "service@kmstx.com";
  const from = process.env.LEAD_FROM_EMAIL || "leads@kmstx.com";

  if (!apiKey) {
    console.error("[lead] RESEND_API_KEY is not set");
    return json({ error: "Our form is being set up. Please call 346-350-1464." }, 500);
  }

  const formType = body.formType || "quote";
  const service = body.interest
    ? SERVICE_LABELS[body.interest] || body.interest
    : "Not specified";
  const subject =
    `New ${formType} lead — ${name}` +
    (service !== "Not specified" ? ` (${service})` : "");

  const rows: Array<[string, string]> = [
    ["Name", name],
    ["Company / Plant", body.company || "—"],
    ["Phone", phone || "—"],
    ["Email", email || "—"],
    ["Service Needed", service],
    ["Message", body.message || "—"],
    ["Form", formType],
    ["Submitted from", body.source || "—"],
  ];

  const html =
    `<h2 style="font-family:Arial,sans-serif;color:#1E5080">New lead from kmstx.com</h2>` +
    `<table style="font-family:Arial,sans-serif;border-collapse:collapse;font-size:15px">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:4px 14px 4px 0;font-weight:700;vertical-align:top;color:#1A2535">${esc(
            k,
          )}</td><td style="padding:4px 0;color:#3D5166">${esc(v).replace(/\n/g, "<br>")}</td></tr>`,
      )
      .join("") +
    `</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `KMS Website <${from}>`,
        to: [to],
        reply_to: email || undefined,
        subject,
        html,
        text,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error("[lead] Resend error", resp.status, detail);
      return json(
        { error: "We couldn't send your request just now. Please call 346-350-1464." },
        502,
      );
    }
  } catch (err) {
    console.error("[lead] Resend request failed", err);
    return json(
      { error: "We couldn't send your request just now. Please call 346-350-1464." },
      502,
    );
  }

  return json({ ok: true }, 200);
}
