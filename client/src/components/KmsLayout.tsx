/**
 * KMS Shared Layout Components
 * Design: Industrial Precision — Steel Blue (#1E5080) + Olive Green (#78A546)
 * Typography: Barlow Condensed (headlines), Source Sans 3 (body)
 * Used across all service pages, utility pages, and landing pages
 */

import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ChevronDown, Shield, Clock, Star, Truck } from "lucide-react";
import { Link, useLocation } from "wouter";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────
export const C = {
  blueDark:   "#1E5080",
  blueMid:    "#235A91",
  blueSky:    "#3796D2",
  blueLight:  "#4BAAE0",
  green:      "#78A546",
  greenDark:  "#5E8535",
  greenLight: "#8FBF58",
  darkBg:     "#1A2535",
  darkBg2:    "#1E2F44",
  lightBg:    "#F4F7FA",
  white:      "#FFFFFF",
  textDark:   "#1A2535",
  textMid:    "#3D5166",
  textLight:  "rgba(255,255,255,0.85)",
  textMuted:  "rgba(255,255,255,0.6)",
  black:      "#000000",
};

export const KMS_LOGO = "/images/KMS-Logo-transparent.webp";
export const KMS_PHONE = "346-350-1464";
export const KMS_PHONE_HREF = "tel:3463501464";
export const KMS_EMAIL = "info@kmstx.com";
export const KMS_ADDRESS_LINE1 = "814 Summer Park Dr";
export const KMS_ADDRESS_LINE2 = "Building #600";
export const KMS_ADDRESS_LINE3 = "Stafford, TX 77477";
export const KMS_ADDRESS = "814 Summer Park Dr, Building #600, Stafford, TX 77477";

// ─── Service Nav Items ─────────────────────────────────────────────────────────
export const SERVICE_NAV = [
  { label: "Services Overview",          href: "/services" },
  { label: "Centrifuge Repair",          href: "/services/centrifuge-repair" },
  { label: "Industrial Blower Repair",   href: "/services/industrial-blower-repair" },
  { label: "Gearbox Repair",             href: "/services/gearbox-repair" },
  { label: "Industrial Compressors",     href: "/services/industrial-compressors" },
  { label: "Fluid & Power End Repair",   href: "/services/fluid-power-end-repair" },
];

