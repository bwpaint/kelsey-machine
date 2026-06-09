import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.kmstx.com",
  output: "static",
  // Default publicDir = ./public. The prebuild script in package.json copies
  // client/public into astro/public before `astro build` runs.
  integrations: [react(), tailwind(), sitemap()],
  build: { format: "directory" },
  vite: {
    define: {
      "import.meta.env.PUBLIC_CMS_URL": JSON.stringify(
        process.env.PUBLIC_CMS_URL || "https://cms.kmstx.com",
      ),
    },
  },
});
