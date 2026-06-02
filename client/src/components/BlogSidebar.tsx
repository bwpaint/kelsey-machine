/**
 * Blog sidebar — search field + InlineQuoteForm + Warranty + Pickup + Emergency callouts.
 * Used in the right column of /blog and /blog/:slug pages.
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Search } from "lucide-react";
import {
  C,
  InlineQuoteForm,
  WarrantyCallout,
  FreeNationwidePickupCallout,
  EmergencyCallout,
} from "@/components/KmsLayout";
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
      {open && query.trim().length > 0 && (
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
    <div style={{ position: "sticky", top: 100 }} className="flex flex-col gap-5">
      <BlogSearchBox />
      <InlineQuoteForm service="" dark={false} />
      <WarrantyCallout />
      <FreeNationwidePickupCallout />
      <EmergencyCallout />
    </div>
  );
}
