/**
 * PPC Landing Pages — 5 service-specific landing pages
 * These pages are noindex (not indexed by Google) — for paid search only
 * Each has: strong hero with 3-4 CTAs, 2-3 content rows, warranty + emergency + nationwide statement
 */

import { useState } from "react";
import { Link } from "wouter";
import { NavBar, Footer, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { submitLead } from "@/lib/submitLead";
import { CheckCircle, Phone, Shield, Clock, Truck, ArrowRight, Send } from "lucide-react";

// Shared mini quote form for landing pages
function LpQuoteForm({ service }: { service: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: service });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please add your name and phone so we can call you back.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await submitLead({ formType: "landing", name: form.name, email: form.email, phone: form.phone, interest: form.interest });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call 346-350-1464.");
    } finally {
      setSubmitting(false);
    }
  }
  if (submitted) return (
    <div style={{ background: "rgba(120,165,70,0.12)", border: `2px solid ${C.green}`, borderRadius: 4, padding: "1.5rem", textAlign: "center" }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "white", textTransform: "uppercase" }}>Got It — We'll Call You Shortly!</div>
      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", margin: "0.5rem 0 0" }}>For urgent situations call <a href={KMS_PHONE_HREF} style={{ color: C.green }}>{KMS_PHONE}</a></p>
    </div>
  );
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {[
        { id: "name", label: "Your Name", type: "text" },
        { id: "email", label: "Email Address", type: "email" },
        { id: "phone", label: "Phone Number", type: "tel" },
      ].map(({ id, label, type }) => (
        <input key={id} type={type} placeholder={label} required
          value={(form as any)[id]} onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          style={{ padding: "0.7rem 1rem", borderRadius: 2, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", outline: "none" }}
        />
      ))}
      <select value={form.interest} onChange={e => setForm(f => ({ ...f, interest: e.target.value }))}
        style={{ padding: "0.7rem 1rem", borderRadius: 2, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(30,80,128,0.8)", color: "white", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", outline: "none" }}>
        <option>Centrifuge Repair</option>
        <option>Gearbox Repair</option>
        <option>Industrial Blower Repair</option>
        <option>Industrial Compressor Repair</option>
        <option>Fluid & Power End Repair</option>
        <option>Emergency Service</option>
      </select>
      {error && (
        <p style={{ color: "#ff9a9a", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.82rem", margin: 0 }}>{error}</p>
      )}
      <button type="submit" disabled={submitting} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem", borderRadius: 2, border: "none", cursor: submitting ? "wait" : "pointer", opacity: submitting ? 0.7 : 1 }}>
        <Send size={18} /> {submitting ? "Sending…" : "Get My Free Quote"}
      </button>
    </form>
  );
}

// Shared trust badges
function TrustBadges() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" style={{ marginTop: "2rem" }}>
      {[
        { icon: <Shield size={22} />, label: "24-Month Warranty", sub: "Written, not verbal" },
        { icon: <Truck size={22} />, label: "Free Pickup", sub: "All 50 states" },
        { icon: <Clock size={22} />, label: "24/7 Emergency", sub: "365 days a year" },
        { icon: <CheckCircle size={22} />, label: "40+ Years", sub: "In business" },
      ].map(({ icon, label, sub }) => (
        <div key={label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4, padding: "1rem", textAlign: "center" }}>
          <div style={{ color: C.green, display: "flex", justifyContent: "center", marginBottom: "0.4rem" }}>{icon}</div>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "white", lineHeight: 1.2 }}>{label}</div>
          <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: "0.2rem" }}>{sub}</div>
        </div>
      ))}
    </div>
  );
}

