/**
 * Fluid & Power End Repair Service Page
 * Primary KW: fluid end repair, power end repair, mud pump repair
 * Voice: Full Texas — bold, direct, witty, technically correct
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, QuickAnswerBox, InlineQuoteForm, FaqSection, CtaBanner, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";

const SERVICES = [
  { name: "Fluid End Repair & Rebuild", desc: "The fluid end is the high-pressure, high-wear component of any mud pump — it takes the brunt of the abrasive drilling fluid and the relentless pressure cycles. KMS rebuilds fluid ends to OEM specifications, replacing valves, seats, pistons, liners, and packing. We restore bore geometry and surface finish to ensure proper seal and extended component life." },
  { name: "Power End Repair & Rebuild", desc: "The power end converts rotary motion to the reciprocating action that drives the fluid end. KMS rebuilds power ends including crankshafts, connecting rods, crossheads, crosshead guides, main bearings, and pinion shafts. We perform complete disassembly, inspection, machining, and reassembly to OEM tolerances." },
  { name: "Oil-Filled Tool Repair & Recertification", desc: "Downhole tools, pipe handling tools, and hydraulic tools used in oilfield operations require specialized repair and recertification. KMS repairs and recertifies oil-filled tools to API and manufacturer specifications, with complete documentation for your records." },
  { name: "Mud Pump Valve & Seat Replacement", desc: "Mud pump valves and seats are high-cycle wear items that require regular replacement. KMS stocks a wide range of valve and seat configurations and can perform rapid replacement to minimize your downtime." },
  { name: "Liner & Piston Replacement", desc: "Liners and pistons are the primary wear surfaces in the fluid end. We replace liners and pistons with quality components and ensure proper fit and alignment for maximum service life." },
  { name: "Hydraulic Tool Repair", desc: "Hydraulic tools used in oilfield and industrial applications require specialized repair to maintain performance and safety. KMS repairs hydraulic cylinders, actuators, and tool assemblies with full pressure testing before return." },
];

const PUMP_BRANDS = [
  "National Oilwell (NOV)", "Gardner Denver", "Weatherford", "Halliburton",
  "Schlumberger (SLB)", "BJ Services", "Mission Pumps", "Wheatley",
  "Continental Emsco", "OPI", "Ideco", "Oilwell", "Dreco",
  "Rig Systems", "Varco", "Tesco",
];

const FAILURE_MODES = [
  { icon: <AlertTriangle size={18} />, title: "Valve & Seat Wear", desc: "The most common fluid end failure — valves and seats wear from abrasive drilling fluid and pressure cycling. Worn valves cause pressure loss, fluid bypass, and accelerated liner wear." },
  { icon: <AlertTriangle size={18} />, title: "Liner Wash & Erosion", desc: "Abrasive drilling fluid erodes liner bores over time. Worn liners reduce pump efficiency and cause piston seal failure. Regular liner inspection and replacement is critical." },
  { icon: <AlertTriangle size={18} />, title: "Packing Failure", desc: "Piston packing seals the liner bore and prevents fluid bypass. Worn packing causes fluid leakage, pressure loss, and contamination of the power end." },
  { icon: <AlertTriangle size={18} />, title: "Fluid End Cracking", desc: "High-cycle fatigue and pressure spikes can cause fluid end body cracking. A cracked fluid end is a safety issue and must be replaced — we stock common configurations and can source specialty units." },
  { icon: <AlertTriangle size={18} />, title: "Power End Bearing Failure", desc: "Power end bearings carry significant loads at high cycle rates. Contamination, overloading, and improper lubrication are the leading causes. Noise and vibration are the warning signs." },
  { icon: <AlertTriangle size={18} />, title: "Crosshead & Guide Wear", desc: "Crossheads and crosshead guides wear from the side loading of the reciprocating motion. Worn crossheads cause misalignment between the power end and fluid end, accelerating wear throughout the pump." },
];

const FAQS = [
  { q: "What is the difference between a fluid end and a power end?", a: "The fluid end is the high-pressure hydraulic section of a mud pump that moves drilling fluid — it contains the valves, seats, pistons, and liners. The power end is the mechanical drive section that converts rotary motion to reciprocating motion — it contains the crankshaft, connecting rods, crossheads, and bearings. Both require regular maintenance and periodic rebuild." },
  { q: "How often should mud pump fluid ends be rebuilt?", a: "Fluid end service life depends heavily on the abrasiveness of the drilling fluid, pump pressure, and operating speed. In hard rock drilling with abrasive mud, fluid ends may need rebuild every few hundred hours. In softer formations with less abrasive fluid, service intervals can be significantly longer. We recommend regular inspection and proactive replacement of wear components rather than running to failure." },
  { q: "Do you repair mud pumps from all manufacturers?", a: "Yes. We repair fluid ends and power ends from all major manufacturers including National Oilwell (NOV), Gardner Denver, Weatherford, Continental Emsco, and many others. We are not limited to OEM service relationships." },
  { q: "What is the warranty on fluid end and power end repairs?", a: "Every repair is backed by our industry-leading 24-month rebuilt warranty — in writing. See our Warranty page for full details." },
  { q: "Do you offer emergency fluid end repair service?", a: "Yes. Our 24/7 emergency line is answered every day of the year. When your mud pump failure is shutting down your drilling operation, call 346-350-1464 immediately. We understand the cost of rig downtime." },
  { q: "Can you recertify oil-filled downhole tools?", a: "Yes. KMS repairs and recertifies oil-filled downhole tools, pipe handling tools, and hydraulic tools to API and manufacturer specifications, with complete documentation for your records." },
  { q: "Do you stock common fluid end components?", a: "We maintain inventory of common valves, seats, pistons, liners, and packing for the most popular mud pump models. This allows us to complete many repairs faster than waiting for OEM parts." },
  { q: "Can you repair a fluid end that has washed out?", a: "Yes — washout (erosion of the fluid end body from valve seat leakage) is one of the most common fluid end failures we see. The extent of erosion determines whether the fluid end can be repaired or must be replaced. We assess every unit and give you an honest recommendation." },
];

export default function FluidPowerEnd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fluid End & Power End Repair",
    "serviceType": "Mud Pump Fluid End and Power End Repair",
    "provider": { "@type": "LocalBusiness", "name": "Kelsey Machine Services", "url": "https://kmstx.com", "telephone": "+13463501464" },
    "areaServed": { "@type": "Country", "name": "United States" },
    "description": "KMS repairs and rebuilds mud pump fluid ends and power ends for all major manufacturers. Oil-filled tool repair and recertification. Emergency service, nationwide.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NavBar />
      <PageHero
        bgImage="/images/fluid-end-module_97356062.jpg"
        h1="Fluid End & Power End Repair — Mud Pumps, Oilfield Tools"
        subheading="Rig downtime is the most expensive downtime in the business. KMS has been rebuilding mud pump fluid ends, power ends, and oilfield tools for over 40 years — with emergency service, nationwide coverage, and a 24-month warranty."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Fluid & Power End Repair" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                In the oilfield, a mud pump failure doesn't just slow you down — it stops the drill. Every hour your rig sits waiting on a fluid end or power end repair is money walking out the door. Kelsey Machine Services has been rebuilding mud pump fluid ends, power ends, and oilfield tools for over 40 years, with the in-house machining capability to restore your equipment to OEM performance fast. Every rebuild is backed by a written <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link>, and our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> is answered every day of the year.
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                We serve drilling operations, oilfield service companies, and industrial facilities across all 50 states, Canada, and Mexico. Our structured repair process gives you full transparency: written failure analysis, itemized quote before work begins, and complete documentation on delivery. Free national pickup is available for critical situations.
              </p>

              <QuickAnswerBox text="Kelsey Machine Services repairs and rebuilds mud pump fluid ends and power ends for all major manufacturers, including National Oilwell (NOV), Gardner Denver, Weatherford, and Continental Emsco. We also repair and recertify oil-filled downhole tools and hydraulic oilfield tools. Emergency service is available 24/7, and every repair is backed by a written 24-month warranty." />

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginTop: "2.5rem", marginBottom: "1rem" }}>
                Fluid End & Power End Services
              </h2>
              <div className="flex flex-col gap-5 mb-8">
                {SERVICES.map(({ name, desc }) => (
                  <div key={name} style={{ borderLeft: `4px solid ${C.green}`, paddingLeft: "1.25rem" }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: C.blueDark, marginBottom: "0.4rem", textTransform: "uppercase" }}>{name}</h3>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: C.textMid, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Common Failure Modes
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
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "white", textTransform: "uppercase", marginBottom: "0.75rem" }}>Rig Down? Call Us Now.</div>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  Our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> is available every day of the year. We serve all 50 states, Canada, and Mexico. Backed by a <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, textDecoration: "none" }}>Call {KMS_PHONE}</a>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>Request Free Quote</Link>
                </div>
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Pump & Tool Brands We Service
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {PUMP_BRANDS.map(brand => (
                  <span key={brand} style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: C.blueDark, background: `${C.blueDark}12`, border: `1px solid ${C.blueDark}22`, padding: "0.3rem 0.75rem", borderRadius: 2 }}>{brand}</span>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Related Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Centrifuge Repair", desc: "Centrifuges are critical in drilling solids control — we repair those too.", href: "/services/centrifuge-repair" },
                  { title: "Gearbox Repair", desc: "Power end gearboxes and pump drive gearboxes are part of our scope.", href: "/services/gearbox-repair" },
                  { title: "Industrial Compressors", desc: "Oilfield compressors for gas gathering and processing.", href: "/services/industrial-compressors" },
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
                <InlineQuoteForm service="fluid-power-end" />
                <div style={{ marginTop: "1.5rem", background: C.darkBg, borderRadius: 4, padding: "1.5rem" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.green, marginBottom: "0.75rem", textTransform: "uppercase" }}>Emergency Service</div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Rig down right now? <Link href="/emergency-service" style={{ color: C.green, textDecoration: "none" }}>24/7 emergency line</Link> answered every day.
                  </p>
                  <a href={KMS_PHONE_HREF} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", padding: "0.75rem", borderRadius: 2, textDecoration: "none" }}>Call {KMS_PHONE}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FaqSection faqs={FAQS} pageName="Fluid End and Power End Repair" />
      <CtaBanner headline="Ready to Get Your Mud Pump Back Online?" subtext="Request a free quote or call our emergency line — we respond within the hour, 24/7." />
      <NewsletterBar />
      <Footer />
    </>
  );
}
