/**
 * KMS About Us Page
 * Design: Industrial Precision — KMS Steel Blue (#1E5080) + Olive Green (#78A546)
 * Voice: Full Texas — bold, direct, witty, professional
 * SEO Target: "rotating equipment repair company Texas" | "industrial repair shop Stafford TX"
 * AEO: Quick Answer box, FAQPage schema, LocalBusiness schema
 * Internal Links: All service pages, warranty, emergency service
 */

import { Link } from "wouter";
import { NavBar, Footer, NewsletterBar, InlineQuoteForm, CtaBanner } from "@/components/KmsLayout";
import { useEffect } from "react";

const ABOUT_HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663389032163/57UPsPgkU8Pk8KwiRoThgx/kms_about_hero-fuqjkLUCWaGrchXL2i3nWu.webp";

const TIMELINE = [
  { year: "1983", title: "Founded in Stafford, TX", desc: "Kelsey Machine Services opens its doors in Stafford, Texas — a small shop with big ambitions and a whole lot of rotating equipment to fix." },
  { year: "1990s", title: "Expanding the Service Range", desc: "KMS grows beyond centrifuge repair into gearboxes, industrial blowers, and compressors. Word spreads fast when you do good work." },
  { year: "2000s", title: "Going National", desc: "Free nationwide pickup and delivery changes everything. KMS starts serving customers in all 50 states — no matter how far the equipment needs to travel." },
  { year: "2010s", title: "The 24-Month Warranty Standard", desc: "KMS introduces its industry-leading 24-month rebuilt warranty — twice what most competitors offer. If we fix it, we stand behind it." },
  { year: "Today", title: "40+ Years Strong", desc: "Still family-owned. Still in Stafford. Still the most trusted name in rotating equipment repair across the U.S., Canada, and Mexico." },
];

const STATS = [
  { value: "40+", label: "Years in Business" },
  { value: "50", label: "States Served" },
  { value: "24-Mo", label: "Rebuilt Warranty" },
  { value: "72 Hr", label: "Avg. Turnaround" },
];

const VALUES = [
  {
    icon: "🔧",
    title: "We Fix It Right the First Time",
    desc: "Every repair goes through a rigorous inspection, precision machining, and performance testing before it leaves our shop. We don't cut corners — because corners have a way of coming back to bite you.",
  },
  {
    icon: "🤝",
    title: "We Stand Behind Our Work",
    desc: "Our industry-leading 24-month warranty on rebuilt equipment isn't a marketing line — it's a promise. If something goes wrong after we fix it, we make it right. Period.",
  },
  {
    icon: "⚡",
    title: "Speed Matters When You're Down",
    desc: "Downtime costs money. That's why we offer 72-hour standard turnaround and 24/7 emergency service for critical failures. We move fast so you can get back to work.",
  },
  {
    icon: "🌎",
    title: "We Come to You — Anywhere",
    desc: "Free national pickup and delivery means you're never stuck because you can't get equipment to us. We've served customers in all 50 states, Canada, and Mexico.",
  },
  {
    icon: "🏭",
    title: "OEM-Level Expertise, Independent Shop Prices",
    desc: "Our technicians have decades of hands-on experience with every major brand — Alfa Laval, Andritz, SWECO, Flender, Falk, and dozens more. You get OEM-quality results without the OEM wait times and markups.",
  },
  {
    icon: "🇺🇸",
    title: "Texas-Built. American-Proud.",
    desc: "We've been doing this in Stafford, Texas for over 40 years. We're not a national chain or a private equity rollup. We're a family-owned Texas shop that takes pride in every single job.",
  },
];

