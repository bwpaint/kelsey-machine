/**
 * KMS homepage data — lifted from client/src/pages/Home.tsx so .astro
 * components can render statically. Single source of truth.
 */

export const SERVICES = [
  { id: "centrifuge",      title: "Centrifuge Repair",            keyword: "centrifuge repair",          image: "/images/centrifuge-welding.webp",     href: "/services/centrifuge-repair",
    description: "Comprehensive repair, rebuild, and reconditioning for all types of industrial centrifuges — decanter, basket, disc stack, and more. We service all major brands including Alfa Laval, Andritz, Bird, Sharples, and Flottweg." },
  { id: "gearbox",         title: "Gearbox Repair",               keyword: "gearbox repair",             image: "/images/kms-gearbox.webp",            href: "/services/gearbox-repair",
    description: "Full-service gearbox repair and overhaul for speed reducers, speed increasers, planetary gearboxes, and cooling tower drives. Brands: Falk, Lufkin, Amarillo, Rexnord, Sumitomo, Flender, SEW, David Brown, Voith, and more." },
  { id: "pump",            title: "Pump Repair & Rebuild",        keyword: "pump repair",                image: "/images/oilfield-pumps.webp",         href: "/services/pump-service",
    description: "Expert repair for all pump types — centrifugal, vertical turbine, horizontal split case, and positive displacement. Impeller rebuilds, hard-facing, and seal replacement included." },
  { id: "blower",          title: "Blower Repair",                keyword: "blower repair",              image: "/images/kms-blower-repair.webp",      href: "/services/industrial-blower-repair",
    description: "Industrial blower repair, rebuild, and reconditioning — Roots-style PD blowers, multi-stage centrifugals, regenerative blowers. Roots, Tuthill, Aerzen, Hoffman, Spencer." },
  { id: "compressor",      title: "Compressor Repair",            keyword: "compressor repair",          image: "/images/blower-roots.webp",           href: "/services/industrial-compressors",
    description: "Full-service industrial compressor repair and overhaul — centrifugal, reciprocating, rotary screw, and oil-flooded designs. Kaeser, Atlas Copco, Ingersoll Rand, Sullair." },
  { id: "fluid-power-end", title: "Fluid End & Power End Repair", keyword: "fluid end repair",           image: "/images/fluid-end-module_97356062.jpg", href: "/services/fluid-power-end-repair",
    description: "Specialized repair for oilfield mud pump fluid ends and power ends — one-piece, two-piece, L-shaped, valve-over-valve. Lewco, Kerr, NOV, Gardner Denver, Weatherford, Emsco." },
] as const;

export const STATS = [
  { value: "40+",   label: "Years of Proven Expertise" },
  { value: "24-Mo", label: "Rebuilt Warranty" },
  { value: "50",    label: "States Served Nationwide" },
  { value: "72hr",  label: "Emergency Turnaround" },
] as const;

export const WHY_KMS = [
  { iconName: "shield", title: "Industry-Leading 24-Month Warranty", body: "We stand behind every repair with the best guarantee in the business. Our 24-month rebuilt warranty is a contractual commitment backed by decades of quality workmanship." },
  { iconName: "clock",  title: "Faster Than the OEM",                body: "Our large parts inventory and experienced team allow us to complete repairs in days, not weeks. We have rebuilt centrifuges in 10 days that the OEM said would take 8 weeks." },
  { iconName: "check",  title: "All Major Brands Serviced",          body: "We service every major brand of rotating equipment — Alfa Laval, Andritz, Bird, Sharples, Flottweg, Sulzer, Dodge, Sumitomo, Falk, Bosch Rexroth, and many more." },
  { iconName: "truck",  title: "Free Pickup & Delivery Nationwide",  body: "We come to you — at no charge. Our free pickup and delivery service covers all 50 states, plus Canada and Mexico. Simply call us and we handle the logistics." },
  { iconName: "globe",  title: "40+ Years of Proven Expertise",      body: "Since our founding, Kelsey Machine Services has built a reputation for honesty, quality, and reliability. Our engineers are among the most sought-after experts in the industry." },
  { iconName: "star",   title: "Large Inventory of Rebuilt Equipment", body: "Need equipment fast? KMS maintains a large inventory of used and rebuilt centrifuges, gearboxes, pumps, and blowers — ready to ship." },
] as const;

export const TRUST_BAR = [
  { iconName: "truck",  title: "Free Nationwide Pickup",  desc: "We come to you — at no charge, anywhere in the continental US, Canada, and Mexico." },
  { iconName: "shield", title: "24-Month Warranty",        desc: "The best rebuilt warranty in the rotating equipment repair industry, period." },
  { iconName: "zap",    title: "24/7 Emergency Service",   desc: "When your equipment goes down, we respond immediately — day or night." },
  { iconName: "globe",  title: "Nationwide Coverage",      desc: "Serving all 50 states plus Canada and Mexico from our Houston, TX facility." },
] as const;

