/**
 * KMS homepage data — extracted from client/src/pages/Home.tsx so .astro
 * components can render statically. Single source of truth for the data
 * shown on the homepage; service pages will share SERVICES via import.
 */

export const SERVICES = [
  {
    id: "centrifuge",
    title: "Centrifuge Repair",
    description: "Comprehensive repair, rebuild, and reconditioning for all types of industrial centrifuges — decanter, basket, disc stack, and more. We service all major brands including Alfa Laval, Andritz, Bird, Sharples, and Flottweg.",
    image: "/images/centrifuge-welding.webp",
    href: "/services/centrifuge-repair",
  },
  {
    id: "gearbox",
    title: "Gearbox Repair",
    description: "Full-service gearbox repair and overhaul for speed reducers, speed increasers, planetary gearboxes, and cooling tower drives. We handle all phases from inspection to final balancing. Brands: Falk, Lufkin, Amarillo, Rexnord, Sumitomo, Flender, SEW, David Brown, Voith, and more.",
    image: "/images/kms-gearbox.webp",
    href: "/services/gearbox-repair",
  },
  {
    id: "pump",
    title: "Pump Repair & Rebuild",
    description: "Expert repair for all pump types — centrifugal, vertical turbine, horizontal split case, and positive displacement. Impeller rebuilds, hard-facing, and seal replacement included. All major brands serviced.",
    image: "/images/oilfield-pumps.webp",
    href: "/services/pump-service",
  },
  {
    id: "blower",
    title: "Blower Repair",
    description: "Industrial blower repair, rebuild, and reconditioning — including Roots-style PD blowers, multi-stage centrifugals, and regenerative blowers. We service Roots, Tuthill, Aerzen, Hoffman, Spencer, and every other major manufacturer in the field.",
    image: "/images/kms-blower-repair.webp",
    href: "/services/industrial-blower-repair",
  },
  {
    id: "compressor",
    title: "Compressor Repair",
    description: "Full-service industrial compressor repair and overhaul — centrifugal, reciprocating, rotary screw, and oil-flooded designs. Bearing replacement, impeller rebuild, dynamic balancing, and complete teardown-and-rebuild to OEM spec. Kaeser, Atlas Copco, Ingersoll Rand, Sullair, and more.",
    image: "/images/blower-roots.webp",
    href: "/services/industrial-compressors",
  },
  {
    id: "fluid-power-end",
    title: "Fluid End & Power End Repair",
    description: "Specialized repair and refurbishment for oilfield mud pump fluid ends and power ends. We restore fluid end modules — one-piece, two-piece, L-shaped, and valve-over-valve — using proprietary welding and machining. Brands: Lewco, Kerr, NOV, Gardner Denver, Weatherford, Emsco, and more.",
    image: "/images/fluid-end-module_97356062.jpg",
    href: "/services/fluid-power-end-repair",
  },
] as const;

export const STATS = [
  { value: "40+",   label: "Years of Proven Expertise" },
  { value: "24-Mo", label: "Rebuilt Warranty" },
  { value: "50",    label: "States Served Nationwide" },
  { value: "72hr",  label: "Emergency Turnaround" },
] as const;

export const TESTIMONIALS = [
  { quote: "Our extruder gearbox crashed. We replaced it with a 'so called' rebuilt spare. We shipped the crashed gearbox to Kelsey Machine. They repaired it and charged us much less than the last company we sent our gearbox to, and their workmanship was great.", name: "Michael Cieszinski",  title: "Plant Manager",          service: "Gearbox Repair" },
  { quote: "We had our Decanter Centrifuge down and out of service. Our regular centrifuge repair company said it would be at least 8 weeks before they could get to it. KMS was able to rebuild our Centrifuge within 10 days and do it for less than their competition.", name: "James Basset", title: "Plant Manager", service: "Centrifuge Repair" },
  { quote: "Since 2011 Kelsey Machine Services has been repairing our Rotary Airlocks and Amarillo Gearboxes. Before that time, we would only go back to the OEM for service. But Kelsey has been beating the OEM's price and offering great service.", name: "Jon Sottile", title: "Engineering Manager", service: "Gearbox Repair" },
  { quote: "Kelsey Machine Services is a reputable company. I've had some terrible experiences in the past with shady repair companies. But Kelsey Machine has always been honest and stands behind their warranty. They always do what they say.", name: "Oscar Garcia", title: "Buyer", service: "General Repair" },
  { quote: "We sent our Centrifuge to the OEM for service. After evaluating, they indicated the unit was beyond repair and recommended we replace it. Before purchasing a new one, we contacted Kelsey Machine. They were confident they could save the unit. After 20 months the machine is still running without any issues.", name: "Marilyn Offerman", title: "Purchasing Manager", service: "Centrifuge Repair" },
  { quote: "We had a Bosch Rexroth Hydraulic pump go down and we did not have a backup. We needed it back running ASAP. We contacted Kelsey Machine in Tomball TX who were able to pick up our pump and repair it within 72 hours. Kelsey Machine is the only company we will send our Hydraulic pumps to for service.", name: "Byron Gilbert", title: "Reliability Engineer", service: "Hydraulic Repair" },
] as const;

