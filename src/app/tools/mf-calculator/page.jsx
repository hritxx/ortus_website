'use client';

import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import { mfCalculatorConfig } from '@/lib/calculators/mf';

export default function MFCalculatorPage() {
  return <CalculatorLayout config={mfCalculatorConfig} />;
}
