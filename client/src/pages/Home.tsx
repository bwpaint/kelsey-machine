/**
 * KMS HOMEPAGE — Industrial Precision / Dark Steel Aesthetic
 * Design: Dark navy backgrounds (#0a1929), lime green accents (#8dc63f), white text
 * Typography: Barlow Condensed (headlines, 700/800) + Source Sans 3 (body, 400/500)
 * Layout: Full-bleed hero with diagonal cuts, offset service grid, trust-first structure
 * SEO: Semantic HTML5, Schema.org markup, AEO FAQ section, keyword-rich copy
 */

import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
  ArrowRight,
  Truck,
  Shield,
  Zap,
  Globe,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ─── Image URLs (CDN) ────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_hero_bg-FhL2AhnuEFCMaJqftGWfSv.webp";
const GEARBOX_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_gearbox-h5T3axMBYGX9CurgWAZUE6.webp";
const PUMP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_pump_repair-g86HADnbNUHRj7jQcs4iiJ.webp";
const WORKSHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_workshop-heC7X4jJCiyh8Q7vNLsLyL.webp";

// ─── Data ────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "centrifuge",
    title: "Centrifuge Repair",
    description:
      "Comprehensive repair, rebuild, and reconditioning for all types of industrial centrifuges — decanter, basket, disc stack, and more. We service all major brands including Alfa Laval, Andritz, Bird, Sharples, and Flottweg.",
    keywords: "centrifuge repair, decanter centrifuge repair, industrial centrifuge rebuild",
    image: HERO_BG,
    icon: "⚙️",
  },
  {
    id: "gearbox",
    title: "Gearbox Repair",
    description:
      "Full-service gearbox repair and overhaul for speed reducers, speed increasers, planetary gearboxes, and cooling tower drives. We handle all phases from inspection to final balancing.",
    keywords: "gearbox repair, industrial gearbox overhaul, speed reducer repair",
    image: GEARBOX_IMG,
    icon: "🔧",
  },
  {
    id: "pump",
    title: "Pump Repair & Rebuild",
    description:
      "Expert repair for all pump types — centrifugal, vertical turbine, horizontal split case, positive displacement, and more. Impeller rebuilds, hard-facing, and seal replacement included.",
    keywords: "pump repair, centrifugal pump repair, industrial pump rebuild",
    image: PUMP_IMG,
    icon: "💧",
  },
  {
    id: "blower",
    title: "Blower & Compressor Repair",
    description:
      "Keep your operations running at peak capacity with our comprehensive blower and compressor repair services. We service positive displacement, screw, and regenerative blowers from all major manufacturers.",
    keywords: "blower repair, compressor repair, industrial blower rebuild",
    image: WORKSHOP_IMG,
    icon: "🌀",
  },
  {
    id: "hydraulic",
    title: "Hydraulic Drive Service",
    description:
      "Over 40 years of experience rebuilding hydraulic pumps and drives. We service Bosch Rexroth, Parker, Eaton, and all major brands with rapid turnaround to minimize your downtime.",
    keywords: "hydraulic drive repair, hydraulic pump rebuild, hydraulic service",
    image: GEARBOX_IMG,
    icon: "⚡",
  },
];

const STATS = [
  { value: "40+", label: "Years of Proven Expertise", suffix: "" },
  { value: "24", label: "Month Rebuilt Warranty", suffix: "-Mo" },
  { value: "50", label: "States Served Nationwide", suffix: "" },
  { value: "72", label: "Hour Emergency Turnaround", suffix: "hr" },
];

