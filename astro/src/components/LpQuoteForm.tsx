/**
 * LpQuoteForm — focused React island for PPC landing pages.
 *
 * Differences from the main QuoteForm:
 *   - formType = "landing" (so backend can attribute the lead source)
 *   - No Company field.
 *   - Built for dark backgrounds only (LP hero is always dark)
 *   - Fires the same Google Ads conversion on success
 *
 * Fields: Name, Email, Phone, Comments (short optional textarea). Interest
 * is NOT user-editable — it's derived automatically from the `service`
 * prop passed in per-page (lp-data.ts). A dropdown was added briefly and
 * then removed again per a later request; the page a visitor lands on
 * already tells us what they're interested in, so a manual picker was
 * redundant. Comments stays (2-row textarea, kept compact).
 */
import { useState } from "react";
import { getAdTracking } from "@/lib/adTracking";
import { KMS_PHONE, KMS_PHONE_HREF } from "@/lib/brand";

interface Props {
  service: string;
}

const C = { green: "#78A546", greenDark: "#5E8535" };

export default function LpQuoteForm({ service }: Props) {
  // NOTE: `hpFax` is the HONEYPOT, not a real field. It renders as name="fax",
  // hidden off-screen. Bots auto-fill it; humans never see it. It used to be
  // named `company`, which collided with a real Company field this form used
  // to have — that would have silently discarded every lead who typed their
  // company (the API returns a FAKE success for honeypot hits). The Company
  // field is gone now, but the honeypot stays named `fax` regardless — never
  // rename it to anything a human might plausibly type.
  const [form, setForm] = useState({
    name: "", email: "", phone: "", comments: "", hpFax: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please add your name and phone so we can call you back.");
      return;
    }
    // Honeypot — hidden from real visitors via CSS below. Bots that auto-fill
    // every field will fill this one; humans never see it.
    if (form.hpFax.trim()) {
      setSubmitting(true);
      setTimeout(() => setSubmitted(true), 600); // fake success, don't hit the API
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "landing",
          name: form.name,
          email: form.email,
          phone: form.phone,
          interest: service,
          message: form.comments,
          // No typeof-window guard needed — this handler only ever runs
          // in response to a browser form submit, `window` always exists.
          source: window.location.pathname,
          hp: form.hpFax,
          ...getAdTracking(),
        }),
      });
      if (!res.ok) {
        let msg = `Submission failed (${res.status})`;
        try { const j = await res.json(); if (j?.error) msg = j.error; } catch {}
        throw new Error(msg);
      }
      setSubmitted(true);
      // Google Ads conversion fire — same conversion as the main quote form.
      // Enhanced conversions: send hashable user data with the event for
      // better attribution. gtag handles the SHA-256 hashing client-side.
      //
      // Then hand off to /thank-you (see QuoteForm.tsx for the rationale):
      // event_callback fires once the hit is sent; the timeout covers ad
      // blockers that swallow gtag and never call back.
      const goToThankYou = () => window.location.assign("/thank-you");
      if (typeof (window as any).gtag === "function") {
        const userData: Record<string, string> = {};
        if (form.email.trim()) userData.email = form.email.trim();
        if (form.phone.trim()) userData.phone_number = form.phone.trim();
        if (Object.keys(userData).length > 0) {
          (window as any).gtag("set", "user_data", userData);
        }
        (window as any).gtag("event", "conversion", {
          send_to: "AW-18043825480/iw04CO2Wg7wcEMja-5tD",
          event_callback: goToThankYou,
        });
        window.setTimeout(goToThankYou, 1200);
      } else {
        goToThankYou();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : `Something went wrong. Please call ${KMS_PHONE}.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ background: "rgba(120,165,70,0.12)", border: `2px solid ${C.green}`, borderRadius: 4, padding: "1.5rem", textAlign: "center" }}>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "white", textTransform: "uppercase" }}>
          Got It — We'll Call You Shortly!
        </div>
        <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", margin: "0.5rem 0 0" }}>
          For urgent situations call <a href={KMS_PHONE_HREF} style={{ color: C.green }}>{KMS_PHONE}</a>
        </p>
      </div>
    );
  }

  const label: React.CSSProperties = {
    display: "block",
    fontFamily: "'Source Sans 3',sans-serif",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.5)",
    marginBottom: "0.3rem",
  };

  const input: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    padding: "0.7rem 1rem", borderRadius: 2,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    color: "white", fontFamily: "'Source Sans 3',sans-serif",
    fontSize: "0.95rem", outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
      {/* Honeypot — real users never see or reach this field. name="fax" is
          deliberate: bots fill it, humans never encounter it. Do NOT rename
          this to a plausible field. */}
      <input
        type="text"
        name="fax"
        value={form.hpFax}
        onChange={(e) => setForm({ ...form, hpFax: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div>
        <label htmlFor="lp-name" style={label}>Your Name *</label>
        <input id="lp-name" type="text" required style={input}
               value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
        <div>
          <label htmlFor="lp-email" style={label}>Email Address</label>
          <input id="lp-email" type="email" style={input}
                 value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="lp-phone" style={label}>Phone Number *</label>
          <input id="lp-phone" type="tel" required style={input}
                 value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} autoComplete="tel" />
        </div>
      </div>

      <div>
        <label htmlFor="lp-comments" style={label}>Anything Else We Should Know?</label>
        <textarea id="lp-comments" rows={2} style={{ ...input, resize: "vertical", fontFamily: "'Source Sans 3',sans-serif" }}
                  value={form.comments} onChange={(e) => setForm({ ...form, comments: e.target.value })} />
      </div>

      {error && (
        <p style={{ color: "#ff9a9a", fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.82rem", margin: 0 }}>{error}</p>
      )}

      <button type="submit" disabled={submitting}
              style={{ background: C.green, color: "white", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem", borderRadius: 2, border: "none", cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.7 : 1 }}>
        {submitting ? "Sending…" : "Get My Free Quote"}
      </button>

      {/* Risk-reversal microcopy — right at the point of conversion, not
          buried elsewhere on the page. Pre-empts the "what am I signing up
          for" hesitation a B2B lead has before submitting a form. */}
      <p style={{ textAlign: "center", fontFamily: "'Source Sans 3',sans-serif", fontSize: "1.56rem", fontStyle: "italic", color: "rgba(255,255,255,0.5)", margin: 0 }}>
        No obligation. No pressure. Just a straight number.
      </p>
    </form>
  );
}
