import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// KMS Astro config — static-first build with React islands for interactive
// components (quote form, contact form, mobile nav). Tailwind for styling.
// Sitemap integration auto-generates sitemap-index.xml at build.
export default defineConfig({
  site: "https://www.kmstx.com",
  output: "static",
  integrations: [react(), tailwind(), sitemap()],
  build: { format: "directory" },
  vite: {
    define: {
      // Available to React islands at build time as same-shaped env var.
      "import.meta.env.PUBLIC_CMS_URL": JSON.stringify(
        process.env.PUBLIC_CMS_URL || "https://cms.kmstx.com",
      ),
    },
  },
});
