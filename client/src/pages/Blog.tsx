/**
 * Blog index — paginated list of WP posts pulled from cms.kmstx.com.
 */

import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";
import {
  NavBar,
  Footer,
  NewsletterBar,
  PageHero,
  C,
} from "@/components/KmsLayout";
import { BlogSidebar } from "@/components/BlogSidebar";
import {
  fetchPosts,
  formatPostDate,
  getFeaturedImage,
  stripHtml,
  type WpPost,
} from "@/lib/wpApi";

const POSTS_PER_PAGE = 9;

function parsePageFromUrl(): number {
  if (typeof window === "undefined") return 1;
  const params = new URLSearchParams(window.location.search);
  const n = Number(params.get("page") || 1);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

export default function Blog() {
  const [, setLocation] = useLocation();
  const [page, setPage] = useState(parsePageFromUrl());
  const [posts, setPosts] = useState<WpPost[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError("");
    fetchPosts(page, POSTS_PER_PAGE)
      .then(data => {
        if (cancelled) return;
        setPosts(data.posts);
        setTotalPages(data.totalPages);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch(err => {
        if (cancelled) return;
        setError(
          err instanceof Error ? err.message : "Could not load blog posts."
        );
        setPosts([]);
      })
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, [page]);

  const goToPage = (n: number) => {
    setPage(n);
    setLocation(`/blog?page=${n}`);
  };

  return (
    <>
      <NavBar />
      <PageHero
        h1="KMS Insights & Industry News"
        subheading="Practical guides, repair case studies, and field expertise from the Kelsey Machine Services team — covering centrifuges, gearboxes, blowers, compressors, mud pump ends, and the broader world of rotating equipment reliability."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Posts column (2/3) */}
            <div className="lg:col-span-2">
              {loading && (
                <div
                  style={{
                    padding: "3rem 0",
                    textAlign: "center",
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: C.textMid,
                  }}
                >
                  Loading posts…
                </div>
              )}
              {error && (
                <div
                  style={{
                    padding: "1.25rem 1.5rem",
                    background: "#fff4f4",
                    border: `1px solid #f3c2c2`,
                    borderRadius: 4,
                    color: "#a04040",
                    fontFamily: "'Source Sans 3', sans-serif",
                  }}
                >
                  {error}
                </div>
              )}
              {!loading && !error && posts.length === 0 && (
                <div
                  style={{
                    padding: "3rem 0",
                    textAlign: "center",
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: C.textMid,
                  }}
                >
                  No posts to show yet.
                </div>
              )}
              {!loading && !error && posts.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {posts.map(post => {
                    const img = getFeaturedImage(post);
                    const titleText = stripHtml(post.title.rendered);
                    const excerpt = stripHtml(post.excerpt.rendered).slice(
                      0,
                      180
                    );
                    return (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          background: "white",
                          border: "2px solid #dde3ec",
                          borderRadius: 4,
                          overflow: "hidden",
                          textDecoration: "none",
                          transition: "border-color 0.2s, transform 0.2s",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = C.green;
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = "#dde3ec";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {img.src && (
                          <div
                            style={{
                              width: "100%",
                              height: 180,
                              background: `url(${img.src}) center/cover no-repeat`,
                              borderBottom: "1px solid #dde3ec",
                            }}
                          />
                        )}
                        <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 6,
                              fontFamily: "'Barlow', sans-serif",
                              fontSize: "0.78rem",
                              color: C.textMid,
                              marginBottom: "0.5rem",
                            }}
                          >
                            <Calendar size={12} />
                            {formatPostDate(post.date)}
                          </div>
                          <h2
                            style={{
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontWeight: 800,
                              fontSize: "1.25rem",
                              color: C.blueDark,
                              textTransform: "uppercase",
                              letterSpacing: "-0.01em",
                              lineHeight: 1.15,
                              marginBottom: "0.65rem",
                            }}
                          >
                            {titleText}
                          </h2>
                          <p
                            style={{
                              fontFamily: "'Source Sans 3', sans-serif",
                              fontSize: "0.92rem",
                              color: C.textMid,
                              lineHeight: 1.55,
                              marginBottom: "0.9rem",
                            }}
                          >
                            {excerpt}
                            {excerpt.length >= 180 ? "…" : ""}
                          </p>
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              fontFamily: "'Barlow Condensed', sans-serif",
                              fontWeight: 700,
                              fontSize: "0.88rem",
                              color: C.green,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                            }}
                          >
                            Read Article <ArrowRight size={14} />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Pagination */}
              {!loading && totalPages > 1 && (
                <div
                  className="flex items-center justify-center gap-2"
                  style={{ marginTop: "2.5rem" }}
                >
                  <button
                    type="button"
                    onClick={() => goToPage(Math.max(1, page - 1))}
                    disabled={page <= 1}
                    style={{
                      padding: "0.55rem 1rem",
                      background: page <= 1 ? "#eef1f5" : "white",
                      border: `1px solid #dde3ec`,
                      borderRadius: 2,
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      color: page <= 1 ? "#aaa" : C.blueDark,
                      cursor: page <= 1 ? "not-allowed" : "pointer",
                    }}
                  >
                    ← Prev
                  </button>
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.88rem",
                      color: C.textMid,
                      padding: "0 1rem",
                    }}
                  >
                    Page {page} of {totalPages}
                  </span>
                  <button
                    type="button"
                    onClick={() => goToPage(Math.min(totalPages, page + 1))}
                    disabled={page >= totalPages}
                    style={{
                      padding: "0.55rem 1rem",
                      background: page >= totalPages ? "#eef1f5" : "white",
                      border: `1px solid #dde3ec`,
                      borderRadius: 2,
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                      color: page >= totalPages ? "#aaa" : C.blueDark,
                      cursor: page >= totalPages ? "not-allowed" : "pointer",
                    }}
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar (1/3) */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>
      <NewsletterBar />
      <Footer />
    </>
  );
}
