import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://www.kmstx.com",
  // `output: "static"` + an adapter = static-by-default with per-route opt-in.
  // Every page is still prerendered to HTML at build time exactly as before;
  // only src/pages/api/submit.ts sets `prerender = false` and runs on Node.
  // This is what replaces the Vercel serverless function after the xCloud move.
  output: "static",
  // standalone = the build emits its own HTTP server (dist/server/entry.mjs)
  // that also serves the static assets. xCloud/OpenLiteSpeed reverse-proxies
  // to it, so there's no separate static-file vhost to keep in sync.
  adapter: node({ mode: "standalone" }),
  // Was `"trailingSlash": false` + `"cleanUrls": true` in vercel.json. Astro's
  // "never" is the equivalent: /about, not /about/.
  trailingSlash: "never",
  // Ported from vercel.json "redirects" — Astro emits these as 301s.
  redirects: {
    "/pump-service": "/services/pump-service",
  },
  // Default publicDir = ./public. The prebuild script in package.json copies
  // client/public into astro/public before `astro build` runs.
  integrations: [react(), tailwind(), sitemap()],
  build: {
    format: "directory",
    // Inline all page stylesheets so we don't pay the per-page CSS round trip.
    // Tradeoff: every page HTML is a bit larger; gain: no render-blocking CSS fetch.
    inlineStylesheets: "always",
  },
  vite: {
    define: {
      "import.meta.env.PUBLIC_CMS_URL": JSON.stringify(
        process.env.PUBLIC_CMS_URL || "https://cms.kmstx.com",
      ),
    },
  },
});
