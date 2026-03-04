/**
 * KMS HOMEPAGE — Real Brand Colors from kmstx.com Logo
 *
 * Colors (extracted from KMS-Logo400.png + live site):
 *   KMS Blue Dark:   #1E5080  — lettermark blue
 *   KMS Blue Mid:    #235A91  — button / CTA blue
 *   KMS Blue Sky:    #3796D2  — header gradient / sky blue
 *   KMS Green:       #78A546  — gear icon / action color
 *   KMS Green Dark:  #5E8535  — hover state
 *   Dark BG:         #1A2535  — footer / dark sections
 *   Light BG:        #F4F7FA  — alternating sections
 *
 * Logo: Transparent white version on colored backgrounds,
 *       Color version on white/light backgrounds.
 *
 * Typography: Barlow Condensed (headlines) + Source Sans 3 (body)
 */

import { useState, useEffect, useRef } from "react";
import {
  Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp,
  Star, CheckCircle, ArrowRight, Truck, Shield, Zap,
  Globe, Menu, X, ChevronLeft, ChevronRight,
} from "lucide-react";

// ─── Assets ──────────────────────────────────────────────────────────────────
const LOGO_WHITE  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_logo_transparent_8e6e2d25.webp";
const LOGO_COLOR  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_logo_color_eea8bb18.png";
const HERO_BG     = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_hero_worker-BarhmkLYqaHciRs3YKpN9W.webp";
const CENTRIFUGE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_centrifuge_worker-SSJGvC4NhNHTDbkuJKW8D3.webp";
const GEARBOX_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_gearbox-h5T3axMBYGX9CurgWAZUE6.webp";
const PUMP_IMG    = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_pump_repair-g86HADnbNUHRj7jQcs4iiJ.webp";
const WORKSHOP_IMG= "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_workshop-heC7X4jJCiyh8Q7vNLsLyL.webp";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────
const C = {
  blueDark:   "#1E5080",
  blueMid:    "#235A91",
  blueSky:    "#3796D2",
  blueLight:  "#4BAAE0",
  green:      "#78A546",
  greenDark:  "#5E8535",
  greenLight: "#8FBF58",
  darkBg:     "#1A2535",
  darkBg2:    "#1E2F44",
  lightBg:    "#F4F7FA",
  white:      "#FFFFFF",
  textDark:   "#1A2535",
  textMid:    "#3D5166",
  textLight:  "rgba(255,255,255,0.85)",
  textMuted:  "rgba(255,255,255,0.6)",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "centrifuge",
    title: "Centrifuge Repair",
    description: "Comprehensive repair, rebuild, and reconditioning for all types of industrial centrifuges — decanter, basket, disc stack, and more. We service all major brands including Alfa Laval, Andritz, Bird, Sharples, and Flottweg.",
    keywords: "centrifuge repair, decanter centrifuge repair, industrial centrifuge rebuild",
    image: CENTRIFUGE_IMG,
    href: "/services/centrifuge-repair",
  },
  {
    id: "gearbox",
    title: "Gearbox Repair",
    description: "Full-service gearbox repair and overhaul for speed reducers, speed increasers, planetary gearboxes, and cooling tower drives. We handle all phases from inspection to final balancing.",
    keywords: "gearbox repair, industrial gearbox overhaul, speed reducer repair",
    image: GEARBOX_IMG,
    href: "#contact",
  },
  {
    id: "pump",
    title: "Pump Repair & Rebuild",
    description: "Expert repair for all pump types — centrifugal, vertical turbine, horizontal split case, positive displacement, and more. Impeller rebuilds, hard-facing, and seal replacement included.",
    keywords: "pump repair, centrifugal pump repair, industrial pump rebuild",
    image: PUMP_IMG,
    href: "#contact",
  },
  {
    id: "blower",
    title: "Blower & Compressor Repair",
    description: "Keep your operations running at peak capacity with our comprehensive blower and compressor repair services. We service positive displacement, screw, and regenerative blowers from all major manufacturers.",
    keywords: "blower repair, compressor repair, industrial blower rebuild",
    image: WORKSHOP_IMG,
    href: "#contact",
  },
  {
    id: "hydraulic",
    title: "Hydraulic Drive Service",
    description: "Over 40 years of experience rebuilding hydraulic pumps and drives. We service Bosch Rexroth, Parker, Eaton, and all major brands with rapid turnaround to minimize your downtime.",
    keywords: "hydraulic drive repair, hydraulic pump rebuild, hydraulic service",
    image: GEARBOX_IMG,
    href: "#contact",
  },
];

