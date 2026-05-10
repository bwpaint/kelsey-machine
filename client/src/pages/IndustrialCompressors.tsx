/**
 * Industrial Compressors Service Page
 * Primary KW: industrial compressor repair
 * Voice: Full Texas — bold, direct, witty, technically correct
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, QuickAnswerBox, InlineQuoteForm, FaqSection, CtaBanner, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { AlertTriangle, ArrowRight } from "lucide-react";

const COMPRESSOR_TYPES = [
  { name: "Centrifugal Compressors", desc: "High-flow, continuous-duty compressors used in petrochemical, refining, and large industrial processes. KMS rebuilds impellers, diffusers, bearings, seals, and casings. Impeller balance and clearance restoration are critical — we have the precision tooling and experience to do it right." },
  { name: "Reciprocating Compressors", desc: "The workhorses of the oil & gas and industrial world — used in gas gathering, pipeline, and process applications. KMS repairs cylinders, pistons, rods, valves, crossheads, and crankshafts. We also rebuild compressor frames and perform complete overhauls." },
  { name: "Rotary Screw Compressors", desc: "Oil-flooded and oil-free screw compressors are common in plant air and process gas applications. KMS repairs rotor profiles, timing gears, bearings, seals, and housings — restoring rotor-to-housing clearances that are critical to efficiency." },
  { name: "Rotary Vane Compressors", desc: "Used in vacuum and low-pressure applications. Vane wear is the primary failure mode — we replace vanes, restore housing bores, and rebuild bearing assemblies to restore performance." },
  { name: "Scroll Compressors", desc: "Used in HVAC, refrigeration, and low-pressure process applications. Scroll set wear and contamination are the primary issues. We rebuild scroll compressors for industrial and commercial applications." },
  { name: "Diaphragm Compressors", desc: "Used in high-purity, high-pressure applications where gas contamination is not acceptable. KMS repairs diaphragm compressors for chemical, pharmaceutical, and specialty gas applications." },
];

const FAILURE_MODES = [
  { icon: <AlertTriangle size={18} />, title: "Bearing Failure", desc: "The most common compressor failure mode across all types. Contamination, overloading, and improper lubrication are the leading causes." },
  { icon: <AlertTriangle size={18} />, title: "Seal & Packing Failure", desc: "Gas leakage from worn seals and packing is both a safety issue and an efficiency killer. We replace all seal types including labyrinth, mechanical, and carbon ring seals." },
  { icon: <AlertTriangle size={18} />, title: "Valve Failure (Reciprocating)", desc: "Compressor valves are high-cycle components that wear and fail. Broken valve plates, worn seats, and spring failure are common. We replace complete valve assemblies." },
  { icon: <AlertTriangle size={18} />, title: "Rotor Damage & Imbalance", desc: "Centrifugal and screw compressor rotors are subject to erosion, corrosion, and fouling. Imbalance destroys bearings and causes vibration that damages connected equipment." },
  { icon: <AlertTriangle size={18} />, title: "Oil Contamination", desc: "Oil carryover into the process stream indicates seal failure and requires immediate attention. We identify the source and repair it — not just clean up the symptom." },
  { icon: <AlertTriangle size={18} />, title: "Cylinder & Rod Wear", desc: "Reciprocating compressor cylinders and piston rods wear over time. We measure, assess, and restore or replace as needed — with full documentation." },
];

const BRANDS = [
  "Ingersoll Rand", "Atlas Copco", "Gardner Denver", "Sullair", "Kaeser",
  "Quincy", "CompAir", "Dresser-Rand", "Elliott", "Siemens Energy",
  "Ariel", "Cooper-Bessemer", "Ajax", "Worthington", "Blackmer",
  "Howden", "GHH-RAND", "Aerzen", "Tuthill", "Elmo Rietschle",
];

const FAQS = [
  { q: "What types of industrial compressors does KMS repair?", a: "KMS repairs centrifugal, reciprocating, rotary screw, rotary vane, scroll, and diaphragm compressors for industrial and oil & gas applications. We work on all sizes and all manufacturers." },
  { q: "Do you repair compressors from all manufacturers?", a: "Yes. We repair compressors from all major manufacturers including Ingersoll Rand, Atlas Copco, Gardner Denver, Dresser-Rand, Elliott, Ariel, Cooper-Bessemer, and many others. We are not limited to OEM service relationships." },
  { q: "What is the warranty on compressor repairs?", a: "Every compressor repair is backed by our industry-leading 24-month rebuilt warranty — in writing. See our Warranty page for full details." },
  { q: "How long does compressor repair take?", a: "Turnaround depends on the type and extent of damage. Most repairs are completed in 1–3 weeks. For critical operations, we offer emergency service. Call our 24/7 emergency line to discuss your specific timeline." },
  { q: "Do you offer emergency compressor repair service?", a: "Yes. Our 24/7 emergency line is answered every day of the year. When your compressor failure is shutting down your operation, call 346-350-1464 immediately." },
  { q: "Can you repair a compressor that has ingested liquid?", a: "Liquid ingestion (liquid slugging) is one of the most destructive compressor failures. We fully disassemble, assess all damage, and rebuild to OEM specifications. The extent of damage determines the repair scope." },
  { q: "Do you provide failure analysis with compressor repairs?", a: "Yes — every repair includes a written failure analysis identifying the root cause. This helps you prevent the same failure from happening again." },
  { q: "Can you repair compressors for oil and gas applications?", a: "Yes. We have extensive experience with reciprocating and centrifugal compressors used in gas gathering, pipeline, and processing applications. We understand the critical nature of these units and the urgency of getting them back online." },
];

export default function IndustrialCompressors() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Compressor Repair & Rebuild",
    "serviceType": "Industrial Compressor Repair",
    "provider": { "@type": "LocalBusiness", "name": "Kelsey Machine Services", "url": "https://kmstx.com", "telephone": "+13463501464" },
    "areaServed": { "@type": "Country", "name": "United States" },
    "description": "KMS repairs all industrial compressor types — centrifugal, reciprocating, rotary screw, vane, scroll. Emergency service, nationwide. Free quote.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NavBar />
      <PageHero
        bgImage="/manus-storage/kms_gearbox_v2_1ed0ac8d_b70476d1.jpg"
        h1="Industrial Compressor Repair & Rebuild — All Types, All Brands"
        subheading="Compressor down? Whether it's a centrifugal, reciprocating, or screw unit, KMS has been getting industrial compressors back online for over 40 years — with a 24-month warranty and emergency service that actually shows up."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Industrial Compressors" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                A compressor failure in a petrochemical plant, gas gathering operation, or industrial facility isn't just an inconvenience — it's a production stoppage with a clock running. Kelsey Machine Services has been rebuilding industrial compressors of all types for over 40 years, with the in-house machining capability and experienced technicians to restore your unit to OEM performance. Every rebuild is backed by a written <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link>, and our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> is answered every day of the year.
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                We serve industrial facilities, oil & gas operations, petrochemical plants, and manufacturing facilities across all 50 states, Canada, and Mexico. Our structured repair process gives you full transparency: written failure analysis, itemized quote before work begins, and complete documentation on delivery.
              </p>

              <QuickAnswerBox text="Kelsey Machine Services repairs and rebuilds all types of industrial compressors — centrifugal, reciprocating, rotary screw, rotary vane, scroll, and diaphragm — for facilities across the U.S., Canada, and Mexico. We accept all brands, perform complete failure analysis on every unit, and offer emergency turnaround for critical operations. Every repair is backed by a written 24-month warranty." />

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginTop: "2.5rem", marginBottom: "1rem" }}>
                Types of Industrial Compressors We Repair
              </h2>
              <div className="flex flex-col gap-5 mb-8">
                {COMPRESSOR_TYPES.map(({ name, desc }) => (
                  <div key={name} style={{ borderLeft: `4px solid ${C.green}`, paddingLeft: "1.25rem" }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: C.blueDark, marginBottom: "0.4rem", textTransform: "uppercase" }}>{name}</h3>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: C.textMid, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Common Compressor Failure Modes
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
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "white", textTransform: "uppercase", marginBottom: "0.75rem" }}>Compressor Down? Don't Wait.</div>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> is available every day of the year. Backed by a <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, textDecoration: "none" }}>Call {KMS_PHONE}</a>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>Request Free Quote</Link>
                </div>
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Compressor Brands We Service
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
                  { title: "Industrial Blower Repair", desc: "Blowers and compressors share many design principles. We repair both.", href: "/services/industrial-blower-repair" },
                  { title: "Gearbox Repair", desc: "Compressor drives often include integral or coupled gearboxes.", href: "/services/gearbox-repair" },
                  { title: "Centrifuge Repair", desc: "Centrifuge operations often include compressors for gas handling.", href: "/services/centrifuge-repair" },
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
                <InlineQuoteForm service="compressor" />
                <div style={{ marginTop: "1.5rem", background: C.darkBg, borderRadius: 4, padding: "1.5rem" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.green, marginBottom: "0.75rem", textTransform: "uppercase" }}>Emergency Service</div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Compressor down right now? <Link href="/emergency-service" style={{ color: C.green, textDecoration: "none" }}>24/7 emergency line</Link> answered every day.
                  </p>
                  <a href={KMS_PHONE_HREF} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", padding: "0.75rem", borderRadius: 2, textDecoration: "none" }}>Call {KMS_PHONE}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FaqSection faqs={FAQS} pageName="Industrial Compressor Repair" showForm service="compressors" />
      <CtaBanner headline="Ready to Get Your Compressor Back Online?" subtext="Request a free quote or call our emergency line — we respond within the hour, 24/7." />
      <NewsletterBar />
      <Footer />
    </>
  );
}
