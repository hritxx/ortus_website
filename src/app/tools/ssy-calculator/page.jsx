'use client';

import CalculatorLayout from '@/components/calculators/CalculatorLayout';
import { ssyCalculatorConfig } from '@/lib/calculators/ssy';

export default function SSYCalculatorPage() {
  return <CalculatorLayout config={ssyCalculatorConfig} />;
}
