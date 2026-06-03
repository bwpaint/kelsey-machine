/**
 * Pump Repair & Service Page
 * Primary KW: pump repair, industrial pump rebuild
 * Voice: Full Texas — bold, direct, technically correct
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, QuickAnswerBox, FaqSection, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { AlertTriangle, ArrowRight, CheckCircle, Wrench } from "lucide-react";

const PUMP_TYPES = [
  { name: "Centrifugal Pumps", desc: "Single-stage, multi-stage, end-suction, between-bearings, and split-case designs — every common configuration found in industrial process service." },
  { name: "Vertical Turbine Pumps", desc: "Deep-well, can-mount, and barrel pumps used for water supply, condensate return, and high-head process applications." },
  { name: "Horizontal Split Case", desc: "Double-suction split-case pumps used in high-flow, low-NPSH applications including water treatment and HVAC service." },
  { name: "Positive Displacement", desc: "Gear, lobe, screw, vane, and diaphragm pumps used for high-viscosity fluids, metering, and low-shear product transfer." },
  { name: "Self-Priming & Trash Pumps", desc: "Industrial and municipal pumps used for sewage, slurry, and intermittent-duty applications where reliable re-prime is critical." },
];

const FAILURE_MODES = [
  { icon: <AlertTriangle size={18} />, title: "Cavitation Damage", desc: "Pitting and erosion on impeller vanes from vapor-bubble collapse. Often the result of insufficient NPSH-available, throttled suction lines, or running far off the BEP." },
  { icon: <AlertTriangle size={18} />, title: "Bearing Failure", desc: "Premature bearing replacement is the most common pump repair we see. Causes range from misalignment to contaminated lubricant to running outside the design flow window." },
  { icon: <AlertTriangle size={18} />, title: "Mechanical Seal Leakage", desc: "Drips and leaks at the seal face — often a symptom of dry running, abrasive product, or flush plan failure rather than the seal itself being defective." },
  { icon: <AlertTriangle size={18} />, title: "Impeller Wear & Erosion", desc: "Abrasive service (slurry, sand-laden water, polymer crumb) eats through impeller eyes and vane tips. Hard-facing and tungsten-carbide overlay restore service life." },
  { icon: <AlertTriangle size={18} />, title: "Shaft Cracks & Breakage", desc: "Reverse rotation, misalignment, water hammer, and operating in a deadhead condition all overload the shaft. We inspect for crack indications during every teardown." },
  { icon: <AlertTriangle size={18} />, title: "Vibration Problems", desc: "High vibration is rarely just one thing. We diagnose root cause — unbalance, misalignment, bearing wear, hydraulic instability — and address the actual driver, not just the symptom." },
];

const PROCESS_STEPS = [
  "Complete teardown and inspection with documented as-found dimensions",
  "Material verification on wear components and shaft (NDT inspection as required)",
  "Impeller dynamic balancing to ISO 1940 G2.5 or better",
  "Shaft straightness check and TIR documentation",
  "New bearings, seals, and gaskets installed per OEM specification",
  "Impeller hard-facing and wear-ring replacement when required",
  "Final assembly with torque verification and clearance documentation",
];

const BRANDS = [
  "Goulds", "Sulzer", "Flowserve", "ITT", "KSB", "Grundfos", "Gorman-Rupp", "Cornell",
  "Peerless", "Aurora", "Worthington", "Ingersoll Rand", "Allis-Chalmers", "Patterson", "Berkeley", "Floway",
  "Viking", "Tuthill", "Wilden", "Warren Rupp", "Roper", "Blackmer",
];

const FAQS = [
  { q: "How long does pump repair take?", a: "Standard turnaround for industrial pump repair is 2-3 weeks from receipt of the unit. Emergency service is available for production-critical pumps — we can often have a rebuild complete in 5-7 days for true emergencies. Call us at " + KMS_PHONE + " to discuss your specific situation." },
  { q: "Do you balance pump impellers?", a: "Yes. Every impeller we rebuild is dynamically balanced to ISO 1940 G2.5 as standard, with G1.0 available on request for high-speed or vibration-sensitive applications. We provide as-found and as-left balance reports with every repair." },
  { q: "Can you repair pumps from any manufacturer?", a: "Yes. We service every major industrial pump brand including Goulds, Sulzer, Flowserve, ITT, KSB, Grundfos, and dozens more. If your pump uses standard ANSI or API construction, we can repair it." },
  { q: "What is your warranty on pump repairs?", a: "All pump repairs are backed by our 24-month written warranty — twice the industry standard. If something fails during the warranty period, we make it right at no charge to you." },
  { q: "Do you offer hard-facing or tungsten-carbide overlay on impellers?", a: "Yes. For abrasive service applications — slurry, polymer, dirty water — we apply tungsten-carbide hard-facing on impeller eyes, vane tips, and wear surfaces to extend service life dramatically beyond standard rebuilds." },
  { q: "How do I get my pump to your shop?", a: "We offer free pickup and delivery throughout the continental U.S. Just call " + KMS_PHONE + " or fill out the quote form. We handle the logistics — you don't have to deal with freight booking or shipping damage." },
];

const HERO_BG = "/images/oilfield-pumps.webp";

export default function PumpService() {
  return (
    <>
      <NavBar />
      <PageHero
        h1="Industrial Pump Repair & Rebuild — All Brands, Nationwide"
        subheading="Centrifugal, vertical turbine, split-case, and positive-displacement pump repair from a shop that's been rebuilding rotating equipment for forty years. Free nationwide pickup, 24-month written warranty, 24/7 emergency response."
        bgImage={HERO_BG}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Pump Repair" }]}
      />

      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <article className="lg:col-span-2">
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: C.textDark, lineHeight: 1.75, marginBottom: "1.25rem" }}>
                When an industrial pump fails, production stops. It doesn't matter if it's a 5-horsepower booster pump on a cooling tower or a 1,200-horsepower vertical turbine on a refinery feed line — the equipment downstream of that pump is now offline, and the clock is running. Kelsey Machine Services has been repairing industrial pumps for forty years. We rebuild centrifugal pumps, vertical turbines, split-case pumps, and positive-displacement pumps to OEM specifications, with the precision balancing, hard-facing, and documentation that demanding process industries require.
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: C.textDark, lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Our pump repair process is comprehensive — every rebuild starts with a complete teardown and documented as-found inspection, and ends with dynamic balancing, dimensional verification, and a 24-month written warranty. We work on equipment from every major manufacturer including Goulds, Sulzer, Flowserve, ITT, KSB, and dozens of others. If your pump uses standard ANSI or API construction, our shop can repair it.
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: C.textDark, lineHeight: 1.75, marginBottom: "1.25rem" }}>
                What sets Kelsey Machine apart is the same thing that's set us apart for four decades: we don't just rebuild what's in front of us, we figure out why it failed and address the root cause. Cavitation damage is often a system problem, not a pump problem. Bearing failures are usually about lubrication or alignment, not the bearing itself. We tell you what we find — and we put it in writing.
              </p>

              <QuickAnswerBox text="Kelsey Machine Services provides full-service industrial pump repair and rebuild for centrifugal, vertical turbine, split-case, and positive-displacement pumps. We service all major manufacturers including Goulds, Sulzer, Flowserve, ITT, KSB, and others. Standard turnaround is 2-3 weeks; emergency service available for production-critical units. Every rebuild is backed by a 24-month written warranty and dynamically balanced to ISO 1940 G2.5." />

              <h2 className="kms-headline" style={{ fontSize: "1.75rem", color: C.blueDark, marginTop: "3rem", marginBottom: "1.25rem" }}>
                Industrial Pump Types We Repair
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {PUMP_TYPES.map(p => (
                  <div key={p.name} style={{ background: "white", border: "2px solid #dde3ec", borderLeft: `4px solid ${C.green}`, borderRadius: 4, padding: "1.25rem 1.5rem" }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>{p.name}</h3>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textMid, lineHeight: 1.65 }}>{p.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="kms-headline" style={{ fontSize: "1.75rem", color: C.blueDark, marginTop: "3rem", marginBottom: "1.25rem" }}>
                Common Pump Failure Modes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {FAILURE_MODES.map(f => (
                  <div key={f.title} style={{ background: C.lightBg, borderRadius: 4, padding: "1.25rem 1.5rem", display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: "#e67e22", flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                    <div>
                      <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.blueDark, textTransform: "uppercase", marginBottom: "0.4rem" }}>{f.title}</h3>
                      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textMid, lineHeight: 1.65 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: C.blueDark, borderRadius: 4, padding: "2rem", margin: "3rem 0", textAlign: "center" }}>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.8rem", color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                  Pump Down? We Move Fast.
                </h2>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: 580, margin: "0 auto 1.5rem" }}>
                  Production-critical pump down? Call us right now. 24/7 emergency response, free nationwide pickup, and a turnaround time that keeps your facility running.
                </p>
                <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 2rem", borderRadius: 2, textDecoration: "none" }}>
                  Call {KMS_PHONE} <ArrowRight size={18} />
                </a>
              </div>

              <h2 className="kms-headline" style={{ fontSize: "1.75rem", color: C.blueDark, marginBottom: "1.25rem" }}>
                Our 7-Step Pump Repair Process
              </h2>
              <ol style={{ counterReset: "step", padding: 0, listStyle: "none", marginBottom: "2rem" }}>
                {PROCESS_STEPS.map((step, i) => (
                  <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "0.85rem" }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.4rem", color: C.green, minWidth: 32, lineHeight: 1 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textDark, lineHeight: 1.65 }}>{step}</span>
                  </li>
                ))}
              </ol>

              <h2 className="kms-headline" style={{ fontSize: "1.75rem", color: C.blueDark, marginTop: "2.5rem", marginBottom: "1rem" }}>
                Industrial Pump Brands We Service
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                We service pumps from every major industrial manufacturer. If your brand isn't listed, call us — we probably still work on it.
              </p>
              <div className="flex flex-wrap gap-2" style={{ marginBottom: "1rem" }}>
                {BRANDS.map(b => (
                  <span key={b} style={{ display: "inline-block", padding: "0.4rem 0.85rem", background: C.lightBg, border: `1px solid #dde3ec`, borderRadius: 2, fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: C.textDark }}>{b}</span>
                ))}
              </div>
            </article>

            {/* sidebar will render via FaqSection below */}
            <div className="hidden lg:block" />
          </div>
        </div>

        <FaqSection faqs={FAQS} pageName="Pump Repair" showForm service="other" />
      </main>

      <NewsletterBar />
      <Footer />
    </>
  );
}
