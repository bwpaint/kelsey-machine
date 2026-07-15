export const data = {
  slug: "industrial-compressors",
  url:  "/services/industrial-compressors",
  // Pilot: Groas dynamic landing-page personalization (swaps hero headline/
  // subheading based on which ad/keyword the visitor clicked). Set false to
  // disable without touching markup. See ServicePage.astro for the hooks.
  dynamicPersonalization: true,
  fallback: {
    title:       "Industrial Compressor Repair · 40+ Yrs · Free Pickup",
    description: "Centrifugal, reciprocating, rotary screw, vane & scroll compressor repair. 24-mo warranty, free nationwide pickup, 24/7 emergency.",
    ogImage:     "/images/blower-roots.webp",
  },
  hero: {
    h1:         "Industrial Compressor Repair & Rebuild — All Types, All Brands",
    subheading: "Compressor down? Whether it's a centrifugal, reciprocating, or screw unit, KMS has been getting industrial compressors back online for over 40 years — with a 24-month warranty and emergency service that actually shows up.",
    bgImage:    "/images/blower-roots.webp",
  },
  intro: [
    "A compressor failure in a petrochemical plant, gas gathering operation, or industrial facility isn't just an inconvenience — it's a production stoppage with a clock running. Kelsey Machine Services has been rebuilding industrial compressors of all types for over 40 years, with the in-house machining capability and experienced technicians to restore your unit to OEM performance. Every rebuild is backed by a written 24-month warranty, and our 24/7 emergency service is answered every day of the year.",
    "We serve industrial facilities, oil & gas operations, petrochemical plants, and manufacturing facilities across all 50 states, Canada, and Mexico. Our structured repair process gives you full transparency: written failure analysis, itemized quote before work begins, and complete documentation on delivery.",
  ],
  quickAnswer: "Kelsey Machine Services repairs and rebuilds all types of industrial compressors — centrifugal, reciprocating, rotary screw, rotary vane, scroll, and diaphragm — for facilities across the U.S., Canada, and Mexico. We accept all brands, perform complete failure analysis on every unit, and offer emergency turnaround for critical operations. Every repair is backed by a written 24-month warranty.",
  equipmentTypes: [
    { name: "Centrifugal Compressors",   desc: "High-flow, continuous-duty compressors used in petrochemical, refining, and large industrial processes. KMS rebuilds impellers, diffusers, bearings, seals, and casings." },
    { name: "Reciprocating Compressors", desc: "The workhorses of the oil & gas and industrial world. KMS repairs cylinders, pistons, rods, valves, crossheads, and crankshafts." },
    { name: "Rotary Screw Compressors",  desc: "Oil-flooded and oil-free screw compressors common in plant air and process gas applications. KMS repairs rotor profiles, timing gears, bearings, seals, and housings." },
    { name: "Rotary Vane Compressors",   desc: "Used in vacuum and low-pressure applications. Vane wear is the primary failure mode — we replace vanes, restore housing bores, and rebuild bearing assemblies." },
    { name: "Scroll Compressors",        desc: "Used in HVAC, refrigeration, and low-pressure process applications. Scroll set wear and contamination are the primary issues." },
    { name: "Diaphragm Compressors",     desc: "Used in high-purity, high-pressure applications where gas contamination is not acceptable. KMS repairs diaphragm compressors for chemical and pharmaceutical applications." },
  ],
  failureModes: [
    { title: "Bearing Failure",                 desc: "The most common compressor failure mode across all types. Contamination, overloading, and improper lubrication are the leading causes." },
    { title: "Seal & Packing Failure",          desc: "Gas leakage from worn seals and packing is both a safety issue and an efficiency killer. We replace all seal types." },
    { title: "Valve Failure (Reciprocating)",   desc: "Compressor valves are high-cycle components that wear and fail. Broken valve plates, worn seats, and spring failure are common." },
    { title: "Rotor Damage & Imbalance",        desc: "Centrifugal and screw compressor rotors are subject to erosion, corrosion, and fouling. Imbalance destroys bearings." },
    { title: "Oil Contamination",               desc: "Oil carryover into the process stream indicates seal failure and requires immediate attention. We identify the source and repair it." },
    { title: "Cylinder & Rod Wear",             desc: "Reciprocating compressor cylinders and piston rods wear over time. We measure, assess, and restore or replace as needed." },
  ],
  process: [
    { step: "01", title: "Disassembly & Inspection",  desc: "Complete teardown with documented as-found dimensions and condition." },
    { step: "02", title: "Failure Analysis",          desc: "Written root cause analysis — every repair includes this." },
    { step: "03", title: "Precision Machining",       desc: "Cylinder honing, shaft repair, and housing restoration in-house." },
    { step: "04", title: "Component Replacement",     desc: "Bearings, seals, valves, packing replaced with quality components." },
    { step: "05", title: "Reassembly & Test",         desc: "Reassembled to OEM specifications. Pressure-tested and documented." },
    { step: "06", title: "Warranty & Delivery",       desc: "24-month written warranty. Coordinated return shipping." },
  ],
  brands: [
    "Ingersoll Rand", "Atlas Copco", "Gardner Denver", "Sullair", "Kaeser",
    "Quincy", "CompAir", "Dresser-Rand", "Elliott", "Siemens Energy",
    "Ariel", "Cooper-Bessemer", "Ajax", "Worthington", "Blackmer",
    "Howden", "GHH-RAND", "Aerzen", "Tuthill", "Elmo Rietschle",
  ],
  faqs: [
    { q: "What types of industrial compressors does KMS repair?",         a: "KMS repairs centrifugal, reciprocating, rotary screw, rotary vane, scroll, and diaphragm compressors for industrial and oil & gas applications." },
    { q: "Do you repair compressors from all manufacturers?",             a: "Yes. We repair compressors from Ingersoll Rand, Atlas Copco, Gardner Denver, Dresser-Rand, Elliott, Ariel, Cooper-Bessemer, and many others." },
    { q: "What is the warranty on compressor repairs?",                   a: "Every compressor repair is backed by our 24-month rebuilt warranty — in writing." },
    { q: "How long does compressor repair take?",                          a: "Most repairs are completed in 1–3 weeks. For critical operations, we offer emergency service." },
    { q: "Do you offer emergency compressor repair service?",             a: "Yes. Our 24/7 emergency line is answered every day. Call 346-350-1464." },
    { q: "Can you repair a compressor that has ingested liquid?",         a: "Liquid ingestion (liquid slugging) is one of the most destructive compressor failures. We fully disassemble, assess all damage, and rebuild to OEM specifications." },
    { q: "Do you provide failure analysis with compressor repairs?",      a: "Yes — every repair includes a written failure analysis identifying the root cause." },
    { q: "Can you repair compressors for oil and gas applications?",      a: "Yes. We have extensive experience with reciprocating and centrifugal compressors used in gas gathering, pipeline, and processing applications." },
  ],
  schema: {
    "@context": "https://schema.org", "@type": "Service",
    "name": "Industrial Compressor Repair & Rebuild",
    "serviceType": "Industrial Compressor Repair",
    "provider": { "@type": "LocalBusiness", "name": "Kelsey Machine Services", "url": "https://www.kmstx.com", "telephone": "+13463501464", "address": { "@type": "PostalAddress", "addressLocality": "Stafford", "addressRegion": "TX", "postalCode": "77477", "addressCountry": "US" } },
    "areaServed": { "@type": "Country", "name": "United States" },
    "description": "KMS repairs all industrial compressor types — centrifugal, reciprocating, rotary screw, vane, scroll. Emergency service, nationwide. Free quote.",
  },
} as const;
