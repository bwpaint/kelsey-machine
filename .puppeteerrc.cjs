/**
 * Puppeteer config — pin the browser cache to a location inside the project
 * so Vercel's build phase can still find Chrome after npm install.
 *
 * Without this, Vercel installs puppeteer + downloads Chrome to
 * /vercel/.cache/puppeteer/, then in the next build phase that path is
 * either cleared or unreadable, and the prerender script can't launch Chrome.
 *
 * Pinning to ./node_modules/.cache/puppeteer (under the project root, which
 * Vercel preserves) is the officially recommended pattern.
 *
 * See https://pptr.dev/guides/configuration
 */
const { join } = require("node:path");

module.exports = {
  cacheDirectory: join(__dirname, "node_modules", ".cache", "puppeteer"),
};
