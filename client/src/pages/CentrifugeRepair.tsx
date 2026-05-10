/**
 * Centrifuge Repair Service Page
 * Primary KW: industrial centrifuge repair
 * Voice: Full Texas — bold, direct, witty, technically correct
 * Target: 2,200-2,800 words, FAQPage schema, internal links throughout
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, QuickAnswerBox, InlineQuoteForm, FaqSection, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { CheckCircle, AlertTriangle, Wrench, Shield, Clock, ArrowRight } from "lucide-react";

const HERO_BG = "/images/centrifuge-repair.webp";

const CENTRIFUGE_TYPES = [
  {
    name: "Decanter Centrifuges",
    desc: "The workhorse of wastewater treatment, oilfield drilling, and food processing. We rebuild scroll conveyors, bowl assemblies, bearings, differential gearboxes, and rotating seals. Scroll wear and bowl damage are the most common failures we see — and our precision machining capability restores both to OEM tolerances. Brands: Alfa Laval, Andritz, Flottweg, Hiller, Pieralisi, Bird, Sharples, and more.",
  },
  {
    name: "Disc Stack Centrifuges",
    desc: "Used in pharmaceutical, food and beverage, and biotech applications where tight tolerances and clean-room awareness are non-negotiable. KMS disassembles, cleans, inspects, and rebuilds disc stack units with the precision these machines demand. One wrong clearance and your separation efficiency tanks — we don't guess on disc stack work.",
  },
  {
    name: "Basket Centrifuges",
    desc: "Common in chemical processing and pharmaceutical batch operations. Basket centrifuges need careful inspection for cracking, corrosion, and fatigue — failures that can turn catastrophic fast. We inspect, repair, and balance basket assemblies to restore safe, efficient operation. If the basket is compromised, we'll tell you straight.",
  },
  {
    name: "Scroll Centrifuges",
    desc: "Scroll-type centrifuges run in continuous-feed environments and take serious abrasive wear along the scroll flight and bowl face. KMS rebuilds scroll flights, applies wear-resistant coatings where applicable, and restores the scroll-bowl clearance that drives your separation efficiency. If it's worn down to where it's costing you throughput, we fix that.",
  },
  {
    name: "Solid-Bowl Centrifuges",
    desc: "Used in dewatering and solids recovery in mining, aggregate, and municipal operations. Solid-bowl units carry high loads and significant abrasive wear. We rebuild the bowl, replace bearings and seals, and restore balance to minimize vibration in operation. These machines take a beating — and we know how to bring them back.",
  },
];

const FAILURE_MODES = [
  { icon: <AlertTriangle size={18} />, title: "Scroll Wear & Erosion", desc: "When scroll-to-bowl clearance opens up, separation efficiency drops and throughput falls. Left unchecked, the scroll eventually contacts the bowl wall — a very costly failure that we see more often than we should." },
  { icon: <AlertTriangle size={18} />, title: "Bowl Damage", desc: "Corrosion, erosion, cracking, and out-of-round conditions all affect bowl performance and safety. Often the result of running abrasive slurries without adequate wear protection or operating above design spec." },
  { icon: <AlertTriangle size={18} />, title: "Bearing Failure", desc: "Centrifuge bearings carry high radial and axial loads at significant speeds. Contamination, overloading, improper lubrication, and misalignment are the leading causes. Vibration and noise are usually the first signs." },
  { icon: <AlertTriangle size={18} />, title: "Internal Gearbox Problems", desc: "Decanter centrifuges use a differential gearbox to maintain scroll-to-bowl speed. Gearbox wear, oil contamination, and seal failure are common — and require complete gearbox rebuild capability. We have that in-house. See our Gearbox Repair page for more." },
  { icon: <AlertTriangle size={18} />, title: "Vibration & Imbalance", desc: "Excessive vibration is a symptom, not a root cause. Worn bearings, damaged scroll flights, bowl damage, or process material buildup on rotating components — we diagnose the root cause rather than just chase the symptom." },
  { icon: <AlertTriangle size={18} />, title: "Seal & Gasket Failure", desc: "Leaking process fluid, contaminated oil, or loss of internal pressure are all signs of seal failure. We replace all seals and gaskets as part of a standard rebuild — not as an add-on." },
];

const REPAIR_PROCESS = [
  { step: "01", title: "Intake & Inspection", desc: "Every centrifuge that comes through our doors gets a complete disassembly and written failure analysis before a single repair is authorized. You'll know exactly what failed, why it failed, and what it will cost to fix it — before we touch a wrench." },
  { step: "02", title: "Component Assessment", desc: "We measure, test, and evaluate every component against OEM specifications. Scroll flights, bowl dimensions, bearing fits, gearbox condition, seal surfaces — all documented. No guessing, no assuming." },
  { step: "03", title: "Precision Machining & Repair", desc: "Our in-house machine shop handles bowl restoration, scroll flight rebuilding, shaft repair, and bearing housing reconditioning. We don't farm out the critical work — it stays in our shop under our supervision." },
  { step: "04", title: "Dynamic Balancing", desc: "Every rotating assembly is dynamically balanced before reassembly. This isn't optional — it's standard. An unbalanced centrifuge will destroy its own bearings and vibrate itself apart. We balance it right the first time." },
  { step: "05", title: "Reassembly & Testing", desc: "Rebuilt to OEM specifications, tested under load, and documented. You receive a complete repair report with before/after measurements, component replacement records, and test results." },
  { step: "06", title: "Warranty & Return", desc: "Every centrifuge repair is backed by our industry-leading 24-month rebuilt warranty. We coordinate return freight and get your equipment back to you fast — because downtime costs real money." },
];

const BRANDS = [
  "Alfa Laval", "Andritz", "Flottweg", "Bird Machine", "Sharples", "Hiller",
  "Pieralisi", "Westfalia", "GEA", "Pennwalt", "Siebtechnik", "TEMA",
  "US Filter", "Elgin National", "Broadbent", "Hutchison-Hayes", "Derrick",
  "NOV Brandt", "MI Swaco", "Sweco", "Tolhurst", "Western States Machine",
];

const FAQS = [
  {
    q: "What types of industrial centrifuges does KMS repair?",
    a: "KMS repairs all major centrifuge configurations: decanter (horizontal scroll), disc stack, basket, scroll, and solid-bowl centrifuges. We work on all sizes and all manufacturers — if it's a centrifuge, we can fix it. Our technicians have hands-on experience across every major centrifuge type used in oilfield, wastewater, food processing, pharmaceutical, and mining applications.",
  },
  {
    q: "How long does centrifuge repair typically take?",
    a: "Standard turnaround for a centrifuge rebuild is typically 2–4 weeks depending on the extent of damage, parts availability, and machining requirements. For critical operations, we offer rush and emergency service with significantly faster turnaround — call our 24/7 emergency line to discuss your timeline. We've completed emergency centrifuge repairs in as little as 10 days when the situation demanded it.",
  },
  {
    q: "Do you provide a warranty on centrifuge repairs?",
    a: "Yes — every centrifuge repair performed by KMS is backed by our industry-leading 24-month rebuilt warranty. This is a written warranty, not a verbal promise. Warranty terms are provided with your repair quote and included in the final documentation package. See our Warranty page for full details.",
  },
  {
    q: "Can you repair centrifuges from any manufacturer?",
    a: "Absolutely. We are not limited to OEM service relationships. KMS repairs centrifuges from all major manufacturers including Alfa Laval, Andritz, Flottweg, Bird Machine, Sharples, Hiller, Pieralisi, Westfalia, GEA, Pennwalt, and many others. If you don't see your brand listed, call us — we've likely worked on it.",
  },
  {
    q: "What does a centrifuge failure analysis include?",
    a: "Our failure analysis is a written document that identifies the root cause of failure, documents the condition of all major components with measurements, and provides a complete itemized repair estimate. This is included with every repair — it's not an add-on. You'll know exactly what failed, why it failed, and what it costs to fix before any work is authorized.",
  },
  {
    q: "Do you offer emergency centrifuge repair service?",
    a: "Yes. Our 24/7 emergency line is answered every day of the year. We offer emergency intake, rush processing, and expedited return shipping for critical operations. When your centrifuge goes down and every hour costs you money, call us at 346-350-1464. We respond immediately.",
  },
  {
    q: "How do I ship my centrifuge to KMS?",
    a: "Contact us before shipping and we'll walk you through the process. We coordinate inbound freight as part of our service — you don't have to figure out how to move a 2,000-pound centrifuge on your own. For emergency situations, we can arrange free pickup from your facility. See our Emergency Service page for details.",
  },
  {
    q: "What is the cost of centrifuge repair?",
    a: "Cost depends on centrifuge type, size, extent of damage, and parts required. A bearing replacement and seal kit on a smaller decanter might run a few thousand dollars. A complete rebuild of a large industrial decanter with scroll restoration and bowl machining can run significantly more. KMS provides a detailed, itemized quote after inspection — before any work is authorized. No surprises at invoice.",
  },
];

export default function CentrifugeRepair() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Centrifuge Repair & Rebuild",
    "serviceType": "Centrifuge Repair and Rebuild",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Kelsey Machine Services",
      "url": "https://kmstx.com",
      "telephone": "+13463501464",
      "address": { "@type": "PostalAddress", "addressLocality": "Stafford", "addressRegion": "TX", "postalCode": "77477", "addressCountry": "US" }
    },
    "areaServed": { "@type": "Country", "name": "United States" },
    "description": "KMS repairs all centrifuge types and brands — decanter, disc stack, basket, scroll & solid-bowl. OEM-level rebuilds, emergency service, nationwide. Free quote.",
    "offers": { "@type": "Offer", "description": "Free inspection and itemized quote before any work is authorized." }
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kmstx.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://kmstx.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Centrifuge Repair", "item": "https://kmstx.com/services/centrifuge-repair" },
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <NavBar />

      <PageHero
        h1="Industrial Centrifuge Repair & Rebuild — All Brands, Nationwide"
        subheading="When your centrifuge quits, your whole operation stops — and every hour costs real money. KMS has been putting centrifuges back to work for over 40 years. Call us before you call the OEM."
        bgImage={HERO_BG}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Centrifuge Repair" },
        ]}
      />

      {/* Main Content */}
      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main column */}
            <div className="lg:col-span-2">

              {/* Opening */}
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                If your centrifuge just quit on you, you've got two options: call the OEM and wait six weeks, or call Kelsey Machine and get it done right. We've been the go-to centrifuge repair shop in Texas — and across all 50 states — for over 40 years. We repair every centrifuge type, every brand, and we back every rebuild with a written <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link> that the OEM won't match.
              </p>

              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Kelsey Machine Services provides expert industrial centrifuge repair and rebuild services for oilfield operations, wastewater treatment plants, food and beverage processors, pharmaceutical facilities, and mining operations. We work on all centrifuge types and all manufacturers, with a structured repair process that gives you full transparency from intake to delivery. No surprises, no shortcuts, and no guessing on root cause — every unit gets a written failure analysis before we touch a wrench.
              </p>

              {/* Quick Answer Box */}
              <QuickAnswerBox text="Kelsey Machine Services repairs and rebuilds all types of industrial centrifuges — decanter, disc stack, basket, scroll, and solid-bowl — for facilities across the U.S., Canada, and Mexico. We accept all brands, perform full failure analysis on every unit, and offer emergency turnaround for critical operations. Our technicians restore centrifuges to OEM performance specifications with complete documentation and a 24-month written warranty on every repair." />

              {/* Centrifuge Types */}
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginTop: "2.5rem", marginBottom: "1rem" }}>
                Types of Industrial Centrifuges We Repair
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.5rem" }}>
                KMS has hands-on experience across every major centrifuge configuration in industrial use. Whether you're running a decanter in a wastewater plant or a disc stack in a pharmaceutical clean room, we've seen it, fixed it, and sent it back running better than before.
              </p>

              <div className="flex flex-col gap-5 mb-8">
                {CENTRIFUGE_TYPES.map(({ name, desc }) => (
                  <div key={name} style={{ borderLeft: `4px solid ${C.green}`, paddingLeft: "1.25rem" }}>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: C.blueDark, marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>{name}</h3>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: C.textMid, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>

              {/* Failure Modes */}
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
                Common Centrifuge Failures & Warning Signs
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Understanding failure modes helps you catch problems before they become catastrophic — and before a $5,000 repair turns into a $50,000 replacement. Here's what we see most often:
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

              {/* Mid-page CTA */}
              <div style={{ background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.darkBg} 100%)`, borderRadius: 4, padding: "2rem", marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "white", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                  Centrifuge Down? Don't Wait.
                </div>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0 }}>
                  Every hour your centrifuge sits idle costs you money. Our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> means we pick up the phone at 2 AM on a Sunday — and we can have your unit in our shop faster than you think.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, textDecoration: "none" }}>
                    Call {KMS_PHONE} Now
                  </a>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.75rem 1.75rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>
                    Request Free Quote
                  </Link>
                </div>
              </div>

              {/* Repair Process */}
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Our Centrifuge Repair Process — No Shortcuts, No Surprises
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.5rem" }}>
                We've been doing this long enough to know that the shops that cut corners on process are the ones you call us to fix after the fact. Here's exactly what happens when your centrifuge arrives at KMS:
              </p>

              <div className="flex flex-col gap-4 mb-8">
                {REPAIR_PROCESS.map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4" style={{ alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: 48, height: 48, background: C.blueDark, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", color: C.green, letterSpacing: "0.04em" }}>
                      {step}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.textDark, marginBottom: "0.3rem" }}>{title}</h3>
                      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textMid, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Industries */}
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Industries We Serve
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Centrifuges are everywhere in industrial processing — and so are we. KMS serves facilities and contractors across every major industrial sector:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  { sector: "Petrochemical & Oil and Gas", detail: "Refineries, pipelines, upstream/downstream processing, drilling contractors" },
                  { sector: "Wastewater Treatment", detail: "Municipal and industrial water/wastewater treatment plants, biosolids dewatering" },
                  { sector: "Food & Beverage", detail: "Processing equipment, sanitary environments, dairy, edible oils, beverages" },
                  { sector: "Pharmaceutical & Biotech", detail: "Clean-room aware repair, disc stack and basket centrifuges, tight tolerances" },
                  { sector: "Mining & Aggregate", detail: "Solids recovery, dewatering, mill operations, heavy slurry applications" },
                  { sector: "Manufacturing & MRO", detail: "Industrial contractors managing repairs on behalf of facilities nationwide" },
                ].map(({ sector, detail }) => (
                  <div key={sector} className="flex gap-3" style={{ alignItems: "flex-start" }}>
                    <CheckCircle size={18} style={{ color: C.green, flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: C.textDark }}>{sector}</div>
                      <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: C.textMid }}>{detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Brands */}
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Centrifuge Brands We Service
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                We're not limited to OEM service relationships. If it's a centrifuge, we can fix it — regardless of who made it. Here are some of the brands we work on regularly:
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {BRANDS.map(brand => (
                  <span key={brand} style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: C.blueDark, background: `${C.blueDark}12`, border: `1px solid ${C.blueDark}22`, padding: "0.3rem 0.75rem", borderRadius: 2, letterSpacing: "0.04em" }}>
                    {brand}
                  </span>
                ))}
              </div>

              {/* Why KMS */}
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Why Facilities Across All 50 States Choose KMS
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                There are a lot of shops that say they repair centrifuges. Here's what makes KMS different — and why our customers keep coming back:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Wrench size={18} />, title: "In-House Machining", desc: "We don't farm out the critical work. Our machine shop handles bowl restoration, scroll flight rebuilding, and shaft repair under our roof, under our supervision." },
                  { icon: <Shield size={18} />, title: "24-Month Written Warranty", desc: "The strongest warranty in the business. Every centrifuge repair is backed in writing — not just a verbal promise. See our Warranty page for full terms." },
                  { icon: <Clock size={18} />, title: "24/7 Emergency Response", desc: "Equipment doesn't break on a schedule. Our emergency line is answered every day of the year. We respond immediately and can arrange free pickup for critical situations." },
                  { icon: <CheckCircle size={18} />, title: "All Brands, No Exceptions", desc: "We repair any manufacturer's equipment — not just OEMs we're contracted with. If it's in your facility, we can fix it." },
                  { icon: <ArrowRight size={18} />, title: "Transparent Quoting", desc: "You receive a detailed, itemized quote after inspection — before any work is authorized. No surprises at invoice. No hidden fees." },
                  { icon: <ArrowRight size={18} />, title: "Nationwide Reach", desc: "We receive equipment from all 50 states, Canada, and Mexico and coordinate inbound freight as part of our service. Geography is never the reason you can't get your centrifuge repaired right." },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex gap-3" style={{ alignItems: "flex-start" }}>
                    <span style={{ color: C.green, flexShrink: 0, marginTop: 2 }}>{icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.97rem", color: C.textDark, marginBottom: "0.25rem" }}>{title}</div>
                      <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: C.textMid, lineHeight: 1.6, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Related Services */}
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                Related Services
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Centrifuge repair often goes hand-in-hand with other rotating equipment work. KMS handles all of it under one roof:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { title: "Gearbox Repair", desc: "Decanter centrifuges use internal differential gearboxes. We rebuild those in-house.", href: "/services/gearbox-repair" },
                  { title: "Industrial Blower Repair", desc: "Many centrifuge operations run blowers for aeration and conveying. We repair those too.", href: "/services/industrial-blower-repair" },
                  { title: "Fluid & Power End Repair", desc: "For oilfield operations running centrifuges alongside mud pumps.", href: "/services/fluid-power-end-repair" },
                ].map(({ title, desc, href }) => (
                  <Link key={title} href={href} style={{ display: "block", background: C.lightBg, border: `1px solid #dde3ec`, borderRadius: 4, padding: "1.25rem", textDecoration: "none", transition: "border-color 0.2s" }}
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

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div style={{ position: "sticky", top: 100 }}>
                <InlineQuoteForm service="centrifuge" />
                <div style={{ marginTop: "1.5rem", background: C.darkBg, borderRadius: 4, padding: "1.5rem" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.green, marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Emergency Service
                  </div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                    Centrifuge down right now? Our <Link href="/emergency-service" style={{ color: C.green, textDecoration: "none" }}>24/7 emergency line</Link> is answered every day of the year. We respond immediately.
                  </p>
                  <a href={KMS_PHONE_HREF} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", padding: "0.75rem", borderRadius: 2, textDecoration: "none" }}>
                    Call {KMS_PHONE}
                  </a>
                  <div style={{ marginTop: "1rem", padding: "0.75rem", background: "rgba(120,165,70,0.1)", borderRadius: 2, border: `1px solid ${C.green}33` }}>
                    <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: C.green, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                      Our Warranty
                    </div>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>
                      Every repair backed by a <Link href="/warranty" style={{ color: C.green, textDecoration: "none" }}>written 24-month warranty</Link> — the best in the business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FaqSection faqs={FAQS} pageName="Industrial Centrifuge Repair" showForm service="centrifuge" />
      <NewsletterBar />
      <Footer />
    </>
  );
}
