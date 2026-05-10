/**
 * Industrial Blower Repair Service Page
 * Primary KW: industrial blower repair
 * Voice: Full Texas — bold, direct, witty, technically correct
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, QuickAnswerBox, InlineQuoteForm, FaqSection, CtaBanner, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";

const BLOWER_TYPES = [
  { name: "Rotary Lobe (Roots-Type) Blowers", desc: "The most common positive displacement blower in industrial use — used in wastewater aeration, pneumatic conveying, and vacuum systems. KMS rebuilds lobe profiles, timing gears, bearings, seals, and housing bores. Lobe-to-housing clearance is critical and must be restored to OEM spec for proper performance." },
  { name: "Centrifugal Blowers", desc: "High-flow, lower-pressure blowers used in HVAC, industrial ventilation, and process air systems. KMS rebuilds impellers, replaces bearings and seals, and restores housing geometry. Impeller balance is critical — we dynamically balance every impeller before reassembly." },
  { name: "Radial Blowers", desc: "Used in high-pressure applications including combustion air, dust collection, and industrial drying. KMS repairs and rebuilds radial blowers of all sizes, with particular attention to impeller condition and housing wear patterns." },
  { name: "Axial Flow Blowers", desc: "High-volume, lower-pressure blowers used in cooling towers, ventilation, and process air. Blade condition, hub integrity, and bearing condition are the primary inspection points. We repair and rebuild axial units for all major manufacturers." },
  { name: "Regenerative Blowers", desc: "Used in aeration, vacuum, and low-pressure conveying applications. Regenerative blowers are sensitive to contamination and wear in the regenerative channel. We inspect, clean, and rebuild these units to restore flow and pressure performance." },
  { name: "Screw Blowers", desc: "Oil-free screw blowers are increasingly common in wastewater and process air applications. KMS repairs screw blower rotors, timing gears, bearings, and seals — restoring rotor-to-housing clearances that are critical to efficiency and performance." },
];

const FAILURE_MODES = [
  { icon: <AlertTriangle size={18} />, title: "Lobe Wear & Clearance Loss", desc: "Rotary lobe blowers depend on precise lobe-to-housing and lobe-to-lobe clearances. As these open up, efficiency drops and internal slip increases. We measure and restore clearances to OEM spec." },
  { icon: <AlertTriangle size={18} />, title: "Bearing Failure", desc: "Blower bearings carry significant loads at high speeds. Contamination, overloading, and improper lubrication are the leading causes. Noise, vibration, and heat are the warning signs." },
  { icon: <AlertTriangle size={18} />, title: "Timing Gear Wear", desc: "Rotary lobe blowers use precision timing gears to synchronize the lobes. Worn timing gears cause lobe contact — a catastrophic failure that destroys the housing and lobes. Catch it early." },
  { icon: <AlertTriangle size={18} />, title: "Seal Failure & Oil Contamination", desc: "Oil seals prevent lubrication oil from entering the air stream. Seal failure contaminates the process and indicates the unit needs immediate attention." },
  { icon: <AlertTriangle size={18} />, title: "Impeller Damage & Imbalance", desc: "Centrifugal and radial blower impellers are subject to erosion, corrosion, and impact damage. An imbalanced impeller destroys bearings and causes vibration that damages connected equipment." },
  { icon: <AlertTriangle size={18} />, title: "Housing Wear & Damage", desc: "Blower housings wear from abrasive particles in the air stream and from lobe/impeller contact. Housing wear increases clearances and reduces efficiency. We restore housing bores to OEM tolerances." },
];

const BRANDS = [
  "Roots (Dresser)", "Tuthill", "Gardner Denver", "Kaeser", "Aerzen",
  "Robuschi", "Spencer", "Hoffman", "New York Blower", "Cincinnati Fan",
  "Peerless Mfg", "Howden", "Ingersoll Rand", "Atlas Copco", "Elmo Rietschle",
  "Busch", "Becker", "Gast", "Ametek", "Fuji Electric",
];

const FAQS = [
  { q: "What types of industrial blowers does KMS repair?", a: "KMS repairs all major industrial blower types: rotary lobe (Roots-type), centrifugal, radial, axial flow, regenerative, and screw blowers. We work on all sizes and all manufacturers — from small fractional horsepower units to large multi-stage industrial blowers." },
  { q: "How long does blower repair typically take?", a: "Most blower repairs are completed in 1–2 weeks. Complex rebuilds requiring machining or specialty parts may take longer. For critical operations, we offer emergency service with significantly faster turnaround — call our 24/7 emergency line to discuss your timeline." },
  { q: "Do you repair blowers from all manufacturers?", a: "Yes. We repair blowers from all major manufacturers including Roots/Dresser, Tuthill, Gardner Denver, Kaeser, Aerzen, Robuschi, Spencer, Hoffman, and many others. We are not limited to OEM service relationships." },
  { q: "What is the warranty on blower repairs?", a: "Every blower repair is backed by our industry-leading 24-month rebuilt warranty — in writing. See our Warranty page for full terms." },
  { q: "Can you repair a blower that has ingested debris?", a: "Yes — debris ingestion is one of the most common blower failures we see. We fully disassemble, assess all damage to lobes, timing gears, bearings, and housing, and rebuild to OEM specifications. The extent of damage determines the repair scope and cost." },
  { q: "Do you offer emergency blower repair service?", a: "Absolutely. Our 24/7 emergency line is answered every day of the year. When your blower failure is shutting down your aeration system, conveying line, or process air supply, call 346-350-1464 immediately." },
  { q: "What causes premature blower failure?", a: "The most common causes are contaminated air intake (debris, moisture, or process carryover), improper lubrication, overloading beyond design pressure or flow, and deferred maintenance. Our failure analysis identifies the root cause so you don't repeat the same failure." },
  { q: "Can you repair blowers for wastewater treatment applications?", a: "Yes — wastewater aeration blowers are one of our most common repair categories. We work with municipal and industrial wastewater facilities across the country, repairing Roots-type, centrifugal, and screw blowers used in aeration and biogas applications." },
];

export default function BlowerRepair() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Blower Repair & Rebuild",
    "serviceType": "Industrial Blower Repair",
    "provider": { "@type": "LocalBusiness", "name": "Kelsey Machine Services", "url": "https://kmstx.com", "telephone": "+13463501464" },
    "areaServed": { "@type": "Country", "name": "United States" },
    "description": "KMS repairs all industrial blower types and brands — rotary lobe, centrifugal, radial, axial, regenerative, screw. Emergency service, nationwide. Free quote.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NavBar />
      <PageHero
        bgImage="/images/blower-roots_0527c999.jpg"
        h1="Industrial Blower Repair & Rebuild — All Types, All Brands"
        subheading="When your blower goes down, your aeration system, conveying line, or process air supply goes with it. KMS has been rebuilding industrial blowers for over 40 years — faster than the OEM, with a better warranty."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Industrial Blower Repair" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                If your blower just quit on you, you've got two options: call the OEM and wait, or call Kelsey Machine and get it done right. We've been rebuilding industrial blowers of all types and sizes for over 40 years — from small Roots-type units in wastewater plants to large centrifugal blowers in petrochemical facilities. Every rebuild is backed by a written <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link>, and our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> means we're ready when you need us most.
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                KMS provides expert industrial blower repair and rebuild services for wastewater treatment facilities, petrochemical plants, food processing operations, pneumatic conveying systems, and industrial manufacturing. We work on all blower types and all manufacturers, with a structured repair process that gives you full transparency from intake to delivery.
              </p>

              <QuickAnswerBox text="Kelsey Machine Services repairs and rebuilds all types of industrial blowers — rotary lobe, centrifugal, radial, axial flow, regenerative, and screw blowers — for facilities across the U.S., Canada, and Mexico. We accept all brands, perform complete failure analysis on every unit, and offer emergency turnaround for critical operations. Every repair is backed by a written 24-month warranty." />

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginTop: "2.5rem", marginBottom: "1rem" }}>
                Types of Industrial Blowers We Repair
              </h2>
              <div className="flex flex-col gap-5 mb-8">
                {BLOWER_TYPES.map(({ name, desc }) => (
                  <div key={name} style={{ borderLeft: `4px solid ${C.green}`, paddingLeft: "1.25rem" }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: C.blueDark, marginBottom: "0.4rem", textTransform: "uppercase" }}>{name}</h3>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: C.textMid, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Common Blower Failure Modes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {FAILURE_MODES.map(({ icon, title, desc }) => (
                  <div key={title} style={{ background: C.lightBg, border: `1px solid #dde3ec`, borderRadius: 4, padding: "1.25rem" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ color: "#e07b2a" }}>{icon}</span>
                      <h3 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: C.textDark, margin: 0 }}>{title}</h3>
                    </div>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: C.textMid, lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.darkBg} 100%)`, borderRadius: 4, padding: "2rem", marginBottom: "2.5rem" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "white", textTransform: "uppercase", marginBottom: "0.75rem" }}>Blower Down? We're Ready.</div>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> is available every day of the year. Free pickup available for critical situations.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, textDecoration: "none" }}>Call {KMS_PHONE}</a>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>Request Free Quote</Link>
                </div>
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Blower Brands We Service
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {BRANDS.map(brand => (
                  <span key={brand} style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: C.blueDark, background: `${C.blueDark}12`, border: `1px solid ${C.blueDark}22`, padding: "0.3rem 0.75rem", borderRadius: 2 }}>{brand}</span>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Related Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Industrial Compressors", desc: "Blowers and compressors often share the same drive systems. We repair both.", href: "/services/industrial-compressors" },
                  { title: "Gearbox Repair", desc: "Many blowers use integral or coupled gearboxes. We handle the full assembly.", href: "/services/gearbox-repair" },
                  { title: "Centrifuge Repair", desc: "Centrifuge operations often include blowers for conveying and aeration.", href: "/services/centrifuge-repair" },
                ].map(({ title, desc, href }) => (
                  <Link key={title} href={href} style={{ display: "block", background: C.lightBg, border: `1px solid #dde3ec`, borderRadius: 4, padding: "1.25rem", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = C.green)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#dde3ec")}
                  >
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: C.blueDark, marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: 6 }}>{title} <ArrowRight size={14} style={{ color: C.green }} /></div>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: C.textMid, lineHeight: 1.5, margin: 0 }}>{desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div style={{ position: "sticky", top: 100 }}>
                <InlineQuoteForm service="blower" />
                <div style={{ marginTop: "1.5rem", background: C.darkBg, borderRadius: 4, padding: "1.5rem" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.green, marginBottom: "0.75rem", textTransform: "uppercase" }}>Emergency Service</div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Blower down right now? <Link href="/emergency-service" style={{ color: C.green, textDecoration: "none" }}>24/7 emergency line</Link> answered every day.
                  </p>
                  <a href={KMS_PHONE_HREF} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", padding: "0.75rem", borderRadius: 2, textDecoration: "none" }}>Call {KMS_PHONE}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FaqSection faqs={FAQS} pageName="Industrial Blower Repair" />
      <CtaBanner headline="Ready to Get Your Blower Back Online?" subtext="Request a free quote or call our emergency line — we respond within the hour, 24/7." />
      <NewsletterBar />
      <Footer />
    </>
  );
}