// Shared landing page template
function LandingPageTemplate({
  h1, subheading, service, bullets, row2, row3,
}: {
  h1: string; subheading: string; service: string;
  bullets: string[];
  row2: { headline: string; body: string; items: string[] };
  row3: { headline: string; body: string };
}) {
  return (
    <>
      {/* noindex meta — injected via Helmet equivalent */}
      <NavBar />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${C.darkBg} 0%, ${C.blueDark} 100%)`, padding: "4rem 0 3rem", minHeight: "85vh", display: "flex", alignItems: "center" }}>
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ display: "inline-block", background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.3rem 0.75rem", borderRadius: 2, marginBottom: "1.25rem" }}>
                Kelsey Machine Services — Texas-Based, Nationwide
              </div>
              <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "white", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: "1.25rem" }}>
                {h1}
              </h1>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                {subheading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <CheckCircle size={16} style={{ color: C.green, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: "rgba(255,255,255,0.85)" }}>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 2rem", borderRadius: 2, textDecoration: "none" }}>
                  <Phone size={18} /> Call {KMS_PHONE}
                </a>
                <a href="#quote" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 2rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
                  Get Free Quote
                </a>
                <a href="tel:+13463501464" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.08)", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 2rem", borderRadius: 2, border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}>
                  <Clock size={18} /> 24/7 Emergency
                </a>
              </div>
              <TrustBadges />
            </div>
            <div id="quote" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4, padding: "2rem" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "white", textTransform: "uppercase", marginBottom: "0.4rem" }}>Get Your Free Quote</div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", marginBottom: "1.25rem" }}>We respond within one business hour. Emergency? Call us directly.</p>
              <LpQuoteForm service={service} />
            </div>
          </div>
        </div>
      </section>

      {/* ROW 2 */}
      <section style={{ background: "white", padding: "4rem 0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "1rem" }}>
                {row2.headline}
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.75, marginBottom: "1.5rem" }}>
                {row2.body}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {row2.items.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle size={16} style={{ color: C.green, flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textDark, lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: C.lightBg, border: `2px solid ${C.green}`, borderRadius: 4, padding: "2.5rem" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.blueDark, textTransform: "uppercase", marginBottom: "1.25rem" }}>Why KMS?</div>
              {[
                { label: "24-Month Written Warranty", desc: "The industry standard is 90 days. We give you 24 months — in writing." },
                { label: "Free National Pickup", desc: "We'll come get your equipment anywhere in the continental U.S." },
                { label: "24/7 Emergency Service", desc: "Our emergency line is answered every day of the year. No exceptions." },
                { label: "All 50 States + Canada & Mexico", desc: "Distance is not a barrier. We serve North America." },
              ].map(({ label, desc }) => (
                <div key={label} style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #dde3ec" }}>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: C.blueDark, marginBottom: "0.2rem" }}>{label}</div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: C.textMid, lineHeight: 1.5, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROW 3 */}
      <section style={{ background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.darkBg} 100%)`, padding: "4rem 0" }}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "white", textTransform: "uppercase", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
            {row3.headline}
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2.5rem", maxWidth: 680, margin: "0 auto 2.5rem" }}>
            {row3.body}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "1rem 2.5rem", borderRadius: 2, textDecoration: "none" }}>
              <Phone size={20} /> Call {KMS_PHONE}
            </a>
            <a href="#quote" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.15rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "1rem 2.5rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
              Get Free Quote
            </a>
          </div>
          <div style={{ marginTop: "2rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.45)" }}>
            Backed by a 24-month written warranty · Free pickup in all 50 states · 24/7 emergency service · Canada & Mexico service available
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ============================================================
// 5 LANDING PAGES
// ============================================================

export function LpCentrifuge() {
  return <LandingPageTemplate
    h1="Centrifuge Repair — Fast Turnaround, 24-Month Warranty"
    subheading="Your centrifuge just went down. Every hour it sits idle costs real money. KMS has been getting decanter, disc-stack, and basket centrifuges back online for over 40 years — faster than the OEM, with a better warranty."
    service="Centrifuge Repair"
    bullets={[
      "All centrifuge types: decanter, disc-stack, basket, tubular",
      "All major brands: Alfa Laval, Andritz, GEA, Flottweg, Sharples",
      "Free national pickup — we come to you",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
    ]}
    row2={{
      headline: "What's Included in Every Centrifuge Repair",
      body: "We don't just replace parts and send it back. Every centrifuge repair at KMS includes a complete disassembly, written failure analysis, precision machining where needed, and full documentation on delivery. You know exactly what was done and why.",
      items: [
        "Complete disassembly and inspection",
        "Written failure analysis — root cause, not just symptoms",
        "Bowl, scroll, and bearing rebuild to OEM tolerances",
        "Dynamic balancing of all rotating components",
        "Operational test before shipment",
        "Complete repair documentation package",
      ],
    }}
    row3={{
      headline: "Ready to Get Your Centrifuge Back Online?",
      body: "Don't wait on the OEM. KMS has the experience, the tooling, and the emergency service to get your centrifuge repaired and back in service — fast. Call us now or request a free quote and we'll respond within the hour.",
    }}
  />;
}

export function LpGearbox() {
  return <LandingPageTemplate
    h1="Industrial Gearbox Repair — All Types, All Brands, Fast"
    subheading="A gearbox failure can shut down a conveyor, a mixer, a centrifuge drive, or an entire production line. KMS rebuilds all gearbox types — parallel shaft, planetary, bevel, worm, helical — with in-house machining and a 24-month warranty."
    service="Gearbox Repair"
    bullets={[
      "All gearbox types: parallel shaft, planetary, bevel, worm, helical",
      "All major brands: Dodge, Rexnord, Falk, SEW-Eurodrive, Sumitomo",
      "In-house machining — precision restoration to OEM tolerances",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
    ]}
    row2={{
      headline: "What's Included in Every Gearbox Repair",
      body: "Every gearbox repair at KMS includes a complete disassembly, written failure analysis, precision machining where needed, and full documentation on delivery. We identify the root cause — not just the damaged parts — so you don't repeat the same failure.",
      items: [
        "Complete disassembly and inspection",
        "Written failure analysis with root cause identification",
        "Precision machining of worn shafts and housing bores",
        "Replacement of all bearings, seals, and gaskets",
        "Gear mesh verification and adjustment",
        "Complete repair documentation package",
      ],
    }}
    row3={{
      headline: "Gearbox Down? Don't Wait on the OEM.",
      body: "The OEM's 8-week lead time doesn't care about your downtime costs. KMS does. Call us now or request a free quote — we respond within the hour and can have your gearbox in our shop within 24 hours.",
    }}
  />;
}