const STATS = [
  { value: "40+", label: "Years of Proven Expertise" },
  { value: "24-Mo", label: "Rebuilt Warranty" },
  { value: "50", label: "States Served Nationwide" },
  { value: "72hr", label: "Emergency Turnaround" },
];

const TESTIMONIALS = [
  { quote: "Our extruder gearbox crashed. We replaced it with a 'so called' rebuilt spare. We shipped the crashed gearbox to Kelsey Machine. They repaired it and charged us much less than the last company we sent our gearbox to, and their workmanship was great.", name: "Michael Cieszinski", title: "Plant Manager", service: "Gearbox Repair" },
  { quote: "We had our Decanter Centrifuge down and out of service. Our regular centrifuge repair company said it would be at least 8 weeks before they could get to it. KMS was able to rebuild our Centrifuge within 10 days and do it for less than their competition.", name: "James Basset", title: "Plant Manager", service: "Centrifuge Repair" },
  { quote: "Since 2011 Kelsey Machine Services has been repairing our Rotary Airlocks and Amarillo Gearboxes. Before that time, we would only go back to the OEM for service. But Kelsey has been beating the OEM's price and offering great service.", name: "Jon Sottile", title: "Engineering Manager", service: "Gearbox Repair" },
  { quote: "Kelsey Machine Services is a reputable company. I've had some terrible experiences in the past with shady repair companies. But Kelsey Machine has always been honest and stands behind their warranty. They always do what they say.", name: "Oscar Garcia", title: "Buyer", service: "General Repair" },
  { quote: "We sent our Centrifuge to the OEM for service. After evaluating, they indicated the unit was beyond repair and recommended we replace it. Before purchasing a new one, we contacted Kelsey Machine. They were confident they could save the unit. After 20 months the machine is still running without any issues.", name: "Marilyn Offerman", title: "Purchasing Manager", service: "Centrifuge Repair" },
  { quote: "We had a Bosch Rexroth Hydraulic pump go down and we did not have a backup. We needed it back running ASAP. We contacted Kelsey Machine in Tomball TX who were able to pick up our pump and repair it within 72 hours. Kelsey Machine is the only company we will send our Hydraulic pumps to for service.", name: "Byron Gilbert", title: "Reliability Engineer", service: "Hydraulic Repair" },
  { quote: "Kelsey Machine has been a vendor with my company since 2004. Their workmanship and ability to offer fast turnaround time is outstanding. I highly recommend KMS for gearbox repair service.", name: "Kenneth Sung", title: "Operations Manager", service: "Gearbox Repair" },
  { quote: "After years of frustration trying to find a good source for Blower repair, we finally found Kelsey Machine. They evaluate the problem and supply us with a free repair quote. They have been rebuilding our blowers for 2 years. I recommend KMS to all of our other plant sites.", name: "Michael Prater", title: "Reliability Manager", service: "Blower Repair" },
  { quote: "I will only trust KMS to service my Centrifugal Pumps. They have been servicing our pumps for over a decade. I have not found another company to beat their work. I'm a very satisfied customer.", name: "David Jackson", title: "Maintenance Supervisor", service: "Pump Repair" },
];

