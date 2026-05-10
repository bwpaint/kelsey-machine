/**
 * 24/7 Emergency Service Page
 * Primary KW: emergency rotating equipment repair, 24/7 equipment repair
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, PageHero, FaqSection, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { Phone, Clock, Truck, CheckCircle } from "lucide-react";

const STEPS = [
  { icon: <Phone size={28} />, step: "01", title: "Call Our Emergency Line", desc: "Call 346-350-1464 any time — day or night, weekday or weekend, holiday or not. A real person answers. Tell us what you have, what happened, and how urgently you need it back." },
  { icon: <Truck size={28} />, step: "02", title: "We Arrange Pickup", desc: "We'll coordinate pickup from your facility anywhere in the continental U.S. — or you can ship directly to our facility in Stafford, TX. For critical situations, we can have a driver dispatched within hours." },
  { icon: <Clock size={28} />, step: "03", title: "Rush Intake & Assessment", desc: "Your equipment goes to the front of the line. We perform complete disassembly, inspection, and failure analysis — and we call you with a written quote before any work begins. No surprises." },
  { icon: <CheckCircle size={28} />, step: "04", title: "Expedited Repair & Return", desc: "We complete the repair on an expedited timeline and ship your equipment back via the fastest available carrier — or arrange direct delivery. Every emergency repair is backed by our 24-month warranty." },
];

const FAQS = [
  { q: "What qualifies as an emergency repair?", a: "Any situation where equipment failure is causing or about to cause significant production loss, safety risk, or operational shutdown qualifies for emergency service. Call us and describe your situation — we'll tell you honestly whether we can help and how fast." },
  { q: "How quickly can KMS respond to an emergency?", a: "We can initiate emergency intake within hours of your call. Pickup can typically be arranged within 24 hours for most locations in the continental U.S. Repair timeline depends on the extent of damage and parts availability — we'll give you a realistic estimate when we assess the unit." },
  { q: "Is emergency service available on weekends and holidays?", a: "Yes. Our emergency line is answered every day of the year — 365 days, 24 hours a day. We don't take holidays when your equipment doesn't." },
  { q: "Do you offer emergency service outside the continental U.S.?", a: "Yes. We serve all 50 states, Canada, and Mexico. For Alaska, Hawaii, and international locations, we work with freight forwarders to arrange the fastest possible shipping." },
  { q: "Is the warranty the same for emergency repairs?", a: "Yes. Every repair — emergency or standard — is backed by our 24-month rebuilt warranty. Emergency service does not reduce the warranty coverage." },
  { q: "What types of equipment can you handle on an emergency basis?", a: "We handle emergency repairs for all equipment types we service: centrifuges, gearboxes, industrial blowers, industrial compressors, and mud pump fluid ends and power ends. Call us and describe what you have." },
];

export default function EmergencyService() {
  return (
    <>
      <NavBar />
      <PageHero
        bgImage="/images/kms-hero-bg.webp"
        h1="24/7 Emergency Rotating Equipment Repair — We Answer Every Call"
        subheading="When your equipment goes down at 2 AM on a Sunday, you need a shop that actually picks up the phone. KMS does. Every day of the year, every hour of the day — real people, real answers, real repairs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "24/7 Emergency Service" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div style={{ background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.darkBg} 100%)`, borderRadius: 4, padding: "2.5rem", marginBottom: "3rem", textAlign: "center" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.5rem" }}>
              Emergency Line — Available 24/7/365
            </div>
            <a href={KMS_PHONE_HREF} style={{ display: "inline-block", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: C.green, textDecoration: "none", letterSpacing: "0.02em", lineHeight: 1.1, marginBottom: "1rem" }}>
              {KMS_PHONE}
            </a>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", margin: 0 }}>
              Real people. Real answers. Every call answered.
            </p>
          </div>

          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Equipment failures don't follow business hours. A centrifuge that goes down at midnight on a Friday, a gearbox that fails on Christmas morning, a mud pump fluid end that washes out on a Sunday — these are real situations that real KMS customers have called us about. And we answered. Every time.
          </p>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.08rem", color: C.textDark, lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Our <Link href="/emergency-service" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24/7 emergency service</Link> isn't a marketing claim — it's a commitment backed by 40 years of showing up when it matters. We offer emergency intake, rush processing, and expedited return shipping. Every emergency repair is backed by the same <Link href="/warranty" style={{ color: C.green, fontWeight: 700, textDecoration: "none" }}>24-month warranty</Link> as our standard repairs.
          </p>

          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "1.5rem" }}>
            How Emergency Service Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {STEPS.map(({ icon, step, title, desc }) => (
              <div key={step} style={{ background: C.lightBg, border: `1px solid #dde3ec`, borderRadius: 4, padding: "1.75rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 56, height: 56, background: C.blueDark, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", color: C.green }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.75rem", color: C.green, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>STEP {step}</div>
                  <h3 style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.textDark, marginBottom: "0.4rem" }}>{title}</h3>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: C.textMid, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: C.lightBg, border: `2px solid ${C.green}`, borderRadius: 4, padding: "2rem", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: C.blueDark, textTransform: "uppercase", marginBottom: "1rem" }}>
              Emergency Service Coverage
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "All 50 States", desc: "Continental U.S. pickup available within 24 hours" },
                { label: "Canada & Mexico", desc: "International service via freight forwarder" },
                { label: "365 Days a Year", desc: "No holidays, no blackout dates, no exceptions" },
              ].map(({ label, desc }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.25rem", color: C.blueDark, textTransform: "uppercase" }}>{label}</div>
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: C.textMid, lineHeight: 1.5, margin: "0.25rem 0 0" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <FaqSection faqs={FAQS} pageName="24/7 Emergency Rotating Equipment Repair" />
      <CtaBanner headline="Equipment Down Right Now?" subtext="Call our emergency line — we answer every call, every day, every hour." />
      <NewsletterBar />
      <Footer />
    </>
  );
}
