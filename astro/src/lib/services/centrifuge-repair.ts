/**
 * Per-service content for /services/centrifuge-repair.
 * Same shape used by every service page so the template can render any
 * service from a single data file. Other 5 services copy this pattern.
 */
export const data = {
  slug: "centrifuge-repair",
  url:  "/services/centrifuge-repair",

  fallback: {
    title:       "Industrial Centrifuge Repair · 40+ Yrs · Free Pickup",
    description: "Decanter, disc stack, basket, scroll & solid-bowl centrifuge repair. 24-mo warranty, free nationwide pickup, 24/7 emergency. All brands.",
    ogImage:     "/images/centrifuge-repair.webp",
  },

  hero: {
    h1:         "Industrial Centrifuge Repair & Rebuild — All Brands, Nationwide",
    subheading: "When your centrifuge quits, your whole operation stops — and every hour costs real money. KMS has been putting centrifuges back to work for over 40 years. Call us before you call the OEM.",
    bgImage:    "/images/centrifuge-repair.webp",
    slider: [
      { src: "/images/work/centrifuge-work-3.webp", alt: "KMS technician welding a centrifuge component during repair" },
      { src: "/images/work/centrifuge-work-1.webp", alt: "Decanter centrifuge rotor assembly rebuilt at the KMS shop" },
      { src: "/images/work/centrifuge-work-2.webp", alt: "Repaired industrial centrifuge loaded for delivery from KMS" },
      { src: "/images/work/centrifuge-work-4.webp", alt: "Opened centrifuge bowl during inspection and rebuild at KMS" },
      { src: "/images/work/centrifuge-work-5.webp", alt: "Fully assembled decanter centrifuge after rebuild at KMS" },
      { src: "/images/work/centrifuge-work-6.webp", alt: "Precision-machined centrifuge bowl component crated at KMS" },
      { src: "/images/work/centrifuge-work-7.webp", alt: "Stainless centrifuge rotor in the KMS shop during repair" },
      { src: "/images/work/centrifuge-work-8.webp", alt: "Polished centrifuge bowl head restored by KMS" },
    ],
  },

  intro: [
    "If your centrifuge just quit on you, you've got two options: call the OEM and wait six weeks, or call Kelsey Machine and get it done right. We've been the go-to centrifuge repair shop in Texas — and across all 50 states — for over 40 years. We repair every centrifuge type, every brand, and we back every rebuild with a written 24-month warranty that the OEM won't match.",
    "Kelsey Machine Services provides expert industrial centrifuge repair and rebuild services for oilfield operations, wastewater treatment plants, food and beverage processors, pharmaceutical facilities, and mining operations. We work on all centrifuge types and all manufacturers, with a structured repair process that gives you full transparency from intake to delivery. No surprises, no shortcuts, and no guessing on root cause — every unit gets a written failure analysis before we touch a wrench.",
  ],

  quickAnswer: "Kelsey Machine Services repairs and rebuilds all types of industrial centrifuges — decanter, disc stack, basket, scroll, and solid-bowl — for facilities across the U.S., Canada, and Mexico. We accept all brands, perform full failure analysis on every unit, and offer emergency turnaround for critical operations. Our technicians restore centrifuges to OEM performance specifications with complete documentation and a 24-month written warranty on every repair.",

  equipmentTypes: [
    { name: "Decanter Centrifuges",     desc: "The workhorse of wastewater treatment, oilfield drilling, and food processing. We rebuild scroll conveyors, bowl assemblies, bearings, differential gearboxes, and rotating seals. Scroll wear and bowl damage are the most common failures we see — and our precision machining capability restores both to OEM tolerances. Brands: Alfa Laval, Andritz, Flottweg, Hiller, Pieralisi, Bird, Sharples, and more." },
    { name: "Disc Stack Centrifuges",   desc: "Used in pharmaceutical, food and beverage, and biotech applications where tight tolerances and clean-room awareness are non-negotiable. KMS disassembles, cleans, inspects, and rebuilds disc stack units with the precision these machines demand. One wrong clearance and your separation efficiency tanks — we don't guess on disc stack work." },
    { name: "Basket Centrifuges",       desc: "Common in chemical processing and pharmaceutical batch operations. Basket centrifuges need careful inspection for cracking, corrosion, and fatigue — failures that can turn catastrophic fast. We inspect, repair, and balance basket assemblies to restore safe, efficient operation. If the basket is compromised, we'll tell you straight." },
    { name: "Scroll Centrifuges",       desc: "Scroll-type centrifuges run in continuous-feed environments and take serious abrasive wear along the scroll flight and bowl face. KMS rebuilds scroll flights, applies wear-resistant coatings where applicable, and restores the scroll-bowl clearance that drives your separation efficiency." },
    { name: "Solid-Bowl Centrifuges",   desc: "Used in dewatering and solids recovery in mining, aggregate, and municipal operations. Solid-bowl units carry high loads and significant abrasive wear. We rebuild the bowl, replace bearings and seals, and restore balance to minimize vibration in operation." },
  ],

  failureModes: [
    { title: "Scroll Wear & Erosion",     desc: "When scroll-to-bowl clearance opens up, separation efficiency drops and throughput falls. Left unchecked, the scroll eventually contacts the bowl wall — a very costly failure that we see more often than we should." },
    { title: "Bowl Damage",               desc: "Corrosion, erosion, cracking, and out-of-round conditions all affect bowl performance and safety. Often the result of running abrasive slurries without adequate wear protection or operating above design spec." },
    { title: "Bearing Failure",           desc: "Centrifuge bearings carry high radial and axial loads at significant speeds. Contamination, overloading, improper lubrication, and misalignment are the leading causes. Vibration and noise are usually the first signs." },
    { title: "Internal Gearbox Problems", desc: "Decanter centrifuges use a differential gearbox to maintain scroll-to-bowl speed. Gearbox wear, oil contamination, and seal failure are common — and require complete gearbox rebuild capability. We have that in-house." },
    { title: "Vibration & Imbalance",     desc: "Excessive vibration is a symptom, not a root cause. Worn bearings, damaged scroll flights, bowl damage, or process material buildup on rotating components — we diagnose the root cause rather than just chase the symptom." },
    { title: "Seal & Gasket Failure",     desc: "Leaking process fluid, contaminated oil, or loss of internal pressure are all signs of seal failure. We replace all seals and gaskets as part of a standard rebuild — not as an add-on." },
  ],

  process: [
    { step: "01", title: "Intake & Inspection",          desc: "Every centrifuge that comes through our doors gets a complete disassembly and written failure analysis before a single repair is authorized. You'll know exactly what failed, why it failed, and what it will cost to fix it — before we touch a wrench." },
    { step: "02", title: "Component Assessment",         desc: "We measure, test, and evaluate every component against OEM specifications. Scroll flights, bowl dimensions, bearing fits, gearbox condition, seal surfaces — all documented." },
    { step: "03", title: "Precision Machining & Repair", desc: "Our in-house machine shop handles bowl restoration, scroll flight rebuilding, shaft repair, and bearing housing reconditioning. We don't farm out the critical work." },
    { step: "04", title: "Dynamic Balancing",            desc: "Every rotating assembly is dynamically balanced before reassembly. This isn't optional — it's standard. An unbalanced centrifuge will destroy its own bearings." },
    { step: "05", title: "Reassembly & Testing",         desc: "Rebuilt to OEM specifications, tested under load, and documented. You receive a complete repair report with before/after measurements." },
    { step: "06", title: "Warranty & Return",            desc: "Every centrifuge repair is backed by our industry-leading 24-month rebuilt warranty. We coordinate return freight and get your equipment back to you fast." },
  ],

  brands: [
    "Alfa Laval", "Andritz", "Flottweg", "Bird Machine", "Sharples", "Hiller",
    "Pieralisi", "Westfalia", "GEA", "Pennwalt", "Siebtechnik", "TEMA",
    "US Filter", "Elgin National", "Broadbent", "Hutchison-Hayes", "Derrick",
    "NOV Brandt", "MI Swaco", "Sweco", "Tolhurst", "Western States Machine",
  ],

  faqs: [
    { q: "What types of industrial centrifuges does KMS repair?",  a: "KMS repairs all major centrifuge configurations: decanter (horizontal scroll), disc stack, basket, scroll, and solid-bowl centrifuges. We work on all sizes and all manufacturers — if it's a centrifuge, we can fix it." },
    { q: "How long does centrifuge repair typically take?",        a: "Standard turnaround for a centrifuge rebuild is typically 2–4 weeks depending on the extent of damage, parts availability, and machining requirements. For critical operations, we offer rush and emergency service." },
    { q: "Do you provide a warranty on centrifuge repairs?",       a: "Yes — every centrifuge repair performed by KMS is backed by our industry-leading 24-month rebuilt warranty. Warranty terms are provided with your repair quote and included in the final documentation package." },
    { q: "Can you repair centrifuges from any manufacturer?",      a: "Absolutely. KMS repairs centrifuges from all major manufacturers including Alfa Laval, Andritz, Flottweg, Bird Machine, Sharples, Hiller, Pieralisi, Westfalia, GEA, Pennwalt, and many others." },
    { q: "What does a centrifuge failure analysis include?",       a: "A written document that identifies the root cause of failure, documents the condition of all major components with measurements, and provides a complete itemized repair estimate. Included with every repair." },
    { q: "Do you offer emergency centrifuge repair service?",      a: "Yes. Our 24/7 emergency line is answered every day of the year. We offer emergency intake, rush processing, and expedited return shipping. Call 346-350-1464." },
    { q: "How do I ship my centrifuge to KMS?",                    a: "Contact us before shipping and we'll coordinate inbound freight as part of our service. For emergency situations, we can arrange free pickup from your facility." },
    { q: "What is the cost of centrifuge repair?",                 a: "Cost depends on type, size, extent of damage, and parts required. KMS provides a detailed, itemized quote after inspection — before any work is authorized. No surprises at invoice." },
  ],

  schema: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Centrifuge Repair & Rebuild",
    "serviceType": "Centrifuge Repair and Rebuild",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Kelsey Machine Services",
      "url": "https://www.kmstx.com",
      "telephone": "+13463501464",
      "address": { "@type": "PostalAddress", "addressLocality": "Stafford", "addressRegion": "TX", "postalCode": "77477", "addressCountry": "US" },
    },
    "areaServed": { "@type": "Country", "name": "United States" },
    "description": "KMS repairs all centrifuge types and brands — decanter, disc stack, basket, scroll & solid-bowl. OEM-level rebuilds, emergency service, nationwide. Free quote.",
    "offers": { "@type": "Offer", "description": "Free inspection and itemized quote before any work is authorized." },
  },
} as const;

export type ServiceData = typeof data;
