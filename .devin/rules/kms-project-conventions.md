---
description: Kelsey Machine Services project-specific conventions — WP URL rewriting, form submission flow, env vars, prerender compatibility.
activation: always_on
---

# KMS Project Conventions

This is a Vite 7 + React 19 + TypeScript + Wouter SPA, deployed on Vercel,
with a headless WordPress backend at cms.kmstx.com. SEO depends on the
build-time prerender (`scripts/prerender.mjs`).

## 1. WordPress URL rewriting

Any HTML coming from cms.kmstx.com that contains image, link, or asset URLs
MUST be passed through `rewriteWpUrls()` (from `client/src/lib/wpApi.ts`)
before rendering. Embedded WP URLs default to `www.kmstx.com` paths that
don't serve `wp-content` — without rewriting, images render as 2200px blank
rectangles.

DO:
```tsx
const html = rewriteWpUrls(post.content.rendered);
<div dangerouslySetInnerHTML={{ __html: html }} />
```

DON'T:
```tsx
<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
```

## 2. Forms — route through /api/submit only

Forms MUST POST to `/api/submit` (the Vercel function), never directly to
cms.kmstx.com. The function holds the X-API-Key server-side; a direct
client POST would either fail (no key) or leak the key.

Submission shape locked by WebWize Connect Forms plugin:
```ts
{ formType, name, email, phone, company, interest, message, source }
```

Do not add new top-level fields without updating both ends.

## 3. Environment variables — `VITE_*` is public

Anything prefixed `VITE_` is exposed to the browser bundle. Never put
secrets in a `VITE_*` var. Server-only secrets (e.g. `WP_FORMS_API_KEY`,
`RESEND_API_KEY`) must be unprefixed and only read inside `api/*.ts`
(Vercel function context).

## 4. Prerender compatibility

Do not introduce client-only patterns that break the build-time prerender:
- No use of `window`, `document`, or `localStorage` at module scope — guard
  inside `useEffect` or `typeof window !== "undefined"` checks.
- Do not block rendering on data the prerender can't fetch (logged-in
  session data, for example).
- New routes that should be in static HTML output must be added to
  `scripts/prerender.mjs` STATIC_ROUTES.

## 5. Deployments — verify before pushing

Before suggesting `git push origin main`, propose `pnpm check` (typecheck)
and `pnpm build` to verify the change builds. Vercel deploys main
automatically — a broken build = broken production.

If the user is on a feature branch, this rule relaxes.

## 6. Auditing on demand

When the user asks "audit against the rules" or similar, scan the codebase
for violations of rules in both this file and vercel-react-best-practices.md.
Report each finding with severity, file:line, the offending code, and the
specific fix. Do not modify files until the user approves.
