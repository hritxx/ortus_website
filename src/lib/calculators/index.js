/**
 * Calculator registry — central index of all calculator configs.
 * Import individual configs here and export as a flat list + lookup map.
 */

export { fdCalculatorConfig } from './fd';
export { nscCalculatorConfig } from './nsc';
export { hraCalculatorConfig } from './hra';
export { mfCalculatorConfig } from './mf';
export { ssyCalculatorConfig } from './ssy';

import { fdCalculatorConfig } from './fd';
import { nscCalculatorConfig } from './nsc';
import { hraCalculatorConfig } from './hra';
import { mfCalculatorConfig } from './mf';
import { ssyCalculatorConfig } from './ssy';

/** All free (web) calculators */
export const FREE_CALCULATORS = [
  fdCalculatorConfig,
  nscCalculatorConfig,
  hraCalculatorConfig,
  mfCalculatorConfig,
  ssyCalculatorConfig,
];

/** Calculators only available on the mobile app */
export const APP_ONLY_CALCULATORS = [
  { slug: 'sip-calculator', title: 'SIP Calculator', subtitle: 'Systematic Investment Plan returns' },
  { slug: 'goal-sip-calculator', title: 'Goal SIP Calculator', subtitle: 'Plan SIP for your financial goals' },
  { slug: 'nps-calculator', title: 'NPS Calculator', subtitle: 'National Pension System returns' },
  { slug: 'cagr-calculator', title: 'CAGR Calculator', subtitle: 'Compound Annual Growth Rate' },
  { slug: 'fire-calculator', title: 'FIRE Calculator', subtitle: 'Financial Independence, Retire Early' },
  { slug: 'tax-calculator', title: 'Tax Calculator', subtitle: 'Income tax computation' },
];

/** Lookup a config by slug */
export function getCalculatorBySlug(slug) {
  return FREE_CALCULATORS.find((c) => c.slug === slug) || null;
}