// ─── NavBar ───────────────────────────────────────────────────────────────────
export function NavBar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav role="navigation" aria-label="Main navigation" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      {/* Utility bar */}
      <div style={{ background: C.green, padding: "0.35rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href={KMS_PHONE_HREF} className="flex items-center gap-1.5" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "white", textDecoration: "none", letterSpacing: "0.04em" }}>
              <Phone size={12} /> {KMS_PHONE}
            </a>
            <a href={`mailto:${KMS_EMAIL}`} className="hidden md:flex items-center gap-1.5" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.78rem", color: "white", textDecoration: "none", letterSpacing: "0.04em" }}>
              <Mail size={12} /> {KMS_EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.78rem", color: "white", letterSpacing: "0.04em" }}>
              <MapPin size={12} style={{ display: "inline", marginRight: 4 }} />Stafford, Texas 77477
            </span>
            <Link href="/emergency-service" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "white", textDecoration: "none", letterSpacing: "0.04em", background: "rgba(0,0,0,0.2)", padding: "0.15rem 0.6rem", borderRadius: 2 }}>
              24/7 EMERGENCY
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav row — BLACK */}
      <div style={{ background: C.black, borderBottom: `2px solid ${C.green}33` }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between" style={{ height: 68 }}>
          {/* Logo */}
          <Link href="/">
            <img src={KMS_LOGO} alt="Kelsey Machine Services" style={{ height: 44, width: "auto" }} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Services dropdown — pb-3 on button extends hover area downward so mouse can reach the panel */}
            <div className="relative group" style={{ paddingBottom: "0.75rem", marginBottom: "-0.75rem" }}>
              <button
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "rgba(255,255,255,0.88)", letterSpacing: "0.07em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.green)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.88)")}
              >
                Services <ChevronDown size={13} />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block" style={{ background: "#0d1a2a", border: `1px solid ${C.green}33`, borderRadius: 4, minWidth: 230, boxShadow: "0 8px 24px rgba(0,0,0,0.5)", zIndex: 100 }}>
                {SERVICE_NAV.map(({ label, href }) => (
                  <Link key={label} href={href} style={{ display: "block", padding: "0.6rem 1rem", fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.78rem", color: location === href ? C.green : "rgba(255,255,255,0.8)", textDecoration: "none", letterSpacing: "0.04em", borderBottom: "1px solid rgba(255,255,255,0.06)", transition: "background 0.15s, color 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.green + "22"; e.currentTarget.style.color = C.green; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = location === href ? C.green : "rgba(255,255,255,0.8)"; }}
                  >{label}</Link>
                ))}
              </div>
            </div>
            {[
              { label: "Warranty",  href: "/warranty" },
              { label: "Emergency", href: "/emergency-service" },
              { label: "Blog",      href: "/blog" },
              { label: "Industries", href: "/industries" },
              { label: "About",     href: "/about" },
              { label: "Contact",   href: "/contact" },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: location === href ? C.green : "rgba(255,255,255,0.88)", letterSpacing: "0.07em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.green)}
                onMouseLeave={e => (e.currentTarget.style.color = location === href ? C.green : "rgba(255,255,255,0.88)")}
              >{label}</Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", textDecoration: "none", background: C.green, padding: "0.5rem 1.25rem", borderRadius: 2, letterSpacing: "0.06em", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = C.greenDark)}
              onMouseLeave={e => (e.currentTarget.style.background = C.green)}
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: C.blueDark, borderTop: `1px solid rgba(120,165,70,0.3)` }} className="lg:hidden px-4 py-4 flex flex-col gap-3">
          <div>
            <button onClick={() => setServicesOpen(!servicesOpen)} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white", letterSpacing: "0.06em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, width: "100%", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              Services <ChevronDown size={16} style={{ transform: servicesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            {servicesOpen && SERVICE_NAV.map(({ label, href }) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} style={{ display: "block", fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", padding: "0.4rem 0 0.4rem 1rem", textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
          {[
            { label: "Warranty",  href: "/warranty" },
            { label: "Emergency", href: "/emergency-service" },
            { label: "Blog",      href: "/blog" },
            { label: "Industries", href: "/industries" },
            { label: "About",     href: "/about" },
            { label: "Contact",   href: "/contact" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setOpen(false)} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", textDecoration: "none", display: "block" }}>
              {label}
            </Link>
          ))}
          <a href={KMS_PHONE_HREF} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.06em", padding: "0.75rem", borderRadius: 2, textDecoration: "none", marginTop: 8 }}>
            <Phone size={16} /> Call {KMS_PHONE}
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Page Hero (for service pages) ────────────────────────────────────────────
interface PageHeroProps {
  h1: string;
  subheading: string;
  bgImage?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function PageHero({ h1, subheading, bgImage, breadcrumbs }: PageHeroProps) {
  return (
    <section style={{
      background: bgImage
        ? `linear-gradient(135deg, rgba(10,25,45,0.92) 0%, rgba(30,80,128,0.75) 100%), url(${bgImage}) center/cover no-repeat`
        : `linear-gradient(135deg, ${C.darkBg} 0%, ${C.blueDark} 100%)`,
      padding: "4rem 0 3rem",
      borderBottom: `3px solid ${C.green}`,
    }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1rem" }}>
            <ol style={{ display: "flex", gap: "0.4rem", listStyle: "none", padding: 0, margin: 0 }}>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  {i > 0 && <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>/</span>}
                  {crumb.href
                    ? <Link href={crumb.href} style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.78rem", color: C.green, textDecoration: "none" }}>{crumb.label}</Link>
                    : <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.55)" }}>{crumb.label}</span>
                  }
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.25rem)", color: "white", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "1rem", textTransform: "uppercase" }}>
          {h1}
        </h1>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.82)", maxWidth: 680, lineHeight: 1.6 }}>
          {subheading}
        </p>
        {/* Trust badges */}
        <div className="flex flex-wrap gap-4 mt-6">
          {[
            { icon: <Shield size={14} />, text: "24-Month Warranty" },
            { icon: <Clock size={14} />, text: "24/7 Emergency Service" },
            { icon: <Truck size={14} />, text: "Free Nationwide Pickup" },
            { icon: <Star size={14} />, text: "All 50 States + Canada + Mexico" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-1.5" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.78rem", color: C.green, background: "rgba(120,165,70,0.12)", border: `1px solid ${C.green}44`, padding: "0.3rem 0.75rem", borderRadius: 2, letterSpacing: "0.04em" }}>
              {icon} {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Quick Answer Box (AEO) ────────────────────────────────────────────────────
interface QuickAnswerProps {
  text: string;
}

export function QuickAnswerBox({ text }: QuickAnswerProps) {
  return (
    <div style={{ background: `linear-gradient(135deg, ${C.blueDark}15 0%, ${C.green}12 100%)`, border: `2px solid ${C.green}55`, borderLeft: `4px solid ${C.green}`, borderRadius: 4, padding: "1.5rem 1.75rem", margin: "2rem 0" }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.78rem", color: C.green, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
        Quick Answer
      </div>
      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: C.textDark, lineHeight: 1.7, margin: 0 }}>
        {text}
      </p>
    </div>
  );
}

// ─── Inline Quote Form ─────────────────────────────────────────────────────────
interface QuoteFormProps {
  service?: string;
  dark?: boolean;
}

export function InlineQuoteForm({ service = "", dark = false }: QuoteFormProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: service });
  const [submitted, setSubmitted] = useState(false);

  const bg = dark ? C.darkBg2 : C.lightBg;
  const border = dark ? `1px solid ${C.green}33` : `1px solid ${C.blueDark}22`;
  const labelColor = dark ? "rgba(255,255,255,0.7)" : C.textMid;
  const inputBg = dark ? "rgba(255,255,255,0.07)" : "white";
  const inputColor = dark ? "white" : C.textDark;
  const inputBorder = dark ? `1px solid rgba(255,255,255,0.15)` : `1px solid #cdd5e0`;

  const inputStyle = { fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.92rem", color: inputColor, background: inputBg, border: inputBorder, borderRadius: 2, padding: "0.6rem 0.875rem", width: "100%", outline: "none" };
  const labelStyle = { fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: labelColor, letterSpacing: "0.06em", textTransform: "uppercase" as const, display: "block", marginBottom: "0.3rem" };

  if (submitted) {
    return (
      <div style={{ background: bg, border, borderRadius: 4, padding: "2rem", textAlign: "center" }}>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: C.green, marginBottom: "0.5rem" }}>We Got Your Request!</div>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: dark ? "rgba(255,255,255,0.7)" : C.textMid, fontSize: "0.95rem" }}>A KMS specialist will be in touch within the hour. For emergencies, call <a href={KMS_PHONE_HREF} style={{ color: C.green, fontWeight: 700 }}>{KMS_PHONE}</a> right now.</p>
      </div>
    );
  }

  return (
    <div style={{ background: bg, border, borderRadius: 4, padding: "1.75rem" }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: dark ? "white" : C.blueDark, marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        Get a Free Repair Quote
      </div>
      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: dark ? "rgba(255,255,255,0.6)" : C.textMid, marginBottom: "1.25rem" }}>
        We respond within the hour. Emergency? Call us now.
      </p>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label style={labelStyle}>Your Name *</label>
            <input style={inputStyle} type="text" placeholder="John Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
          </div>
          <div>
            <label style={labelStyle}>Email *</label>
            <input style={inputStyle} type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label style={labelStyle}>Phone *</label>
            <input style={inputStyle} type="tel" placeholder="(713) 555-0100" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
          </div>
          <div>
            <label style={labelStyle}>Service Needed</label>
            <select style={inputStyle} value={form.interest} onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}>
              <option value="">Select a service...</option>
              <option value="centrifuge">Centrifuge Repair</option>
              <option value="blower">Industrial Blower Repair</option>
              <option value="gearbox">Gearbox Repair</option>
              <option value="compressor">Industrial Compressors</option>
              <option value="fluid-end">Fluid & Power End Repair</option>
              <option value="emergency">Emergency Service</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="kms-wiggle"
          style={{ background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", border: "none", borderRadius: 2, padding: "0.8rem 2rem", cursor: "pointer", transition: "background 0.2s", width: "100%" }}
          onMouseEnter={e => (e.currentTarget.style.background = C.greenDark)}
          onMouseLeave={e => (e.currentTarget.style.background = C.green)}
        >
          Request Free Quote — We Respond Within the Hour
        </button>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.78rem", color: dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", textAlign: "center", margin: 0 }}>
          Or call us directly: <a href={KMS_PHONE_HREF} style={{ color: C.green, fontWeight: 700 }}>{KMS_PHONE}</a> — available 24/7 for emergencies
        </p>
      </div>
    </div>
  );
}

