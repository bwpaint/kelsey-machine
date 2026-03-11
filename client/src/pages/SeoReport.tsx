/**
 * WebWize SEO & AEO Analysis Report — Kelsey Machine Services
 *
 * Design System: WebWize Brand Guide
 * - Background: #0a0a0a (Near Black)
 * - Surface: #111111 (Dark Surface)
 * - Primary Accent: #F97316 (WebWize Orange)
 * - Secondary Accent: #84CC16 (WebWize Lime Green)
 * - Body Text: #ffffff / #b8b8b8
 * - Headlines: Bebas Neue (section), Anton (hero)
 * - Body: Outfit
 * - Stats/Labels: Space Mono
 * - Logo: "WebWize" in Oswald font
 */

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Cell,
} from "recharts";

// ─── DATA ───────────────────────────────────────────────────────────────────

const reportMeta = {
  client: "Kelsey Machine Services",
  domain: "kmstx.com",
  date: "March 10, 2026",
  preparedBy: "WebWize",
  website: "webwize.com",
  phone: "713-416-7111",
};

const domainMetrics = {
  domainAuthority: 2,
  organicKeywords: 2,
  paidKeywords: 0,
  backlinks: 28,
  nofollowBacklinks: 19,
  followBacklinks: 9,
  estimatedMonthlyTraffic: 0,
};

const topPages = [
  { title: "Kelsey Machine Services: Home", url: "kmstx.com/", visits: 0, backlinks: 0 },
  { title: "Centrifuge Repair Service", url: "kmstx.com/centrifuge-repair-service/", visits: 0, backlinks: 0 },
];

const currentKeywords = [
  { keyword: "compressor and turbine services", volume: 260, position: 47, difficulty: 26, url: "kmstx.com/" },
  { keyword: "centrifuge repair", volume: 260, position: 61, difficulty: 14, url: "kmstx.com/centrifuge-repair-service/" },
];

const competitors = [
  { domain: "houstondynamic.com", commonKeywords: 2, keywordGap: 607, estimatedTraffic: 1033, backlinks: 976, score: 85 },
  { domain: "centrifuge.com", commonKeywords: 1, keywordGap: 197, estimatedTraffic: 960, backlinks: 26521, score: 92 },
  { domain: "sentrimax.com", commonKeywords: 1, keywordGap: 23, estimatedTraffic: 218, backlinks: 828, score: 45 },
  { domain: "rernet.com", commonKeywords: 1, keywordGap: 7, estimatedTraffic: 6, backlinks: 155, score: 22 },
  { domain: "f12centrifuge.com", commonKeywords: 0, keywordGap: 8, estimatedTraffic: 3, backlinks: 5, score: 15 },
  // Previously identified competitors
  { domain: "dmscotx.com", commonKeywords: 0, keywordGap: 120, estimatedTraffic: 450, backlinks: 312, score: 55 },
  { domain: "specialtyrer.com", commonKeywords: 0, keywordGap: 85, estimatedTraffic: 280, backlinks: 198, score: 42 },
];

const keywordGapOpportunities = [
  { keyword: "centrifuge repair service", volume: 480, difficulty: 18, intent: "Commercial", priority: "High" },
  { keyword: "industrial centrifuge repair", volume: 390, difficulty: 22, intent: "Commercial", priority: "High" },
  { keyword: "gearbox repair service", volume: 720, difficulty: 31, intent: "Commercial", priority: "High" },
  { keyword: "pump repair near me", volume: 1300, difficulty: 28, intent: "Local", priority: "High" },
  { keyword: "rotating equipment repair", volume: 590, difficulty: 24, intent: "Commercial", priority: "High" },
  { keyword: "industrial pump repair", volume: 880, difficulty: 35, intent: "Commercial", priority: "Medium" },
  { keyword: "blower repair service", volume: 320, difficulty: 19, intent: "Commercial", priority: "Medium" },
  { keyword: "hydraulic drive repair", volume: 210, difficulty: 16, intent: "Commercial", priority: "Medium" },
  { keyword: "centrifuge rebuild", volume: 170, difficulty: 12, intent: "Commercial", priority: "Medium" },
  { keyword: "gearbox rebuild service", volume: 390, difficulty: 27, intent: "Commercial", priority: "Medium" },
  { keyword: "industrial equipment repair Texas", volume: 260, difficulty: 20, intent: "Local", priority: "Medium" },
  { keyword: "centrifuge repair companies", volume: 140, difficulty: 15, intent: "Navigational", priority: "Low" },
  { keyword: "rotating equipment maintenance", volume: 480, difficulty: 38, intent: "Informational", priority: "Low" },
  { keyword: "pump seal replacement", volume: 590, difficulty: 42, intent: "Informational", priority: "Low" },
];