export function LpBlower() {
  return <LandingPageTemplate
    h1="Industrial Blower Repair — All Types, Emergency Service Available"
    subheading="When your blower goes down, your aeration system, conveying line, or process air supply goes with it. KMS has been rebuilding industrial blowers for over 40 years — faster than the OEM, with a 24-month warranty."
    service="Industrial Blower Repair"
    bullets={[
      "All blower types: rotary lobe, centrifugal, radial, axial, screw",
      "All major brands: Roots/Dresser, Tuthill, Gardner Denver, Kaeser, Aerzen",
      "Free national pickup — we come to you",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
    ]}
    row2={{
      headline: "What's Included in Every Blower Repair",
      body: "Every blower repair at KMS includes a complete disassembly, written failure analysis, precision machining where needed, and full documentation on delivery. We restore lobe clearances, bearing fits, and seal surfaces to OEM specifications.",
      items: [
        "Complete disassembly and inspection",
        "Written failure analysis with root cause identification",
        "Lobe-to-housing clearance restoration",
        "Dynamic balancing of impellers and rotors",
        "Replacement of all bearings, seals, and timing gears",
        "Complete repair documentation package",
      ],
    }}
    row3={{
      headline: "Blower Down? We're Ready Right Now.",
      body: "Our 24/7 emergency line is answered every day of the year. When your blower failure is shutting down your operation, call KMS — we respond fast and we back every repair with a 24-month warranty.",
    }}
  />;
}

export function LpCompressor() {
  return <LandingPageTemplate
    h1="Industrial Compressor Repair — All Types, 24/7 Emergency Service"
    subheading="A compressor failure in a petrochemical plant, gas gathering operation, or industrial facility isn't just an inconvenience — it's a production stoppage. KMS has been rebuilding industrial compressors for over 40 years."
    service="Industrial Compressor Repair"
    bullets={[
      "All compressor types: centrifugal, reciprocating, rotary screw, vane, scroll",
      "All major brands: Ingersoll Rand, Atlas Copco, Gardner Denver, Dresser-Rand",
      "Free national pickup — we come to you",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
    ]}
    row2={{
      headline: "What's Included in Every Compressor Repair",
      body: "Every compressor repair at KMS includes a complete disassembly, written failure analysis, precision machining where needed, and full documentation on delivery. We identify the root cause so you don't repeat the same failure.",
      items: [
        "Complete disassembly and inspection",
        "Written failure analysis with root cause identification",
        "Rotor, impeller, and cylinder restoration",
        "Replacement of all bearings, seals, valves, and packing",
        "Pressure testing before shipment",
        "Complete repair documentation package",
      ],
    }}
    row3={{
      headline: "Compressor Down? Don't Let Downtime Stack Up.",
      body: "Every hour your compressor sits down is money out the door. KMS responds fast, works fast, and backs every repair with a 24-month warranty. Call us now or request a free quote.",
    }}
  />;
}

export function LpFluidEnd() {
  return <LandingPageTemplate
    h1="Fluid End & Power End Repair — Rig Downtime Costs Real Money"
    subheading="In the oilfield, a mud pump failure doesn't just slow you down — it stops the drill. KMS has been rebuilding fluid ends, power ends, and oilfield tools for over 40 years. We understand rig downtime — and we move fast."
    service="Fluid & Power End Repair"
    bullets={[
      "Fluid end and power end rebuild for all major mud pump brands",
      "Oil-filled tool repair and recertification",
      "Free national pickup — we come to you",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
    ]}
    row2={{
      headline: "What's Included in Every Fluid/Power End Repair",
      body: "Every mud pump repair at KMS includes a complete disassembly, written failure analysis, precision machining where needed, and full documentation on delivery. We stock common wear components for faster turnaround on critical repairs.",
      items: [
        "Complete disassembly and inspection",
        "Written failure analysis with root cause identification",
        "Valve, seat, piston, and liner replacement",
        "Crankshaft, connecting rod, and crosshead restoration",
        "Pressure testing before shipment",
        "Complete repair documentation package",
      ],
    }}
    row3={{
      headline: "Rig Down? Call KMS Right Now.",
      body: "Our 24/7 emergency line is answered every day of the year. We serve all 50 states, Canada, and Mexico. When your mud pump failure is costing you rig time, call KMS — we respond within the hour.",
    }}
  />;
}