export const FAQS = [
  { q: "What types of rotating equipment does Kelsey Machine repair?", a: "Kelsey Machine Services repairs a comprehensive range of rotating equipment, including industrial centrifuges (decanter, basket, disc stack), gearboxes (speed reducers, speed increasers, planetary), pumps (centrifugal, vertical turbine, horizontal split case), blowers and compressors (positive displacement, screw, regenerative), and hydraulic drives and pumps. We service all major brands." },
  { q: "What warranty does Kelsey Machine offer on repairs?", a: "We offer an industry-leading 24-month rebuilt warranty on all repaired and rebuilt equipment. This is the best guarantee in the rotating equipment repair industry and reflects our confidence in the quality of our workmanship." },
  { q: "Does Kelsey Machine offer 24/7 emergency repair service?", a: "Yes. We provide 24/7 emergency repair services, including free pickup and delivery nationwide. When your equipment goes down, call us at 346-350-1464 and we will respond immediately to minimize your downtime." },
  { q: "How quickly can Kelsey Machine repair my equipment?", a: "Our large inventory of parts and experienced team allow us to offer rapid turnaround times — often significantly faster than the OEM. We have completed centrifuge rebuilds in as little as 10 days and hydraulic pump repairs within 72 hours." },
  { q: "Does Kelsey Machine offer free pickup and delivery?", a: "Yes. We offer free pickup and delivery for all repair jobs, nationwide across all 50 states, plus Canada and Mexico. Simply call us and we will arrange pickup at your facility." },
  { q: "What brands of rotating equipment does Kelsey Machine service?", a: "We service all major brands, including Alfa Laval, Andritz, Bird, Sharples, Flottweg, Sulzer, Dodge, Sumitomo, Falk, Brevini, Chemineer, Davis-Standard, Rossi, Bosch Rexroth, and many more. If you don't see your brand listed, call us — we likely service it." },
  { q: "Can Kelsey Machine repair equipment the OEM says is beyond repair?", a: "In many cases, yes. We have successfully rebuilt centrifuges and other equipment that OEMs declared beyond repair, saving our customers the cost of purchasing new equipment. Our engineers will provide an honest assessment before recommending a course of action." },
  { q: "What industries does Kelsey Machine serve?", a: "We serve a wide range of industries, including oil and gas, petrochemical, refining, food and beverage, wastewater treatment, power generation, pulp and paper, pharmaceutical, and general manufacturing." },
] as const;

export const INDUSTRIES = [
  { name: "Oil & Gas",         icon: "🛢️", href: "/industries#oil-gas" },
  { name: "Petrochemical",     icon: "🏭", href: "/industries#petrochemical" },
  { name: "Food & Beverage",   icon: "🌾", href: "/industries#food-beverage" },
  { name: "Wastewater",        icon: "💧", href: "/industries#wastewater" },
  { name: "Power Generation",  icon: "⚡", href: "/industries#power-generation" },
  { name: "Pulp & Paper",      icon: "📄", href: "/industries#pulp-paper" },
  { name: "Pharmaceutical",    icon: "⚗️", href: "/industries#pharmaceutical" },
  { name: "Manufacturing",     icon: "🔩", href: "/industries#manufacturing" },
] as const;

export const BRANDS = [
  "Alfa Laval", "Andritz", "Bird", "Sharples", "Flottweg",
  "Sulzer", "Dodge", "Sumitomo", "Falk", "Brevini",
  "Chemineer", "Davis-Standard", "Rossi", "Humboldt",
  "Bosch Rexroth", "Parker", "Eaton", "Amarillo",
] as const;
