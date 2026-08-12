/**
 * LpTestimonialsCarousel — React island, PPC landing pages only.
 *
 * Continuous, seamless, bidirectional carousel. Shows 3 testimonials at
 * a time on desktop/tablet, 1 at a time on mobile (<768px) — matches the
 * hero/ROW 2 content width (max-w-7xl) now that it's 3 cards wide rather
 * than 2. Auto-advances one card-step on a timer and loops forever;
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
 * Infinite loop technique: the real testimonial list is padded with
 * `visibleCount` clones on each end (enough to fill one full viewport's
 * worth of cards past the wrap boundary). Autoplay/arrows just increment
 * or decrement an index. Once the index slides onto a clone (which
 * renders identical content to a real position), a timer fires after the
 * CSS transition finishes, disables the transition for one frame, and
 * silently snaps the index back to the equivalent real position —
 * invisible to the visitor because the clone and the real card look the
 * same. Standard technique for this kind of marquee-style carousel.
 *
 * Responsive visible-count: card flex-basis is always `100/track.length`
 * of the TRACK's own width (constant regardless of how many are visible),
 * and translateX steps by that same `100/track.length` each index step —
 * both automatically equal exactly "one card" no matter how wide the
 * track is. The ONLY thing that changes with visibleCount is the track's
 * own width relative to the viewport (`track.length * (100/visibleCount)%`),
 * so bumping visibleCount from 1 to 3 needs just that one formula to
 * change. visibleCount starts at 3 (SSR-safe desktop default — this is a
 * client:visible island, so the server-rendered markup has no `window`)
 * and corrects itself client-side in a useEffect via matchMedia, which
 * causes one harmless reflow on mobile right after hydration rather than
 * a hydration-mismatch warning from guessing window width during the
 * render that has to match SSR output.
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
const TRANSITION_MS = 600;
const MOBILE_QUERY = "(max-width: 767px)";

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

  // Desktop default for the SSR pass (see header comment) — corrected to
  // 1 on mobile right after hydration via matchMedia.
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setVisibleCount(mq.matches ? 1 : 3);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const CLONE_COUNT = Math.min(visibleCount, n);
  // With too few real testimonials to fill even one full screen's worth,
  // the clone math can't fill the visible slots without an obvious
  // repeat — fall back to a static (non-sliding) row instead of a
  // broken carousel.
  const canCarousel = n > visibleCount;

  const track = canCarousel
    ? [...testimonials.slice(-CLONE_COUNT), ...testimonials, ...testimonials.slice(0, CLONE_COUNT)]
    : testimonials;
  const offset = canCarousel ? CLONE_COUNT : 0;

  const [index, setIndex] = useState(offset);
  const [animate, setAnimate] = useState(true);
  const [hovering, setHovering] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // visibleCount changing (mobile<->desktop resize) changes the clone
  // padding and thus what index means — reset to the start rather than
  // trying to preserve position across a re-shaped track. Rare in
  // practice (most visitors don't resize across the breakpoint mid-view).
  useEffect(() => {
    setAnimate(false);
    setIndex(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount]);

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
            width: `${track.length * (100 / visibleCount)}%`,
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
