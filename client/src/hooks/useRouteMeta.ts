import { useEffect } from "react";
import { useLocation } from "wouter";
import { loadRouteMeta, getMeta, applyMeta } from "@/lib/routeMeta";

/**
 * Wire RM metadata into the live DOM. Call once at the top of KmsLayout (or
 * any common wrapper) — it reads the current Wouter path and updates
 * <title> + meta tags whenever the path changes.
 *
 * The prerendered HTML already has the right tags from `scripts/prerender.mjs`,
 * so on first paint this is a no-op. On Wouter SPA navigation (no full reload),
 * this updates the tags so document.title and OG previews stay accurate.
 */
export function useRouteMeta(): void {
  const [path] = useLocation();
  useEffect(() => {
    let cancelled = false;
    loadRouteMeta().then((index) => {
      if (cancelled) return;
      const meta = getMeta(path, index);
      if (meta) applyMeta(meta);
    });
    return () => {
      cancelled = true;
    };
  }, [path]);
}
