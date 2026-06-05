/**
 * Newsletter signup — React island.
 * Posts to /api/submit with formType=newsletter, same Vercel function
 * the quote form uses. No backend changes.
 */
import { useState } from "react";

const C = { green: "#78A546" };

export default function NewsletterForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    if (!form.email.trim()) { setError("Please enter your email to subscribe."); return; }
    setSubmitting(true); setError("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "newsletter",
          name: form.name || "(newsletter signup)",
          email: form.email,
          company: form.company,
          source: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      if (!res.ok) {
        let msg = `Subscribe failed (${res.status})`;
        try { const j = await res.json(); if (j?.error) msg = j.error; } catch {}
        throw new Error(msg);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not subscribe just now. Please try again.");
    } finally { setSubmitting(false); }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: C.green, padding: "1rem" }}>
        ✓ You're subscribed! Welcome to the KMS family.
      </div>
    );
  }

  const input = "flex-1 text-white px-4 py-2.5 rounded-sm outline-none min-w-0";
  const inputStyle = {
    fontFamily: "'Source Sans 3',sans-serif",
    fontSize: "0.92rem",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
  };

  return (
    <>
      {error && (
        <p style={{ textAlign: "center", color: "#ff9a9a", fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.82rem", marginBottom: "0.75rem" }}>{error}</p>
      )}
      <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Full Name"
          className={input}
          style={inputStyle}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company"
          className={input}
          style={inputStyle}
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          className={input}
          style={inputStyle}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button
          onClick={submit}
          disabled={submitting}
          style={{
            background: C.green, color: "white", fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase",
            border: "none", borderRadius: 2, padding: "0.65rem 1.5rem", cursor: "pointer",
            whiteSpace: "nowrap", flexShrink: 0,
          }}
        >
          {submitting ? "…" : "Submit"}
        </button>
      </div>
    </>
  );
}
