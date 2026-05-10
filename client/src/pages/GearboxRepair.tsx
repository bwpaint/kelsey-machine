/**
 * Gearbox Repair Service Page
 * Primary KW: industrial gearbox repair
 * Voice: Full Texas — bold, direct, witty, technically correct
 * Target: 2,200-2,800 words, FAQPage schema, internal links throughout
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, QuickAnswerBox, InlineQuoteForm, FaqSection, CtaBanner, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { CheckCircle, AlertTriangle, Wrench, Shield, Clock, ArrowRight } from "lucide-react";

const GEARBOX_TYPES = [
  { name: "Parallel Shaft Gearboxes", desc: "The most common industrial gearbox configuration — used in conveyors, mixers, pumps, and general industrial drives. KMS rebuilds parallel shaft units from fractional horsepower to multi-thousand horsepower, restoring gear mesh, bearing fits, shaft seals, and housing integrity." },
  { name: "Right-Angle & Bevel Gearboxes", desc: "Used wherever a 90-degree power transmission is needed — mixers, agitators, cooling towers, and conveyor drives. Bevel gear sets are precision-cut and must be replaced in matched sets. We stock common configurations and can source specialty sets quickly." },
  { name: "Planetary Gearboxes", desc: "High-torque, compact design used in centrifuge drives, conveyors, and heavy industrial applications. Planetary units require precise carrier alignment and gear mesh setup — work that demands experience and proper tooling. We have both." },
  { name: "Worm Gearboxes", desc: "Used in lower-speed, high-torque applications including conveyors, packaging equipment, and valve actuators. Worm gear sets wear in a specific pattern and require careful inspection of the worm wheel bronze for pitting and wear. We rebuild or replace as needed." },
  { name: "Helical & Spiral Bevel Gearboxes", desc: "Smooth, quiet, and efficient — helical and spiral bevel units are common in fans, blowers, and precision drives. Tooth geometry must be maintained precisely for proper load sharing and noise performance. Our machining capability handles the precision work these units demand." },
  { name: "Centrifuge Differential Gearboxes", desc: "The internal gearbox in a decanter centrifuge is a specialized planetary unit that controls scroll-to-bowl differential speed. Failure of this gearbox is one of the most common and most costly centrifuge failures. We rebuild these in-house — see our Centrifuge Repair page for more." },
];

const FAILURE_MODES = [
  { icon: <AlertTriangle size={18} />, title: "Gear Tooth Wear & Pitting", desc: "Progressive surface fatigue from inadequate lubrication, overloading, or contamination. Pitting starts small and accelerates — by the time you hear it, significant damage has already occurred." },
  { icon: <AlertTriangle size={18} />, title: "Bearing Failure", desc: "The most common gearbox failure mode. Contamination, overloading, misalignment, and improper lubrication all lead to bearing failure. Vibration, noise, and heat are the early warning signs." },
  { icon: <AlertTriangle size={18} />, title: "Seal Failure & Oil Contamination", desc: "Worn shaft seals allow oil to leak out and water or process contamination to get in. Contaminated oil destroys bearings and gear surfaces faster than almost anything else." },
  { icon: <AlertTriangle size={18} />, title: "Shaft Damage", desc: "Bent, worn, or cracked shafts from overloading, misalignment, or impact. Shaft damage is often secondary to a bearing or coupling failure — we identify the root cause, not just the symptom." },
  { icon: <AlertTriangle size={18} />, title: "Housing Cracks & Damage", desc: "Cast iron and aluminum housings can crack from impact, thermal cycling, or improper mounting. A cracked housing is a leaking housing — and a leaking gearbox is a failing gearbox." },
  { icon: <AlertTriangle size={18} />, title: "Gear Mesh Misalignment", desc: "Improper gear mesh contact from worn bearings, shaft deflection, or housing distortion leads to edge loading, noise, and accelerated wear. Correcting mesh geometry requires precision measurement and adjustment." },
];

const REPAIR_PROCESS = [
  { step: "01", title: "Complete Disassembly & Inspection", desc: "Every gearbox is fully disassembled, cleaned, and inspected. We measure gear tooth condition, bearing fits, shaft dimensions, seal surfaces, and housing integrity — all documented in a written report." },
  { step: "02", title: "Failure Analysis", desc: "We identify the root cause — not just the damaged parts. A bearing failure caused by contamination requires a different repair strategy than one caused by misalignment. You get a written failure analysis with every repair." },
  { step: "03", title: "Precision Machining", desc: "Our in-house machine shop handles shaft repair, bearing housing restoration, and housing repair. We restore worn surfaces to OEM tolerances — we don't just replace parts and hope for the best." },
  { step: "04", title: "Component Replacement", desc: "Bearings, seals, gaskets, and worn gear sets are replaced with new components. We use quality replacement parts and document every component replaced in the repair record." },
  { step: "05", title: "Assembly & Alignment", desc: "Reassembly to OEM specifications with proper gear mesh setup, bearing preload, and seal installation. Alignment is verified before the unit is closed up." },
  { step: "06", title: "Testing & Documentation", desc: "Final inspection, operational test, and complete documentation package. Your gearbox ships with a repair report, component replacement record, and our written 24-month warranty." },
];

const BRANDS = [
  "Dodge", "Rexnord", "Falk", "Sumitomo", "SEW-Eurodrive", "Flender",
  "Brevini", "Bonfiglioli", "Nord", "Lufkin", "Philadelphia Gear",
  "David Brown", "Horsburgh & Scott", "Foote-Jones", "Hansen",
  "Renold", "Stober", "Winsmith", "Hub City", "Cone Drive",
  "Boston Gear", "Browning", "TB Wood's", "Eurodrive",
];

const FAQS = [
  {
    q: "What types of industrial gearboxes does KMS repair?",
    a: "KMS repairs all major gearbox types: parallel shaft, right-angle/bevel, planetary, worm, helical, spiral bevel, and centrifuge differential gearboxes. We work on all sizes and all manufacturers — from small fractional horsepower units to large multi-thousand horsepower industrial drives. If it's a gearbox, we can fix it.",
  },
  {
    q: "How do I know if my gearbox needs repair or replacement?",
    a: "Common signs include unusual noise (grinding, whining, or knocking), excessive vibration, oil leaks, overheating, and loss of output speed or torque. If you're experiencing any of these symptoms, call us before the failure becomes catastrophic. We provide a written inspection report and honest assessment — if repair isn't the right answer, we'll tell you.",
  },
  {
    q: "Do you repair gearboxes from all manufacturers?",
    a: "Yes. We repair gearboxes from all major manufacturers including Dodge, Rexnord, Falk, Sumitomo, SEW-Eurodrive, Flender, Philadelphia Gear, Lufkin, Horsburgh & Scott, and many others. We are not limited to OEM service relationships — we repair any manufacturer's equipment.",
  },
  {
    q: "What is the typical turnaround time for gearbox repair?",
    a: "Standard turnaround for most gearbox repairs is 1–3 weeks depending on the extent of damage and parts availability. For critical operations, we offer rush and emergency service. Call our 24/7 emergency line to discuss your specific timeline. We've completed emergency gearbox repairs in as little as 5 business days when the situation demanded it.",
  },
  {
    q: "Do you provide a warranty on gearbox repairs?",
    a: "Yes — every gearbox repair is backed by our industry-leading 24-month rebuilt warranty. This is a written warranty included in your documentation package. See our Warranty page for full details on what's covered and how to make a claim.",
  },
  {
    q: "Can you repair a gearbox that has been flooded or contaminated?",
    a: "Yes. Water and process contamination are among the most common causes of gearbox failure we see. We fully disassemble, clean, and inspect every contaminated unit, assess the damage to bearings and gear surfaces, and rebuild to OEM specifications. Contamination damage caught early is almost always repairable — don't wait.",
  },
  {
    q: "Do you offer emergency gearbox repair service?",
    a: "Absolutely. Our 24/7 emergency line is answered every day of the year. We offer emergency intake, rush processing, and expedited return shipping. When your gearbox failure is shutting down production, call 346-350-1464 immediately. We respond fast.",
  },
  {
    q: "What information should I have ready when I call about a gearbox repair?",
    a: "If you have it, the gearbox model number and nameplate data is helpful — but not required. Tell us the application, approximate size/horsepower, what symptoms you're seeing, and how urgently you need it back. We'll take it from there. If you don't know what you have, we'll figure it out when it arrives.",
  },
];

export default function GearboxRepair() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Gearbox Repair & Rebuild",
    "serviceType": "Gearbox Repair and Rebuild",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Kelsey Machine Services",
      "url": "https://kmstx.com",
      "telephone": "+13463501464",
      "address": { "@type": "PostalAddress", "addressLocality": "Stafford", "addressRegion": "TX", "postalCode": "77477", "addressCountry": "US" }
    },
    "areaServed": { "@type": "Country", "name": "United States" },
    "description": "KMS repairs all gearbox types and brands — parallel shaft, planetary, bevel, worm, helical. OEM-level rebuilds, emergency service, nationwide. Free quote.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <NavBar />

      <PageHero
        bgImage="/images/kms_gearbox_v2_1ed0ac8d.jpg"
        h1="Industrial Gearbox Repair & Rebuild — All Types, All Brands"
        subheading="A gearbox failure doesn't have to mean a new gearbox — or a six-week OEM wait. KMS rebuilds industrial gearboxes of all types and sizes, with in-house machining, a 24-month warranty, and emergency service that actually means something."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Gearbox Repair" },
        ]}
      />

      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Down here in Texas, we don't wait around when equipment breaks. A gearbox failure can shut down a conveyor, a mixer, a centrifuge drive, or an entire production line — and the OEM's 8-week lead time doesn't care about your downtime costs. Kelsey Machine Services has been rebuilding industrial gearboxes for over 40 years, with the in-house machining capability and experienced technicians to restore your gearbox to OEM performance — fast. Every repair is backed by a written <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link>.
              </p>

              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                We repair all gearbox types — parallel shaft, planetary, bevel, worm, helical, and centrifuge differential — for facilities across all 50 states, Canada, and Mexico. Our structured repair process gives you full transparency from intake to delivery: written failure analysis, itemized quote before work begins, and complete documentation on delivery. No surprises, no shortcuts.
              </p>

              <QuickAnswerBox text="Kelsey Machine Services repairs and rebuilds all types of industrial gearboxes — parallel shaft, planetary, right-angle/bevel, worm, helical, and centrifuge differential gearboxes — for facilities across the U.S., Canada, and Mexico. We accept all brands, perform complete failure analysis on every unit, and offer emergency turnaround for critical operations. Every repair is backed by a written 24-month warranty." />

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginTop: "2.5rem", marginBottom: "1rem" }}>
                Types of Industrial Gearboxes We Repair
              </h2>
              <div className="flex flex-col gap-5 mb-8">
                {GEARBOX_TYPES.map(({ name, desc }) => (
                  <div key={name} style={{ borderLeft: `4px solid ${C.green}`, paddingLeft: "1.25rem" }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: C.blueDark, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>{name}</h3>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: C.textMid, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Common Gearbox Failure Modes
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Gearbox failures rarely happen without warning — the warning signs are just easy to ignore until it's too late. Here's what we see most often, and what to watch for:
              </p>
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

              {/* Mid CTA */}
              <div style={{ background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.darkBg} 100%)`, borderRadius: 4, padding: "2rem", marginBottom: "2.5rem" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "white", textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: "0.75rem" }}>
                  Gearbox Grinding? Don't Ignore It.
                </div>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  That noise isn't going to fix itself. Our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> means you can call us right now — and our <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link> means you won't be calling us again for the same problem.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, textDecoration: "none" }}>
                    Call {KMS_PHONE}
                  </a>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
                    Request Free Quote
                  </Link>
                </div>
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Our Gearbox Repair Process
              </h2>
              <div className="flex flex-col gap-4 mb-8">
                {REPAIR_PROCESS.map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4" style={{ alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: 48, height: 48, background: C.blueDark, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", color: C.green }}>
                      {step}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.textDark, marginBottom: "0.3rem" }}>{title}</h3>
                      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textMid, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Gearbox Brands We Service
              </h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {BRANDS.map(brand => (
                  <span key={brand} style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: C.blueDark, background: `${C.blueDark}12`, border: `1px solid ${C.blueDark}22`, padding: "0.3rem 0.75rem", borderRadius: 2, letterSpacing: "0.04em" }}>
                    {brand}
                  </span>
                ))}
              </div>

              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Related Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { title: "Centrifuge Repair", desc: "Decanter centrifuges use internal differential gearboxes — we repair both.", href: "/services/centrifuge-repair" },
                  { title: "Industrial Blower Repair", desc: "Blower drives often include integral gearboxes. We handle the full assembly.", href: "/services/industrial-blower-repair" },
                  { title: "Industrial Compressors", desc: "Compressor drives and integral gearboxes are part of our scope.", href: "/services/industrial-compressors" },
                ].map(({ title, desc, href }) => (
                  <Link key={title} href={href} style={{ display: "block", background: C.lightBg, border: `1px solid #dde3ec`, borderRadius: 4, padding: "1.25rem", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = C.green)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "#dde3ec")}
                  >
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: C.blueDark, marginBottom: "0.4rem", display: "flex", alignItems: "center", gap: 6 }}>
                      {title} <ArrowRight size={14} style={{ color: C.green }} />
                    </div>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: C.textMid, lineHeight: 1.5, margin: 0 }}>{desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div style={{ position: "sticky", top: 100 }}>
                <InlineQuoteForm service="gearbox" />
                <div style={{ marginTop: "1.5rem", background: C.darkBg, borderRadius: 4, padding: "1.5rem" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.green, marginBottom: "0.75rem", textTransform: "uppercase" }}>Emergency Service</div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Gearbox down right now? Our <Link href="/emergency-service" style={{ color: C.green, textDecoration: "none" }}>24/7 emergency line</Link> is answered every day of the year.
                  </p>
                  <a href={KMS_PHONE_HREF} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", padding: "0.75rem", borderRadius: 2, textDecoration: "none" }}>
                    Call {KMS_PHONE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FaqSection faqs={FAQS} pageName="Industrial Gearbox Repair" showForm service="gearbox" />
      <CtaBanner headline="Ready to Get Your Gearbox Back Online?" subtext="Request a free quote or call our emergency line — we respond within the hour, 24/7." />
      <NewsletterBar />
      <Footer />
    </>
  );
}