const aeoQuestions = {
  centrifuge: [
    "How long does centrifuge repair take?",
    "What causes a centrifuge to vibrate excessively?",
    "How much does industrial centrifuge repair cost?",
    "Can a centrifuge bowl be repaired or does it need replacement?",
    "What brands of centrifuges do repair shops service?",
    "Is centrifuge repair covered under warranty?",
    "What is the difference between centrifuge repair and rebuild?",
    "How do I know if my centrifuge needs repair?",
  ],
  gearbox: [
    "How long does gearbox repair take?",
    "What are signs a gearbox needs repair?",
    "Is it cheaper to repair or replace an industrial gearbox?",
    "What brands of gearboxes can be repaired?",
    "How do I ship a gearbox for repair?",
    "What is a gearbox rebuild vs repair?",
  ],
  pump: [
    "How long does industrial pump repair take?",
    "What causes a pump to lose pressure?",
    "Can a pump be repaired on-site or does it need to be sent in?",
    "What is the warranty on pump repair?",
    "How much does pump seal replacement cost?",
    "What pump brands do repair shops service?",
  ],
  general: [
    "Do rotating equipment repair shops offer pickup and delivery?",
    "What is the typical turnaround time for rotating equipment repair?",
    "Do repair shops offer emergency rotating equipment repair?",
    "What warranty do rotating equipment repair companies offer?",
    "Can rotating equipment be repaired to OEM specifications?",
    "What industries use rotating equipment repair services?",
  ],
};

const recommendations = [
  {
    priority: "Critical",
    category: "Domain Authority",
    action: "Launch a structured link-building campaign",
    detail: "KMS has a Domain Authority of 2 — the lowest possible score. Even 10–15 quality backlinks from industry directories, supplier sites, and local business associations would dramatically improve rankings. Target: DA 15+ within 6 months.",
    impact: "High",
    effort: "Medium",
  },
  {
    priority: "Critical",
    category: "Content Expansion",
    action: "Create dedicated service pages for all 5 services",
    detail: "Currently only the homepage and centrifuge repair page are indexed. Gearbox, pump, blower, and hydraulic drive repair each need their own optimized pages with 800+ words, process descriptions, brand lists, and FAQ sections.",
    impact: "High",
    effort: "Medium",
  },
  {
    priority: "Critical",
    category: "Keyword Targeting",
    action: "Target 'gearbox repair service' (720 searches/mo, difficulty 31)",
    detail: "This is the highest-volume keyword in the gap analysis that KMS is not ranking for. A dedicated page with proper on-page SEO could capture 50–100 visits/month within 90 days.",
    impact: "High",
    effort: "Low",
  },
  {
    priority: "High",
    category: "Local SEO",
    action: "Optimize Google Business Profile and target 'near me' keywords",
    detail: "'Pump repair near me' gets 1,300 searches/month nationally. KMS needs a fully optimized GBP listing with photos, services, and regular posts to capture local intent searches in Southeast Texas.",
    impact: "High",
    effort: "Low",
  },
  {
    priority: "High",
    category: "AEO / AI Search",
    action: "Add FAQ schema markup to all service pages",
    detail: "AI search engines (ChatGPT, Google AI Overviews, Perplexity) pull directly from FAQ schema. Adding structured Q&A to each service page positions KMS to appear in AI-generated answers for repair-related queries.",
    impact: "High",
    effort: "Low",
  },
  {
    priority: "High",
    category: "Technical SEO",
    action: "Fix zero-traffic pages — improve page speed and Core Web Vitals",
    detail: "Both indexed pages show 0 estimated visits despite ranking at positions 47 and 61. This suggests the pages may have technical issues (slow load, poor mobile experience) that are suppressing click-through rates.",
    impact: "Medium",
    effort: "Medium",
  },
  {
    priority: "Medium",
    category: "Backlink Profile",
    action: "Convert 19 NoFollow backlinks to DoFollow",
    detail: "Of KMS's 28 backlinks, 19 are NoFollow (no SEO value). Reach out to those linking sites to request DoFollow links, or replace low-quality links with high-authority industry directory listings.",
    impact: "Medium",
    effort: "Medium",
  },
  {
    priority: "Medium",
    category: "Content Strategy",
    action: "Publish 2 blog posts per month targeting informational keywords",
    detail: "Informational content (how-to guides, maintenance tips, brand-specific repair guides) builds topical authority and captures top-of-funnel traffic that converts to service inquiries over time.",
    impact: "Medium",
    effort: "High",
  },
];

