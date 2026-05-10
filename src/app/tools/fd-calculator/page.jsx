'use client';

import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import { fdCalculatorConfig } from '@/lib/calculators/fd';

export default function FDCalculatorPage() {
  return <CalculatorLayout config={fdCalculatorConfig} />;
}
