/**
 * KMS brand tokens — ported from client/src/components/KmsLayout.tsx C{}
 * Single source of truth for colors, contact info, and shared nav config.
 * Used by both .astro components and React island components.
 */

export const C = {
  blueDark:   "#1E5080",
  blueMid:    "#235A91",
  blueSky:    "#3796D2",
  blueLight:  "#4BAAE0",
  green:      "#78A546",
  greenDark:  "#5E8535",
  greenLight: "#8FBF58",
  darkBg:     "#1A2535",
  darkBg2:    "#1E2F44",
  lightBg:    "#F4F7FA",
  white:      "#FFFFFF",
  textDark:   "#1A2535",
  textMid:    "#3D5166",
  textLight:  "rgba(255,255,255,0.85)",
  textMuted:  "rgba(255,255,255,0.6)",
  black:      "#000000",
} as const;

export const KMS_LOGO = "/images/KMS-Logo-transparent.webp";
export const KMS_PHONE = "346-350-1464";
export const KMS_PHONE_HREF = "tel:3463501464";
export const KMS_EMAIL = "info@kmstx.com";
export const KMS_ADDRESS_LINE1 = "814 Summer Park Dr";
export const KMS_ADDRESS_LINE2 = "Building #600";
export const KMS_ADDRESS_LINE3 = "Stafford, TX 77477";
export const KMS_ADDRESS = "814 Summer Park Dr, Building #600, Stafford, TX 77477";

export const SERVICE_NAV = [
  { label: "Services Overview",        href: "/services" },
  { label: "Centrifuge Repair",        href: "/services/centrifuge-repair" },
  { label: "Industrial Blower Repair", href: "/services/industrial-blower-repair" },
  { label: "Gearbox Repair",           href: "/services/gearbox-repair" },
  { label: "Industrial Compressors",   href: "/services/industrial-compressors" },
  { label: "Fluid & Power End Repair", href: "/services/fluid-power-end-repair" },
  { label: "Industrial Pump Repair",   href: "/services/pump-service" },
];

export const MAIN_NAV = [
  { label: "Warranty",   href: "/warranty" },
  { label: "Emergency",  href: "/emergency-service" },
  { label: "Blog",       href: "/blog" },
  { label: "Industries", href: "/industries" },
  { label: "About",      href: "/about" },
  { label: "Contact",    href: "/contact" },
];