const FAQS = [
  { q: "What types of rotating equipment does Kelsey Machine repair?", a: "Kelsey Machine Services repairs a comprehensive range of rotating equipment, including industrial centrifuges (decanter, basket, disc stack), gearboxes (speed reducers, speed increasers, planetary), pumps (centrifugal, vertical turbine, horizontal split case), blowers and compressors (positive displacement, screw, regenerative), and hydraulic drives and pumps. We service all major brands." },
  { q: "What warranty does Kelsey Machine offer on repairs?", a: "We offer an industry-leading 24-month rebuilt warranty on all repaired and rebuilt equipment. This is the best guarantee in the rotating equipment repair industry and reflects our confidence in the quality of our workmanship." },
  { q: "Does Kelsey Machine offer 24/7 emergency repair service?", a: "Yes. We provide 24/7 emergency repair services, including free pickup and delivery nationwide. When your equipment goes down, call us at 346-350-1464 and we will respond immediately to minimize your downtime." },
  { q: "How quickly can Kelsey Machine repair my equipment?", a: "Our large inventory of parts and experienced team allow us to offer rapid turnaround times — often significantly faster than the OEM. We have completed centrifuge rebuilds in as little as 10 days and hydraulic pump repairs within 72 hours." },
  { q: "Does Kelsey Machine offer free pickup and delivery?", a: "Yes. We offer free pickup and delivery for all repair jobs, nationwide across all 50 states, plus Canada and Mexico. Simply call us and we will arrange pickup at your facility." },
  { q: "What brands of rotating equipment does Kelsey Machine service?", a: "We service all major brands, including Alfa Laval, Andritz, Bird, Sharples, Flottweg, Sulzer, Dodge, Sumitomo, Falk, Brevini, Chemineer, Davis-Standard, Rossi, Bosch Rexroth, and many more. If you don't see your brand listed, call us — we likely service it." },
  { q: "Can Kelsey Machine repair equipment the OEM says is beyond repair?", a: "In many cases, yes. We have successfully rebuilt centrifuges and other equipment that OEMs declared beyond repair, saving our customers the cost of purchasing new equipment. Our engineers will provide an honest assessment before recommending a course of action." },
  { q: "What industries does Kelsey Machine serve?", a: "We serve a wide range of industries, including oil and gas, petrochemical, refining, food and beverage, wastewater treatment, power generation, pulp and paper, pharmaceutical, and general manufacturing." },
];

const INDUSTRIES = [
  { name: "Oil & Gas", icon: "🛢️" },
  { name: "Petrochemical", icon: "🏭" },
  { name: "Food & Beverage", icon: "🌾" },
  { name: "Wastewater", icon: "💧" },
  { name: "Power Generation", icon: "⚡" },
  { name: "Pulp & Paper", icon: "📄" },
  { name: "Pharmaceutical", icon: "⚗️" },
  { name: "Manufacturing", icon: "🔩" },
];

const BRANDS = [
  "Alfa Laval", "Andritz", "Bird", "Sharples", "Flottweg",
  "Sulzer", "Dodge", "Sumitomo", "Falk", "Brevini",
  "Chemineer", "Davis-Standard", "Rossi", "Humboldt",
  "Bosch Rexroth", "Parker", "Eaton", "Amarillo",
];

