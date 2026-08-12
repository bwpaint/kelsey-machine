/**
 * PPC landing page content — one block per /lp/* route.
 * Each block fed verbatim to LpPage.astro.
 *
 * IMPORTANT: every /lp/* route must be noindex,nofollow so it doesn't
 * compete with the canonical /services/* page for organic traffic.
 */

export const LP_DATA = {
  "centrifuge-repair": {
    url:      "/lp/centrifuge-repair",
    title:    "Centrifuge Repair · Fast Turnaround · 24-Month Warranty",
    desc:     "Industrial centrifuge repair — decanter, disc-stack, basket. 24-mo warranty, free nationwide pickup, 24/7 emergency. All brands.",
    ogImage:  "/images/centrifuge-repair.webp",
    service:  "Centrifuge Repair",
    h1:       "Centrifuge Down? We're Ready Right Now.",
    subheading: "Your centrifuge just went down. Every hour it sits idle costs real money. KMS has been getting decanter, disc-stack, and basket centrifuges back online for over 40 years — faster than the OEM, with a better warranty.",
    bullets: [
      "All centrifuge types: decanter, disc-stack, basket, tubular",
      "All major brands: Alfa Laval, Andritz, GEA, Flottweg, Sharples",
    ],
    row2: {
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
    },
    row3: {
      headline: "Ready to Get Your Centrifuge Back Online?",
      body: "Don't wait on the OEM. KMS has the experience, the tooling, and the emergency service to get your centrifuge repaired and back in service — fast. Call us now or request a free quote and we'll call you back within 30 minutes.",
    },
  },

  "gearbox-repair": {
    url:      "/lp/gearbox-repair",
    title:    "Industrial Gearbox Repair · 24-Mo Warranty · Free Pickup",
    desc:     "All gearbox types repaired in-house — parallel shaft, planetary, bevel, worm, helical. All brands. 24-mo warranty.",
    ogImage:  "/images/kms-gearbox.webp",
    service:  "Gearbox Repair",
    h1:       "Gearbox Down? We're Ready Right Now.",
    subheading: "A gearbox failure can shut down a conveyor, a mixer, a centrifuge drive, or an entire production line. KMS rebuilds all gearbox types — parallel shaft, planetary, bevel, worm, helical — with in-house machining and a 24-month warranty.",
    bullets: [
      "All gearbox types: parallel shaft, planetary, bevel, worm, helical",
      "All major brands: Dodge, Rexnord, Falk, SEW-Eurodrive, Sumitomo",
      "In-house machining — precision restoration to OEM tolerances",
    ],
    row2: {
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
    },
    row3: {
      headline: "Gearbox Down? Don't Wait on the OEM.",
      body: "The OEM's 8-week lead time doesn't care about your downtime costs. KMS does. Call us now or request a free quote — we call you back within 30 minutes and can have your gearbox in our shop within 24 hours.",
    },
  },

  "industrial-blower-repair": {
    url:      "/lp/industrial-blower-repair",
    title:    "Industrial Blower Repair · Emergency Service · 24-Mo Warranty",
    desc:     "Roots-type, centrifugal, regenerative & screw blower repair. 24-mo warranty, free nationwide pickup, 24/7 emergency.",
    ogImage:  "/images/blower-roots.webp",
    service:  "Industrial Blower Repair",
    h1:       "Blower Down? We're Ready Right Now.",
    subheading: "When your blower goes down, your aeration system, conveying line, or process air supply goes with it. KMS has been rebuilding industrial blowers for over 40 years — faster than the OEM, with a 24-month warranty.",
    bullets: [
      "All blower types: rotary lobe, centrifugal, radial, axial, screw",
      "All major brands: Roots/Dresser, Tuthill, Gardner Denver, Kaeser, Aerzen",
    ],
    row2: {
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
    },
    row3: {
      headline: "Still Down? We Won't Keep You Waiting.",
      body: "Our 24/7 emergency line is answered every day of the year. When your blower failure is shutting down your operation, call KMS — we respond fast and we back every repair with a 24-month warranty.",
    },
  },

  "industrial-compressors": {
    url:      "/lp/industrial-compressors",
    title:    "Industrial Compressor Repair · 24/7 Emergency · 24-Mo Warranty",
    desc:     "Centrifugal, reciprocating, screw & vane compressor repair. 24-mo warranty, free nationwide pickup. Ingersoll Rand, Atlas Copco.",
    ogImage:  "/images/blower-roots.webp",
    service:  "Industrial Compressor Repair",
    h1:       "Compressor Down? We're Ready Right Now.",
    subheading: "A compressor failure in a petrochemical plant, gas gathering operation, or industrial facility isn't just an inconvenience — it's a production stoppage. KMS has been rebuilding industrial compressors for over 40 years.",
    bullets: [
      "All compressor types: centrifugal, reciprocating, rotary screw, vane, scroll",
      "All major brands: Ingersoll Rand, Atlas Copco, Gardner Denver, Dresser-Rand",
    ],
    row2: {
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
    },
    row3: {
      headline: "Compressor Down? Don't Let Downtime Stack Up.",
      body: "Every hour your compressor sits down is money out the door. KMS responds fast, works fast, and backs every repair with a 24-month warranty. Call us now or request a free quote.",
    },
  },

  "fluid-power-end-repair": {
    url:      "/lp/fluid-power-end-repair",
    title:    "Fluid End & Power End Repair · Mud Pump Specialists",
    desc:     "Fluid end, power end & oilfield tool repair for NOV, Gardner Denver, Weatherford, Emsco. 24-mo warranty, 24/7 emergency.",
    ogImage:  "/images/fluid-end-module_97356062.jpg",
    service:  "Fluid & Power End Repair",
    h1:       "Rig Down? We're Ready Right Now.",
    subheading: "In the oilfield, a mud pump failure doesn't just slow you down — it stops the drill. KMS has been rebuilding fluid ends, power ends, and oilfield tools for over 40 years. We understand rig downtime — and we move fast.",
    bullets: [
      "Fluid end and power end rebuild for all major mud pump brands",
      "Oil-filled tool repair and recertification",
    ],
    row2: {
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
    },
    row3: {
      headline: "Every Hour On The Rig Costs You — Call KMS.",
      body: "Our 24/7 emergency line is answered every day of the year. We serve all 50 states, Canada, and Mexico. When your mud pump failure is costing you rig time, call KMS — we respond within 30 minutes.",
    },
  },

  "vacuum-pump-repair": {
    url:      "/lp/vacuum-pump-repair",
    title:    "Vacuum Pump Repair · Busch, Leybold, Edwards · 24-Mo Warranty",
    desc:     "Liquid ring, rotary vane & dry vacuum pump repair. Busch, Leybold, Edwards, Nash, Welch, Becker. 24-mo warranty, free nationwide pickup.",
    ogImage:  "/images/blower-roots.webp",
    service:  "Vacuum Pump Repair",
    h1:       "Vacuum Pump Down? We're Ready Right Now.",
    subheading: "A failed vacuum pump doesn't just idle one machine — it stalls whatever process depends on that vacuum: degassing, filtration, drying, packaging, distillation. KMS has been rebuilding industrial vacuum pumps for over 40 years — faster than the OEM, with a 24-month warranty.",
    bullets: [
      "All vacuum pump types: liquid ring, rotary vane, rotary screw, dry, oil-sealed",
      "All major brands: Busch, Leybold, Edwards, Nash, Welch, Becker, Elmo Rietschle",
    ],
    row2: {
      headline: "What's Included in Every Vacuum Pump Repair",
      body: "Every vacuum pump repair at KMS includes a complete disassembly, written failure analysis, precision machining where needed, and full documentation on delivery. We restore ring and vane clearances, seal surfaces, and rotor fits to OEM specifications — then verify it under actual vacuum before it ships.",
      items: [
        "Complete disassembly and inspection",
        "Written failure analysis with root cause identification",
        "Ring, vane, and rotor clearance restoration",
        "Replacement of all bearings, seals, and gaskets",
        "Vacuum performance testing before shipment",
        "Complete repair documentation package",
      ],
    },
    row3: {
      headline: "Vacuum Pump Down? Don't Let The Line Sit Idle.",
      body: "Every hour without vacuum is a process stopped. KMS responds fast, works fast, and backs every repair with a 24-month warranty. Call us now or request a free quote.",
    },
  },

  "emergency-repair": {
    url:      "/lp/emergency-repair",
    title:    "24/7 Emergency Industrial Repair · KMS · 24-Mo Warranty",
    desc:     "Emergency repair for centrifuges, gearboxes, blowers, compressors, vacuum pumps & fluid ends. Answered 24/7, every day of the year. All brands.",
    ogImage:  "/images/kms-hero-bg.webp",
    service:  "Emergency Industrial Repair",
    h1:       "Equipment Down? We're Ready Right Now.",
    subheading: "It doesn't matter what broke — a centrifuge, a gearbox, a blower, a compressor, a vacuum pump, a mud pump. What matters is getting it back online. KMS answers the emergency line 24 hours a day, every day of the year, and we've been doing it for over 40 years.",
    bullets: [
      "One call covers all of it: centrifuges, gearboxes, blowers, compressors, vacuum pumps, fluid/power ends",
      "Answered live, 24/7/365 — never a machine, never voicemail during business hours",
    ],
    row2: {
      headline: "What Happens When You Call The Emergency Line",
      body: "No queue, no ticket number, no waiting for a callback window. You get a repair specialist on the phone who's rebuilt this exact type of equipment before, who can tell you what to check right now, and who starts the pickup and repair process the same call if the unit needs to come to our shop.",
      items: [
        "Live answer, day or night, every day of the year",
        "Immediate triage — repair, rebuild, or replace, with a straight answer",
        "Same-call pickup coordination, all 50 states, Canada, and Mexico",
        "Direct line to the specialist who works on your equipment type",
        "Written failure analysis with every repair, not just a parts swap",
        "24-month warranty on the finished repair — same as any other job",
      ],
    },
    row3: {
      headline: "Down Right Now? Don't Wait For Morning.",
      body: "Every hour of downtime is a real cost, and it doesn't stop at 5pm. Call KMS — the same team, the same warranty, any hour you call.",
    },
  },
} as const;

