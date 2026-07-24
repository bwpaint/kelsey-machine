/**
 * QuoteForm — React island, hydrates client-side.
 *
 * Theme prop:
 *   - "dark"  (default): white text on translucent-white inputs, for dark/gradient backgrounds
 *   - "light": dark text on white inputs with visible borders, for light/cream backgrounds
 *
 * Posts to /api/submit (existing Vercel function at repo root) — no backend changes.
 */
import { useState, useRef } from "react";
import { getAdTracking } from "@/lib/adTracking";

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
  theme?: "dark" | "light";
}

export default function QuoteForm({ variant = "hero", theme = "dark" }: Props) {
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "", service: "", message: "", hpWebsite: "",
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
    // Honeypot — "hpWebsite" is hidden from real visitors via CSS. Bots that
    // auto-fill every input on the page will fill this one; humans never see it.
    if (form.hpWebsite.trim()) {
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
          formType: "quote",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          interest: form.service,
          message: form.message,
          source: typeof window !== "undefined" ? window.location.pathname : "",
          hp: form.hpWebsite,
          ...getAdTracking(),
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
      // Google Ads conversion — fires only on a verified successful submit.
      // Enhanced conversions: pass user data (email + phone) so Google can
      // match conversions back to ad clicks even when cookies are missing.
      // gtag hashes the values client-side per the enhanced-conversions spec.
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

  const isLight = theme === "light";

  if (submitted) {
    return (
      <div className={`text-center py-8 ${isLight ? "text-kms-textDark" : "text-white"}`}>
        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          THANK YOU
        </h3>
        <p className={isLight ? "text-kms-textMid" : "text-white/85"}>
          We received your request and will reach out shortly.
          For immediate help, call <a href="tel:3463501464" className={isLight ? "text-kms-green underline font-bold" : "underline"}>346-350-1464</a>.
        </p>
      </div>
    );
  }

  const input = isLight
    ? "w-full bg-white border border-gray-300 text-kms-textDark px-3.5 py-2.5 rounded-sm outline-none focus:border-kms-green transition-colors"
    : "w-full bg-white/[0.08] border border-white/20 text-white px-3.5 py-2.5 rounded-sm outline-none focus:border-kms-green transition-colors";
  const label = isLight
    ? "block text-kms-textDark text-xs uppercase tracking-wider mb-1 font-semibold"
    : "block text-white/85 text-xs uppercase tracking-wider mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-3" aria-label="Request a quote">
      {/* Honeypot — real users never see or reach this field */}
      <input
        type="text"
        name="website"
        value={form.hpWebsite}
        onChange={set("hpWebsite")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />
      {variant === "hero" && (
        <h2
          className={`mb-1 text-center ${isLight ? "text-kms-blueDark" : "text-white"}`}
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
        <p className="text-red-500 text-sm font-medium" role="alert">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-kms-green hover:bg-kms-greenDark text-white py-3 rounded-sm uppercase tracking-wider disabled:opacity-60"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em" }}
      >
        {submitting ? "SENDING..." : "REQUEST FREE QUOTE"}
      </button>

      <p className={`text-xs text-center ${isLight ? "text-kms-textMid" : "text-white/60"}`}>
        We'll respond within 1 business hour. For immediate help, call{" "}
        <a href="tel:3463501464" className={isLight ? "text-kms-green underline font-bold" : "text-kms-greenLight underline"}>346-350-1464</a>.
      </p>
    </form>
  );
}
