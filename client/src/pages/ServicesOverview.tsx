/**
 * Services Overview Page
 * Primary KW: rotating equipment repair services
 * Voice: Full Texas — bold, direct, witty, technically correct
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, InlineQuoteForm, FaqSection, CtaBanner, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { ArrowRight, CheckCircle } from "lucide-react";

const SERVICES = [
  { title: "Centrifuge Repair", desc: "Decanter, disc-stack, and basket centrifuges — all types, all brands. From bowl and scroll rebuilds to complete overhauls, we restore centrifuge performance to OEM spec.", href: "/services/centrifuge-repair", kw: "centrifuge repair" },
  { title: "Gearbox Repair", desc: "Parallel shaft, planetary, bevel, worm, helical — all gearbox types and all manufacturers. In-house machining for precision restoration.", href: "/services/gearbox-repair", kw: "gearbox repair" },
  { title: "Industrial Blower Repair", desc: "Rotary lobe, centrifugal, radial, axial, regenerative, and screw blowers. We rebuild all types for wastewater, petrochemical, and industrial applications.", href: "/services/industrial-blower-repair", kw: "blower repair" },
  { title: "Industrial Compressors", desc: "Centrifugal, reciprocating, rotary screw, vane, scroll, and diaphragm compressors. Oil & gas, petrochemical, and industrial applications.", href: "/services/industrial-compressors", kw: "compressor repair" },
  { title: "Fluid & Power End Repair", desc: "Mud pump fluid ends, power ends, and oilfield tool repair and recertification. We understand rig downtime — and we move fast.", href: "/services/fluid-power-end-repair", kw: "fluid end repair" },
];

const DIFFERENTIATORS = [
  { title: "40+ Years of Experience", desc: "We've been doing this since before most of our competitors were in business. That experience shows in every repair." },
  { title: "In-House Machine Shop", desc: "We don't outsource the precision work. Our in-house machining capability means faster turnaround and tighter tolerances." },
  { title: "24-Month Written Warranty", desc: "Every repair is backed by our industry-leading 24-month rebuilt warranty — in writing. Not a verbal promise. A document." },
  { title: "Free National Pickup", desc: "We'll come get your equipment anywhere in the continental U.S. No shipping hassle, no freight damage risk." },
  { title: "24/7 Emergency Service", desc: "Our emergency line is answered every day of the year. When your equipment failure is shutting down production, we respond." },
  { title: "All 50 States + Canada & Mexico", desc: "We serve facilities across North America. Distance is not a barrier to getting your equipment repaired right." },
];

const FAQS = [
  { q: "What types of rotating equipment does KMS repair?", a: "KMS repairs centrifuges, gearboxes, industrial blowers, industrial compressors, and mud pump fluid ends and power ends. We also repair and recertify oil-filled oilfield tools. If it rotates or reciprocates in an industrial setting, there's a good chance we repair it." },
  { q: "Does KMS repair equipment from all manufacturers?", a: "Yes. We repair equipment from all major manufacturers across all service categories. We are not limited to OEM service relationships — we repair any manufacturer's equipment." },
  { q: "What is KMS's warranty on repairs?", a: "Every repair is backed by our industry-leading 24-month rebuilt warranty — in writing. This is a written warranty included in your documentation package. See our Warranty page for full details." },
  { q: "Does KMS offer emergency repair service?", a: "Yes. Our 24/7 emergency line is answered every day of the year. We offer emergency intake, rush processing, and expedited return shipping for critical situations." },
  { q: "Does KMS offer free pickup?", a: "Yes — we offer free national pickup for equipment repairs. We'll arrange pickup from your facility anywhere in the continental U.S. Call or submit a quote request to arrange pickup." },
  { q: "How long does a typical repair take?", a: "Turnaround depends on the type and extent of damage. Most repairs are completed in 1–3 weeks. For critical operations, we offer emergency service with significantly faster turnaround." },
];

export default function ServicesOverview() {
  return (
    <>
      <NavBar />
      <PageHero
        bgImage="/images/kms_hero_bg_v2_36f4d26f.jpg"
        h1="Rotating Equipment Repair Services — All Types, All Brands"
        subheading="One shop. Five service lines. Forty years of getting industrial rotating equipment back online — faster than the OEM, with a better warranty, and emergency service that actually answers the phone."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem", maxWidth: 780 }}>
            Kelsey Machine Services has been the go-to rotating equipment repair shop for industrial facilities, oilfield operations, and petrochemical plants across the country for over 40 years. We repair centrifuges, gearboxes, blowers, compressors, and mud pump fluid ends and power ends — all in-house, with our own machining capability, and backed by a written <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link>. Our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> is answered every day of the year.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "1.5rem", marginTop: "2.5rem" }}>
            Our Service Lines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SERVICES.map(({ title, desc, href }) => (
              <Link key={title} href={href} style={{ display: "block", background: C.lightBg, border: `2px solid #dde3ec`, borderRadius: 4, padding: "1.75rem", textDecoration: "none", transition: "border-color 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.green; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#dde3ec"; }}
              >
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: C.blueDark, textTransform: "uppercase", letterSpacing: "0.02em", marginBottom: "0.75rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  {title}
                  <ArrowRight size={18} style={{ color: C.green, flexShrink: 0 }} />
                </div>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textMid, lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </Link>
            ))}
          </div>

          <div style={{ background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.darkBg} 100%)`, borderRadius: 4, padding: "3rem", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
              Why KMS?
            </h2>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "2rem", maxWidth: 600 }}>
              There are a lot of repair shops out there. Here's what makes KMS different — and why facilities across North America keep calling us back.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {DIFFERENTIATORS.map(({ title, desc }) => (
                <div key={title} style={{ borderTop: `3px solid ${C.green}`, paddingTop: "1rem" }}>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", marginBottom: "0.4rem" }}>{title}</div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, textDecoration: "none" }}>Call {KMS_PHONE}</a>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.85rem 2rem", borderRadius: 2, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none" }}>Request Free Quote</Link>
            </div>
          </div>
        </div>
      </main>
      <FaqSection faqs={FAQS} pageName="Rotating Equipment Repair Services" />
      <CtaBanner headline="Ready to Get Your Equipment Back Online?" subtext="One call to KMS gets you a free quote, a written warranty, and 40 years of expertise on your side." />
      <NewsletterBar />
      <Footer />
    </>
  );
}