/**
 * Testimonial strip shown under the trust-badge grid on every /lp/* page.
 *
 * Real quotes, sourced from KMS's Google Business Profile reviews (pulled
 * 2026-08-11, all 5-star). Lightly trimmed for length/readability where
 * noted — never altered in substance or meaning. If these ever need
 * updating, pull fresh ones from the GBP listing the same way rather than
 * paraphrasing from memory.
 */
export const LP_TESTIMONIALS = [
  {
    theme: "Gearbox — obsolete part solved",
    quote: "Had a machine down and unable to replace a gearbox due to it being obsolete. Kelsey took care of us in great time at what I'd consider a solid price. I have not had any issues with the gearbox since and we run it every day.",
    name: "Jeffrey Lenhart",
    company: "Google Review · 5★",
  },
  {
    theme: "Gearbox — quality & turnaround",
    quote: "Sent in a Falk gearbox for repair, I was very pleased with the quality of work and the very quick turnaround time.",
    name: "Paul Mitchell",
    company: "Google Review · 5★",
  },
  {
    theme: "Centrifuge — spindle rebuild",
    quote: "I sent my spindle assembly for our commercial centrifuge to KMS and I could not be happier with the result. We've used them several times now with no stops in production. Speedy turnaround with like-new results.",
    name: "Colin Smith",
    company: "Google Review · 5★",
  },
  {
    theme: "Gearbox — cost savings & communication",
    quote: "Kelsey provided excellent service on our equipment. They repaired and rebuilt a gearbox for us quickly and at a fraction of the replacement cost. Communication was clear, and the turnaround time was impressive.",
    name: "Travis",
    company: "Google Review · 5★",
  },
  {
    theme: "General trust / relationship",
    quote: "Kelsey does a fantastic job whenever it comes to machinery. He knows the business, the people, and the equipment.",
    name: "Rohman L. Perez",
    company: "Odessa Pumps · Google Review · 5★",
  },
] as const;
