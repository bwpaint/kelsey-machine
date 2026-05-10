/**
 * Contact / Get a Quote Page
 * Primary KW: rotating equipment repair quote, contact KMS
 */

import { useState } from "react";
import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <PageHero
        bgImage="/images/kms-hero-bg.webp"
        h1="Get a Free Quote — Or Just Give Us a Call"
        subheading="No automated phone trees. No chatbots. No waiting three days for a reply. Fill out the form below or call us directly — we respond fast, because we know your downtime clock is running."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact / Get a Quote" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? (
                <div style={{ background: C.lightBg, border: `2px solid ${C.green}`, borderRadius: 4, padding: "3rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "2rem", color: C.blueDark, textTransform: "uppercase", marginBottom: "1rem" }}>
                    We Got It — Thank You!
                  </div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.5rem" }}>
                    Someone from our team will be in touch within one business hour. For urgent situations, call our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency line</Link> at <a href={KMS_PHONE_HREF} style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>{KMS_PHONE}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "1.5rem" }}>
                    Request a Free Quote
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {[
                      { id: "name", label: "Your Name *", type: "text", required: true },
                      { id: "company", label: "Company", type: "text", required: false },
                      { id: "email", label: "Email Address *", type: "email", required: true },
                      { id: "phone", label: "Phone Number *", type: "tel", required: true },
                    ].map(({ id, label, type, required }) => (
                      <div key={id}>
                        <label htmlFor={id} style={{ display: "block", fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: C.textDark, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{label}</label>
                        <input
                          id={id} type={type} required={required}
                          value={(form as any)[id]} onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                          style={{ width: "100%", padding: "0.65rem 0.875rem", border: `1px solid #dde3ec`, borderRadius: 2, fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textDark, outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="service" style={{ display: "block", fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: C.textDark, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Service Needed</label>
                    <select id="service" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      style={{ width: "100%", padding: "0.65rem 0.875rem", border: `1px solid #dde3ec`, borderRadius: 2, fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textDark, outline: "none", background: "white" }}>
                      <option value="">Select a service...</option>
                      <option>Centrifuge Repair</option>
                      <option>Gearbox Repair</option>
                      <option>Industrial Blower Repair</option>
                      <option>Industrial Compressor Repair</option>
                      <option>Fluid & Power End Repair</option>
                      <option>Emergency Service</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" style={{ display: "block", fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: C.textDark, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Describe Your Equipment & Situation</label>
                    <textarea id="message" rows={5} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Manufacturer, model, what's happening, how urgent..."
                      style={{ width: "100%", padding: "0.65rem 0.875rem", border: `1px solid #dde3ec`, borderRadius: 2, fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textDark, outline: "none", resize: "vertical", boxSizing: "border-box" }} />
                  </div>
                  <button type="submit" className="kms-wiggle" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 2.5rem", borderRadius: 2, border: "none", cursor: "pointer" }}>
                    <Send size={18} /> Submit Quote Request
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-1">
              <div style={{ background: C.darkBg, borderRadius: 4, padding: "2rem", marginBottom: "1.5rem" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.green, textTransform: "uppercase", marginBottom: "1.25rem" }}>Contact Information</div>
                <div className="flex flex-col gap-4">
                  {[
                    { icon: <Phone size={18} />, label: "Main Line", value: KMS_PHONE, href: KMS_PHONE_HREF },
                    { icon: <Clock size={18} />, label: "Emergency Line (24/7)", value: "346-350-1464", href: "tel:+13463501464" },
                    { icon: <Mail size={18} />, label: "Email", value: "info@kmstx.com", href: "mailto:info@kmstx.com" },
                    { icon: <MapPin size={18} />, label: "Location", value: "Stafford, TX 77477", href: undefined },
                  ].map(({ icon, label, value, href }) => (
                    <div key={label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ color: C.green, flexShrink: 0, marginTop: 2 }}>{icon}</span>
                      <div>
                        <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
                        {href ? (
                          <a href={href} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: "white", textDecoration: "none" }}>{value}</a>
                        ) : (
                          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: "white" }}>{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: C.lightBg, border: `2px solid ${C.green}`, borderRadius: 4, padding: "1.5rem" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", color: C.blueDark, textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  Need It Fast?
                </div>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: C.textMid, lineHeight: 1.6, marginBottom: "1rem" }}>
                  Our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> is available every day of the year. Call the emergency line and we'll get moving immediately — <a href={KMS_PHONE_HREF} style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>call {KMS_PHONE}</a>.
                </p>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.85rem", color: C.textMid, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Backed by our <Link href="/warranty" style={{ color: C.green, textDecoration: "none" }}>24-month warranty</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <NewsletterBar />
      <Footer />
    </>
  );
}
