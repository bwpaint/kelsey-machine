# KMS → Vercel Takeover — Handoff (branch: claude/vercel-prep)

This pass took over the Manus build and made it Vercel-ready **without changing
the design or architecture**. Type-check (`pnpm check`) and production build
(`pnpm build`) both pass clean.

## What changed this pass
- **Manus cleanup:** removed the two Manus Vite plugins + Manus hostnames from
  `vite.config.ts`, deleted `ManusDialog.tsx` and `public/__manus__/`, stripped
  the broken Umami analytics script from `index.html`, pruned stale Manus
  packages from the lockfile.
- **Images:** removed dead CloudFront logo consts; replaced the "KERR"-branded
  About hero with a real KMS centrifuge photo (`/images/kms-about-hero.webp`).
  **Zero external image dependencies remain.**
- **Vercel:** added `vercel.json` (build `pnpm build`, output `dist/public`,
  SPA rewrite that skips `/api`, cleanUrls).
- **Lead forms:** new `/api/submit.ts` serverless function emails leads via
  Resend; all forms (InlineQuoteForm, Contact, NewsletterBar, 5x /lp/) wired
  through `client/src/lib/submitLead.ts` with sending/error states.
- **Legal:** added Privacy Policy (`/privacy-policy`) and Terms (`/terms`),
  fixed the footer links (were `href="#"`), added both to the sitemap.
- **Favicon + GTM:** KMS sunburst favicon set + apple-touch-icon and link tags;
  commented GTM snippet with placeholder `GTM-XXXXXXX`.

## TO GO LIVE — needs YOU (Brooks)
1. **Vercel env vars** (Project Settings → Environment Variables):
   - `RESEND_API_KEY` — from resend.com (verify the sending domain first)
   - `LEAD_TO_EMAIL` = `service@kmstx.com`
   - `LEAD_FROM_EMAIL` = an address on a Resend-verified domain (e.g. `leads@kmstx.com`)
   - Until these are set, forms return a friendly "call us" message (verified).
2. **Vercel project settings:** framework "Other"; build/output are already in
   `vercel.json`. pnpm auto-detected from the lockfile.

## NEEDS info/assets only Jimmy/Glenn have
- **Google reviews rating** — `index.html` LocalBusiness schema still says
  `ratingValue 5 / 9 reviews`. Glenn said 4.8/5.0 — **do not ship unverified
  review markup** (Google penalty risk). Confirm real numbers, then update.
- **TX license number** — replace "TX Licensed & Insured" placeholder in Home hero.
- **BBB seal + profile URL** and **AGMA logo + member URL** — replace placeholder badges.
- **Full-color logo** (`LOGO_COLOR` was dead code; if a color logo is wanted anywhere, supply the file).
- **Compressor page photo** — no compressor images in the asset folder yet.
- **GTM container ID** — replace `GTM-XXXXXXX` in `index.html` and uncomment.
- **Favicon** — current one is auto-generated from the logo; swap if you want a pro-designed mark.

## FOLLOW-UP (deferred, by design)
- **Prerendering for SEO** — needs headless Chrome at build; deferred to a round
  where we verify on a live Vercel preview (Google URL Inspection / Rich Results)
  that crawlers get full HTML + the JS-injected FAQ schema. SPA is JS-indexable meanwhile.
- **Blog** — still `/blog` → 404; waits on the headless WordPress CMS.
- **Forms → WordPress** — when `cms.kmstx.com` `wwcf` endpoint is live, set
  `VITE_LEAD_ENDPOINT` to it; no code change needed.
- **Sitemap `<lastmod>`** — bump to the real go-live date.
