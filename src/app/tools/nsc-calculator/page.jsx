'use client';

import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import { nscCalculatorConfig } from '@/lib/calculators/nsc';

export default function NSCCalculatorPage() {
  return <CalculatorLayout config={nscCalculatorConfig} />;
}
