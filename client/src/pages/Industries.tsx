/**
 * Industries We Serve — Kelsey Machine Services
 * Design: Industrial / dark navy + KMS green, Barlow Condensed headlines, Source Sans 3 body
 * Each industry: anchor ID, square image, 200-300 words, key equipment list
 */

import { NavBar, Footer, NewsletterBar, InlineQuoteForm, C, KMS_PHONE, KMS_PHONE_HREF, KMS_EMAIL } from "@/components/KmsLayout";
import { Phone, Mail, CheckCircle } from "lucide-react";

// ─── Industry Data ────────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    id: "oil-gas",
    name: "Oil & Gas",
    icon: "🛢️",
    image: "/images/industry-oil-gas.webp",         
    tagline: "Keeping Upstream, Midstream & Downstream Operations Running",
    body: `The oil and gas industry runs on rotating equipment — and when that equipment stops, so does production. Kelsey Machine Services has been a trusted repair partner for upstream, midstream, and downstream operators across the Gulf Coast region for decades. We understand that an unplanned centrifuge failure on a separation skid or a gearbox breakdown on a pipeline compressor station isn't just an inconvenience — it's measured in barrels per day and dollars per hour.

Our shop is equipped to handle the full spectrum of rotating equipment found in oil and gas operations: horizontal and vertical centrifuges used in solids control and produced-water treatment, high-speed gearboxes on gas compressors, industrial blowers on vapor recovery units, and power-end assemblies on triplex and quintuplex pumps. We work on equipment from all major OEMs including Alfa Laval, GEA Westfalia, Sharples, Tuthill, and Roper.

Every repair begins with a thorough root-cause analysis — we don't just fix what broke, we find out why it broke and address the underlying issue. Our precision balancing and alignment services ensure rebuilt equipment returns to service with vibration levels that meet or exceed OEM specifications. We offer free pickup and delivery throughout Texas and the Gulf Coast, and our 24/7 emergency response means a midnight call gets the same urgency as a Monday morning one.`,
    equipment: ["Decanter Centrifuges", "Disc Stack Centrifuges", "Gas Compressor Gearboxes", "Vapor Recovery Blowers", "Triplex Pump Power Ends", "Produced Water Centrifuges"],
  },
  {
    id: "petrochemical",
    name: "Petrochemical",
    icon: "🏭",
    image: "/images/oilfield-hero.webp",
    tagline: "Precision Repair for High-Consequence Rotating Equipment",
    body: `Petrochemical plants operate some of the most demanding rotating equipment in any industry. Process centrifuges handling corrosive solvents, high-speed gearboxes driving agitators in polymerization reactors, and industrial blowers moving hazardous vapors all require repair expertise that goes beyond standard machine shop capability. Kelsey Machine Services brings decades of petrochemical experience to every job.

We understand the documentation requirements that come with petrochemical work — material certifications, dimensional inspection reports, balancing records, and repair procedures that can withstand a PSM audit. Our shop maintains detailed repair records for every job, and we can provide full traceability documentation on request. We work with stainless steel, Hastelloy, duplex stainless, and other exotic alloys commonly found in petrochemical service.

Our repair capabilities cover the full range of petrochemical rotating equipment: pusher and peeler centrifuges for polymer and specialty chemical production, high-shear mixers, process blowers and fans, and the gearboxes that drive them. We also service the fluid-end components of high-pressure pumps used in reactor feed and product transfer service. Turnaround time is always a priority — we know that a centrifuge sitting in our shop means a reactor running at reduced capacity or offline entirely.`,
    equipment: ["Pusher Centrifuges", "Peeler Centrifuges", "Process Blowers & Fans", "Agitator Gearboxes", "High-Pressure Pump Fluid Ends", "Reactor Feed Pump Components"],
  },
  {
    id: "food-beverage",
    name: "Food & Beverage",
    icon: "🌾",
    image: "/images/industry-food-beverage.webp",
    tagline: "Sanitary Standards, Industrial Durability",
    body: `Food and beverage processing places unique demands on rotating equipment repair. It's not enough for the equipment to work — it has to work in a way that meets FDA, USDA, and 3-A Sanitary Standards requirements. Kelsey Machine Services has extensive experience repairing centrifuges and other rotating equipment used in food-grade applications, and we understand the difference between an industrial repair and a sanitary one.

We service disc stack and decanter centrifuges used in dairy processing (cream separation, whey clarification), edible oil refining, juice clarification, and brewery operations. Our technicians are familiar with the specific requirements for food-grade lubricants, sanitary surface finishes, and the documentation needed to satisfy food safety audits. We use only food-grade lubricants in reassembly when specified, and we can provide material certifications for replacement components.

Beyond centrifuges, we repair the gearboxes and drive assemblies on mixers, conveyors, and other processing equipment throughout food and beverage plants. Our precision balancing services are particularly valuable in food processing environments where vibration can affect product quality and accelerate wear on sensitive process equipment. We offer expedited turnaround for food processors facing production deadlines, and our free pickup and delivery service covers the entire Gulf Coast region.`,
    equipment: ["Dairy Centrifuges (Cream/Whey)", "Edible Oil Centrifuges", "Brewery Centrifuges", "Juice Clarifiers", "Food-Grade Mixer Gearboxes", "Conveyor Drive Assemblies"],
  },
  {
    id: "wastewater",
    name: "Wastewater",
    icon: "💧",
    image: "/images/industry-wastewater.webp",      
    tagline: "Keeping Municipal and Industrial Water Treatment Online",
    body: `Wastewater treatment plants — both municipal and industrial — depend on rotating equipment to function. Decanter centrifuges for biosolids dewatering, blowers for aeration basins, and gearboxes on clarifier drives are all critical to plant operations. When any of these fail, the consequences can range from regulatory violations to environmental incidents. Kelsey Machine Services provides fast, reliable repair services specifically for the wastewater treatment industry.

Decanter centrifuge repair is one of our core competencies. We service machines from all major manufacturers including Alfa Laval, Andritz, Flottweg, Hiller, and Pieralisi. Our repair process includes complete disassembly and inspection, bowl and scroll assessment, bearing replacement, seal replacement, and precision dynamic balancing to G1.0 or better. We can also perform scroll wear surface restoration using tungsten carbide hard-facing to extend service life between rebuilds.

Aeration blowers — both positive displacement and centrifugal — are another area of focus. We repair Roots, Tuthill, Aerzen, and other PD blower brands, as well as centrifugal blowers from Hoffman & Lamson, Spencer, and others. Our 24/7 emergency service is particularly valuable for wastewater plants, where a blower failure can quickly become a permit compliance issue. We maintain an inventory of common wear parts to minimize downtime on emergency calls.`,
    equipment: ["Biosolids Decanter Centrifuges", "Aeration Blowers (PD & Centrifugal)", "Clarifier Drive Gearboxes", "Sludge Pump Components", "Scroll Hard-Facing Restoration", "Belt Press Drive Assemblies"],
  },
  {
    id: "power-generation",
    name: "Power Generation",
    icon: "⚡",
    image: "/images/industry-power-generation.webp",
    tagline: "Critical Rotating Equipment Repair for Power Plants",
    body: `Power generation facilities — whether coal, natural gas, nuclear, or renewable — rely on rotating equipment that must perform with extreme reliability. Forced draft and induced draft fans, boiler feed pump gearboxes, cooling tower gearboxes, and auxiliary equipment gearboxes all require specialized repair expertise when they fail. Kelsey Machine Services has the equipment and experience to handle power plant rotating equipment repair with the precision and documentation standards the industry demands.

Our large-capacity precision balancing equipment handles the heavy, large-diameter components common in power generation — fan impellers, pump impellers, and turbine components that smaller shops simply cannot balance properly. We perform ISO 1940 G1.0 balancing on all rotating assemblies, and we can provide full documentation packages including as-found and as-left vibration data, dimensional inspection reports, and material certifications.

We work on equipment from all major power generation OEMs and understand the specific requirements for different plant types. For gas-fired peaker plants, we offer rapid-turnaround repair services to minimize lost generation revenue during peak demand periods. For baseload facilities, we can work within planned outage windows to complete repairs on schedule. Our 24/7 emergency response capability is available for forced outage situations where every hour of downtime has a measurable cost.`,
    equipment: ["FD/ID Fan Gearboxes", "Cooling Tower Gearboxes", "Boiler Feed Pump Components", "Auxiliary Equipment Gearboxes", "Large-Diameter Fan Balancing", "Turbine Auxiliary Gearboxes"],
  },
  {
    id: "pulp-paper",
    name: "Pulp & Paper",
    icon: "📄",
    image: "/images/industry-pulp-paper.webp",      
    tagline: "Minimizing Downtime in Continuous-Process Paper Mills",
    body: `Paper mills are continuous-process facilities where a single rotating equipment failure can shut down an entire production line. The rotating equipment in pulp and paper operations is also among the most demanding in any industry — high-torque gearboxes on refiners and chippers, large centrifugal fans handling corrosive gases, and centrifuges for fiber recovery and white water clarification all operate in harsh environments with demanding duty cycles.

Kelsey Machine Services has extensive experience with the rotating equipment found throughout pulp and paper mills. We repair the high-torque, low-speed gearboxes on disc refiners, chip conveyors, and pulp digesters, as well as the high-speed gearboxes on paper machine drives. Our precision balancing capabilities handle the large, heavy components common in paper mill equipment — fan impellers, refiner discs, and roll assemblies.

We understand the paper industry's sensitivity to downtime. Our emergency response team is available around the clock, and we maintain relationships with parts suppliers that allow us to source replacement components quickly. For planned maintenance outages, we offer pre-outage inspection services to identify components that should be rebuilt before they fail, helping mills transition from reactive to predictive maintenance strategies. Our free pickup and delivery service covers the entire Gulf Coast and Southeast Texas region.`,
    equipment: ["Refiner Gearboxes", "Chipper Drive Gearboxes", "Paper Machine Drive Gearboxes", "Mill Fan Assemblies", "Fiber Recovery Centrifuges", "White Water Clarifier Drives"],
  },
  {
    id: "pharmaceutical",
    name: "Pharmaceutical",
    icon: "⚗️",
    image: "/images/industry-pharmaceutical.webp",  
    tagline: "cGMP-Aware Repair for Pharmaceutical Processing Equipment",
    body: `Pharmaceutical manufacturing places the highest demands on rotating equipment repair. Centrifuges used in API production, crystallization, and filtration must meet cGMP standards, and the documentation requirements are extensive. Kelsey Machine Services understands the pharmaceutical industry's quality standards and provides repair services that support, rather than complicate, your regulatory compliance obligations.

We repair basket centrifuges, peeler centrifuges, and inverting filter centrifuges used throughout pharmaceutical manufacturing. Our technicians are familiar with the specific requirements for pharmaceutical-grade surface finishes, FDA-compliant lubricants, and the documentation needed to support equipment qualification (IQ/OQ/PQ) activities. We can provide detailed repair reports that include as-found conditions, work performed, replacement parts with lot numbers, and as-left dimensional data.

Material traceability is a particular strength — we maintain documentation on all replacement components and can provide mill certifications for metallic parts. We work with the exotic alloys common in pharmaceutical service including 316L stainless steel, Hastelloy C-276, and titanium. Our shop maintains a clean, controlled environment for pharmaceutical equipment disassembly and reassembly, and we can arrange for equipment to be cleaned and passivated before return to service. We also service the gearboxes and drive assemblies on pharmaceutical mixers, reactors, and other processing equipment.`,
    equipment: ["Basket Centrifuges", "Peeler Centrifuges", "Inverting Filter Centrifuges", "Pharmaceutical Mixer Gearboxes", "API Process Drives", "cGMP Documentation Packages"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "🔩",
    image: "/images/industry-manufacturing.webp",   
    tagline: "Keeping Production Lines Moving Across All Manufacturing Sectors",
    body: `General manufacturing encompasses an enormous range of rotating equipment — from the gearboxes on conveyor systems and material handling equipment to the centrifuges used in metalworking fluid management and the blowers on dust collection systems. Kelsey Machine Services serves manufacturers across all sectors, providing reliable repair services that minimize production downtime and extend equipment service life.

Our gearbox repair capabilities cover the full range of industrial gearboxes found in manufacturing: parallel shaft, right-angle, bevel-helical, worm gear, and planetary designs from all major manufacturers. We repair gearboxes on conveyors, mixers, extruders, presses, and virtually any other manufacturing equipment. Our precision balancing services are valuable for manufacturers dealing with vibration problems that affect product quality or accelerate bearing wear.

For manufacturers dealing with metalworking fluid management, we service the centrifuges used for coolant clarification and chip processing. Clean coolant extends tool life and improves surface finish quality — a properly functioning centrifuge pays for its repair cost many times over in reduced tooling costs and improved part quality. We also repair the blowers and fans on industrial ventilation and dust collection systems, which are critical for both worker safety and regulatory compliance. Our 24/7 availability means that a breakdown on a critical production line gets immediate attention regardless of the time of day.`,
    equipment: ["Industrial Gearboxes (All Types)", "Conveyor Drive Assemblies", "Metalworking Fluid Centrifuges", "Dust Collection Blowers", "Extruder Drive Gearboxes", "Material Handling Equipment"],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Industries() {
  return (
    <div className="min-h-screen" style={{ background: "#f4f6f9" }}>
      <NavBar />

      {/* Hero */}
      <section style={{ background: C.blueDark, paddingTop: "7rem", paddingBottom: "3.5rem" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div style={{ display: "inline-block", background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.3rem 0.75rem", borderRadius: 2, marginBottom: "1rem" }}>
            Industries We Serve
          </div>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "white", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: "1.25rem" }}>
            ROTATING EQUIPMENT REPAIR<br />
            <span style={{ color: C.green }}>ACROSS EVERY INDUSTRY</span>
          </h1>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", maxWidth: 680, lineHeight: 1.7, marginBottom: "2rem" }}>
            From oil fields to food plants, from paper mills to pharmaceutical facilities — Kelsey Machine Services repairs the rotating equipment that keeps your operation running. Over 30 years of Gulf Coast industrial experience, available 24/7.
          </p>
          {/* Industry quick-links */}
          <div className="flex flex-wrap gap-2">
            {INDUSTRIES.map(ind => (
              <a key={ind.id} href={`#${ind.id}`}
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 2, padding: "0.4rem 0.85rem", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = C.green; (e.currentTarget as HTMLElement).style.color = "white"; (e.currentTarget as HTMLElement).style.borderColor = C.green; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
              >
                {ind.icon} {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry sections */}
      <div className="max-w-7xl mx-auto px-4" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div className="flex flex-col gap-16">
          {INDUSTRIES.map((ind, idx) => (
            <section key={ind.id} id={ind.id} style={{ scrollMarginTop: 90 }}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                {/* Image */}
                <div style={{ aspectRatio: "1/1", overflow: "hidden", borderRadius: 4, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}>
                  <img
                    src={ind.image}
                    alt={`${ind.name} rotating equipment repair — Kelsey Machine Services`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    loading="lazy"
                  />
                </div>
                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "1.5rem" }}>{ind.icon}</span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.green }}>Industry</span>
                  </div>
                  <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.05, marginBottom: "0.5rem" }}>
                    {ind.name}
                  </h2>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "1rem", color: C.green, marginBottom: "1.25rem", letterSpacing: "0.02em" }}>
                    {ind.tagline}
                  </p>
                  {ind.body.split("\n\n").map((para, i) => (
                    <p key={i} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.97rem", color: "#3a4a5c", lineHeight: 1.75, marginBottom: "1rem" }}>
                      {para.trim()}
                    </p>
                  ))}
                  {/* Equipment list */}
                  <div style={{ background: "white", border: `1px solid #dde3ec`, borderLeft: `4px solid ${C.green}`, borderRadius: 4, padding: "1.25rem", marginTop: "1.5rem" }}>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: C.blueDark, marginBottom: "0.75rem" }}>
                      Equipment We Service
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {ind.equipment.map(eq => (
                        <div key={eq} className="flex items-center gap-2">
                          <CheckCircle size={13} style={{ color: C.green, flexShrink: 0 }} />
                          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "#3a4a5c" }}>{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 mt-5">
                    <a href={KMS_PHONE_HREF} className="kms-wiggle" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", padding: "0.75rem 2.75rem", borderRadius: 2, textDecoration: "none" }}>
                      <Phone size={16} /> Call Now — {KMS_PHONE}
                    </a>
                    <a href={`mailto:${KMS_EMAIL}`} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "transparent", color: C.blueDark, border: `2px solid ${C.blueDark}`, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.9rem", letterSpacing: "0.06em", padding: "0.65rem 1.25rem", borderRadius: 2, textDecoration: "none" }}>
                      <Mail size={15} /> Email Us
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Contact form section */}
      <section style={{ background: C.blueDark, padding: "4rem 0" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(1.75rem, 4vw, 2.75rem)", color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "1rem" }}>
                SERVE YOUR INDUSTRY BETTER.<br />
                <span style={{ color: C.green }}>START WITH A FREE QUOTE.</span>
              </h2>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "2rem" }}>
                No matter your industry, Kelsey Machine Services has the expertise to repair your rotating equipment faster, better, and with a warranty that backs it up. Tell us what you need and we'll respond within the hour during business hours — or immediately for emergencies.
              </p>
              <div className="flex flex-col gap-3">
                <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: C.green, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none", letterSpacing: "0.04em" }}>
                  <Phone size={18} /> {KMS_PHONE} — Available 24/7
                </a>
                <a href={`mailto:${KMS_EMAIL}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", textDecoration: "none" }}>
                  <Mail size={16} /> {KMS_EMAIL}
                </a>
              </div>
            </div>
            <div>
              <InlineQuoteForm service="" dark={true} />
            </div>
          </div>
        </div>
      </section>

      <NewsletterBar />
      <Footer />
    </div>
  );
}
