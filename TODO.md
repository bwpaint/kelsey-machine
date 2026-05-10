# KMS Website — Outstanding Items & Deferred Tasks

## Deferred (Wait Until After Launch)
- [ ] **Brands ticker scroll animation** — The "Brands We Service & Repair" section currently shows brands as static tags. Glenn wants them to scroll/marquee through all brand names. Defer until after initial deployment.
- [ ] **Hydraulic Drive page** — Skipped for now. Add when ready.

## Pre-Production (Before xCloud Deployment)
- [ ] **Replace /manus-storage/ image paths with permanent CDN URLs** — All `/manus-storage/` proxy paths only work in the Manus dev environment. Before deploying to xCloud, run `manus-upload-file --webdev` on each image and update source files. Affected: Home.tsx, CentrifugeRepair.tsx, GearboxRepair.tsx, BlowerRepair.tsx, IndustrialCompressors.tsx, FluidPowerEnd.tsx, EmergencyService.tsx, ServicesOverview.tsx, Warranty.tsx, Contact.tsx, AboutUs.tsx.
- [ ] **Wire lead forms to WordPress REST API** — Once headless WordPress CMS is live on xCloud, update InlineQuoteForm and Contact page form to POST to `/wp-json/wwcf/v1/submit`.
- [ ] **Set up xCloud deployment pipeline** — Configure CI/CD so pushes to main branch auto-deploy.

## Content & SEO
- [ ] **Blog** — Nav "Blog" link currently points to `/blog` (404). Set up WordPress CMS and update link.
- [ ] **Submit sitemap to Google Search Console** — After domain goes live at kmstx.com.
- [ ] **Google My Business** — Verify KMS listing. NAP: 814 Summer Park Dr, BLDG #600, Stafford TX 77477 / 346-350-1464.

## Verification Data (To Confirm with Jimmy)
- [ ] **Google Reviews rating** — Currently showing 4.9/5.0 as placeholder. Confirm actual rating.
- [ ] **TX License number** — Get actual TX license/registration number from Jimmy to display in trust badges.
- [ ] **BBB Accreditation** — Confirm KMS is BBB accredited. If so, add BBB badge link.
- [ ] **AGMA membership** — Confirm KMS is an AGMA member. Update trust badges accordingly.

## Technical
- [ ] **_redirects file** — For xCloud SPA routing, may need a `_redirects` or `.htaccess` so all routes serve `index.html`. Confirm with xCloud hosting requirements.
- [ ] **SeoReport page route** — The `/seo-report/kelsey-machine` page exists but is not in App.tsx routes. Add if needed.