const TESTIMONIALS = [
  {
    quote:
      "Our extruder gearbox crashed. We replaced it with a 'so called' rebuilt spare. We shipped the crashed gearbox to Kelsey Machine. They repaired it and charged us much less than the last company we sent our gearbox to, and their workmanship was great.",
    name: "Michael Cieszinski",
    title: "Plant Manager",
    service: "Gearbox Repair",
  },
  {
    quote:
      "We had our Decanter Centrifuge down and out of service. Our regular centrifuge repair company said it would be at least 8 weeks before they could get to it. KMS was able to rebuild our Centrifuge within 10 days and do it for less than their competition.",
    name: "James Basset",
    title: "Plant Manager",
    service: "Centrifuge Repair",
  },
  {
    quote:
      "Since 2011 Kelsey Machine Services has been repairing our Rotary Airlocks and Amarillo Gearboxes. Before that time, we would only go back to the OEM for service. But Kelsey has been beating the OEM's price and offering great service.",
    name: "Jon Sottile",
    title: "Engineering Manager",
    service: "Gearbox Repair",
  },
  {
    quote:
      "Kelsey Machine Services is a reputable company. I've had some terrible experiences in the past with shady repair companies. But Kelsey Machine has always been honest and stands behind their warranty. They always do what they say.",
    name: "Oscar Garcia",
    title: "Buyer",
    service: "General Repair",
  },
  {
    quote:
      "We sent our Centrifuge to the OEM for service. After evaluating, they indicated the unit was beyond repair and recommended we replace it. Before purchasing a new one, we contacted Kelsey Machine. They were confident they could save the unit. After 20 months the machine is still running without any issues.",
    name: "Marilyn Offerman",
    title: "Purchasing Manager",
    service: "Centrifuge Repair",
  },
  {
    quote:
      "We had a Bosch Rexroth Hydraulic pump go down and we did not have a backup. We needed it back running ASAP. We contacted Kelsey Machine in Tomball TX who were able to pick up our pump and repair it within 72 hours. Kelsey Machine is the only company we will send our Hydraulic pumps to for service.",
    name: "Byron Gilbert",
    title: "Reliability Engineer",
    service: "Hydraulic Repair",
  },
  {
    quote:
      "Kelsey Machine has been a vendor with my company since 2004. Their workmanship and ability to offer fast turnaround time is outstanding. I highly recommend KMS for gearbox repair service.",
    name: "Kenneth Sung",
    title: "Operations Manager",
    service: "Gearbox Repair",
  },
  {
    quote:
      "After years of frustration trying to find a good source for Blower repair, we finally found Kelsey Machine. They evaluate the problem and supply us with a free repair quote. They have been rebuilding our blowers for 2 years. I recommend KMS to all of our other plant sites.",
    name: "Michael Prater",
    title: "Reliability Manager",
    service: "Blower Repair",
  },
  {
    quote:
      "I will only trust KMS to service my Centrifugal Pumps. They have been servicing our pumps for over a decade. I have not found another company to beat their work. I'm a very satisfied customer.",
    name: "David Jackson",
    title: "Maintenance Supervisor",
    service: "Pump Repair",
  },
];

