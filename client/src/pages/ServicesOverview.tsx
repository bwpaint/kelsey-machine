/**
 * Services Overview Page
 * Primary KW: rotating equipment repair services
 * Voice: Full Texas — bold, direct, witty, technically correct
 */

import { Link } from "wouter";
import {
  NavBar,
  Footer,
  NewsletterBar,
  PageHero,
  InlineQuoteForm,
  FaqSection,
  C,
  KMS_PHONE,
  KMS_PHONE_HREF,
} from "@/components/KmsLayout";
import { ArrowRight, CheckCircle } from "lucide-react";

const SERVICES = [
  {
    title: "Centrifuge Repair",
    desc: "Comprehensive repair, rebuild, and reconditioning for all types of industrial centrifuges — decanter, basket, disc stack, and more. We service all major brands including Alfa Laval, Andritz, Bird, Sharples, and Flottweg.",
    href: "/services/centrifuge-repair",
    kw: "centrifuge repair",
  },
  {
    title: "Gearbox Repair",
    desc: "Full-service gearbox repair and overhaul for speed reducers, speed increasers, planetary gearboxes, and cooling tower drives. We handle all phases from inspection to final balancing. Brands: Falk, Lufkin, Amarillo, Rexnord, Sumitomo, Flender, SEW, David Brown, Voith, and more.",
    href: "/services/gearbox-repair",
    kw: "gearbox repair",
  },
  {
    title: "Pump Repair & Rebuild",
    desc: "Expert repair for all pump types — centrifugal, vertical turbine, horizontal split case, and positive displacement. Impeller rebuilds, hard-facing, and seal replacement included. All major brands serviced.",
    href: "/pump-service",
    kw: "pump repair",
  },
  {
    title: "Blower Repair",
    desc: "Industrial blower repair, rebuild, and reconditioning — including Roots-style PD blowers, multi-stage centrifugals, and regenerative blowers. We service Roots, Tuthill, Aerzen, Hoffman, Spencer, and every other major manufacturer in the field.",
    href: "/services/industrial-blower-repair",
    kw: "blower repair",
  },
  {
    title: "Compressor Repair",
    desc: "Full-service industrial compressor repair and overhaul — centrifugal, reciprocating, rotary screw, and oil-flooded designs. Bearing replacement, impeller rebuild, dynamic balancing, and complete teardown-and-rebuild to OEM spec. Kaeser, Atlas Copco, Ingersoll Rand, Sullair, and more.",
    href: "/services/industrial-compressors",
    kw: "compressor repair",
  },
  {
    title: "Fluid End & Power End Repair",
    desc: "Specialized repair and refurbishment for oilfield mud pump fluid ends and power ends. We restore fluid end modules — one-piece, two-piece, L-shaped, and valve-over-valve — using proprietary welding and machining. Brands: Lewco, Kerr, NOV, Gardner Denver, Weatherford, Emsco, and more.",
    href: "/services/fluid-power-end-repair",
    kw: "fluid end repair",
  },
];

const DIFFERENTIATORS = [
  {
    title: "40+ Years of Experience",
    desc: "We've been doing this since before most of our competitors were in business. That experience shows in every repair.",
  },
  {
    title: "In-House Machine Shop",
    desc: "We don't outsource the precision work. Our in-house machining capability means faster turnaround and tighter tolerances.",
  },
  {
    title: "24-Month Written Warranty",
    desc: "Every repair is backed by our industry-leading 24-month rebuilt warranty — in writing. Not a verbal promise. A document.",
  },
  {
    title: "Free National Pickup",
    desc: "We'll come get your equipment anywhere in the continental U.S. No shipping hassle, no freight damage risk.",
  },
  {
    title: "24/7 Emergency Service",
    desc: "Our emergency line is answered every day of the year. When your equipment failure is shutting down production, we respond.",
  },
  {
    title: "All 50 States + Canada & Mexico",
    desc: "We serve facilities across North America. Distance is not a barrier to getting your equipment repaired right.",
  },
];

const FAQS = [
  {
    q: "What types of rotating equipment does KMS repair?",
    a: "KMS repairs centrifuges, gearboxes, industrial blowers, industrial compressors, and mud pump fluid ends and power ends. We also repair and recertify oil-filled oilfield tools. If it rotates or reciprocates in an industrial setting, there's a good chance we repair it.",
  },
  {
    q: "Does KMS repair equipment from all manufacturers?",
    a: "Yes. We repair equipment from all major manufacturers across all service categories. We are not limited to OEM service relationships — we repair any manufacturer's equipment.",
  },
  {
    q: "What is KMS's warranty on repairs?",
    a: "Every repair is backed by our industry-leading 24-month rebuilt warranty — in writing. This is a written warranty included in your documentation package. See our Warranty page for full details.",
  },
  {
    q: "Does KMS offer emergency repair service?",
    a: "Yes. Our 24/7 emergency line is answered every day of the year. We offer emergency intake, rush processing, and expedited return shipping for critical situations.",
  },
  {
    q: "Does KMS offer free pickup?",
    a: "Yes — we offer free national pickup for equipment repairs. We'll arrange pickup from your facility anywhere in the continental U.S. Call or submit a quote request to arrange pickup.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Turnaround depends on the type and extent of damage. Most repairs are completed in 1–3 weeks. For critical operations, we offer emergency service with significantly faster turnaround.",
  },
];

