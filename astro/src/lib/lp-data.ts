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
    h1:       "Centrifuge Repair — Fast Turnaround, 24-Month Warranty",
    subheading: "Your centrifuge just went down. Every hour it sits idle costs real money. KMS has been getting decanter, disc-stack, and basket centrifuges back online for over 40 years — faster than the OEM, with a better warranty.",
    bullets: [
      "All centrifuge types: decanter, disc-stack, basket, tubular",
      "All major brands: Alfa Laval, Andritz, GEA, Flottweg, Sharples",
      "Free national pickup — we come to you",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
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
      body: "Don't wait on the OEM. KMS has the experience, the tooling, and the emergency service to get your centrifuge repaired and back in service — fast. Call us now or request a free quote and we'll respond within the hour.",
    },
  },

  "gearbox-repair": {
    url:      "/lp/gearbox-repair",
    title:    "Industrial Gearbox Repair · 24-Mo Warranty · Free Pickup",
    desc:     "All gearbox types repaired in-house — parallel shaft, planetary, bevel, worm, helical. All brands. 24-mo warranty.",
    ogImage:  "/images/kms-gearbox.webp",
    service:  "Gearbox Repair",
    h1:       "Industrial Gearbox Repair — All Types, All Brands, Fast",
    subheading: "A gearbox failure can shut down a conveyor, a mixer, a centrifuge drive, or an entire production line. KMS rebuilds all gearbox types — parallel shaft, planetary, bevel, worm, helical — with in-house machining and a 24-month warranty.",
    bullets: [
      "All gearbox types: parallel shaft, planetary, bevel, worm, helical",
      "All major brands: Dodge, Rexnord, Falk, SEW-Eurodrive, Sumitomo",
      "In-house machining — precision restoration to OEM tolerances",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
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
      body: "The OEM's 8-week lead time doesn't care about your downtime costs. KMS does. Call us now or request a free quote — we respond within the hour and can have your gearbox in our shop within 24 hours.",
    },
  },

  "industrial-blower-repair": {
    url:      "/lp/industrial-blower-repair",
    title:    "Industrial Blower Repair · Emergency Service · 24-Mo Warranty",
    desc:     "Roots-type, centrifugal, regenerative & screw blower repair. 24-mo warranty, free nationwide pickup, 24/7 emergency.",
    ogImage:  "/images/blower-roots.webp",
    service:  "Industrial Blower Repair",
    h1:       "Industrial Blower Repair — All Types, Emergency Service Available",
    subheading: "When your blower goes down, your aeration system, conveying line, or process air supply goes with it. KMS has been rebuilding industrial blowers for over 40 years — faster than the OEM, with a 24-month warranty.",
    bullets: [
      "All blower types: rotary lobe, centrifugal, radial, axial, screw",
      "All major brands: Roots/Dresser, Tuthill, Gardner Denver, Kaeser, Aerzen",
      "Free national pickup — we come to you",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
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
      headline: "Blower Down? We're Ready Right Now.",
      body: "Our 24/7 emergency line is answered every day of the year. When your blower failure is shutting down your operation, call KMS — we respond fast and we back every repair with a 24-month warranty.",
    },
  },

  "industrial-compressors": {
    url:      "/lp/industrial-compressors",
    title:    "Industrial Compressor Repair · 24/7 Emergency · 24-Mo Warranty",
    desc:     "Centrifugal, reciprocating, screw & vane compressor repair. 24-mo warranty, free nationwide pickup. Ingersoll Rand, Atlas Copco.",
    ogImage:  "/images/blower-roots.webp",
    service:  "Industrial Compressor Repair",
    h1:       "Industrial Compressor Repair — All Types, 24/7 Emergency Service",
    subheading: "A compressor failure in a petrochemical plant, gas gathering operation, or industrial facility isn't just an inconvenience — it's a production stoppage. KMS has been rebuilding industrial compressors for over 40 years.",
    bullets: [
      "All compressor types: centrifugal, reciprocating, rotary screw, vane, scroll",
      "All major brands: Ingersoll Rand, Atlas Copco, Gardner Denver, Dresser-Rand",
      "Free national pickup — we come to you",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
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
    h1:       "Fluid End & Power End Repair — Rig Downtime Costs Real Money",
    subheading: "In the oilfield, a mud pump failure doesn't just slow you down — it stops the drill. KMS has been rebuilding fluid ends, power ends, and oilfield tools for over 40 years. We understand rig downtime — and we move fast.",
    bullets: [
      "Fluid end and power end rebuild for all major mud pump brands",
      "Oil-filled tool repair and recertification",
      "Free national pickup — we come to you",
      "24-month written warranty on every repair",
      "24/7 emergency service — answered every day of the year",
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
      headline: "Rig Down? Call KMS Right Now.",
      body: "Our 24/7 emergency line is answered every day of the year. We serve all 50 states, Canada, and Mexico. When your mud pump failure is costing you rig time, call KMS — we respond within the hour.",
    },
  },
} as const;
