// ─── KMS lead form handler (Vercel Serverless Function) ───────────────────────
// This function is the permanent auth proxy between the React frontend and
// the WebWize Connect Forms WordPress endpoint. The X-API-Key never touches
// the browser; the function holds it as a Vercel env var.
//
// Two modes, selected automatically:
//   1) WordPress mode (production) — forwards to {WP_BASE_URL}/wp-json/webwize-forms/v1/submit
//      with X-API-Key header. Set WP_BASE_URL and WP_FORMS_API_KEY to enable.
//   2) Resend mode (fallback) — emails the lead directly via Resend.
//      Used until WP_BASE_URL + WP_FORMS_API_KEY are set.
//
// Either way, the browser-facing URL (/api/submit) and the React payload shape
// are unchanged — see client/src/lib/submitLead.ts.

interface LeadBody {
  formType?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
  message?: string;
  source?: string;
  // Honeypot — hidden form field. Real visitors never fill it; bots that
  // auto-fill every input do. Non-empty means "drop this submission."
  hp?: string;
  // Ad-click attribution — see astro/src/lib/adTracking.ts for how these
  // get captured from the landing page URL.
  gclid?: string;
  adKeyword?: string;
  adCampaignId?: string;
  adMatchType?: string;
  adDevice?: string;
  adNetwork?: string;
  landingPage?: string;
  adParamsRaw?: string;
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

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for") || "";
  const first = fwd.split(",")[0]?.trim();
  return first || req.headers.get("x-real-ip") || "";
}

export async function POST(req: Request): Promise<Response> {

  let body: LeadBody;
  try {
    body = (await req.json()) as LeadBody;
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot check — do this before anything else. Log it so blocked
  // attempts are visible in Vercel function logs, but return a fake success
  // so scripted bots don't learn to retry with different data.
  if ((body.hp || "").trim()) {
    console.warn("[lead] Honeypot triggered — dropped submission", {
      name: body.name,
      email: body.email,
      source: body.source,
      ip: clientIp(req),
    });
    return json({ ok: true }, 200);
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

  const formType = body.formType || "quote";
  const ip = clientIp(req);
  const referer = req.headers.get("referer") || "";
  const ua = req.headers.get("user-agent") || "KMS Website";

  // ─── Mode 1: WebWize Connect Forms (WordPress) ──────────────────────────────
  const wpBase = process.env.WP_BASE_URL;
  const wpKey = process.env.WP_FORMS_API_KEY;

  if (wpBase && wpKey) {
    const endpoint =
      wpBase.replace(/\/+$/, "") + "/wp-json/webwize-forms/v1/submit";

    // Build a flat fields object matching the WPForms field names mapped in the
    // WP admin (WebWize Connect → Forms → field_map). Keep keys consistent so
    // a single mapping covers every form_slug.
    const fields: Record<string, string> = {
      name,
      email,
      phone,
      company: body.company || "",
      interest: body.interest || "",
      service: body.interest
        ? SERVICE_LABELS[body.interest] || body.interest
        : "",
      message: body.message || "",
      source: body.source || referer,
      // Ad-click attribution — field keys chosen to match the existing
      // GCLID / Ad Keyword / Ad Campaign ID / Ad Match Type / Ad Device /
      // Landing Page columns. If these still show blank in WP after this
      // ships, the WP-side field_map likely needs to add these keys —
      // that's a WP Admin config check, not a code fix.
      gclid: body.gclid || "",
      ad_keyword: body.adKeyword || "",
      ad_campaign_id: body.adCampaignId || "",
      ad_match_type: body.adMatchType || "",
      ad_device: body.adDevice || "",
      ad_network: body.adNetwork || "",
      landing_page: body.landingPage || body.source || referer,
      ad_params_raw: body.adParamsRaw || "",
    };

    try {
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": wpKey,
          // Pass-through so the WP side sees the real client context, not Vercel's.
          Referer: referer,
          "User-Agent": ua,
        },
        body: JSON.stringify({
          form_slug: formType,
          fields,
          sender_email: email,
          sender_nickname: name,
          sender_ip: ip,
        }),
      });

      const data = (await resp.json().catch(() => ({}))) as {
        success?: boolean;
        message?: string;
        spam?: boolean;
        entry_id?: number;
      };

      if (resp.ok && data.success) {
        return json({ ok: true, entry_id: data.entry_id }, 200);
      }

      if (resp.status === 403 && data.spam) {
        return json(
          { error: "Your submission was blocked. If this is a real request, please call 346-350-1464." },
          403,
        );
      }

      console.error("[lead] WP forward failed", resp.status, data);
      return json(
        { error: data.message || "We couldn't send your request just now. Please call 346-350-1464." },
        resp.status >= 400 && resp.status < 600 ? resp.status : 502,
      );
    } catch (err) {
      console.error("[lead] WP fetch failed", err);
      return json(
        { error: "We couldn't send your request just now. Please call 346-350-1464." },
        502,
      );
    }
  }

  // ─── Mode 2: Resend fallback (used until WP env vars are set) ───────────────
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL || "service@kmstx.com";
  const from = process.env.LEAD_FROM_EMAIL || "leads@kmstx.com";

  if (!apiKey) {
    console.error("[lead] No transport configured (neither WP_FORMS_API_KEY nor RESEND_API_KEY is set)");
    return json({ error: "Our form is being set up. Please call 346-350-1464." }, 500);
  }

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
    ["Submitted from", body.source || referer || "—"],
    ["GCLID", body.gclid || "—"],
    ["Ad Keyword", body.adKeyword || "—"],
    ["Ad Campaign ID", body.adCampaignId || "—"],
    ["Ad Match Type", body.adMatchType || "—"],
    ["Ad Device", body.adDevice || "—"],
    ["Landing Page", body.landingPage || body.source || "—"],
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
