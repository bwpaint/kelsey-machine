/**
 * LpTestimonialsCarousel — React island, PPC landing pages only.
 *
 * Continuous, seamless, bidirectional carousel showing 2 testimonials at
 * a time. Auto-advances one card-step on a timer and loops forever;
 * hovering pauses autoplay and reveals prev/next arrows so a visitor can
 * step back or forward manually.
 *
 * Light background, dark text (C.blueDark / #2d3748) — deliberately NOT
 * the brand's --green (#78A546), which only hits ~2.8:1 contrast with
 * white text at body-copy size and fails WCAG AA. On a light card,
 * standard dark-on-light text comfortably clears AA/AAA, no special
 * casing needed. Visual language (light card, star row, blueDark name,
 * green accent) intentionally mirrors the homepage Testimonials.tsx so
 * the two don't feel like different components.
 *
 * Infinite loop technique: the real testimonial list is padded with 2
 * clones on each end. Autoplay/arrows just increment or decrement an
 * index. Once the index slides onto a clone (which renders identical
 * content to a real position), a timer fires after the CSS transition
 * finishes, disables the transition for one frame, and silently snaps
 * the index back to the equivalent real position — invisible to the
 * visitor because the clone and the real card look the same. Standard
 * technique for this kind of marquee-style carousel.
 */
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

interface Props {
  testimonials: ReadonlyArray<Testimonial>;
  intervalMs?: number;
}

const C = { blueDark: "#1E5080", green: "#78A546", lightBg: "#F4F7FA" };
const CLONE_COUNT = 2;
const TRANSITION_MS = 600;

function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill={C.green} stroke={C.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  const path = dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6";
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points={path} />
    </svg>
  );
}

export default function LpTestimonialsCarousel({ testimonials, intervalMs = 3800 }: Props) {
  const n = testimonials.length;
  // With fewer than 3 real testimonials the clone math can't fill 2
  // visible slots without an obvious repeat — fall back to a static
  // (non-sliding) row instead of a broken carousel.
  const canCarousel = n >= 3;

  const track = canCarousel
    ? [...testimonials.slice(-CLONE_COUNT), ...testimonials, ...testimonials.slice(0, CLONE_COUNT)]
    : testimonials;
  const offset = canCarousel ? CLONE_COUNT : 0;

  const [index, setIndex] = useState(offset);
  const [animate, setAnimate] = useState(true);
  const [hovering, setHovering] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = () => { setAnimate(true); setIndex((i) => i + 1); };
  const goPrev = () => { setAnimate(true); setIndex((i) => i - 1); };

  // Silent wrap once the index has slid onto a clone.
  useEffect(() => {
    if (!canCarousel) return;
    if (index >= offset + n) {
      const t = setTimeout(() => { setAnimate(false); setIndex(offset); }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
    if (index < offset) {
      const t = setTimeout(() => { setAnimate(false); setIndex(offset + n - 1); }, TRANSITION_MS);
      return () => clearTimeout(t);
    }
  }, [index, canCarousel, offset, n]);

  // Re-enable the transition on the next frame after a silent reset, so
  // the NEXT real step animates normally again.
  useEffect(() => {
    if (!animate) {
      const raf = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [animate]);

  // Autoplay — off while hovering.
  useEffect(() => {
    if (!canCarousel || hovering) return;
    timerRef.current = setInterval(() => setIndex((i) => i + 1), intervalMs);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [hovering, canCarousel, intervalMs]);

  const arrowBtn: React.CSSProperties = {
    position: "absolute", top: "50%", transform: "translateY(-50%)",
    width: 40, height: 40, borderRadius: "50%",
    background: "rgba(30,80,128,0.88)", border: "none", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    opacity: hovering ? 1 : 0, pointerEvents: hovering ? "auto" : "none",
    transition: "opacity 0.2s ease", zIndex: 2,
  };

  const renderCard = (t: Testimonial, key: string | number) => (
    <div key={key} style={{ flex: `0 0 ${100 / track.length}%`, boxSizing: "border-box", padding: "0 0.6rem" }}>
      <div style={{ background: C.lightBg, borderRadius: 4, padding: "1.4rem 1.5rem", boxShadow: "0 2px 12px rgba(30,80,128,0.08)", height: "100%" }}>
        <div style={{ display: "flex", gap: 2, marginBottom: "0.6rem" }}>
          {[0, 1, 2, 3, 4].map((si) => <Star key={si} />)}
        </div>
        <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.9rem", color: "#2d3748", lineHeight: 1.6, margin: "0 0 1rem" }}>"{t.quote}"</p>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.95rem", color: C.blueDark }}>{t.name}</div>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.76rem", color: C.green, fontWeight: 600 }}>{t.company}</div>
      </div>
    </div>
  );

  if (!canCarousel) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", justifyContent: "center" }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ flex: "0 1 320px" }}>
            {renderCard(t, i)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            width: `${track.length * 50}%`,
            transform: `translateX(-${index * (100 / track.length)}%)`,
            transition: animate ? `transform ${TRANSITION_MS}ms ease` : "none",
          }}
        >
          {track.map((t, i) => renderCard(t, i))}
        </div>
      </div>

      <button aria-label="Previous testimonial" onClick={goPrev} style={{ ...arrowBtn, left: -8 }}>
        <Chevron dir="left" />
      </button>
      <button aria-label="Next testimonial" onClick={goNext} style={{ ...arrowBtn, right: -8 }}>
        <Chevron dir="right" />
      </button>
    </div>
  );
}
