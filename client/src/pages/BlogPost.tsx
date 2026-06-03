/**
 * BlogPost — single post page rendered from WP REST API.
 * Pulls by slug via /wp-json/wp/v2/posts?slug=<slug>.
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Calendar } from "lucide-react";
import { NavBar, Footer, NewsletterBar, C } from "@/components/KmsLayout";
import { BlogSidebar } from "@/components/BlogSidebar";
import {
  fetchPostBySlug,
  formatPostDate,
  getFeaturedImage,
  rewriteWpUrls,
  stripHtml,
  type WpPost,
} from "@/lib/wpApi";
import NotFound from "@/pages/NotFound";

export default function BlogPost({ slug = "" }: { slug?: string } = {}) {

  const [post, setPost] = useState<WpPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    if (!slug) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    setNotFound(false);
    fetchPostBySlug(slug)
      .then((data) => {
        if (cancelled) return;
        if (!data) {
          setNotFound(true);
        } else {
          setPost(data);
          // Update document title for basic SEO until prerendering lands
          if (typeof document !== "undefined") {
            document.title = `${stripHtml(data.title.rendered)} | KMS Blog`;
          }
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : "Could not load this post.");
      })
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [slug]);

  if (notFound) return <NotFound />;

  const img = post ? getFeaturedImage(post) : { src: "", alt: "" };
  const categories = post?._embedded?.["wp:term"]?.[0] || [];

  return (
    <>
      <NavBar />
      <main style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article column (2/3) */}
            <article className="lg:col-span-2">
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  color: C.textMid,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                }}
              >
                <ArrowLeft size={14} /> All Articles
              </Link>

              {loading && (
                <div style={{ padding: "3rem 0", textAlign: "center", fontFamily: "'Source Sans 3', sans-serif", color: C.textMid }}>
                  Loading…
                </div>
              )}

              {error && (
                <div style={{ padding: "1.25rem 1.5rem", background: "#fff4f4", border: `1px solid #f3c2c2`, borderRadius: 4, color: "#a04040", fontFamily: "'Source Sans 3', sans-serif" }}>
                  {error}
                </div>
              )}

              {!loading && !error && post && (
                <>
                  {categories.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: "0.875rem" }}>
                      {categories.slice(0, 3).map((c) => (
                        <span
                          key={c.id}
                          style={{
                            display: "inline-block",
                            background: `rgba(120,165,70,0.1)`,
                            border: `1px solid ${C.green}66`,
                            color: C.green,
                            fontFamily: "'Barlow', sans-serif",
                            fontWeight: 700,
                            fontSize: "0.7rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            padding: "0.3rem 0.7rem",
                            borderRadius: 2,
                          }}
                        >
                          {c.name}
                        </span>
                      ))}
                    </div>
                  )}

                  <h1
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                      color: C.blueDark,
                      textTransform: "uppercase",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                      marginBottom: "0.75rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />

                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Barlow', sans-serif", fontSize: "0.85rem", color: C.textMid, marginBottom: "1.5rem" }}>
                    <Calendar size={14} />
                    {formatPostDate(post.date)}
                  </div>

                  {img.src && (
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: 460,
                        objectFit: "cover",
                        borderRadius: 4,
                        marginBottom: "2rem",
                        display: "block",
                      }}
                    />
                  )}

                  <div
                    className="kms-blog-content"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      fontSize: "1.05rem",
                      lineHeight: 1.75,
                      color: C.textDark,
                    }}
                    dangerouslySetInnerHTML={{ __html: rewriteWpUrls(post.content.rendered) }}
                  />
                </>
              )}
            </article>

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