export default function ServicesOverview() {
  return (
    <>
      <NavBar />
      <PageHero
        bgImage="/images/kms-hero-bg.webp"
        h1="Rotating Equipment Repair Services — All Types, All Brands"
        subheading="One shop. Five service lines. Forty years of getting industrial rotating equipment back online — faster than the OEM, with a better warranty, and emergency service that actually answers the phone."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Intro row: paragraph left, quote form right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10 items-start">
            <div className="lg:col-span-2">
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "1.08rem",
                  color: C.textDark,
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Kelsey Machine Services has been the go-to rotating equipment
                repair shop for industrial facilities, oilfield operations, and
                petrochemical plants across the country for over 40 years. We
                repair centrifuges, gearboxes, blowers, compressors, and mud
                pump fluid ends and power ends — all in-house, with our own
                machining capability, and backed by a written{" "}
                <Link
                  href="/warranty"
                  style={{
                    color: C.green,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  24-month warranty
                </Link>
                . Our{" "}
                <Link
                  href="/emergency-service"
                  style={{
                    color: C.green,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  24/7 emergency service
                </Link>{" "}
                is answered every day of the year.
              </p>
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "1.08rem",
                  color: C.textDark,
                  lineHeight: 1.8,
                  marginTop: "1.25rem",
                }}
              >
                What separates KMS from other{" "}
                <strong>rotating equipment repair companies</strong> is our
                fully integrated in-house capability. We don’t subcontract the
                precision work — our own machine shop handles every bore, weld,
                and balance job under one roof in Stafford, Texas. That means
                tighter tolerances, faster turnaround, and a single point of
                accountability from teardown to test. Whether you need a{" "}
                <strong>centrifuge bowl and scroll rebuild</strong>, a{" "}
                <strong>parallel-shaft or planetary gearbox overhaul</strong>, a{" "}
                <strong>roots blower restoration</strong>, or a complete{" "}
                <strong>mud pump fluid end and power end rebuild</strong>, every
                job follows the same documented repair process and ships back to
                you with a full inspection report. We serve customers across all
                50 states, Canada, and Mexico, and our{" "}
                <strong>free nationwide pickup and delivery</strong> means
                geography is never a barrier to getting the best repair
                available.
              </p>
              <p
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: "1.08rem",
                  color: C.textDark,
                  lineHeight: 1.8,
                  marginTop: "1.25rem",
                }}
              >
                Industrial facilities, petrochemical plants, oilfield operators,
                and municipal water treatment facilities all depend on KMS
                because we understand that unplanned downtime is not an option.
                Our standard turnaround is <strong>72 hours</strong> from
                receipt of equipment, and our{" "}
                <strong>24/7 emergency repair service</strong> — answered every
                day of the year including weekends and holidays — means a
                certified KMS specialist is always available when a critical
                piece of rotating equipment fails unexpectedly. If you are
                searching for the{" "}
                <strong>
                  best companies for fluid end and power end repair services in
                  the U.S.
                </strong>
                , a{" "}
                <strong>
                  certified rotating equipment repair specialist near you
                </strong>
                , or simply a shop that will stand behind its work with a
                written warranty, Kelsey Machine Services has the experience,
                the equipment, and the track record to back it up. Call us today
                or submit a quote request — we respond within the hour.
              </p>
            </div>
            <div className="lg:col-span-1">
              <div style={{ position: "sticky", top: 100 }}>
                <InlineQuoteForm service="" dark={false} />
              </div>
            </div>
          </div>

          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: C.blueDark,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              marginBottom: "1.5rem",
              marginTop: "0.5rem",
            }}
          >
            Our Service Lines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SERVICES.map(({ title, desc, href }) => (
              <Link
                key={title}
                href={href}
                style={{
                  display: "block",
                  background: C.lightBg,
                  border: `2px solid #dde3ec`,
                  borderRadius: 4,
                  padding: "1.75rem",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = C.green;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#dde3ec";
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    color: C.blueDark,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    marginBottom: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {title}
                  <ArrowRight
                    size={18}
                    style={{ color: C.green, flexShrink: 0 }}
                  />
                </div>
                <p
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: "0.95rem",
                    color: C.textMid,
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </Link>
            ))}
          </div>

          <div
            style={{
              background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.darkBg} 100%)`,
              borderRadius: 4,
              padding: "3rem",
              marginBottom: "3rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: "0.5rem",
              }}
            >
              Why KMS?
            </h2>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.6,
                marginBottom: "2rem",
                maxWidth: 600,
              }}
            >
              There are a lot of repair shops out there. Here's what makes KMS
              different — and why facilities across North America keep calling
              us back.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {DIFFERENTIATORS.map(({ title, desc }) => (
                <div
                  key={title}
                  style={{
                    borderTop: `3px solid ${C.green}`,
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "white",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {title}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={KMS_PHONE_HREF}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: C.green,
                  color: "white",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.85rem 2rem",
                  borderRadius: 2,
                  textDecoration: "none",
                }}
              >
                Call {KMS_PHONE}
              </a>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "white",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "0.85rem 2rem",
                  borderRadius: 2,
                  border: "2px solid rgba(255,255,255,0.3)",
                  textDecoration: "none",
                }}
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FaqSection
        faqs={FAQS}
        pageName="Rotating Equipment Repair Services"
        showForm
        service=""
      />
      <NewsletterBar />
      <Footer />
    </>
  );
}