export const TESTIMONIALS = [
  { quote: "Our extruder gearbox crashed. We replaced it with a 'so called' rebuilt spare. We shipped the crashed gearbox to Kelsey Machine. They repaired it and charged us much less than the last company we sent our gearbox to, and their workmanship was great.", name: "Michael Cieszinski",  title: "Plant Manager",          service: "Gearbox Repair" },
  { quote: "We had our Decanter Centrifuge down and out of service. Our regular centrifuge repair company said it would be at least 8 weeks before they could get to it. KMS was able to rebuild our Centrifuge within 10 days and do it for less than their competition.", name: "James Basset", title: "Plant Manager", service: "Centrifuge Repair" },
  { quote: "Since 2011 Kelsey Machine Services has been repairing our Rotary Airlocks and Amarillo Gearboxes. Before that time, we would only go back to the OEM for service. But Kelsey has been beating the OEM's price and offering great service.", name: "Jon Sottile", title: "Engineering Manager", service: "Gearbox Repair" },
  { quote: "Kelsey Machine Services is a reputable company. I've had some terrible experiences in the past with shady repair companies. But Kelsey Machine has always been honest and stands behind their warranty. They always do what they say.", name: "Oscar Garcia", title: "Buyer", service: "General Repair" },
  { quote: "We sent our Centrifuge to the OEM for service. After evaluating, they indicated the unit was beyond repair and recommended we replace it. Before purchasing a new one, we contacted Kelsey Machine. They were confident they could save the unit. After 20 months the machine is still running without any issues.", name: "Marilyn Offerman", title: "Purchasing Manager", service: "Centrifuge Repair" },
  { quote: "We had a Bosch Rexroth Hydraulic pump go down. We contacted Kelsey Machine in Tomball TX who were able to pick up our pump and repair it within 72 hours. Kelsey Machine is the only company we will send our Hydraulic pumps to for service.", name: "Byron Gilbert", title: "Reliability Engineer", service: "Hydraulic Repair" },
  { quote: "Kelsey Machine has been a vendor with my company since 2004. Their workmanship and ability to offer fast turnaround time is outstanding. I highly recommend KMS for gearbox repair service.", name: "Kenneth Sung", title: "Operations Manager", service: "Gearbox Repair" },
  { quote: "After years of frustration trying to find a good source for Blower repair, we finally found Kelsey Machine. They evaluate the problem and supply us with a free repair quote. They have been rebuilding our blowers for 2 years.", name: "Michael Prater", title: "Reliability Manager", service: "Blower Repair" },
  { quote: "I will only trust KMS to service my Centrifugal Pumps. They have been servicing our pumps for over a decade. I have not found another company to beat their work. I'm a very satisfied customer.", name: "David Jackson", title: "Maintenance Supervisor", service: "Pump Repair" },
] as const;

export const FAQS = [
  { q: "What types of rotating equipment does Kelsey Machine repair?", a: "Kelsey Machine Services repairs a comprehensive range of rotating equipment, including industrial centrifuges (decanter, basket, disc stack), gearboxes (speed reducers, speed increasers, planetary), pumps (centrifugal, vertical turbine, horizontal split case), blowers and compressors, and hydraulic drives and pumps. We service all major brands." },
  { q: "What warranty does Kelsey Machine offer on repairs?", a: "We offer an industry-leading 24-month rebuilt warranty on all repaired and rebuilt equipment. This is the best guarantee in the rotating equipment repair industry and reflects our confidence in the quality of our workmanship." },
  { q: "Does Kelsey Machine offer 24/7 emergency repair service?", a: "Yes. We provide 24/7 emergency repair services, including free pickup and delivery nationwide. When your equipment goes down, call us at 346-350-1464 and we will respond immediately to minimize your downtime." },
  { q: "How quickly can Kelsey Machine repair my equipment?", a: "Our large inventory of parts and experienced team allow us to offer rapid turnaround times — often significantly faster than the OEM. We have completed centrifuge rebuilds in as little as 10 days and hydraulic pump repairs within 72 hours." },
  { q: "Does Kelsey Machine offer free pickup and delivery?", a: "Yes. We offer free pickup and delivery for all repair jobs, nationwide across all 50 states, plus Canada and Mexico. Simply call us and we will arrange pickup at your facility." },
  { q: "What brands of rotating equipment does Kelsey Machine service?", a: "We service all major brands, including Alfa Laval, Andritz, Bird, Sharples, Flottweg, Sulzer, Dodge, Sumitomo, Falk, Brevini, Chemineer, Davis-Standard, Rossi, Bosch Rexroth, and many more." },
  { q: "Can Kelsey Machine repair equipment the OEM says is beyond repair?", a: "In many cases, yes. We have successfully rebuilt centrifuges and other equipment that OEMs declared beyond repair, saving our customers the cost of purchasing new equipment." },
  { q: "What industries does Kelsey Machine serve?", a: "We serve a wide range of industries, including oil and gas, petrochemical, refining, food and beverage, wastewater treatment, power generation, pulp and paper, pharmaceutical, and general manufacturing." },
] as const;

export const INDUSTRIES = [
  { name: "Oil & Gas",        icon: "🛢️", href: "/industries#oil-gas" },
  { name: "Petrochemical",    icon: "🏭", href: "/industries#petrochemical" },
  { name: "Food & Beverage",  icon: "🌾", href: "/industries#food-beverage" },
  { name: "Wastewater",       icon: "💧", href: "/industries#wastewater" },
  { name: "Power Generation", icon: "⚡", href: "/industries#power-generation" },
  { name: "Pulp & Paper",     icon: "📄", href: "/industries#pulp-paper" },
  { name: "Pharmaceutical",   icon: "⚗️", href: "/industries#pharmaceutical" },
  { name: "Manufacturing",    icon: "🔩", href: "/industries#manufacturing" },
] as const;

export const BRANDS = [
  "Alfa Laval", "Andritz", "Bird", "Sharples", "Flottweg",
  "Sulzer", "Dodge", "Sumitomo", "Falk", "Brevini",
  "Chemineer", "Davis-Standard", "Rossi", "Humboldt",
  "Bosch Rexroth", "Parker", "Eaton", "Amarillo",
] as const;

export const HERO_TRUST_BADGES = [
  { iconName: "truck",  text: "Free Nationwide Pickup" },
  { iconName: "shield", text: "24-Month Warranty" },
  { iconName: "zap",    text: "24/7 Emergency Service" },
  { iconName: "globe",  text: "All 50 States" },
] as const;
