/**
 * Escapes JSON-LD before it's injected into a <script type="application/ld+json">
 * via Astro's set:html. Without this, a literal "</script>" substring
 * anywhere in the JSON (e.g. inside a CMS-sourced title, description, or
 * URL field) closes the script tag early and lets whatever follows in the
 * string execute as raw HTML/JS on the page — classic script-in-script-tag
 * injection. Flagged in a 2026-08-11 security review for KmsLayout.astro's
 * seo.schemaJson (sourced from the WebWize RM API — CMS-controlled, not
 * fully trusted); applied here to every JSON-LD injection site in the repo
 * for consistency, even the ones built from local static data files.
 *
 * The replacement is the JSON escape sequence for the "<" character —
 * valid JSON syntax that decodes back to a literal "<" when parsed, so
 * this doesn't change the schema's meaning at all.
 * It just can't be misread as the start of an HTML tag by the browser's
 * HTML parser before the JSON parser ever sees it.
 *
 * Accepts either a pre-stringified JSON string (e.g. from a CMS) or a
 * plain object/array (stringified here first).
 */
export function safeJsonLd(value: string | object): string {
  const json = typeof value === "string" ? value : JSON.stringify(value);
  return json.replace(/</g, "\\u003c");
}
