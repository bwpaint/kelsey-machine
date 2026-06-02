// ─── WordPress REST API client ────────────────────────────────────────────────
// Headless connection to cms.kmstx.com for blog content.
// All functions return typed data; errors throw so calling components can show
// loading/error states cleanly.

const CMS_BASE = (
  (import.meta.env.VITE_CMS_URL as string | undefined) || "https://cms.kmstx.com"
).replace(/\/+$/, "");

const WP_BASE = `${CMS_BASE}/wp-json/wp/v2`;

export interface WpPost {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details?: { width: number; height: number };
    }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>;
    author?: Array<{ id: number; name: string }>;
  };
}

export interface WpSearchResult {
  id: number;
  title: string;
  url: string;
  type: string;
  subtype: string;
}

export interface PostsPage {
  posts: WpPost[];
  totalPosts: number;
  totalPages: number;
}

/** Fetch a paginated list of posts (with featured image embedded). */
export async function fetchPosts(page = 1, perPage = 9): Promise<PostsPage> {
  const url = `${WP_BASE}/posts?per_page=${perPage}&page=${page}&_embed=wp:featuredmedia,wp:term,author`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load posts (${res.status})`);
  const posts = (await res.json()) as WpPost[];
  const totalPosts = Number(res.headers.get("X-WP-Total") || 0);
  const totalPages = Number(res.headers.get("X-WP-TotalPages") || 0);
  return { posts, totalPosts, totalPages };
}

/** Fetch a single post by slug. Returns null if not found. */
export async function fetchPostBySlug(slug: string): Promise<WpPost | null> {
  const url = `${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=wp:featuredmedia,wp:term,author`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load post (${res.status})`);
  const arr = (await res.json()) as WpPost[];
  return arr.length ? arr[0] : null;
}

/** Search posts via WP REST search endpoint. Returns lightweight results. */
export async function searchPosts(query: string, limit = 8): Promise<WpSearchResult[]> {
  const q = query.trim();
  if (!q) return [];
  const url = `${WP_BASE}/search?search=${encodeURIComponent(q)}&type=post&subtype=post&per_page=${limit}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Search failed (${res.status})`);
  return (await res.json()) as WpSearchResult[];
}

/** Strip WordPress's wrapping <p> and HTML tags for plain-text use (excerpts). */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&hellip;/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

/** Convert a WP date string to a friendly display format. */
export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

/** Pull the featured image source URL out of an embedded post, or fall back to empty. */
export function getFeaturedImage(post: WpPost): { src: string; alt: string } {
  const fm = post._embedded?.["wp:featuredmedia"]?.[0];
  return {
    src: fm?.source_url || "",
    alt: fm?.alt_text || post.title.rendered.replace(/<[^>]+>/g, ""),
  };
}

/** Rewrite URLs in WP-rendered HTML so the page renders correctly on www.
 *
 *   • WP serves uploaded media (images, PDFs, etc.) under /wp-content/ on the
 *     WordPress domain. When WP renders a post it embeds those URLs with
 *     whatever site_url is configured — for KMS that's www.kmstx.com. But www
 *     is now the Vercel React SPA, which does NOT serve /wp-content/ files,
 *     so every embedded image silently 404s while still reserving its declared
 *     width/height attribute space — giving us huge empty rectangles in
 *     the middle of posts.
 *
 *     Fix: rewrite www.kmstx.com → cms.kmstx.com for any path under
 *     /wp-content/, /wp-includes/, or /wp-json/.
 *
 *   • Internal page links that point at the WP admin domain (cms.kmstx.com)
 *     should route back to the React app at www., so navigation stays in the
 *     SPA (a /services or /about link inside a post body should not jump to
 *     the WP install).
 *
 *   • Root-relative href="/foo" links should become absolute www links.
 *
 *   • Image srcset attributes get the same media-URL treatment so high-DPR
 *     variants load too.
 */
export function rewriteWpUrls(html: string): string {
  return html
    // Media URLs: www → cms (so images/files actually resolve)
    .replace(
      /https:\/\/www\.kmstx\.com\/(wp-content|wp-includes|wp-json)/g,
      "https://cms.kmstx.com/$1",
    )
    // Internal page links: cms → www (so navigation stays on the SPA)
    .replace(
      /https:\/\/cms\.kmstx\.com\/(?!wp-content|wp-includes|wp-json|wp-admin|wp-login)/g,
      "https://www.kmstx.com/",
    )
    // Root-relative href links → absolute www
    .replace(/href="\/(?!\/)/g, 'href="https://www.kmstx.com/');
}