// ─── FAQ Section (with FAQPage schema) ────────────────────────────────────────
interface FAQ { q: string; a: string; }

export function FaqSection({ faqs, pageName, showForm, service }: { faqs: FAQ[]; pageName: string; showForm?: boolean; service?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": `${pageName} FAQ`,
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const faqContent = (
    <div>
      <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
        Frequently Asked Questions
      </h2>
      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, marginBottom: "2.5rem" }}>
        Can't find your answer? Call us at <a href={KMS_PHONE_HREF} style={{ color: C.green, fontWeight: 700 }}>{KMS_PHONE}</a> — we pick up 24/7.
      </p>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div key={i} style={{ background: "white", border: `1px solid ${open === i ? C.green : "#dde3ec"}`, borderRadius: 4, overflow: "hidden", transition: "border-color 0.2s" }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.25rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}
            >
              <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.textDark, lineHeight: 1.4 }}>{faq.q}</span>
              <ChevronDown size={18} style={{ color: C.green, flexShrink: 0, transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
            </button>
            {open === i && (
              <div style={{ padding: "0 1.25rem 1.25rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textMid, lineHeight: 1.7 }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <section style={{ background: C.lightBg, padding: "4rem 0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {showForm ? (
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">{faqContent}</div>
            <div className="lg:col-span-1">
              <div style={{ position: "sticky", top: 100 }}>
                <InlineQuoteForm service={service || ""} dark={false} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-4">{faqContent}</div>
      )}
    </section>
  );
}

// ─── Newsletter Bar — "Experience the Kelsey Machine Difference" ──────────────
export function NewsletterBar() {
  const [form, setForm] = useState({ name: "", company: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{ background: C.darkBg, borderTop: `3px solid ${C.green}`, padding: "3.5rem 0" }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading row */}
        <div className="text-center mb-6">
          <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: C.green, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Ready to Get Started?
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: "0.75rem" }}>
            Experience the <span style={{ color: C.green }}>Kelsey Machine Difference</span>
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: 560, margin: "0 auto 1.5rem" }}>
            The right people, the right equipment, the right technology — keeping your operations running since 1984.
          </p>
          {/* Call & Email buttons */}
          <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: "2.5rem" }}>
            <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.75rem 2rem", borderRadius: 2, textDecoration: "none" }}>
              <Phone size={16} /> Call {KMS_PHONE}
            </a>
            <a href={`mailto:${KMS_EMAIL}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.75rem 2rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
              <Mail size={16} /> Email Us
            </a>
          </div>
        </div>

        {/* Newsletter signup */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem", marginTop: "0.5rem" }}>
          <div className="text-center mb-4">
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Join Our Newsletter
            </div>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginTop: "0.25rem" }}>
              Industry tips, maintenance alerts, and KMS news — no spam, ever.
            </p>
          </div>
          {submitted ? (
            <div style={{ textAlign: "center", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: C.green, padding: "1rem" }}>
              ✓ You're subscribed! Welcome to the KMS family.
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
              {[
                { key: "name",    placeholder: "Full Name",      type: "text" },
                { key: "company", placeholder: "Company",        type: "text" },
                { key: "email",   placeholder: "Email Address",  type: "email" },
              ].map(({ key, placeholder, type }) => (
                <input
                  key={key}
                  type={type}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                  style={{ flex: 1, fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.92rem", color: "white", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 2, padding: "0.65rem 1rem", outline: "none", minWidth: 0 }}
                />
              ))}
              <button
                onClick={() => setSubmitted(true)}
                className="kms-wiggle"
                style={{ background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase", border: "none", borderRadius: 2, padding: "0.65rem 1.5rem", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
  const serviceLinks = [
    { label: "Services Overview",        href: "/services" },
    { label: "Centrifuge Repair",        href: "/services/centrifuge-repair" },
    { label: "Industrial Blower Repair", href: "/services/industrial-blower-repair" },
    { label: "Gearbox Repair",           href: "/services/gearbox-repair" },
    { label: "Industrial Compressors",   href: "/services/industrial-compressors" },
    { label: "Fluid & Power End Repair", href: "/services/fluid-power-end-repair" },
  ];
  const companyLinks = [
    { label: "About KMS",          href: "/about" },
    { label: "Our Warranty",       href: "/warranty" },
    { label: "24/7 Emergency",     href: "/emergency-service" },
    { label: "Blog",               href: "/blog" },
    { label: "Contact / Quote",    href: "/contact" },
  ];

  return (
    <footer style={{ background: C.darkBg, borderTop: `3px solid ${C.green}` }} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={KMS_LOGO} alt="Kelsey Machine Services" style={{ height: 48, marginBottom: "1rem" }} />
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Texas' most trusted rotating equipment repair shop. Serving all 50 states, Canada, and Mexico since 1983.
            </p>
            {[
              { icon: <Phone size={14} />, text: KMS_PHONE, href: KMS_PHONE_HREF },
              { icon: <Mail size={14} />, text: KMS_EMAIL, href: `mailto:${KMS_EMAIL}` },
            ].map(({ icon, text, href }) => (
              <div key={text} className="flex items-center gap-2 mb-2">
                <span style={{ color: C.green }}>{icon}</span>
                {href
                  ? <a href={href} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.83rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{text}</a>
                  : <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.83rem", color: "rgba(255,255,255,0.6)" }}>{text}</span>}
              </div>
            ))}
            {/* Address — 3 separate lines */}
            <div className="flex items-start gap-2 mt-1">
              <span style={{ color: C.green, marginTop: 2 }}><MapPin size={14} /></span>
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.83rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                <div>814 Summer Park Dr</div>
                <div>Building #600</div>
                <a href="https://maps.google.com/?q=814+Summer+Park+Dr+Building+600+Stafford+TX+77477" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Stafford, TX 77477</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: `2px solid ${C.green}`, display: "inline-block" }}>Our Services</div>
            <ul className="flex flex-col gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.375rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.green)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  ><ArrowRight size={12} style={{ color: C.green }} />{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: `2px solid ${C.green}`, display: "inline-block" }}>Company</div>
            <ul className="flex flex-col gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.375rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.green)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  ><ArrowRight size={12} style={{ color: C.green }} />{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency & Warranty CTA */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: `2px solid ${C.green}`, display: "inline-block" }}>Emergency &amp; Warranty</div>
            <div style={{ background: "rgba(120,165,70,0.1)", border: "1px solid rgba(120,165,70,0.3)", borderRadius: 4, padding: "1.25rem", marginBottom: "0.75rem" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.green, marginBottom: "0.5rem" }}>EQUIPMENT DOWN?</div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                We respond immediately, 24 hours a day, 7 days a week. <Link href="/emergency-service" style={{ color: C.green, textDecoration: "none" }}>Free pickup</Link> available now.
              </p>
              <a href={KMS_PHONE_HREF} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.95rem", letterSpacing: "0.06em", padding: "0.65rem 1rem", borderRadius: 2, textDecoration: "none", marginBottom: "0.5rem" }}>
                <Phone size={15} /> {KMS_PHONE}
              </a>
            </div>

          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.25rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-3">
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Kelsey Machine Services. All rights reserved. | Stafford, TX 77477
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(link => (
              <a key={link} href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
interface CtaBannerProps {
  headline?: string;
  subtext?: string;
  dark?: boolean;
}

export function CtaBanner({ headline = "Ready to Get Your Equipment Back Online?", subtext = "Call us now or request a free quote — we respond within the hour, 24/7 for emergencies.", dark = true }: CtaBannerProps) {
  return (
    <section style={{ background: dark ? C.darkBg : C.blueDark, padding: "3.5rem 0", borderTop: `3px solid ${C.green}33` }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
          {headline}
        </h2>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem" }}>
          {subtext}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 2.25rem", borderRadius: 2, textDecoration: "none" }}>
            Request Free Quote
          </Link>
          <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 2.25rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
            <Phone size={18} /> Call {KMS_PHONE}
          </a>
          <Link href="/emergency-service" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: C.green, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 2.25rem", borderRadius: 2, border: `2px solid ${C.green}66`, textDecoration: "none" }}>
            24/7 Emergency Service
          </Link>
        </div>
      </div>
    </section>
  );
}
