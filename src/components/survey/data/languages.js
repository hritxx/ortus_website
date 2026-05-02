/**
 * Supported languages for the Financial Health Checkup Survey.
 * 11 Northeast Indian languages with established digital scripts.
 */

export const LANGUAGES = {
  en:  { name: "English",    nativeName: "English",     script: "latin" },
  bn:  { name: "Bengali",    nativeName: "বাংলা",       script: "bengali" },
  as:  { name: "Assamese",   nativeName: "অসমীয়া",     script: "assamese" },
  mni: { name: "Manipuri",   nativeName: "মৈতৈলোন্",    script: "bengali" },
  ne:  { name: "Nepali",     nativeName: "नेपाली",       script: "devanagari" },
  lus: { name: "Mizo",       nativeName: "Mizo",        script: "latin" },
  kha: { name: "Khasi",      nativeName: "Khasi",       script: "latin" },
  grt: { name: "Garo",       nativeName: "Garo",        script: "latin" },
  nag: { name: "Nagamese",   nativeName: "Nagamese",    script: "latin" },
  trp: { name: "Kokborok",   nativeName: "Kokborok",    script: "latin" },
  brx: { name: "Bodo",       nativeName: "बड़ो",         script: "devanagari" },
};

export const LANGUAGE_CODES = Object.keys(LANGUAGES);
export const DEFAULT_LANG = "en";

/**
 * Helper to get localized text with English fallback.
 */
export function t(textObj, lang) {
  if (!textObj) return "";
  return textObj[lang] || textObj[DEFAULT_LANG] || "";
}