const FAQS = [
  {
    q: "What types of rotating equipment does Kelsey Machine repair?",
    a: "Kelsey Machine Services repairs a comprehensive range of rotating equipment, including industrial centrifuges (decanter, basket, disc stack), gearboxes (speed reducers, speed increasers, planetary), pumps (centrifugal, vertical turbine, horizontal split case), blowers and compressors (positive displacement, screw, regenerative), and hydraulic drives and pumps. We service all major brands.",
  },
  {
    q: "What warranty does Kelsey Machine offer on repairs?",
    a: "We offer an industry-leading 24-month rebuilt warranty on all repaired and rebuilt equipment. This is the best guarantee in the rotating equipment repair industry and reflects our confidence in the quality of our workmanship.",
  },
  {
    q: "Does Kelsey Machine offer 24/7 emergency repair service?",
    a: "Yes. We provide 24/7 emergency repair services, including free pickup and delivery nationwide. When your equipment goes down, call us at 346-350-1464 and we will respond immediately to minimize your downtime.",
  },
  {
    q: "How quickly can Kelsey Machine repair my equipment?",
    a: "Our large inventory of parts and experienced team allow us to offer rapid turnaround times — often significantly faster than the OEM. We have completed centrifuge rebuilds in as little as 10 days and hydraulic pump repairs within 72 hours.",
  },
  {
    q: "Does Kelsey Machine offer free pickup and delivery?",
    a: "Yes. We offer free pickup and delivery for all repair jobs, nationwide across all 50 states, plus Canada and Mexico. Simply call us and we will arrange pickup at your facility.",
  },
  {
    q: "What brands of rotating equipment does Kelsey Machine service?",
    a: "We service all major brands, including Alfa Laval, Andritz, Bird, Sharples, Flottweg, Sulzer, Dodge, Sumitomo, Falk, Brevini, Chemineer, Davis-Standard, Rossi, Bosch Rexroth, and many more. If you don't see your brand listed, call us — we likely service it.",
  },
  {
    q: "Can Kelsey Machine repair equipment the OEM says is beyond repair?",
    a: "In many cases, yes. We have successfully rebuilt centrifuges and other equipment that OEMs declared beyond repair, saving our customers the cost of purchasing new equipment. Our engineers will provide an honest assessment before recommending a course of action.",
  },
  {
    q: "What industries does Kelsey Machine serve?",
    a: "We serve a wide range of industries, including oil and gas, petrochemical, refining, food and beverage, wastewater treatment, power generation, pulp and paper, pharmaceutical, and general manufacturing.",
  },
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
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#0a1929" : "rgba(10,25,41,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: scrolled ? "1px solid rgba(141,198,63,0.2)" : "none",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Top utility bar */}
      <div
        style={{ backgroundColor: "#8dc63f", color: "#0a1929" }}
        className="text-xs font-semibold py-1.5 px-4 hidden md:block"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span style={{ fontFamily: "'Barlow', sans-serif", letterSpacing: "0.08em" }}>
            24/7 EMERGENCY SERVICE & FREE NATIONWIDE PICKUP
          </span>
          <div className="flex items-center gap-6">
            <a href="tel:3463501464" className="flex items-center gap-1 hover:underline">
              <Phone size={12} /> 346-350-1464
            </a>
            <a href="mailto:service@kmstx.com" className="flex items-center gap-1 hover:underline">
              <Mail size={12} /> service@kmstx.com
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3" aria-label="Kelsey Machine Services home">
          <div
            className="flex items-center justify-center rounded"
            style={{ width: 44, height: 44, background: "#8dc63f" }}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "#0a1929",
                letterSpacing: "0.05em",
              }}
            >
              KMS
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "white",
                letterSpacing: "0.04em",
                lineHeight: 1.1,
              }}
            >
              KELSEY MACHINE
            </div>
            <div
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: "0.65rem",
                color: "#8dc63f",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              SERVICES
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6">
          {["Services", "Why KMS", "Testimonials", "Industries", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8dc63f")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:3463501464"
            className="flex items-center gap-2"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#8dc63f",
              letterSpacing: "0.05em",
            }}
          >
            <Phone size={16} /> 346-350-1464
          </a>
          <a
            href="#contact"
            className="kms-btn-primary"
            style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
          >
            Get Free Quote
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{ backgroundColor: "#0d2137", borderTop: "1px solid rgba(141,198,63,0.2)" }}
          className="lg:hidden px-4 py-4 flex flex-col gap-3"
        >
          {["Services", "Why KMS", "Testimonials", "Industries", "FAQ", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "white",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.5rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {item}
            </a>
          ))}
          <a href="tel:3463501464" className="kms-btn-primary mt-2 justify-center">
            <Phone size={16} /> Call 346-350-1464
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "88px" }}
      aria-label="Hero section"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        role="img"
        aria-label="Industrial rotating equipment repair workshop"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,25,41,0.96) 0%, rgba(10,25,41,0.88) 50%, rgba(10,25,41,0.75) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline + CTAs */}
          <div>
            <div className="kms-label mb-3">
              Houston, TX · Serving All 50 States + Canada & Mexico
            </div>
            <h1
              className="kms-headline text-white mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              YOUR PARTNER IN
              <br />
              <span style={{ color: "#8dc63f" }}>ROTATING EQUIPMENT</span>
              <br />
              UPTIME
            </h1>
            <p
              className="text-gray-300 mb-6 leading-relaxed"
              style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.1rem", maxWidth: "520px" }}
            >
              Kelsey Machine Services delivers expert repair, rebuild, and maintenance for
              centrifuges, gearboxes, pumps, blowers, and hydraulic drives — backed by an
              industry-leading <strong style={{ color: "#8dc63f" }}>24-month warranty</strong> and
              available <strong style={{ color: "#8dc63f" }}>24/7 for emergencies</strong>.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: <Truck size={14} />, text: "Free Nationwide Pickup" },
                { icon: <Shield size={14} />, text: "24-Month Warranty" },
                { icon: <Zap size={14} />, text: "24/7 Emergency Service" },
                { icon: <Globe size={14} />, text: "All 50 States" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3 py-1.5 rounded"
                  style={{
                    background: "rgba(141,198,63,0.12)",
                    border: "1px solid rgba(141,198,63,0.3)",
                    color: "#8dc63f",
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.78rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {icon} {text}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="kms-btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </a>
              <a href="tel:3463501464" className="kms-btn-outline">
                <Phone size={16} /> Call Now: 346-350-1464
              </a>
            </div>
          </div>

          {/* Right: Lead capture form */}
          <div
            className="rounded-sm"
            style={{
              background: "rgba(13,33,55,0.95)",
              border: "1px solid rgba(141,198,63,0.3)",
              padding: "2rem",
              backdropFilter: "blur(12px)",
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle size={48} style={{ color: "#8dc63f", margin: "0 auto 1rem" }} />
                <h3
                  className="kms-headline text-white mb-2"
                  style={{ fontSize: "1.5rem" }}
                >
                  REQUEST RECEIVED!
                </h3>
                <p className="text-gray-300">
                  A Kelsey Machine specialist will contact you as quickly as possible. For immediate
                  assistance, call{" "}
                  <a href="tel:3463501464" style={{ color: "#8dc63f" }}>
                    346-350-1464
                  </a>
                  .
                </p>
              </div>
            ) : (
              <>
                <div className="kms-label mb-1">Get Equipment Help Now</div>
                <h2
                  className="kms-headline text-white mb-1"
                  style={{ fontSize: "1.6rem" }}
                >
                  REQUEST A FREE QUOTE
                </h2>
                <p
                  className="text-gray-400 mb-4"
                  style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.9rem" }}
                >
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
                      value={formData[name as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "white",
                        padding: "0.65rem 0.875rem",
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.9rem",
                        outline: "none",
                        borderRadius: "2px",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#8dc63f")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  ))}
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      background: "#0d2137",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: formData.service ? "white" : "rgba(255,255,255,0.5)",
                      padding: "0.65rem 0.875rem",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.9rem",
                      outline: "none",
                      borderRadius: "2px",
                    }}
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
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "white",
                      padding: "0.65rem 0.875rem",
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.9rem",
                      outline: "none",
                      borderRadius: "2px",
                      resize: "none",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#8dc63f")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                  />
                  <button type="submit" className="kms-btn-primary justify-center">
                    Send Repair Request <ArrowRight size={16} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Diagonal bottom cut */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "60px", overflow: "hidden" }}
      >
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <polygon points="0,60 1440,0 1440,60" fill="#f4f6f8" />
        </svg>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    {
      icon: <Truck size={28} style={{ color: "#8dc63f" }} />,
      title: "Free Nationwide Pickup",
      desc: "We come to you — at no charge, anywhere in the continental US.",
    },
    {
      icon: <Shield size={28} style={{ color: "#8dc63f" }} />,
      title: "24-Month Warranty",
      desc: "The best rebuilt warranty in the rotating equipment repair industry.",
    },
    {
      icon: <Zap size={28} style={{ color: "#8dc63f" }} />,
      title: "24/7 Emergency Service",
      desc: "When your equipment goes down, we respond immediately — day or night.",
    },
    {
      icon: <Globe size={28} style={{ color: "#8dc63f" }} />,
      title: "Nationwide Coverage",
      desc: "Serving all 50 states, plus Canada and Mexico.",
    },
  ];

  return (
    <section
      style={{ background: "#f4f6f8", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}
      aria-label="Key differentiators"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-start gap-2">
              <div
                className="flex items-center justify-center rounded"
                style={{ width: 52, height: 52, background: "rgba(141,198,63,0.12)", border: "1px solid rgba(141,198,63,0.3)" }}
              >
                {icon}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#0a1929",
                  letterSpacing: "0.02em",
                }}
              >
                {title}
              </div>
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.88rem",
                  color: "#4a5568",
                  lineHeight: 1.5,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{ background: "#0a1929", padding: "4rem 0" }}
      aria-label="Company statistics"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label, suffix }, i) => (
            <div
              key={label}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div
                className="kms-headline"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#8dc63f", lineHeight: 1 }}
              >
                {value}
                <span style={{ fontSize: "0.5em", verticalAlign: "super" }}>{suffix}</span>
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      style={{ background: "#f4f6f8", padding: "5rem 0" }}
      aria-label="Our services"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <div className="kms-label" style={{ color: "#6fa32e" }}>
            What We Fix
          </div>
          <div className="kms-green-rule" />
          <h2
            className="kms-headline"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0a1929" }}
          >
            COMPREHENSIVE ROTATING EQUIPMENT
            <br />
            REPAIR SERVICES
          </h2>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "1.05rem",
              color: "#4a5568",
              maxWidth: "640px",
              marginTop: "0.75rem",
              lineHeight: 1.7,
            }}
          >
            From emergency centrifuge rebuilds to scheduled gearbox overhauls, Kelsey Machine
            Services handles every aspect of rotating equipment repair with precision and speed.
            We service all major brands and back every repair with our industry-leading warranty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc) => (
            <article
              key={svc.id}
              className="kms-service-card rounded-sm overflow-hidden"
              style={{ background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}
              aria-label={svc.title}
            >
              <div
                className="relative overflow-hidden"
                style={{ height: "200px" }}
              >
                <img
                  src={svc.image}
                  alt={`${svc.title} at Kelsey Machine Services`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,25,41,0.7) 0%, transparent 60%)" }}
                />
                <div
                  className="absolute bottom-3 left-3 kms-label"
                  style={{ color: "#8dc63f", fontSize: "0.7rem" }}
                >
                  {svc.keywords.split(",")[0].trim()}
                </div>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h3
                  className="kms-headline"
                  style={{ fontSize: "1.3rem", color: "#0a1929", marginBottom: "0.5rem" }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.9rem",
                    color: "#4a5568",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {svc.description}
                </p>
                <a
                  href={`#contact`}
                  className="flex items-center gap-1"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "#6fa32e",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  Get a Quote <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyKMSSection() {
  const reasons = [
    {
      icon: <Shield size={32} style={{ color: "#8dc63f" }} />,
      title: "Industry-Leading 24-Month Warranty",
      body: "We stand behind every repair with the best guarantee in the business. Our 24-month rebuilt warranty is not a marketing claim — it is a contractual commitment backed by decades of quality workmanship.",
    },
    {
      icon: <Zap size={32} style={{ color: "#8dc63f" }} />,
      title: "Faster Than the OEM",
      body: "Our large inventory of parts and experienced team allow us to complete repairs in days, not weeks. We have rebuilt centrifuges in 10 days that the OEM said would take 8 weeks.",
    },
    {
      icon: <CheckCircle size={32} style={{ color: "#8dc63f" }} />,
      title: "All Major Brands Serviced",
      body: "We service every major brand of rotating equipment, including Alfa Laval, Andritz, Bird, Sharples, Flottweg, Sulzer, Dodge, Sumitomo, Falk, Bosch Rexroth, and many more.",
    },
    {
      icon: <Truck size={32} style={{ color: "#8dc63f" }} />,
      title: "Free Pickup & Delivery Nationwide",
      body: "We come to you — at no charge. Our free pickup and delivery service covers all 50 states, plus Canada and Mexico. Simply call us and we will handle the logistics.",
    },
    {
      icon: <Globe size={32} style={{ color: "#8dc63f" }} />,
      title: "40+ Years of Proven Expertise",
      body: "Since our founding, Kelsey Machine Services has built a reputation for honesty, quality, and reliability. Our engineers are among the most sought-after experts in the rotating equipment repair industry.",
    },
    {
      icon: <Star size={32} style={{ color: "#8dc63f" }} />,
      title: "Large Inventory of Rebuilt Equipment",
      body: "Need equipment fast? KMS maintains a large inventory of used and rebuilt centrifuges, gearboxes, pumps, and blowers — ready to ship. We can often provide a replacement unit while yours is being repaired.",
    },
  ];

  return (
    <section
      id="why-kms"
      style={{ background: "#0d2137", padding: "5rem 0" }}
      aria-label="Why choose Kelsey Machine Services"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src={WORKSHOP_IMG}
              alt="Kelsey Machine Services professional repair facility"
              className="w-full rounded-sm"
              style={{ height: "460px", objectFit: "cover" }}
              loading="lazy"
            />
            <div
              className="absolute -bottom-4 -right-4 rounded-sm flex flex-col items-center justify-center"
              style={{
                background: "#8dc63f",
                color: "#0a1929",
                width: 120,
                height: 120,
                textAlign: "center",
                padding: "1rem",
              }}
            >
              <div
                className="kms-headline"
                style={{ fontSize: "2.5rem", lineHeight: 1, color: "#0a1929" }}
              >
                40+
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0a1929",
                  lineHeight: 1.3,
                }}
              >
                Years of Expertise
              </div>
            </div>
          </div>

          {/* Right: Reasons */}
          <div>
            <div className="kms-label mb-3">The KMS Advantage</div>
            <div className="kms-green-rule" />
            <h2
              className="kms-headline text-white mb-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              WHY INDUSTRY LEADERS
              <br />
              CHOOSE KELSEY MACHINE
            </h2>
            <div className="grid gap-5">
              {reasons.map(({ icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 mt-0.5">{icon}</div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "white",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {title}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.6,
                      }}
                    >
                      {body}
                    </p>
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

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const perPage = 3;
  const total = TESTIMONIALS.length;
  const pages = Math.ceil(total / perPage);

  const prev = () => setCurrent((c) => (c - 1 + pages) % pages);
  const next = () => setCurrent((c) => (c + 1) % pages);

  const visible = TESTIMONIALS.slice(current * perPage, current * perPage + perPage);

  return (
    <section
      id="testimonials"
      style={{ background: "#f4f6f8", padding: "5rem 0" }}
      aria-label="Customer testimonials"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="kms-label" style={{ color: "#6fa32e" }}>
              Client Success Stories
            </div>
            <div className="kms-green-rule" />
            <h2
              className="kms-headline"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#0a1929" }}
            >
              WHAT OUR CLIENTS SAY
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="flex items-center justify-center rounded-sm"
              style={{
                width: 40,
                height: 40,
                background: "#0a1929",
                color: "white",
                border: "none",
                transition: "background 0.2s",
              }}
              aria-label="Previous testimonials"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#8dc63f")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0a1929")}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="flex items-center justify-center rounded-sm"
              style={{
                width: 40,
                height: 40,
                background: "#0a1929",
                color: "white",
                border: "none",
                transition: "background 0.2s",
              }}
              aria-label="Next testimonials"
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#8dc63f")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0a1929")}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <blockquote
              key={i}
              className="kms-testimonial-card rounded-sm"
              style={{
                background: "white",
                padding: "1.5rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, si) => (
                  <Star key={si} size={14} fill="#8dc63f" style={{ color: "#8dc63f" }} />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.92rem",
                  color: "#2d3748",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                  fontStyle: "italic",
                }}
                itemProp="reviewBody"
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: 40, height: 40, background: "#0a1929", color: "#8dc63f" }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#0a1929",
                    }}
                    itemProp="author"
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.78rem",
                      color: "#6fa32e",
                      fontWeight: 600,
                    }}
                  >
                    {t.title} · {t.service}
                  </div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(pages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? "#8dc63f" : "#cbd5e0",
                border: "none",
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to testimonial page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section
      id="industries"
      style={{ background: "#0a1929", padding: "4rem 0" }}
      aria-label="Industries served"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="kms-label mb-3">Sectors We Serve</div>
        <h2
          className="kms-headline text-white mb-10"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          PROUDLY SERVING A WIDE RANGE
          <br />
          OF INDUSTRIES
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {INDUSTRIES.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center gap-2 py-4 px-2 rounded-sm"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(141,198,63,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(141,198,63,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <span style={{ fontSize: "1.75rem" }}>{icon}</span>
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section
      style={{ background: "#1e2d3d", padding: "3rem 0" }}
      aria-label="Brands we service"
    >
      <div className="max-w-7xl mx-auto px-4">
        <p
          className="text-center mb-6"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Brands We Service & Repair
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.05em",
                padding: "0.35rem 0.875rem",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "2px",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#8dc63f";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(141,198,63,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ background: "#0d2137", padding: "5rem 0" }}
      aria-label="Frequently asked questions"
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="kms-label mb-3">Common Questions</div>
          <div className="kms-green-rule mx-auto" />
          <h2
            className="kms-headline text-white"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              marginTop: "0.75rem",
            }}
          >
            Can't find your answer? Call us at{" "}
            <a href="tel:3463501464" style={{ color: "#8dc63f" }}>
              346-350-1464
            </a>{" "}
            — we're available 24/7.
          </p>
        </div>

        <div
          className="rounded-sm overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="kms-faq-item"
              itemScope
              itemType="https://schema.org/Question"
              itemProp="mainEntity"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left"
                style={{
                  padding: "1.25rem 1.5rem",
                  background: openIndex === i ? "rgba(141,198,63,0.08)" : "transparent",
                  border: "none",
                  color: "white",
                  transition: "background 0.2s",
                }}
                aria-expanded={openIndex === i}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    letterSpacing: "0.02em",
                  }}
                  itemProp="name"
                >
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <ChevronUp size={18} style={{ color: "#8dc63f", flexShrink: 0 }} />
                ) : (
                  <ChevronDown size={18} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }} />
                )}
              </button>
              {openIndex === i && (
                <div
                  style={{ padding: "0 1.5rem 1.25rem" }}
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.95rem",
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.7,
                    }}
                    itemProp="text"
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      id="contact"
      className="relative"
      style={{ padding: "5rem 0" }}
      aria-label="Contact and quote request"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${PUMP_IMG})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,25,41,0.92)" }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="kms-label mb-3">Ready to Get Started?</div>
        <h2
          className="kms-headline text-white mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          EXPERIENCE THE
          <br />
          <span style={{ color: "#8dc63f" }}>KELSEY MACHINE DIFFERENCE</span>
        </h2>
        <p
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            maxWidth: "560px",
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}
        >
          The right people, the right equipment, and the right technology — that's what keeps
          Kelsey Machine on the leading edge of rotating equipment service. Contact us today for
          a free, no-obligation quote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:3463501464" className="kms-btn-primary" style={{ fontSize: "1.05rem", padding: "0.875rem 2.5rem" }}>
            <Phone size={18} /> Call 346-350-1464
          </a>
          <a href="mailto:service@kmstx.com" className="kms-btn-outline" style={{ fontSize: "1.05rem", padding: "0.875rem 2.5rem" }}>
            <Mail size={18} /> Email Us
          </a>
        </div>
        <p
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.45)",
            marginTop: "1.5rem",
          }}
        >
          Available 24/7 for emergency service · Free pickup & delivery · 24-month warranty on all repairs
        </p>
      </div>
    </section>
  );
}

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
    <footer
      style={{ background: "#0a1929", borderTop: "1px solid rgba(141,198,63,0.2)" }}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex items-center justify-center rounded"
                style={{ width: 44, height: 44, background: "#8dc63f" }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#0a1929",
                  }}
                >
                  KMS
                </span>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "white",
                    letterSpacing: "0.04em",
                    lineHeight: 1.1,
                  }}
                >
                  KELSEY MACHINE
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.6rem",
                    color: "#8dc63f",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  SERVICES
                </div>
              </div>
            </div>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                marginBottom: "1rem",
              }}
            >
              The right people, the right equipment, and the right technology — keeping Kelsey
              Machine on the leading edge of rotating equipment service since 1984.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { icon: <MapPin size={14} />, text: "814 Summer Park Dr, BLDG #600, Stafford TX 77477" },
                { icon: <Phone size={14} />, text: "346-350-1464", href: "tel:3463501464" },
                { icon: <Mail size={14} />, text: "service@kmstx.com", href: "mailto:service@kmstx.com" },
                { icon: <Clock size={14} />, text: "24/7 Emergency Service Available" },
              ].map(({ icon, text, href }) => (
                <div key={text} className="flex items-start gap-2">
                  <span style={{ color: "#8dc63f", marginTop: "2px", flexShrink: 0 }}>{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.83rem",
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                      }}
                    >
                      {text}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.83rem",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "white",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                borderBottom: "2px solid #8dc63f",
                display: "inline-block",
              }}
            >
              Our Services
            </div>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8dc63f")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                  >
                    <ArrowRight size={12} style={{ color: "#8dc63f" }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "white",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                borderBottom: "2px solid #8dc63f",
                display: "inline-block",
              }}
            >
              Company
            </div>
            <ul className="flex flex-col gap-2">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8dc63f")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                  >
                    <ArrowRight size={12} style={{ color: "#8dc63f" }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency CTA */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "white",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                borderBottom: "2px solid #8dc63f",
                display: "inline-block",
              }}
            >
              Emergency Service
            </div>
            <div
              style={{
                background: "rgba(141,198,63,0.08)",
                border: "1px solid rgba(141,198,63,0.25)",
                borderRadius: "2px",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#8dc63f",
                  marginBottom: "0.5rem",
                }}
              >
                EQUIPMENT DOWN?
              </div>
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                We respond immediately, 24 hours a day, 7 days a week. Free pickup available now.
              </p>
              <a
                href="tel:3463501464"
                className="kms-btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem" }}
              >
                <Phone size={15} /> 346-350-1464
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "1.25rem 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-3">
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            © {new Date().getFullYear()} Kelsey Machine Services. All rights reserved. | Stafford, TX 77477
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#8dc63f")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.35)")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
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
