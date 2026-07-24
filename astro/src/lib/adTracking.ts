/**
 * Ad-click attribution capture — GCLID + Google Ads ValueTrack params.
 *
 * WHY THIS EXISTS: PPC leads were arriving with GCLID / Ad Keyword / Ad
 * Campaign ID / Ad Match Type / Ad Device all blank, which meant (a) no way
 * to tell a genuine paid-search click from someone who just typed the LP
 * URL in directly, and (b) no offline-conversion data to feed back into
 * Google Ads. Root cause: nothing in the codebase ever read the query
 * string. This fixes that.
 *
 * We don't know the exact "Final URL suffix" configured in the Google Ads
 * account, so this captures gclid explicitly (Ads auto-tagging appends this
 * to every ad click by default, regardless of any custom suffix) plus every
 * common ValueTrack alias, AND stores the full raw query string as a
 * fallback so nothing is lost even if a param name guess is wrong.
 *
 * Captured once on landing, persisted to localStorage for 30 days so
 * attribution survives if the visitor browses a few pages before
 * submitting a form.
 */

const STORAGE_KEY = "kms_ad_tracking";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 days — standard last-click window

export interface AdTracking {
  gclid?: string;
  adKeyword?: string;
  adCampaignId?: string;
  adMatchType?: string;
  adDevice?: string;
  adNetwork?: string;
  landingPage?: string;
  adParamsRaw?: string;
}

// Known ValueTrack / UTM aliases advertisers commonly use for each field.
// First match wins.
const ALIASES: Record<keyof Omit<AdTracking, "landingPage" | "adParamsRaw">, string[]> = {
  gclid: ["gclid"],
  adKeyword: ["keyword", "utm_term", "adkeyword", "ad_keyword"],
  adCampaignId: ["campaignid", "campaign_id", "utm_campaign", "ad_campaign_id"],
  adMatchType: ["matchtype", "utm_matchtype", "match_type", "ad_match_type"],
  adDevice: ["device", "utm_device", "ad_device"],
  adNetwork: ["network", "utm_source", "ad_network"],
};

function readFromUrl(): AdTracking | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  if ([...params.keys()].length === 0) return null;

  const out: AdTracking = {};
  let found = false;
  for (const [field, aliases] of Object.entries(ALIASES) as [keyof AdTracking, string[]][]) {
    for (const alias of aliases) {
      const v = params.get(alias);
      if (v) {
        (out as Record<string, string>)[field] = v;
        found = true;
        break;
      }
    }
  }
  if (!found) return null;

  out.landingPage = window.location.pathname;
  out.adParamsRaw = window.location.search;
  return out;
}

/** Call on every page load. Captures fresh params if present, else returns
 *  the last-stored attribution (if still within the attribution window). */
export function getAdTracking(): AdTracking {
  if (typeof window === "undefined") return {};

  const fresh = readFromUrl();
  if (fresh) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...fresh, capturedAt: Date.now() }));
    } catch {
      /* localStorage unavailable (private mode, etc.) — fall through, still return fresh */
    }
    return fresh;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored) as AdTracking & { capturedAt?: number };
    if (parsed.capturedAt && Date.now() - parsed.capturedAt > MAX_AGE_MS) return {};
    const { capturedAt, ...rest } = parsed;
    return rest;
  } catch {
    return {};
  }
}
