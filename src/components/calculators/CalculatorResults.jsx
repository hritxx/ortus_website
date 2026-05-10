'use client';

import { formatCurrency } from '@/lib/calculators/format';

/**
 * CalculatorResults — displays the "Effective Returns" summary card.
 * Renders 3 metrics in a responsive row.
 */
export default function CalculatorResults({ results }) {
  if (!results?.summary) return null;

  return (
    <section aria-label="Effective Returns">
      <h2 className="text-lg font-bold text-slate-800 mb-3">
        Effective Returns:
      </h2>
      <div className="flex flex-wrap gap-6 bg-white rounded-xl border border-slate-200 p-5">
        {results.summary.map((item) => (
          <div key={item.key} className="min-w-[120px]">
            <p className="text-xs font-medium text-slate-500 mb-1">
              {item.label}
            </p>
            <p className="text-lg font-bold text-green-600">
              {formatCurrency(item.value)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