const FAQS = [
  {
    q: "Where is Kelsey Machine Services located?",
    a: "Kelsey Machine Services is located in Stafford, Texas — just southwest of Houston. We've been at this location for over 40 years. While we're based in Texas, we serve customers across all 50 states, Canada, and Mexico with free nationwide pickup and delivery.",
  },
  {
    q: "What types of equipment does KMS repair?",
    a: "We specialize in rotating equipment repair including centrifuges, industrial gearboxes, blowers, compressors, and fluid end & power end components. We service all major brands including Alfa Laval, Andritz, SWECO, Flender, Falk, Gardner Denver, and many more.",
  },
  {
    q: "How long has Kelsey Machine Services been in business?",
    a: "Kelsey Machine Services was founded in 1983 — that's over 40 years of rotating equipment repair experience. We're still family-owned and operated from the same Stafford, Texas facility.",
  },
  {
    q: "Does KMS offer a warranty on repairs?",
    a: "Yes — we offer an industry-leading 24-month warranty on all rebuilt equipment. That's twice what most competitors offer and a direct reflection of our confidence in the quality of our work.",
  },
  {
    q: "Does KMS offer emergency repair service?",
    a: "Absolutely. We offer 24/7 emergency rotating equipment repair service. Call our emergency line any time — day or night, weekday or weekend — and we'll get your equipment moving again as fast as possible.",
  },
  {
    q: "Can KMS pick up my equipment anywhere in the country?",
    a: "Yes. We offer free nationwide pickup and delivery for all repair jobs. Whether you're in Houston, New York, or anywhere in between, we'll arrange transportation so you don't have to.",
  },
  {
    q: "What industries does KMS serve?",
    a: "We serve a wide range of industries including oil & gas, chemical processing, food & beverage, wastewater treatment, pulp & paper, mining, pharmaceutical, and general manufacturing. If it rotates and it's broken, we can fix it.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://kmstx.com/#business",
      "name": "Kelsey Machine Services",
      "url": "https://kmstx.com",
      "telephone": "+17134167111",
      "email": "info@kmstx.com",
      "foundingDate": "1983",
      "description": "Kelsey Machine Services is a family-owned rotating equipment repair company based in Stafford, Texas, serving all 50 states with centrifuge, gearbox, blower, compressor, and fluid end repair since 1983.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Stafford, TX",
        "addressLocality": "Stafford",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "areaServed": ["US", "CA", "MX"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Rotating Equipment Repair Services"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQS.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
  ]
};

export default function AboutUs() {
  useEffect(() => {
    document.title = "About Kelsey Machine Services | 40+ Years of Rotating Equipment Repair in Texas";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Family-owned since 1983. Kelsey Machine Services has been repairing centrifuges, gearboxes, blowers, and compressors for over 40 years from Stafford, TX — serving all 50 states.");
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.text = JSON.stringify(SCHEMA);
    schema.id = "kms-about-schema";
    document.head.appendChild(schema);
    return () => { document.getElementById("kms-about-schema")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      {/* ── Hero ── */}
      <section
        className="relative min-h-[480px] flex items-center"
        style={{
          background: `linear-gradient(to right, rgba(10,25,41,0.92) 0%, rgba(10,25,41,0.75) 55%, rgba(10,25,41,0.45) 100%), url(${ABOUT_HERO}) center/cover no-repeat`,
        }}
      >
        <div className="container py-20">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#78A546] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
              Our Story
            </div>
            <h1 className="font-['Barlow_Condensed'] text-5xl md:text-6xl font-black text-white uppercase leading-tight mb-4">
              40 Years of Getting<br />
              <span className="text-[#78A546]">Texas-Tough Equipment</span><br />
              Back to Work
            </h1>
            <p className="text-gray-200 text-xl leading-relaxed mb-8">
              We're not the biggest shop in the country. We're just the one that fixes it right, backs it with a 24-month warranty, and answers the phone at 2 AM when your centrifuge decides to quit on a Sunday.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <button className="bg-[#78A546] hover:bg-[#6a9438] text-white font-bold px-8 py-3 rounded transition-colors">
                  Get a Free Quote
                </button>
              </Link>
              <Link href="/emergency-service">
                <button className="border-2 border-white text-white hover:bg-white hover:text-[#1E5080] font-bold px-8 py-3 rounded transition-colors">
                  24/7 Emergency Line
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#1E5080] py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-['Barlow_Condensed'] text-4xl font-black text-[#78A546]">{s.value}</div>
                <div className="text-white text-sm font-semibold uppercase tracking-wide mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Answer Box ── */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-[#f0f6e8] border-l-4 border-[#78A546] rounded-lg p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#78A546] text-lg">✦</span>
              <span className="text-[#78A546] font-bold text-sm uppercase tracking-widest">Quick Answer</span>
            </div>
            <h2 className="text-xl font-bold text-[#1E5080] mb-3">What is Kelsey Machine Services?</h2>
            <p className="text-gray-700 leading-relaxed">
              Kelsey Machine Services (KMS) is a family-owned rotating equipment repair company founded in 1983 and based in Stafford, Texas. KMS specializes in the repair, rebuild, and recertification of centrifuges, industrial gearboxes, blowers, compressors, and fluid end & power end components. The company serves customers across all 50 states, Canada, and Mexico with free nationwide pickup and delivery, 72-hour standard turnaround, 24/7 emergency service, and an industry-leading 24-month warranty on all rebuilt equipment.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-['Barlow_Condensed'] text-4xl font-black text-[#1E5080] uppercase mb-6">
                We Started With One Rule:<br />
                <span className="text-[#78A546]">Fix It Right or Don't Charge For It</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Back in 1983, Kelsey Machine Services opened its doors in Stafford, Texas with a simple philosophy: do the work right, stand behind it, and treat every customer like they're your only one. Forty-plus years later, that hasn't changed — even if the equipment has gotten a lot more complicated.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We started as a centrifuge repair shop serving the petrochemical and industrial markets around Houston. Word travels fast in this industry when you do good work, and it didn't take long before customers were shipping equipment to us from across the country. Today, we repair{" "}
                <Link href="/services/centrifuge-repair" className="text-[#1E5080] underline hover:text-[#78A546]">centrifuges</Link>,{" "}
                <Link href="/services/gearbox-repair" className="text-[#1E5080] underline hover:text-[#78A546]">industrial gearboxes</Link>,{" "}
                <Link href="/services/industrial-blower-repair" className="text-[#1E5080] underline hover:text-[#78A546]">blowers</Link>,{" "}
                <Link href="/services/industrial-compressors" className="text-[#1E5080] underline hover:text-[#78A546]">compressors</Link>, and{" "}
                <Link href="/services/fluid-power-end-repair" className="text-[#1E5080] underline hover:text-[#78A546]">fluid end & power end components</Link>{" "}
                for customers in all 50 states, Canada, and Mexico.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're still family-owned. Still in Stafford. Still answering the phone ourselves. And still doing the work the same way we always have — with the kind of care and precision that only comes from people who actually give a damn about what they're doing.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our{" "}
                <Link href="/warranty" className="text-[#1E5080] underline hover:text-[#78A546]">industry-leading 24-month warranty</Link>{" "}
                on rebuilt equipment isn't a marketing gimmick — it's a reflection of how confident we are in our work. If something goes wrong after we fix it, we make it right. That's the KMS promise, and it's been the KMS promise since day one.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-[#1E5080] px-6 py-4">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-black text-white uppercase tracking-wide">Our History</h3>
                </div>
                <div className="p-6">
                  {TIMELINE.map((item, i) => (
                    <div key={i} className="flex gap-4 mb-6 last:mb-0">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-[#78A546] flex items-center justify-center">
                          <span className="font-['Barlow_Condensed'] text-white font-black text-sm text-center leading-tight">{item.year}</span>
                        </div>
                      </div>
                      <div className="pt-1">
                        <h4 className="font-bold text-[#1E5080] mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-['Barlow_Condensed'] text-4xl font-black text-[#1E5080] uppercase mb-3">
              What We Believe In
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These aren't values we put on a poster in the break room. They're the way we actually operate — every job, every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#78A546] transition-colors">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-[#1E5080] text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose KMS ── */}
      <section className="bg-[#1E5080] py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Barlow_Condensed'] text-4xl font-black text-white uppercase mb-6">
                The KMS Difference:<br />
                <span className="text-[#78A546]">It's Not Just What We Fix. It's How.</span>
              </h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                There are plenty of repair shops out there. Most of them will fix your equipment. Some of them will fix it right. Very few of them will fix it right, back it with a 24-month warranty, pick it up from anywhere in the country for free, and have it back to you in 72 hours.
              </p>
              <p className="text-gray-200 leading-relaxed mb-4">
                That's the KMS standard. It's what we've been doing for over 40 years, and it's why customers keep coming back — and why they refer us to their colleagues, their contractors, and their competitors when equipment goes down.
              </p>
              <p className="text-gray-200 leading-relaxed mb-6">
                We service all major brands — Alfa Laval, Andritz, SWECO, Flender, Falk, Gardner Denver, Roots, and dozens more. Our technicians have seen it all, fixed most of it, and know exactly what it takes to get your specific equipment running at peak performance again.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/services">
                  <button className="bg-[#78A546] hover:bg-[#6a9438] text-white font-bold px-6 py-3 rounded transition-colors">
                    View All Services
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-[#1E5080] font-bold px-6 py-3 rounded transition-colors">
                    Get a Free Quote
                  </button>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-['Barlow_Condensed'] text-2xl font-black text-[#1E5080] uppercase mb-6">
                By the Numbers
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Years in Business", value: "40+", icon: "📅" },
                  { label: "States Served", value: "50 States + Canada + Mexico", icon: "🗺️" },
                  { label: "Rebuilt Equipment Warranty", value: "24 Months", icon: "🛡️" },
                  { label: "Standard Turnaround", value: "72 Hours", icon: "⚡" },
                  { label: "Emergency Service", value: "24/7 / 365", icon: "🚨" },
                  { label: "Pickup & Delivery", value: "Free Nationwide", icon: "🚛" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="text-gray-500 text-sm">{item.label}</div>
                      <div className="font-bold text-[#1E5080]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-['Barlow_Condensed'] text-4xl font-black text-[#1E5080] uppercase mb-3">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              If your industry runs on rotating equipment, there's a good chance we've already fixed something just like yours.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Oil & Gas", "Chemical Processing", "Food & Beverage", "Wastewater Treatment",
              "Pulp & Paper", "Mining & Minerals", "Pharmaceutical", "Power Generation",
              "Petrochemical", "Fertilizer Production", "General Manufacturing", "Marine & Offshore",
            ].map((industry) => (
              <div key={industry} className="bg-white rounded-lg p-4 text-center border border-gray-100 hover:border-[#78A546] hover:shadow-sm transition-all">
                <span className="text-gray-700 font-medium text-sm">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Mid-Page ── */}
      <section className="bg-[#78A546] py-12">
        <div className="container text-center">
          <h2 className="font-['Barlow_Condensed'] text-3xl font-black text-white uppercase mb-3">
            Ready to Get Your Equipment Back Online?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-xl mx-auto">
            Call us, fill out the form below, or request a free pickup. We'll take it from there.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+17134167111" className="bg-white text-[#1E5080] font-bold px-8 py-3 rounded hover:bg-gray-100 transition-colors">
              📞 713-416-7111
            </a>
            <Link href="/emergency-service">
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#78A546] font-bold px-8 py-3 rounded transition-colors">
                24/7 Emergency Service
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Inline Quote Form ── */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-['Barlow_Condensed'] text-3xl font-black text-[#1E5080] uppercase mb-2">
                Get a Free Repair Quote
              </h2>
              <p className="text-gray-600">Tell us what you've got and we'll tell you how fast we can fix it.</p>
            </div>
            <InlineQuoteForm service="General Inquiry" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Barlow_Condensed'] text-4xl font-black text-[#1E5080] uppercase text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-gray-100 group">
                  <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-[#1E5080] hover:text-[#78A546] transition-colors list-none">
                    <span>{faq.q}</span>
                    <span className="text-[#78A546] text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterBar />
      <Footer />
    </div>
  );
}
