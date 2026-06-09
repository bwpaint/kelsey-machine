/**
 * LpQuoteForm — focused 3-field React island for PPC landing pages.
 *
 * Differences from the main QuoteForm:
 *   - formType = "landing" (so backend can attribute the lead source)
 *   - Fewer fields: name, email, phone, service (preset by parent)
 *   - Built for dark backgrounds only (LP hero is always dark)
 *   - Fires the same Google Ads conversion on success
 */
import { useState } from "react";

interface Props {
  service: string;
}

const C = { green: "#78A546", greenDark: "#5E8535" };

export default function LpQuoteForm({ service }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: service });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please add your name and phone so we can call you back.");
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
          interest: form.interest,
          source: typeof window !== "undefined" ? window.location.pathname : "",
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
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        const userData: Record<string, string> = {};
        if (form.email.trim()) userData.email = form.email.trim();
        if (form.phone.trim()) userData.phone_number = form.phone.trim();
        if (Object.keys(userData).length > 0) {
          (window as any).gtag("set", "user_data", userData);
        }
        (window as any).gtag("event", "conversion", {
          send_to: "AW-18043825480/iw04CO2Wg7wcEMja-5tD",
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call 346-350-1464.");
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
          For urgent situations call <a href="tel:3463501464" style={{ color: C.green }}>346-350-1464</a>
        </p>
      </div>
    );
  }

  const input: React.CSSProperties = {
    padding: "0.7rem 1rem", borderRadius: 2,
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    color: "white", fontFamily: "'Source Sans 3',sans-serif",
    fontSize: "0.95rem", outline: "none",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <input type="text" placeholder="Your Name *" required style={input}
             value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
      <input type="email" placeholder="Email Address" style={input}
             value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" />
      <input type="tel" placeholder="Phone Number *" required style={input}
             value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} autoComplete="tel" />
      <select style={{ ...input, background: "rgba(30,80,128,0.8)" }}
              value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })}>
        <option>Centrifuge Repair</option>
        <option>Gearbox Repair</option>
        <option>Industrial Blower Repair</option>
        <option>Industrial Compressor Repair</option>
        <option>Fluid &amp; Power End Repair</option>
        <option>Emergency Service</option>
      </select>
      {error && (
        <p style={{ color: "#ff9a9a", fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.82rem", margin: 0 }}>{error}</p>
      )}
      <button type="submit" disabled={submitting}
              style={{ background: C.green, color: "white", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem", borderRadius: 2, border: "none", cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.7 : 1 }}>
        {submitting ? "Sending…" : "Get My Free Quote"}
      </button>
    </form>
  );
}
