/**
 * QuoteForm — React island, hydrates client-side.
 *
 * Posts to /api/submit (existing Vercel function at repo root) — no backend
 * changes. The function holds the WP_FORMS_API_KEY env var and forwards to
 * WebWize Connect Forms on cms.kmstx.com.
 */
import { useState, useRef } from "react";

const SERVICE_OPTIONS = [
  { value: "",              label: "Select service type *" },
  { value: "centrifuge",    label: "Centrifuge Repair" },
  { value: "gearbox",       label: "Gearbox Repair" },
  { value: "blower",        label: "Industrial Blower Repair" },
  { value: "compressor",    label: "Industrial Compressors" },
  { value: "fluid-end",     label: "Fluid & Power End Repair" },
  { value: "pump",          label: "Pump Repair" },
  { value: "emergency",     label: "Emergency / 24-7" },
  { value: "other",         label: "Other / Not sure" },
];

interface Props {
  variant?: "hero" | "contact";
}

export default function QuoteForm({ variant = "hero" }: Props) {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please include your name and phone so we can reach you.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "quote",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          interest: form.service,
          message: form.message,
          source: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      if (!res.ok) {
        let msg = `Submission failed (${res.status})`;
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {}
        throw new Error(msg);
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call 346-350-1464.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-white text-center py-8">
        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          THANK YOU
        </h3>
        <p className="text-white/85">
          We received your request and will reach out shortly.
          For immediate help, call <a href="tel:3463501464" className="underline">346-350-1464</a>.
        </p>
      </div>
    );
  }

  const input = "w-full bg-white/[0.08] border border-white/20 text-white px-3.5 py-2.5 rounded-sm outline-none focus:border-kms-green transition-colors";
  const label = "block text-white/85 text-xs uppercase tracking-wider mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-3" aria-label="Request a quote">
      {variant === "hero" && (
        <h2
          className="text-white mb-1 text-center"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.6rem", fontWeight: 700, letterSpacing: "0.02em" }}
        >
          REQUEST A FREE QUOTE
        </h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="qf-name" className={label}>Name *</label>
          <input id="qf-name" ref={nameRef} type="text" required className={input}
                 value={form.name} onChange={set("name")} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="qf-company" className={label}>Company</label>
          <input id="qf-company" type="text" className={input}
                 value={form.company} onChange={set("company")} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="qf-phone" className={label}>Phone *</label>
          <input id="qf-phone" type="tel" required className={input}
                 value={form.phone} onChange={set("phone")} autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="qf-email" className={label}>Email</label>
          <input id="qf-email" type="email" className={input}
                 value={form.email} onChange={set("email")} autoComplete="email" />
        </div>
      </div>

      <div>
        <label htmlFor="qf-service" className={label}>Service Needed</label>
        <select id="qf-service" className={input}
                value={form.service} onChange={set("service")}>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} className="text-black">{o.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="qf-message" className={label}>Describe Your Equipment / Issue</label>
        <textarea id="qf-message" className={input} rows={3}
                  value={form.message} onChange={set("message")} />
      </div>

      {error && (
        <p className="text-red-300 text-sm" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-kms-green hover:bg-kms-greenDark text-white py-3 rounded-sm uppercase tracking-wider disabled:opacity-60"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em" }}
      >
        {submitting ? "SENDING..." : "REQUEST FREE QUOTE"}
      </button>

      <p className="text-white/60 text-xs text-center">
        We'll respond within 1 business hour. For immediate help, call{" "}
        <a href="tel:3463501464" className="text-kms-greenLight underline">346-350-1464</a>.
      </p>
    </form>
  );
}
