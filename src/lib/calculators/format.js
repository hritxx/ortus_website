/**
 * Shared formatting utilities for calculator display values.
 * Pure functions — no I/O, no side effects.
 */

/** Format number in Indian locale with ₹ symbol */
export function formatCurrency(value) {
  if (value == null || isNaN(value)) return '₹0';
  return '₹' + Math.round(value).toLocaleString('en-IN');
}

/** Format number in Indian locale (no symbol) */
export function formatNumber(value) {
  if (value == null || isNaN(value)) return '0';
  return Math.round(value).toLocaleString('en-IN');
}

/** Abbreviate large numbers: 1,00,000 → 1.0L */
export function abbreviateIndian(value) {
  const abs = Math.abs(value);
  if (abs >= 1e7) return (value / 1e7).toFixed(1) + 'Cr';
  if (abs >= 1e5) return (value / 1e5).toFixed(1) + 'L';
  if (abs >= 1e3) return (value / 1e3).toFixed(1) + 'K';
  return Math.round(value).toString();
}

/** Generate a stable cache key from inputs object */
export function cacheKey(slug, inputs) {
  const sorted = Object.keys(inputs).sort();
  const parts = sorted.map((k) => `${k}=${inputs[k]}`);
  return `calc_${slug}_${parts.join('_')}`;
}