const competitorRadarData = [
  { metric: "Domain Authority", kms: 2, houston: 35, centrifuge: 55, sentrimax: 28 },
  { metric: "Backlinks", kms: 5, houston: 40, centrifuge: 90, sentrimax: 30 },
  { metric: "Organic Keywords", kms: 3, houston: 45, centrifuge: 80, sentrimax: 25 },
  { metric: "Est. Traffic", kms: 2, houston: 42, centrifuge: 78, sentrimax: 22 },
  { metric: "Content Depth", kms: 15, houston: 55, centrifuge: 85, sentrimax: 40 },
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const SectionHeader = ({ label, title, accent }: { label: string; title: string; accent?: string }) => (
  <div className="mb-10">
    <span
      className="inline-block text-xs tracking-widest uppercase mb-3 px-3 py-1 rounded-sm font-mono"
      style={{ color: "#F97316", background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}
    >
      {label}
    </span>
    <h2
      className="text-4xl md:text-5xl uppercase tracking-tight"
      style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#ffffff", letterSpacing: "-0.01em" }}
    >
      {title}
      {accent && <span style={{ color: "#84CC16" }}> {accent}</span>}
    </h2>
  </div>
);

const MetricCard = ({
  value,
  label,
  sublabel,
  color = "#F97316",
  alert = false,
}: {
  value: string | number;
  label: string;
  sublabel?: string;
  color?: string;
  alert?: boolean;
}) => (
  <div
    className="p-6 rounded-sm flex flex-col gap-2"
    style={{
      background: "#111111",
      border: alert ? "1px solid rgba(239,68,68,0.4)" : "1px solid rgba(255,255,255,0.08)",
    }}
  >
    <div
      className="text-4xl font-bold"
      style={{ fontFamily: "'Space Mono', monospace", color }}
    >
      {value}
    </div>
    <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#ffffff" }}>
      {label}
    </div>
    {sublabel && <div className="text-xs" style={{ color: "#b8b8b8" }}>{sublabel}</div>}
  </div>
);

const PriorityBadge = ({ level }: { level: string }) => {
  const colors: Record<string, { bg: string; text: string }> = {
    Critical: { bg: "rgba(239,68,68,0.15)", text: "#ef4444" },
    High: { bg: "rgba(249,115,22,0.15)", text: "#F97316" },
    Medium: { bg: "rgba(132,204,22,0.15)", text: "#84CC16" },
    Low: { bg: "rgba(255,255,255,0.08)", text: "#b8b8b8" },
  };
  const c = colors[level] || colors.Low;
  return (
    <span
      className="text-xs font-mono uppercase px-2 py-0.5 rounded-sm"
      style={{ background: c.bg, color: c.text }}
    >
      {level}
    </span>
  );
};

const ImpactBadge = ({ level }: { level: string }) => {
  const colors: Record<string, string> = { High: "#84CC16", Medium: "#F97316", Low: "#b8b8b8" };
  return (
    <span className="text-xs font-mono" style={{ color: colors[level] || "#b8b8b8" }}>
      ↑ {level} Impact
    </span>
  );
};

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────

export default function SeoReport() {
  const [activeTab, setActiveTab] = useState<"questions" | "centrifuge" | "gearbox" | "pump" | "general">("questions");

  return (
    <div style={{ background: "#0a0a0a", color: "#ffffff", fontFamily: "'Outfit', sans-serif", minHeight: "100vh" }}>
      {/* Google Fonts are loaded in index.html */}

      {/* ── HEADER ── */}
      <header style={{ background: "#111111", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="text-2xl font-bold"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#ffffff", letterSpacing: "0.02em" }}
            >
              Web<span style={{ color: "#F97316" }}>Wize</span>
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{ background: "rgba(132,204,22,0.15)", color: "#84CC16", fontFamily: "'Space Mono', monospace" }}
            >
              SEO REPORT
            </span>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-xs" style={{ color: "#b8b8b8" }}>webwize.com · 713-416-7111</div>
            <div className="text-xs" style={{ color: "#b8b8b8" }}>Houston Web Design · Since 1994</div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #111111 0%, #0a0a0a 50%, rgba(249,115,22,0.05) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <div
                className="text-xs tracking-widest uppercase mb-4 font-mono"
                style={{ color: "#F97316" }}
              >
                Digital Visibility &amp; Competitive Intelligence Report
              </div>
              <h1
                className="text-5xl md:text-7xl uppercase mb-4"
                style={{ fontFamily: "'Anton', sans-serif", color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1 }}
              >
                Kelsey Machine
                <br />
                <span style={{ color: "#84CC16" }}>Services</span>
              </h1>
              <p className="text-lg" style={{ color: "#b8b8b8", maxWidth: "520px" }}>
                A comprehensive SEO &amp; AEO analysis of{" "}
                <span style={{ color: "#F97316" }}>kmstx.com</span> — identifying current
                performance gaps, competitor advantages, and a prioritized roadmap to dominate
                rotating equipment repair search results nationally.
              </p>
            </div>
            <div
              className="p-6 rounded-sm shrink-0"
              style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)", minWidth: "220px" }}
            >
              <div className="text-xs uppercase tracking-wider mb-4 font-mono" style={{ color: "#b8b8b8" }}>
                Report Details
              </div>
              {[
                ["Client", reportMeta.client],
                ["Domain", reportMeta.domain],
                ["Date", reportMeta.date],
                ["Prepared By", reportMeta.preparedBy],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="text-xs" style={{ color: "#b8b8b8" }}>{k}</span>
                  <span className="text-xs font-semibold" style={{ color: "#ffffff" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXECUTIVE SUMMARY ── */}
      <section className="py-20 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="01 — Overview" title="Executive" accent="Summary" />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div
              className="md:col-span-2 p-8 rounded-sm"
              style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: "#F97316" }}>
                The Opportunity is Massive — and Wide Open
              </h3>
              <p className="mb-4" style={{ color: "#b8b8b8", lineHeight: 1.7 }}>
                Kelsey Machine Services is an established, 40+ year rotating equipment repair
                company with real expertise, a national service footprint, and a 24-month warranty
                that outpaces most competitors. However, the website currently has a{" "}
                <strong style={{ color: "#ef4444" }}>Domain Authority of 2</strong>, ranks for only{" "}
                <strong style={{ color: "#ef4444" }}>2 keywords</strong>, and receives{" "}
                <strong style={{ color: "#ef4444" }}>zero estimated organic traffic</strong>.
              </p>
              <p className="mb-4" style={{ color: "#b8b8b8", lineHeight: 1.7 }}>
                The good news: the primary competitor in the Houston market (houstondynamic.com) has
                a keyword gap of <strong style={{ color: "#84CC16" }}>607 keywords</strong> — meaning
                there are over 600 keywords KMS could rank for that competitors are already capturing.
                The top competitor nationally (centrifuge.com) has a gap of{" "}
                <strong style={{ color: "#84CC16" }}>960 keywords</strong>.
              </p>
              <p style={{ color: "#b8b8b8", lineHeight: 1.7 }}>
                With a structured content and link-building strategy, KMS can realistically achieve{" "}
                <strong style={{ color: "#84CC16" }}>500–1,500 monthly organic visits</strong> within
                12 months — representing dozens of qualified service inquiries per month from
                companies actively searching for rotating equipment repair.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <MetricCard value="2" label="Domain Authority" sublabel="Target: 20+ in 12 months" color="#ef4444" alert />
              <MetricCard value="2" label="Ranking Keywords" sublabel="607 gap vs. top competitor" color="#ef4444" alert />
              <MetricCard value="0" label="Monthly Organic Traffic" sublabel="Massive upside potential" color="#ef4444" alert />
              <MetricCard value="28" label="Total Backlinks" sublabel="19 NoFollow · 9 DoFollow" color="#F97316" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DOMAIN METRICS ── */}
      <section className="py-20 px-6" style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="02 — Site Health" title="Domain" accent="Authority & Metrics" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <MetricCard value="2" label="Domain Authority" sublabel="MOZ Score (1–100)" color="#ef4444" alert />
            <MetricCard value="2" label="Organic Keywords" sublabel="Currently ranking" color="#F97316" />
            <MetricCard value="28" label="Total Backlinks" sublabel="From external domains" color="#F97316" />
            <MetricCard value="0" label="Paid Keywords" sublabel="No PPC campaigns active" color="#b8b8b8" />
          </div>

          {/* Backlink breakdown */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-sm" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3
                className="text-2xl uppercase mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#ffffff" }}
              >
                Backlink Quality Breakdown
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span style={{ color: "#b8b8b8" }}>NoFollow (No SEO Value)</span>
                    <span style={{ color: "#ef4444", fontFamily: "'Space Mono', monospace" }}>19 / 28</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div className="h-2 rounded-full" style={{ width: "68%", background: "#ef4444" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span style={{ color: "#b8b8b8" }}>DoFollow (SEO Value)</span>
                    <span style={{ color: "#84CC16", fontFamily: "'Space Mono', monospace" }}>9 / 28</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <div className="h-2 rounded-full" style={{ width: "32%", background: "#84CC16" }} />
                  </div>
                </div>
              </div>
              <p className="text-xs mt-6" style={{ color: "#b8b8b8" }}>
                <strong style={{ color: "#F97316" }}>Action needed:</strong> 68% of backlinks are
                NoFollow and provide no ranking benefit. Converting these or replacing them with
                DoFollow links from industry directories is a quick win.
              </p>
            </div>
            <div className="p-6 rounded-sm" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3
                className="text-2xl uppercase mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#ffffff" }}
              >
                Indexed Pages
              </h3>
              {topPages.map((page) => (
                <div
                  key={page.url}
                  className="py-3"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="text-sm font-semibold mb-1" style={{ color: "#ffffff" }}>
                    {page.title}
                  </div>
                  <div className="text-xs font-mono" style={{ color: "#F97316" }}>
                    {page.url}
                  </div>
                  <div className="flex gap-6 mt-2">
                    <span className="text-xs" style={{ color: "#b8b8b8" }}>
                      Est. Visits: <span style={{ color: "#ef4444" }}>0</span>
                    </span>
                    <span className="text-xs" style={{ color: "#b8b8b8" }}>
                      Backlinks: <span style={{ color: "#b8b8b8" }}>0</span>
                    </span>
                  </div>
                </div>
              ))}
              <p className="text-xs mt-4" style={{ color: "#b8b8b8" }}>
                Only 2 pages are indexed. Every service, brand, and location KMS serves should have
                its own optimized page to capture long-tail search traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRENT KEYWORD RANKINGS ── */}
      <section className="py-20 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="03 — Rankings" title="Current Keyword" accent="Performance" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {["Keyword", "Monthly Volume", "Current Position", "Est. Visits", "SEO Difficulty", "Page"].map(
                    (h) => (
                      <th
                        key={h}
                        className="text-left py-3 px-4 text-xs uppercase tracking-wider"
                        style={{ color: "#b8b8b8", fontFamily: "'Space Mono', monospace" }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {currentKeywords.map((kw, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold" style={{ color: "#ffffff" }}>
                      {kw.keyword}
                    </td>
                    <td className="py-4 px-4 font-mono" style={{ color: "#84CC16" }}>
                      {kw.volume.toLocaleString()}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className="font-mono px-2 py-0.5 rounded-sm text-xs"
                        style={{
                          background: kw.position > 50 ? "rgba(239,68,68,0.15)" : "rgba(249,115,22,0.15)",
                          color: kw.position > 50 ? "#ef4444" : "#F97316",
                        }}
                      >
                        #{kw.position}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-mono" style={{ color: "#ef4444" }}>
                      0
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div
                          className="h-1.5 w-16 rounded-full"
                          style={{ background: "rgba(255,255,255,0.1)" }}
                        >
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width: `${kw.difficulty}%`,
                              background: kw.difficulty < 30 ? "#84CC16" : "#F97316",
                            }}
                          />
                        </div>
                        <span className="text-xs font-mono" style={{ color: "#b8b8b8" }}>
                          {kw.difficulty}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-xs font-mono" style={{ color: "#b8b8b8" }}>
                      {kw.url}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="mt-6 p-4 rounded-sm"
            style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.2)" }}
          >
            <p className="text-sm" style={{ color: "#b8b8b8" }}>
              <strong style={{ color: "#F97316" }}>Key Insight:</strong> Both keywords rank in
              positions 47–61 (page 5–7 of Google) and generate zero clicks. Positions below 10
              receive less than 1% of clicks. Moving "centrifuge repair" from position 61 to
              position 5 alone could generate 50–80 visits/month from this single keyword.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPETITOR ANALYSIS ── */}
      <section className="py-20 px-6" style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="04 — Competition" title="Competitor" accent="Landscape" />

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {["Competitor Domain", "Common Keywords", "Keyword Gap", "Est. Monthly Traffic", "Backlinks", "Threat Level"].map(
                    (h) => (
                      <th
                        key={h}
                        className="text-left py-3 px-4 text-xs uppercase tracking-wider"
                        style={{ color: "#b8b8b8", fontFamily: "'Space Mono', monospace" }}
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {competitors.map((c, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold" style={{ color: "#F97316" }}>
                      {c.domain}
                    </td>
                    <td className="py-4 px-4 font-mono" style={{ color: "#ffffff" }}>
                      {c.commonKeywords}
                    </td>
                    <td className="py-4 px-4 font-mono" style={{ color: "#84CC16" }}>
                      +{c.keywordGap.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 font-mono" style={{ color: "#ffffff" }}>
                      {c.estimatedTraffic.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 font-mono" style={{ color: "#b8b8b8" }}>
                      {c.backlinks.toLocaleString()}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-sm"
                        style={{
                          background:
                            c.score > 70
                              ? "rgba(239,68,68,0.15)"
                              : c.score > 40
                              ? "rgba(249,115,22,0.15)"
                              : "rgba(132,204,22,0.15)",
                          color: c.score > 70 ? "#ef4444" : c.score > 40 ? "#F97316" : "#84CC16",
                        }}
                      >
                        {c.score > 70 ? "High" : c.score > 40 ? "Medium" : "Low"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Competitor Traffic Bar Chart */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-sm" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3
                className="text-2xl uppercase mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#ffffff" }}
              >
                Estimated Monthly Traffic
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={competitors.slice(0, 5).map((c) => ({
                    name: c.domain.replace(".com", ""),
                    traffic: c.estimatedTraffic,
                  }))}
                  margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" tick={{ fill: "#b8b8b8", fontSize: 10 }} />
                  <YAxis tick={{ fill: "#b8b8b8", fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ background: "#111111", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                  />
                  <Bar dataKey="traffic" radius={[2, 2, 0, 0]}>
                    {competitors.slice(0, 5).map((_, index) => (
                      <Cell key={index} fill={index === 0 ? "#F97316" : "#84CC16"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="p-6 rounded-sm" style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}>
              <h3
                className="text-2xl uppercase mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#ffffff" }}
              >
                Keyword Gap vs. KMS
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={competitors.slice(0, 5).map((c) => ({
                    name: c.domain.replace(".com", ""),
                    gap: c.keywordGap,
                  }))}
                  margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" tick={{ fill: "#b8b8b8", fontSize: 10 }} />
                  <YAxis tick={{ fill: "#b8b8b8", fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ background: "#111111", border: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
                  />
                  <Bar dataKey="gap" fill="#F97316" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEYWORD GAP OPPORTUNITIES ── */}
      <section className="py-20 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="05 — Opportunities" title="Keyword Gap" accent="Analysis" />
          <p className="mb-8" style={{ color: "#b8b8b8", maxWidth: "640px" }}>
            These are high-value keywords that competitors are ranking for but KMS is not. Each
            represents an opportunity to capture qualified traffic from prospects actively searching
            for rotating equipment repair services.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  {["Keyword", "Monthly Volume", "SEO Difficulty", "Search Intent", "Priority"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-3 px-4 text-xs uppercase tracking-wider"
                      style={{ color: "#b8b8b8", fontFamily: "'Space Mono', monospace" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {keywordGapOpportunities.map((kw, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-3 px-4 font-semibold" style={{ color: "#ffffff" }}>
                      {kw.keyword}
                    </td>
                    <td className="py-3 px-4 font-mono" style={{ color: "#84CC16" }}>
                      {kw.volume.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width: `${kw.difficulty}%`,
                              background: kw.difficulty < 25 ? "#84CC16" : kw.difficulty < 35 ? "#F97316" : "#ef4444",
                            }}
                          />
                        </div>
                        <span className="text-xs font-mono" style={{ color: "#b8b8b8" }}>
                          {kw.difficulty}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className="text-xs px-2 py-0.5 rounded-sm"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          color: "#b8b8b8",
                        }}
                      >
                        {kw.intent}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <PriorityBadge level={kw.priority} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── AEO QUESTION CLUSTERS ── */}
      <section className="py-20 px-6" style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="06 — AEO / AI Search" title="Question" accent="Clusters" />
          <p className="mb-8" style={{ color: "#b8b8b8", maxWidth: "640px" }}>
            These are the questions people are actively searching around KMS's core services.
            Answering these questions directly on service pages — with FAQ schema markup — positions
            KMS to appear in Google AI Overviews, ChatGPT responses, and Perplexity answers.
          </p>

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {(["questions", "centrifuge", "gearbox", "pump", "general"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 text-sm rounded-sm transition-all"
                style={{
                  background: activeTab === tab ? "#F97316" : "rgba(255,255,255,0.06)",
                  color: activeTab === tab ? "#ffffff" : "#b8b8b8",
                  border: "1px solid",
                  borderColor: activeTab === tab ? "#F97316" : "rgba(255,255,255,0.08)",
                  fontFamily: "'Space Mono', monospace",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                }}
              >
                {tab === "questions" ? "All Topics" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {(activeTab === "questions"
              ? [...aeoQuestions.centrifuge.slice(0, 4), ...aeoQuestions.general.slice(0, 4)]
              : aeoQuestions[activeTab as keyof typeof aeoQuestions] || []
            ).map((q, i) => (
              <div
                key={i}
                className="p-4 rounded-sm flex items-start gap-3"
                style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="text-xs font-mono mt-0.5 shrink-0"
                  style={{ color: "#F97316" }}
                >
                  Q{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm" style={{ color: "#ffffff" }}>
                  {q}
                </span>
              </div>
            ))}
          </div>
          <div
            className="mt-6 p-4 rounded-sm"
            style={{ background: "rgba(132,204,22,0.08)", border: "1px solid rgba(132,204,22,0.2)" }}
          >
            <p className="text-sm" style={{ color: "#b8b8b8" }}>
              <strong style={{ color: "#84CC16" }}>AEO Strategy:</strong> Each of these questions
              should be answered in a dedicated FAQ section on the relevant service page, marked up
              with Schema.org FAQPage structured data. This is the primary mechanism by which AI
              search engines (ChatGPT, Google AI Overview, Perplexity) surface business answers to
              users — and it requires zero additional traffic to implement.
            </p>
          </div>
        </div>
      </section>

      {/* ── RECOMMENDATIONS ── */}
      <section className="py-20 px-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="07 — Action Plan" title="Prioritized" accent="Recommendations" />
          <div className="space-y-4">
            {recommendations.map((rec, i) => (
              <div
                key={i}
                className="p-6 rounded-sm"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: `3px solid ${
                    rec.priority === "Critical"
                      ? "#ef4444"
                      : rec.priority === "High"
                      ? "#F97316"
                      : rec.priority === "Medium"
                      ? "#84CC16"
                      : "rgba(255,255,255,0.2)"
                  }`,
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <PriorityBadge level={rec.priority} />
                    <span
                      className="text-xs px-2 py-0.5 rounded-sm"
                      style={{ background: "rgba(255,255,255,0.06)", color: "#b8b8b8" }}
                    >
                      {rec.category}
                    </span>
                  </div>
                  <ImpactBadge level={rec.impact} />
                </div>
                <h4 className="text-base font-semibold mb-2" style={{ color: "#ffffff" }}>
                  {rec.action}
                </h4>
                <p className="text-sm" style={{ color: "#b8b8b8", lineHeight: 1.6 }}>
                  {rec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT STEPS CTA ── */}
      <section
        className="py-20 px-6"
        style={{
          background: "linear-gradient(135deg, #111111 0%, rgba(249,115,22,0.08) 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="text-xs tracking-widest uppercase mb-4 font-mono"
            style={{ color: "#F97316" }}
          >
            Ready to Grow?
          </div>
          <h2
            className="text-5xl md:text-6xl uppercase mb-6"
            style={{ fontFamily: "'Anton', sans-serif", color: "#ffffff", letterSpacing: "-0.02em" }}
          >
            Let's Build Your
            <br />
            <span style={{ color: "#84CC16" }}>Digital Presence</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#b8b8b8" }}>
            WebWize has been building Houston businesses' online presence since 1994. We're ready to
            execute every recommendation in this report — from content creation to technical SEO to
            link building.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7134167111"
              className="px-8 py-4 text-sm font-semibold rounded-sm transition-all hover:opacity-90"
              style={{ background: "#F97316", color: "#ffffff", fontFamily: "'Space Mono', monospace" }}
            >
              CALL 713-416-7111
            </a>
            <a
              href="https://webwize.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm font-semibold rounded-sm transition-all"
              style={{
                background: "transparent",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.3)",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              VISIT WEBWIZE.COM
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span
              className="text-xl font-bold"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#ffffff" }}
            >
              Web<span style={{ color: "#F97316" }}>Wize</span>
            </span>
            <p className="text-xs mt-1" style={{ color: "#b8b8b8" }}>
              Houston Web Design Company · Since 1994
            </p>
          </div>
          <div className="text-xs text-center" style={{ color: "#b8b8b8" }}>
            This report was prepared exclusively for Kelsey Machine Services.
            <br />
            Data sourced from Ubersuggest · {reportMeta.date}
          </div>
          <div className="text-xs text-right" style={{ color: "#b8b8b8" }}>
            webwize.com
            <br />
            713-416-7111
          </div>
        </div>
      </footer>
    </div>
  );
}
