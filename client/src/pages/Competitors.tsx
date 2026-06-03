/**
 * Why KMS Beats the Competition — comparison landing page.
 * Used as a Google Ads destination URL (/competitors) for queries comparing
 * rotating equipment repair shops. Does not name competitors directly; the page
 * frames the comparison around objective service criteria.
 */

import { NavBar, Footer, NewsletterBar, PageHero, InlineQuoteForm, WarrantyCallout, FreeNationwidePickupCallout, EmergencyCallout, C, KMS_PHONE, KMS_PHONE_HREF } from "@/components/KmsLayout";
import { CheckCircle, X, ArrowRight, Shield, Truck, Clock, Award } from "lucide-react";

const COMPARISON = [
  {
    factor: "Warranty Length",
    kms: "24-month written warranty",
    typical: "30 to 90 days (verbal)",
    advantage: "kms",
  },
  {
    factor: "Pickup & Delivery",
    kms: "Free, anywhere in the continental U.S.",
    typical: "You arrange and pay for freight",
    advantage: "kms",
  },
  {
    factor: "Emergency Response",
    kms: "24/7 — every day, every hour",
    typical: "Business hours only",
    advantage: "kms",
  },
  {
    factor: "In-House Machining",
    kms: "Full machine shop on site — no outsourcing",
    typical: "Often outsourced (adds 2-4 weeks)",
    advantage: "kms",
  },
  {
    factor: "Dynamic Balancing",
    kms: "ISO 1940 G2.5 standard, G1.0 available",
    typical: "G6.3 or unspecified",
    advantage: "kms",
  },
  {
    factor: "Documentation",
    kms: "As-found, as-left, material certs, balance reports",
    typical: "Invoice only",
    advantage: "kms",
  },
  {
    factor: "Equipment Types Serviced",
    kms: "Centrifuges, gearboxes, blowers, compressors, pumps, fluid ends",
    typical: "Usually specialized in one or two",
    advantage: "kms",
  },
  {
    factor: "Years in Business",
    kms: "40+ years (since 1983)",
    typical: "Varies — many less than 10 years",
    advantage: "kms",
  },
  {
    factor: "Geographic Reach",
    kms: "All 50 states + Canada + Mexico",
    typical: "Regional",
    advantage: "kms",
  },
  {
    factor: "Family-Owned",
    kms: "Yes — accountable to customers, not shareholders",
    typical: "Often private equity-owned",
    advantage: "kms",
  },
];

const REASONS = [
  { icon: <Shield size={28} style={{ color: C.green }} />, title: "24-Month Written Warranty", body: "Twice what the industry calls 'standard.' We put it in writing, not in a sales pitch. If something fails inside 24 months, we make it right at no charge." },
  { icon: <Truck size={28} style={{ color: C.green }} />, title: "Free Nationwide Pickup", body: "We come to you, anywhere in the continental U.S. — at no charge. Your team doesn't book freight, deal with damage claims, or coordinate three different trucking companies." },
  { icon: <Clock size={28} style={{ color: C.green }} />, title: "24/7 Emergency Response", body: "Our emergency line is answered every day of the year. When your facility is offline, the clock doesn't care that it's 3am on a Sunday. Neither do we." },
  { icon: <Award size={28} style={{ color: C.green }} />, title: "40+ Years of Experience", body: "We've been doing this since 1983. That kind of longevity in this industry doesn't happen by accident — it happens by treating customers right and standing behind the work, every job, every time." },
];

const HERO_BG = "/images/kms-hero-bg.webp";

