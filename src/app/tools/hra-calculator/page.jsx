'use client';

import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import { hraCalculatorConfig } from '@/lib/calculators/hra';

export default function HRACalculatorPage() {
  return <CalculatorLayout config={hraCalculatorConfig} />;
}
