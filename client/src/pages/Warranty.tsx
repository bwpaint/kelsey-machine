/**
 * Our Warranty Page
 * Primary KW: rotating equipment repair warranty, 24-month warranty
 */

import { Link } from "wouter";
import {
  NavBar,
  Footer,
  NewsletterBar,
  PageHero,
  FaqSection,
  C,
  KMS_PHONE,
  KMS_PHONE_HREF,
} from "@/components/KmsLayout";
import { CheckCircle, Shield } from "lucide-react";

const COVERED = [
  "All replaced bearings, seals, and gaskets",
  "All machined surfaces and restored fits",
  "All replaced gear sets and timing components",
  "All replaced impellers, rotors, and scroll sets",
  "All replaced valves, seats, pistons, and liners",
  "Labor and workmanship on all repairs performed",
];

const NOT_COVERED = [
  "Damage caused by improper installation or misalignment",
  "Damage caused by operating outside design parameters",
  "Damage caused by contamination after repair",
  "Normal wear items consumed in operation (packing, vanes, brushes)",
  "Damage caused by failure of connected equipment",
  "Equipment modified after repair without KMS authorization",
];

const FAQS = [
  {
    q: "What does the KMS 24-month warranty cover?",
    a: "The KMS 24-month warranty covers all parts replaced and all work performed during the repair — including bearings, seals, gaskets, machined surfaces, gear sets, impellers, rotors, valves, and labor. The warranty is in writing and included in your documentation package.",
  },
  {
    q: "How do I make a warranty claim?",
    a: "Call our main line at 346-350-1464 or email us to initiate a warranty claim. We'll arrange pickup of the equipment, inspect it, and determine the appropriate remedy — repair, rebuild, or replacement — at no charge to you.",
  },
  {
    q: "Does the warranty cover equipment that fails due to a different cause than the original repair?",
    a: "The warranty covers the specific work performed. If a different component fails due to an unrelated cause, that would be a new repair rather than a warranty claim. We'll always give you an honest assessment.",
  },
  {
    q: "Is the warranty transferable?",
    a: "The warranty follows the equipment for the 24-month period from the date of repair, regardless of ownership. Contact us to transfer warranty documentation.",
  },
  {
    q: "What is the industry standard warranty for rotating equipment repair?",
    a: "Most repair shops offer 90-day to 12-month warranties. KMS's 24-month warranty is significantly longer than the industry standard — and it's in writing, not just a verbal promise.",
  },
];

export default function Warranty() {
  return (
    <>
      <NavBar />
      <PageHero
        bgImage="/images/gearbox-open.webp"
        h1="Our 24-Month Rebuilt Warranty — In Writing, Not Just Words"
        subheading="Most repair shops give you a handshake and a 90-day warranty. We give you 24 months, in writing, on every single repair. That's not a marketing claim — it's a document you can hold us to."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Warranty" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div
            style={{
              background: "white",
              border: "2px solid #dde3ec",
              borderRadius: 4,
              padding: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "1.08rem",
                color: C.textDark,
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              At Kelsey Machine Services, we back every repair with an
              industry-leading 24-month rebuilt warranty. This isn't a limited
              warranty with a list of exclusions longer than the warranty itself
              — it's a straightforward commitment that the work we did will hold
              up. If it doesn't, we make it right. No runaround, no
              finger-pointing, no charge.
            </p>
          </div>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: "1.08rem",
              color: C.textDark,
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            The warranty documentation is included in every repair package we
            ship. It covers all parts replaced and all work performed — and it's
            backed by 40 years of reputation. We've been in business long enough
            to know that a warranty is only as good as the company standing
            behind it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div
              style={{
                background: C.lightBg,
                border: `2px solid ${C.green}`,
                borderRadius: 4,
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: "1.25rem",
                }}
              >
                <Shield size={24} style={{ color: C.green }} />
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    color: C.blueDark,
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  What's Covered
                </h2>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {COVERED.map(item => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <CheckCircle
                      size={16}
                      style={{ color: C.green, flexShrink: 0, marginTop: 3 }}
                    />
                    <span
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.95rem",
                        color: C.textDark,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: C.lightBg,
                border: `2px solid #dde3ec`,
                borderRadius: 4,
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: "1.25rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.3rem",
                    color: C.blueDark,
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  What's Not Covered
                </h2>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                }}
              >
                {NOT_COVERED.map(item => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        color: "#aaa",
                        flexShrink: 0,
                        marginTop: 2,
                        fontSize: "1rem",
                      }}
                    >
                      ✕
                    </span>
                    <span
                      style={{
                        fontFamily: "'Source Sans 3', sans-serif",
                        fontSize: "0.95rem",
                        color: C.textMid,
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              background: `linear-gradient(135deg, ${C.blueDark} 0%, ${C.darkBg} 100%)`,
              borderRadius: 4,
              padding: "2.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "1.75rem",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                marginBottom: "0.75rem",
              }}
            >
              24 Months. In Writing. Every Time.
            </div>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                maxWidth: 600,
              }}
            >
              Ready to get your equipment repaired by a shop that stands behind
              its work? Request a free quote or call our{" "}
              <Link
                href="/emergency-service"
                style={{
                  color: C.green,
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                24/7 emergency line
              </Link>{" "}
              — we're ready when you are.
            </p>
            <div className="flex flex-wrap gap-3">
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
      <FaqSection faqs={FAQS} pageName="KMS 24-Month Warranty" />
      <NewsletterBar />
      <Footer />
    </>
  );
}
