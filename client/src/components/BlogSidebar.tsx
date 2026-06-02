/**
 * Blog sidebar — search field + InlineQuoteForm + Emergency Service callout.
 * Used in the right column of /blog and /blog/:slug pages.
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Search, Clock } from "lucide-react";
import { C, KMS_PHONE, KMS_PHONE_HREF, InlineQuoteForm, WarrantyCallout, FreeNationwidePickupCallout } from "@/components/KmsLayout";
import { searchPosts, type WpSearchResult } from "@/lib/wpApi";

function BlogSearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<WpSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  // Debounced search — fires 350ms after typing stops
  useEffect(() => {
    const q = query.trim();
    if (!q) {
      setResults([]);
      setError("");
      return;
    }
    const handle = setTimeout(async () => {
      setLoading(true);
      setError("");
      try {
        const data = await searchPosts(q, 6);
        setResults(data);
        setOpen(true);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Search failed.");
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 350);
    return () => clearTimeout(handle);
  }, [query]);

  return (
    <div style={{ position: "relative", marginBottom: "1.5rem" }}>
      <div style={{ position: "relative" }}>
        <Search
          size={16}
          style={{
            position: "absolute",
            left: "0.875rem",
            top: "50%",
            transform: "translateY(-50%)",
            color: C.textMid,
            pointerEvents: "none",
          }}
        />
        <input
          type="search"
          placeholder="Search the blog…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
          style={{
            width: "100%",
            padding: "0.7rem 0.875rem 0.7rem 2.4rem",
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "0.95rem",
            color: C.textDark,
            background: "white",
            border: `1px solid #cdd5e0`,
            borderRadius: 2,
            outline: "none",
            boxSizing: "border-box",
          }}
          onFocusCapture={(e) => (e.currentTarget.style.borderColor = C.green)}
          onBlurCapture={(e) => (e.currentTarget.style.borderColor = "#cdd5e0")}
        />
      </div>
      {open && (query.trim().length > 0) && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 0,
            right: 0,
            background: "white",
            border: `1px solid #cdd5e0`,
            borderRadius: 2,
            boxShadow: "0 8px 24px rgba(30,80,128,0.12)",
            zIndex: 30,
            maxHeight: 340,
            overflowY: "auto",
          }}
        >
          {loading && (
            <div style={{ padding: "0.875rem 1rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: C.textMid }}>
              Searching…
            </div>
          )}
          {!loading && error && (
            <div style={{ padding: "0.875rem 1rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: "#c0392b" }}>
              {error}
            </div>
          )}
          {!loading && !error && results.length === 0 && (
            <div style={{ padding: "0.875rem 1rem", fontFamily: "'Source Sans 3', sans-serif", fontSize: "0.88rem", color: C.textMid }}>
              No matches for "{query}".
            </div>
          )}
          {!loading && !error && results.map((r) => {
            // The WP URL is from cms.; we route locally as /blog/:slug
            const url = new URL(r.url);
            const parts = url.pathname.split("/").filter(Boolean);
            const slug = parts[parts.length - 1] || "";
            return (
              <Link
                key={r.id}
                href={`/blog/${slug}`}
                style={{
                  display: "block",
                  padding: "0.7rem 1rem",
                  borderBottom: "1px solid #eef1f5",
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: C.blueDark,
                  textDecoration: "none",
                  lineHeight: 1.4,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f4f7fa")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              >
                {r.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function BlogSidebar() {
  return (
    <div style={{ position: "sticky", top: 100 }}>
      <BlogSearchBox />

      <InlineQuoteForm service="" dark={false} />

      <div style={{ marginTop: "1.5rem" }}>
        <WarrantyCallout />
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <FreeNationwidePickupCallout />
      </div>

      {/* Emergency Service callout — reused pattern from interior page sidebars */}
      <div
        style={{
          marginTop: "1.5rem",
          background: C.darkBg,
          borderRadius: 2,
          padding: "1.5rem",
          border: `1px solid rgba(120,165,70,0.3)`,
        }}
      >
        <div
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 600,
            fontSize: "0.72rem",
            color: C.green,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Equipment Down?
        </div>
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.4rem",
            color: "white",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
          }}
        >
          24/7 Emergency Service
        </div>
        <p
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "0.88rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6,
            marginBottom: "1.25rem",
          }}
        >
          When your equipment goes down, every hour costs you. Call us anytime, day or night — we respond within the hour.
        </p>
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
            fontSize: "0.95rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "0.7rem 1.25rem",
            borderRadius: 2,
            textDecoration: "none",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Clock size={16} /> Call {KMS_PHONE}
        </a>
        <Link
          href="/emergency-service"
          style={{
            display: "block",
            textAlign: "center",
            marginTop: "0.6rem",
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: "0.82rem",
            color: "rgba(255,255,255,0.55)",
            textDecoration: "none",
          }}
        >
          Learn more about emergency response →
        </Link>
      </div>
    </div>
  );
}