// ─── Shared input style ───────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.2)",
  color: "white",
  padding: "0.65rem 0.875rem",
  fontFamily: "'Source Sans 3', sans-serif",
  fontSize: "0.9rem",
  outline: "none",
  borderRadius: "2px",
  width: "100%",
  transition: "border-color 0.2s",
};

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBg = scrolled
    ? "#000000"
    : "rgba(0,0,0,0.97)";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ backgroundColor: navBg, backdropFilter: "blur(8px)", boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.25)" : "none" }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Utility bar */}
      <div style={{ backgroundColor: C.green, color: "white" }} className="hidden md:block py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.72rem", letterSpacing: "0.1em" }}>
            24/7 EMERGENCY SERVICE &amp; FREE NATIONWIDE PICKUP &amp; DELIVERY
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:3463501464" className="flex items-center gap-1.5 hover:underline" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}>
              <Phone size={12} /> 346-350-1464
            </a>
            <a href="mailto:service@kmstx.com" className="flex items-center gap-1.5 hover:underline" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.78rem" }}>
              <Mail size={12} /> service@kmstx.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Kelsey Machine Services home">
          <img
            src={LOGO_WHITE}
            alt="Kelsey Machine Services Logo"
            style={{ height: 52, width: "auto" }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-7">
          {[
            { label: "Services", href: "#services" },
            { label: "Why KMS", href: "#why-kms" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Industries", href: "#industries" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "rgba(255,255,255,0.88)", letterSpacing: "0.07em", textTransform: "uppercase", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = C.green)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.88)")}
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:3463501464" className="flex items-center gap-2" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: C.greenLight, letterSpacing: "0.04em" }}>
            <Phone size={16} /> 346-350-1464
          </a>
          <a href="#contact" className="kms-btn-green" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
            Get Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: C.blueDark, borderTop: `1px solid rgba(120,165,70,0.3)` }} className="lg:hidden px-4 py-4 flex flex-col gap-3">
          {["Services", "Why KMS", "Testimonials", "Industries", "FAQ", "Contact"].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}
            >
              {item}
            </a>
          ))}
          <a href="tel:3463501464" className="kms-btn-green mt-2 justify-center">
            <Phone size={16} /> Call 346-350-1464
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "96px" }}
      aria-label="Hero — Kelsey Machine Services rotating equipment repair"
    >
      {/* BG image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_BG})` }} />
      {/* Gradient overlay — steel blue tinted, darker on left for text legibility */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, rgba(30,80,128,0.93) 0%, rgba(35,90,145,0.85) 45%, rgba(30,80,128,0.65) 100%)` }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — headline + CTAs */}
          <div>
            <div className="kms-label mb-3" style={{ color: C.greenLight }}>
              Houston, TX · Serving All 50 States + Canada &amp; Mexico
            </div>
            <h1 className="kms-headline text-white mb-5" style={{ fontSize: "clamp(3.4rem, 6.5vw, 5.5rem)" }}>
              YOUR PARTNER IN
              <br />
              <span style={{ color: C.green }}>ROTATING EQUIPMENT</span>
              <br />
              UPTIME
            </h1>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.1rem", color: C.textLight, lineHeight: 1.7, maxWidth: 520, marginBottom: "1.5rem" }}>
              Kelsey Machine Services delivers expert repair, rebuild, and maintenance for centrifuges, gearboxes, pumps, blowers, and hydraulic drives — backed by an industry-leading{" "}
              <strong style={{ color: C.greenLight }}>24-month warranty</strong> and available{" "}
              <strong style={{ color: C.greenLight }}>24/7 for emergencies</strong>.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: <Truck size={13} />, text: "Free Nationwide Pickup" },
                { icon: <Shield size={13} />, text: "24-Month Warranty" },
                { icon: <Zap size={13} />, text: "24/7 Emergency Service" },
                { icon: <Globe size={13} />, text: "All 50 States" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 px-3 py-1.5" style={{ background: "rgba(120,165,70,0.15)", border: "1px solid rgba(120,165,70,0.4)", color: C.greenLight, fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.78rem", letterSpacing: "0.05em", borderRadius: "2px" }}>
                  {icon} {text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="kms-btn-green" style={{ fontSize: "1rem", padding: "0.8rem 2rem" }}>
                Get a Free Quote <ArrowRight size={16} />
              </a>
              <a href="tel:3463501464" className="kms-btn-outline-white" style={{ fontSize: "1rem", padding: "0.8rem 2rem" }}>
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>

          {/* Right — lead form */}
          <div style={{ background: "rgba(26,37,53,0.95)", border: `1px solid rgba(120,165,70,0.35)`, padding: "2rem", backdropFilter: "blur(12px)", borderRadius: "2px" }}>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle size={48} style={{ color: C.green, margin: "0 auto 1rem" }} />
                <h3 className="kms-headline text-white mb-2" style={{ fontSize: "1.5rem" }}>REQUEST RECEIVED!</h3>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", color: C.textMuted, lineHeight: 1.6 }}>
                  A Kelsey Machine specialist will contact you as quickly as possible. For immediate assistance, call{" "}
                  <a href="tel:3463501464" style={{ color: C.green }}>346-350-1464</a>.
                </p>
              </div>
            ) : (
              <>
                <div className="kms-label mb-1" style={{ color: C.green }}>Get Equipment Help Now</div>
                <h2 className="kms-headline text-white mb-1" style={{ fontSize: "1.6rem" }}>REQUEST A FREE QUOTE</h2>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: C.textMuted, marginBottom: "1.25rem" }}>
                  A rotating equipment specialist will respond within the hour. Available 24/7.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  {[
                    { name: "name", placeholder: "Your Name *", type: "text", required: true },
                    { name: "company", placeholder: "Company / Plant", type: "text", required: false },
                    { name: "phone", placeholder: "Phone Number *", type: "tel", required: true },
                  ].map(({ name, placeholder, type, required }) => (
                    <input
                      key={name}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      value={form[name as keyof typeof form]}
                      onChange={e => setForm({ ...form, [name]: e.target.value })}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderColor = C.green)}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                    />
                  ))}
                  <select
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    style={{ ...inputStyle, background: C.darkBg2, color: form.service ? "white" : "rgba(255,255,255,0.45)" }}
                  >
                    <option value="">Service Needed</option>
                    <option value="centrifuge">Centrifuge Repair</option>
                    <option value="gearbox">Gearbox Repair</option>
                    <option value="pump">Pump Repair</option>
                    <option value="blower">Blower / Compressor Repair</option>
                    <option value="hydraulic">Hydraulic Drive Repair</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                  <textarea
                    placeholder="Describe the issue (optional)"
                    rows={2}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.target.style.borderColor = C.green)}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                  />
                  <button type="submit" className="kms-btn-green justify-center" style={{ fontSize: "1rem" }}>
                    Send Repair Request <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Diagonal cut to light section */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: 60, overflow: "hidden" }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <polygon points="0,60 1440,0 1440,60" fill={C.lightBg} />
        </svg>
      </div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    { icon: <Truck size={28} style={{ color: C.green }} />, title: "Free Nationwide Pickup", desc: "We come to you — at no charge, anywhere in the continental US, Canada, and Mexico." },
    { icon: <Shield size={28} style={{ color: C.green }} />, title: "24-Month Warranty", desc: "The best rebuilt warranty in the rotating equipment repair industry, period." },
    { icon: <Zap size={28} style={{ color: C.green }} />, title: "24/7 Emergency Service", desc: "When your equipment goes down, we respond immediately — day or night." },
    { icon: <Globe size={28} style={{ color: C.green }} />, title: "Nationwide Coverage", desc: "Serving all 50 states plus Canada and Mexico from our Houston, TX facility." },
  ];
  return (
    <section style={{ background: C.lightBg, paddingTop: "3.5rem", paddingBottom: "3.5rem" }} aria-label="Key differentiators">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col gap-2">
              <div style={{ width: 52, height: 52, background: "rgba(120,165,70,0.12)", border: "1px solid rgba(120,165,70,0.3)", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {icon}
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.26rem", color: C.blueDark }}>
                {title}
              </div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.06rem", color: C.textMid, lineHeight: 1.55 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Strip ──────────────────────────────────────────────────────────────
function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.blueMid} 60%, ${C.blueSky} 100%)`, padding: "4rem 0" }} aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }, i) => (
            <div key={label} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s` }}>
              <div className="kms-headline" style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", color: C.green, lineHeight: 1 }}>{value}</div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.5rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" style={{ background: C.white, padding: "5rem 0" }} aria-label="Our services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <div className="kms-label mb-2">What We Fix</div>
          <div className="kms-green-rule" />
          <h2 className="kms-headline" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: C.blueDark }}>
            COMPREHENSIVE ROTATING EQUIPMENT<br />REPAIR SERVICES
          </h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: C.textMid, maxWidth: 640, marginTop: "0.75rem", lineHeight: 1.7 }}>
            From emergency centrifuge rebuilds to scheduled gearbox overhauls, Kelsey Machine Services handles every aspect of rotating equipment repair with precision and speed. We service all major brands and back every repair with our industry-leading warranty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(svc => (
            <article key={svc.id} className="kms-service-card" style={{ background: C.lightBg, boxShadow: "0 2px 12px rgba(30,80,128,0.08)", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                <img src={svc.image} alt={`${svc.title} — Kelsey Machine Services`} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,80,128,0.65) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 10, left: 12, fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.68rem", color: C.greenLight, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {svc.keywords.split(",")[0].trim()}
                </div>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h3 className="kms-headline" style={{ fontSize: "1.3rem", color: C.blueDark, marginBottom: "0.5rem" }}>{svc.title}</h3>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: C.textMid, lineHeight: 1.65, marginBottom: "1rem" }}>{svc.description}</p>
                <a href={svc.href} style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: C.green, letterSpacing: "0.06em", textTransform: "uppercase", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why KMS ──────────────────────────────────────────────────────────────────
function WhyKMSSection() {
  const reasons = [
    { icon: <Shield size={28} style={{ color: C.green }} />, title: "Industry-Leading 24-Month Warranty", body: "We stand behind every repair with the best guarantee in the business. Our 24-month rebuilt warranty is a contractual commitment backed by decades of quality workmanship." },
    { icon: <Zap size={28} style={{ color: C.green }} />, title: "Faster Than the OEM", body: "Our large parts inventory and experienced team allow us to complete repairs in days, not weeks. We have rebuilt centrifuges in 10 days that the OEM said would take 8 weeks." },
    { icon: <CheckCircle size={28} style={{ color: C.green }} />, title: "All Major Brands Serviced", body: "We service every major brand of rotating equipment — Alfa Laval, Andritz, Bird, Sharples, Flottweg, Sulzer, Dodge, Sumitomo, Falk, Bosch Rexroth, and many more." },
    { icon: <Truck size={28} style={{ color: C.green }} />, title: "Free Pickup & Delivery Nationwide", body: "We come to you — at no charge. Our free pickup and delivery service covers all 50 states, plus Canada and Mexico. Simply call us and we handle the logistics." },
    { icon: <Globe size={28} style={{ color: C.green }} />, title: "40+ Years of Proven Expertise", body: "Since our founding, Kelsey Machine Services has built a reputation for honesty, quality, and reliability. Our engineers are among the most sought-after experts in the industry." },
    { icon: <Star size={28} style={{ color: C.green }} />, title: "Large Inventory of Rebuilt Equipment", body: "Need equipment fast? KMS maintains a large inventory of used and rebuilt centrifuges, gearboxes, pumps, and blowers — ready to ship. We can often provide a replacement while yours is being repaired." },
  ];

  return (
    <section id="why-kms" style={{ background: C.lightBg, padding: "5rem 0" }} aria-label="Why choose Kelsey Machine Services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img src={WORKSHOP_IMG} alt="Kelsey Machine Services professional repair facility" style={{ width: "100%", height: 460, objectFit: "cover", borderRadius: "2px", boxShadow: "0 8px 40px rgba(30,80,128,0.18)" }} loading="lazy" />
            <div style={{ position: "absolute", bottom: -16, right: -16, background: C.green, width: 120, height: 120, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "1rem", borderRadius: "2px" }}>
              <div className="kms-headline" style={{ fontSize: "2.5rem", lineHeight: 1, color: "white" }}>40+</div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "white", lineHeight: 1.3 }}>Years of Expertise</div>
            </div>
          </div>

          {/* Reasons */}
          <div>
            <div className="kms-label mb-3">The KMS Advantage</div>
            <div className="kms-green-rule" />
            <h2 className="kms-headline mb-6" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: C.blueDark }}>
              WHY INDUSTRY LEADERS<br />CHOOSE KELSEY MACHINE
            </h2>
            <div className="grid gap-5">
              {reasons.map(({ icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div style={{ flexShrink: 0, marginTop: 2 }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: C.blueDark, marginBottom: "0.25rem" }}>{title}</div>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem", color: C.textMid, lineHeight: 1.65 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(TESTIMONIALS.length / perPage);
  const visible = TESTIMONIALS.slice(current * perPage, current * perPage + perPage);

  return (
    <section id="testimonials" style={{ background: C.white, padding: "5rem 0" }} aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="kms-label mb-2">Client Success Stories</div>
            <div className="kms-green-rule" />
            <h2 className="kms-headline" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: C.blueDark }}>WHAT OUR CLIENTS SAY</h2>
          </div>
          <div className="flex gap-2">
            {[{ fn: () => setCurrent(c => (c - 1 + pages) % pages), icon: <ChevronLeft size={20} />, label: "Previous" },
              { fn: () => setCurrent(c => (c + 1) % pages), icon: <ChevronRight size={20} />, label: "Next" }].map(({ fn, icon, label }) => (
              <button key={label} onClick={fn} aria-label={`${label} testimonials`}
                style={{ width: 40, height: 40, background: C.blueDark, color: "white", border: "none", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = C.green)}
                onMouseLeave={e => (e.currentTarget.style.background = C.blueDark)}
              >{icon}</button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <blockquote key={i} className="kms-testimonial-card" style={{ background: C.lightBg, padding: "1.5rem", borderRadius: "2px", boxShadow: "0 2px 12px rgba(30,80,128,0.07)" }} itemScope itemType="https://schema.org/Review">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, si) => <Star key={si} size={14} fill={C.green} style={{ color: C.green }} />)}
              </div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.92rem", color: "#2d3748", lineHeight: 1.7, marginBottom: "1.25rem", fontStyle: "italic" }} itemProp="reviewBody">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div style={{ width: 40, height: 40, background: C.blueDark, color: C.green, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem" }}>{t.name.charAt(0)}</span>
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.blueDark }} itemProp="author">{t.name}</div>
                  <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.78rem", color: C.green, fontWeight: 600 }}>{t.title} · {t.service}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {[...Array(pages)].map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} aria-label={`Page ${i + 1}`}
              style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, background: i === current ? C.green : "#cbd5e0", border: "none", transition: "all 0.3s ease" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────
function IndustriesSection() {
  return (
    <section id="industries" style={{ background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.blueMid} 100%)`, padding: "4rem 0" }} aria-label="Industries served">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="kms-label-blue mb-3" style={{ color: C.greenLight }}>Sectors We Serve</div>
        <h2 className="kms-headline text-white mb-10" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
          PROUDLY SERVING A WIDE RANGE<br />OF INDUSTRIES
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {INDUSTRIES.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center gap-2 py-4 px-2"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(120,165,70,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(120,165,70,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}
            >
              <span style={{ fontSize: "1.75rem" }}>{icon}</span>
              <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.7rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.06em", textTransform: "uppercase", textAlign: "center", lineHeight: 1.3 }}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Brands ───────────────────────────────────────────────────────────────────
function BrandsSection() {
  return (
    <section style={{ background: C.darkBg, padding: "3rem 0" }} aria-label="Brands we service">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          Brands We Service &amp; Repair
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {BRANDS.map(brand => (
            <span key={brand}
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", padding: "0.35rem 0.875rem", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "2px", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = C.green; (e.currentTarget as HTMLElement).style.borderColor = "rgba(120,165,70,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"; }}
            >{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" style={{ background: C.lightBg, padding: "5rem 0" }} aria-label="Frequently asked questions">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="kms-label mb-3">Common Questions</div>
          <div className="kms-green-rule mx-auto" />
          <h2 className="kms-headline" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: C.blueDark }}>FREQUENTLY ASKED QUESTIONS</h2>
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: C.textMid, marginTop: "0.75rem" }}>
            Can't find your answer? Call us at <a href="tel:3463501464" style={{ color: C.green, fontWeight: 600 }}>346-350-1464</a> — we're available 24/7.
          </p>
        </div>
        <div style={{ border: `1px solid rgba(30,80,128,0.15)`, borderRadius: "2px", overflow: "hidden" }} itemScope itemType="https://schema.org/FAQPage">
          {FAQS.map((faq, i) => (
            <div key={i} className="kms-faq-item" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left"
                style={{ padding: "1.25rem 1.5rem", background: openIndex === i ? "rgba(30,80,128,0.06)" : "white", border: "none", color: C.blueDark, transition: "background 0.2s" }}
                aria-expanded={openIndex === i}
              >
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.02em" }} itemProp="name">{faq.q}</span>
                {openIndex === i
                  ? <ChevronUp size={18} style={{ color: C.green, flexShrink: 0 }} />
                  : <ChevronDown size={18} style={{ color: "rgba(30,80,128,0.4)", flexShrink: 0 }} />}
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 1.5rem 1.25rem", background: "white" }} itemScope itemType="https://schema.org/Answer">
                  <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textMid, lineHeight: 1.7 }} itemProp="text">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="contact" className="relative" style={{ padding: "5.5rem 0" }} aria-label="Contact and quote request">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${PUMP_IMG})` }} />
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, rgba(30,80,128,0.94) 0%, rgba(35,90,145,0.9) 100%)` }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="kms-label mb-3" style={{ color: C.greenLight }}>Ready to Get Started?</div>
        <h2 className="kms-headline text-white mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
          EXPERIENCE THE<br /><span style={{ color: C.green }}>KELSEY MACHINE DIFFERENCE</span>
        </h2>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.1rem", color: "rgba(255,255,255,0.82)", maxWidth: 560, margin: "0 auto 2rem", lineHeight: 1.7 }}>
          The right people, the right equipment, and the right technology — that's what keeps Kelsey Machine on the leading edge of rotating equipment service. Contact us today for a free, no-obligation quote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:3463501464" className="kms-btn-green" style={{ fontSize: "1.05rem", padding: "0.875rem 2.5rem" }}>
            <Phone size={18} /> Call 346-350-1464
          </a>
          <a href="mailto:service@kmstx.com" className="kms-btn-outline-white" style={{ fontSize: "1.05rem", padding: "0.875rem 2.5rem" }}>
            <Mail size={18} /> Email Us
          </a>
        </div>
        <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.83rem", color: "rgba(255,255,255,0.45)", marginTop: "1.5rem" }}>
          Available 24/7 for emergency service · Free pickup &amp; delivery · 24-month warranty on all repairs
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const serviceLinks = [
    { label: "Centrifuge Repair", href: "#services" },
    { label: "Gearbox Repair", href: "#services" },
    { label: "Pump Repair", href: "#services" },
    { label: "Blower & Compressor Repair", href: "#services" },
    { label: "Hydraulic Drive Service", href: "#services" },
    { label: "Emergency Repair", href: "#contact" },
  ];
  const companyLinks = [
    { label: "About Kelsey Machine", href: "#why-kms" },
    { label: "Why Choose KMS", href: "#why-kms" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Industries Served", href: "#industries" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact & Quote", href: "#contact" },
  ];

  return (
    <footer style={{ background: C.darkBg, borderTop: `3px solid ${C.green}` }} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={LOGO_WHITE} alt="Kelsey Machine Services" style={{ height: 60, width: "auto", marginBottom: "1rem" }} />
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: "1rem" }}>
              The right people, the right equipment, and the right technology — keeping Kelsey Machine on the leading edge of rotating equipment service since 1984.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { icon: <MapPin size={14} />, text: "814 Summer Park Dr, BLDG #600, Stafford TX 77477" },
                { icon: <Phone size={14} />, text: "346-350-1464", href: "tel:3463501464" },
                { icon: <Mail size={14} />, text: "service@kmstx.com", href: "mailto:service@kmstx.com" },
                { icon: <Clock size={14} />, text: "24/7 Emergency Service Available" },
              ].map(({ icon, text, href }) => (
                <div key={text} className="flex items-start gap-2">
                  <span style={{ color: C.green, marginTop: 2, flexShrink: 0 }}>{icon}</span>
                  {href
                    ? <a href={href} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.83rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{text}</a>
                    : <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.83rem", color: "rgba(255,255,255,0.6)" }}>{text}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: `2px solid ${C.green}`, display: "inline-block" }}>Our Services</div>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.375rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.green)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  ><ArrowRight size={12} style={{ color: C.green }} />{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: `2px solid ${C.green}`, display: "inline-block" }}>Company</div>
            <ul className="flex flex-col gap-2">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.375rem", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.green)}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                  ><ArrowRight size={12} style={{ color: C.green }} />{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency CTA */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: `2px solid ${C.green}`, display: "inline-block" }}>Emergency Service</div>
            <div style={{ background: "rgba(120,165,70,0.1)", border: "1px solid rgba(120,165,70,0.3)", borderRadius: "2px", padding: "1.25rem" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: C.green, marginBottom: "0.5rem" }}>EQUIPMENT DOWN?</div>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "1rem" }}>
                We respond immediately, 24 hours a day, 7 days a week. Free pickup available now.
              </p>
              <a href="tel:3463501464" className="kms-btn-green" style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem" }}>
                <Phone size={15} /> 346-350-1464
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "1.25rem 0" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-3">
          <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Kelsey Machine Services. All rights reserved. | Stafford, TX 77477
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map(link => (
              <a key={link} href="#" style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = C.green)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <TrustBar />
        <StatsSection />
        <ServicesSection />
        <WhyKMSSection />
        <TestimonialsSection />
        <IndustriesSection />
        <BrandsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