export default function Competitors() {
  return (
    <>
      <NavBar />
      <PageHero
        h1="Why KMS Beats the Competition"
        subheading="The rotating equipment repair industry is crowded. We've been at the top of it for four decades. Here's how Kelsey Machine Services compares to typical repair shops on the things that actually matter to your operation."
        bgImage={HERO_BG}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Why KMS" }]}
      />

      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Content column */}
            <div className="lg:col-span-2">
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: C.textDark, lineHeight: 1.75, marginBottom: "1.25rem" }}>
                When you're choosing a rotating equipment repair shop, the marketing claims all start to sound the same. Everybody says they're "the best." Everybody says they have "years of experience." Everybody says they "stand behind their work." So how do you actually tell them apart?
              </p>
              <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1.05rem", color: C.textDark, lineHeight: 1.75, marginBottom: "2rem" }}>
                You compare them on the things that affect your operation. Warranty length. Turnaround time. Documentation. Whether they have an actual machine shop in-house or whether they're outsourcing the precision work. Whether they answer the phone at 3am when your blower seizes. Below is how Kelsey Machine Services compares to the typical industrial repair shop on the criteria that matter most.
              </p>

              {/* Comparison table */}
              <div style={{ overflowX: "auto", marginBottom: "2.5rem", border: `2px solid #dde3ec`, borderRadius: 4 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Source Sans 3', sans-serif" }}>
                  <thead>
                    <tr style={{ background: C.blueDark }}>
                      <th style={{ padding: "0.85rem 1rem", textAlign: "left", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>Factor</th>
                      <th style={{ padding: "0.85rem 1rem", textAlign: "left", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase", background: C.green }}>Kelsey Machine</th>
                      <th style={{ padding: "0.85rem 1rem", textAlign: "left", color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>Typical Repair Shop</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON.map((row, i) => (
                      <tr key={row.factor} style={{ background: i % 2 === 0 ? "white" : C.lightBg, borderTop: "1px solid #dde3ec" }}>
                        <td style={{ padding: "0.85rem 1rem", fontWeight: 700, color: C.blueDark, fontSize: "0.92rem", verticalAlign: "top" }}>
                          {row.factor}
                        </td>
                        <td style={{ padding: "0.85rem 1rem", fontSize: "0.92rem", color: C.textDark, verticalAlign: "top" }}>
                          <span style={{ display: "inline-flex", alignItems: "flex-start", gap: 6 }}>
                            <CheckCircle size={16} style={{ color: C.green, flexShrink: 0, marginTop: 2 }} />
                            {row.kms}
                          </span>
                        </td>
                        <td style={{ padding: "0.85rem 1rem", fontSize: "0.92rem", color: C.textMid, verticalAlign: "top" }}>
                          <span style={{ display: "inline-flex", alignItems: "flex-start", gap: 6 }}>
                            <X size={16} style={{ color: "#999", flexShrink: 0, marginTop: 2 }} />
                            {row.typical}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="kms-headline" style={{ fontSize: "1.8rem", color: C.blueDark, marginBottom: "1.25rem" }}>
                What This Looks Like in Practice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ marginBottom: "2.5rem" }}>
                {REASONS.map(r => (
                  <div key={r.title} style={{ background: C.lightBg, border: "2px solid #dde3ec", borderLeft: `4px solid ${C.green}`, borderRadius: 4, padding: "1.5rem" }}>
                    <div style={{ marginBottom: "0.75rem" }}>{r.icon}</div>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.15rem", color: C.blueDark, textTransform: "uppercase", marginBottom: "0.6rem" }}>{r.title}</h3>
                    <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.95rem", color: C.textMid, lineHeight: 1.65 }}>{r.body}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: C.blueDark, borderRadius: 4, padding: "2rem", textAlign: "center", marginBottom: "1rem" }}>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.8rem", color: "white", textTransform: "uppercase", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
                  Compare the Quote
                </h2>
                <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: 580, margin: "0 auto 1.5rem" }}>
                  Already getting quotes from other shops? Send us the spec and let us put our pricing, turnaround, and warranty side-by-side with theirs. No obligation. No high-pressure sales.
                </p>
                <a href={KMS_PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.green, color: "white", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "0.9rem 2rem", borderRadius: 2, textDecoration: "none" }}>
                  Call {KMS_PHONE} <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Sidebar — same pattern as service pages */}
            <div className="lg:col-span-1">
              <div style={{ position: "sticky", top: 100 }} className="flex flex-col gap-5">
                <InlineQuoteForm service="" dark={false} />
                <WarrantyCallout />
                <FreeNationwidePickupCallout />
                <EmergencyCallout />
              </div>
            </div>
          </div>
        </div>
      </main>

      <NewsletterBar />
      <Footer />
    </>
  );
}
