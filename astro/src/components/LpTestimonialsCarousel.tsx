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
 *
 * ACCESSIBILITY / ROBUSTNESS (2026-08-12 fixes from a code review):
 *   - Arrows used to only appear on `hovering`, which touch devices never
 *     trigger — mobile visitors (this is mostly mobile PPC traffic) had no
 *     way to control the carousel at all. Arrows are now also shown on
 *     keyboard focus and on any device that can't hover (`(hover: none)`
 *     media query), and autoplay pauses on focus as well as hover so a
 *     keyboard user isn't fighting an auto-advancing target.
 *   - `prefers-reduced-motion` now actually stops autoplay and disables
 *     the slide transition here — previously only LpPage.astro's OWN
 *     animations respected it, this component kept auto-sliding regardless.
 *   - Clone cards (the padding copies used for the infinite-loop illusion)
 *     are marked `aria-hidden` so screen readers don't encounter the same
 *     testimonial twice.
 *   - Rapid repeated arrow clicks used to be able to advance the index
 *     faster than the snap-back timeout could keep up, overrunning the
 *     clone padding and producing a blank slot / visible jump. `step()`
 *     now locks via a ref for the duration of one transition, so a click
 *     mid-transition is ignored instead of compounding.
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

// greenDark: the brand green (#78A546) is only ~2.7:1 against this card's
// light background at the company-line's size/weight — fails WCAG AA
// (needs 4.5:1 for non-large text). greenDark is the same hue darkened to
// ~5:1, comfortably clearing AA with a bit of margin, while staying
// visually distinct from blueDark (the name line) so the two-tone
// hierarchy between name/company is preserved.
const C = { blueDark: "#1E5080", green: "#78A546", greenDark: "#527429", lightBg: "#F4F7FA" };
const TRANSITION_MS = 600;
const MOBILE_QUERY = "(max-width: 767px)";
const NO_HOVER_QUERY = "(hover: none)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

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

  // Touch/no-hover devices can never trigger `hovering` — arrows need to
  // just be visible there, not hidden-until-hover. False by default
  // (matches desktop SSR default above); corrected client-side.
  const [noHover, setNoHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(NO_HOVER_QUERY);
    const update = () => setNoHover(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // prefers-reduced-motion: stop autoplay and disable the slide transition
  // entirely. False by default client-side-correctable like the above.
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(REDUCED_MOTION_QUERY);
    const update = () => setReducedMotion(mq.matches);
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
  const [focused, setFocused] = useState(false);
  // Only used by the double-rAF cleanup below (see that effect) — the
  // autoplay interval no longer needs a ref, its `id` is scoped to the
  // effect closure and cleaned up directly.
  const rafCleanupRef = useRef<(() => void) | null>(null);

  // Guards against rapid repeated clicks advancing the index faster than
  // the snap-back timeout (below) can keep up — without this, two fast
  // "next" clicks could push the index past the clone padding entirely
  // (a blank slot renders, then the snap lands on the wrong card). Locked
  // for one transition's duration; a click while locked is simply ignored
  // rather than queued, which is the right feel for a carousel arrow.
  const busyRef = useRef(false);
  const step = (dir: 1 | -1) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setAnimate(true);
    setIndex((i) => i + dir);
    window.setTimeout(() => { busyRef.current = false; }, TRANSITION_MS);
  };

  // visibleCount changing (mobile<->desktop resize) changes the clone
  // padding and thus what index means — reset to the start rather than
  // trying to preserve position across a re-shaped track. Rare in
  // practice (most visitors don't resize across the breakpoint mid-view).
  useEffect(() => {
    setAnimate(false);
    setIndex(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount]);

  const goNext = () => step(1);
  const goPrev = () => step(-1);

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

  // Re-enable the transition after a silent reset, so the NEXT real step
  // animates normally again. Double rAF, not single: passive effects
  // typically run after paint but that's not guaranteed, so a single rAF
  // could re-enable the transition before the "no transition" state ever
  // actually painted — the snap-back would then visibly animate as a fast
  // rewind instead of being invisible. Two nested rAFs guarantee at least
  // one full paint has happened with the transition off first.
  useEffect(() => {
    if (!animate) {
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => setAnimate(true));
        rafCleanupRef.current = () => cancelAnimationFrame(raf2);
      });
      return () => { cancelAnimationFrame(raf1); rafCleanupRef.current?.(); };
    }
  }, [animate]);

  // Autoplay — off while hovering OR keyboard-focused (a focused visitor
  // is actively interacting; an auto-advancing target under their finger/
  // cursor is a WCAG 2.2.2 pause requirement, not just a nicety), and off
  // entirely under prefers-reduced-motion. `index` is in the deps so any
  // step — manual OR auto — restarts the countdown; without this, a
  // manual click mid-cycle didn't reset the timer, so autoplay could fire
  // again moments later and feel like a double-advance.
  useEffect(() => {
    if (!canCarousel || hovering || focused || reducedMotion) return;
    const id = setInterval(() => step(1), intervalMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovering, focused, reducedMotion, canCarousel, intervalMs, index]);

  // Visible when: hovering (desktop, original behavior), keyboard-focused
  // (so a tabbing visitor can see and reach the control they just landed
  // on — WCAG 2.4.7), or on any device that can't hover at all (touch —
  // hidden-until-hover is simply broken there, so just always show them).
  const arrowsVisible = hovering || focused || noHover;
  const arrowBtn: React.CSSProperties = {
    position: "absolute", top: "50%", transform: "translateY(-50%)",
    width: 40, height: 40, borderRadius: "50%",
    background: "rgba(30,80,128,0.88)", border: "none", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    opacity: arrowsVisible ? 1 : 0, pointerEvents: arrowsVisible ? "auto" : "none",
    transition: "opacity 0.2s ease", zIndex: 2,
  };

  const renderCard = (t: Testimonial, key: string | number, isClone: boolean) => (
    <div
      key={key}
      aria-hidden={isClone || undefined}
      style={{ flex: `0 0 ${100 / track.length}%`, boxSizing: "border-box", padding: "0 0.6rem" }}
    >
      <div style={{ background: C.lightBg, borderRadius: 4, padding: "1.4rem 1.5rem", boxShadow: "0 2px 12px rgba(30,80,128,0.08)", height: "100%" }}>
        <div style={{ display: "flex", gap: 2, marginBottom: "0.6rem" }}>
          {[0, 1, 2, 3, 4].map((si) => <Star key={si} />)}
        </div>
        <p style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.9rem", color: "#2d3748", lineHeight: 1.6, margin: "0 0 1rem" }}>"{t.quote}"</p>
        <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.95rem", color: C.blueDark }}>{t.name}</div>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: "0.76rem", color: C.greenDark, fontWeight: 600 }}>{t.company}</div>
      </div>
    </div>
  );

  if (!canCarousel) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", justifyContent: "center" }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ flex: "0 1 320px" }}>
            {renderCard(t, i, false)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{ position: "relative" }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        // Only clear focus once it's left the whole carousel, not just
        // moved from one arrow to the other within it.
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            width: `${track.length * (100 / visibleCount)}%`,
            transform: `translateX(-${index * (100 / track.length)}%)`,
            transition: animate && !reducedMotion ? `transform ${TRANSITION_MS}ms ease` : "none",
          }}
        >
          {track.map((t, i) => renderCard(t, i, i < offset || i >= offset + n))}
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
