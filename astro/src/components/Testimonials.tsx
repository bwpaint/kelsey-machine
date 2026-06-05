/**
 * Testimonials carousel — React island.
 *
 * Shows 3 cards per page out of N total, with prev/next buttons and dot
 * pagination. Static-only fallback is fine: the first 3 are visible on
 * page load before hydration kicks in.
 */
import { useState } from "react";
import type { ReactNode } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  service: string;
}

interface Props {
  testimonials: ReadonlyArray<Testimonial>;
}

const C = {
  blueDark: "#1E5080",
  green:    "#78A546",
  lightBg:  "#F4F7FA",
};

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={C.green} stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  const path = dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6";
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points={path} />
    </svg>
  );
}

export default function Testimonials({ testimonials }: Props) {
  const perPage = 3;
  const pages = Math.ceil(testimonials.length / perPage);
  const [current, setCurrent] = useState(0);
  const visible = testimonials.slice(current * perPage, current * perPage + perPage);

  const prev = () => setCurrent((c) => (c - 1 + pages) % pages);
  const next = () => setCurrent((c) => (c + 1) % pages);

  const navBtn: React.CSSProperties = {
    width: 40, height: 40, background: C.blueDark, color: "white",
    border: "none", borderRadius: 2, display: "flex",
    alignItems: "center", justifyContent: "center", cursor: "pointer",
    transition: "background 0.2s",
  };

  return (
    <>
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <div className="text-kms-green text-xs uppercase tracking-widest mb-2" style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>
            Client Success Stories
          </div>
          <div style={{ width: 50, height: 3, background: C.green, marginBottom: "0.75rem" }} />
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: C.blueDark, textTransform: "uppercase", letterSpacing: "0.01em" }}>
            WHAT OUR CLIENTS SAY
          </h2>
        </div>
        <div className="flex gap-2">
          <button onClick={prev} aria-label="Previous testimonials" style={navBtn}><Chevron dir="left" /></button>
          <button onClick={next} aria-label="Next testimonials" style={navBtn}><Chevron dir="right" /></button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {visible.map((t, i) => (
          <blockquote key={`${current}-${i}`} style={{ background: C.lightBg, padding: "1.5rem", borderRadius: 2, boxShadow: "0 2px 12px rgba(30,80,128,0.07)" }}>
            <div className="flex gap-0.5 mb-3">
              {[0,1,2,3,4].map((si) => <Star key={si} />)}
            </div>
            <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.92rem", color: "#2d3748", lineHeight: 1.7, marginBottom: "1.25rem", fontStyle: "italic" }}>"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div style={{ width: 40, height: 40, background: C.blueDark, color: C.green, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "1rem" }}>
                {t.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "1rem", color: C.blueDark }}>{t.name}</div>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.78rem", color: C.green, fontWeight: 600 }}>{t.title} · {t.service}</div>
              </div>
            </div>
          </blockquote>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Page ${i + 1}`}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? C.green : "#cbd5e0",
              border: "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </>
  );
}
