import Link from 'next/link';
import { FREE_CALCULATORS, APP_ONLY_CALCULATORS } from '@/lib/calculators';

/**
 * PopularCalculators — sidebar showing links to all calculators.
 * Highlights the current one and links the rest.
 */
export default function PopularCalculators({ currentSlug }) {
  const all = [
    ...FREE_CALCULATORS.map((c) => ({
      title: c.title,
      href: `/tools/${c.slug}`,
      slug: c.slug,
    })),
    ...APP_ONLY_CALCULATORS.map((c) => ({
      title: c.title,
      href: null,
      slug: c.slug,
    })),
  ];

  return (
    <section aria-label="Popular Calculators">
      <h3 className="text-lg font-bold text-slate-800 mb-4">
        Popular Calculators
      </h3>
      <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
        {all.map((calc) => {
          const isCurrent = calc.slug === currentSlug;
          if (!calc.href) {
            return (
              <div
                key={calc.slug}
                className="flex items-center justify-between px-4 py-3 text-sm text-slate-400"
              >
                <span>{calc.title}</span>
                <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">
                  App Only
                </span>
              </div>
            );
          }
          return (
            <Link
              key={calc.slug}
              href={calc.href}
              className={`flex items-center justify-between px-4 py-3 text-sm transition hover:bg-slate-50 cursor-pointer ${
                isCurrent
                  ? 'text-blue-600 font-semibold bg-blue-50'
                  : 'text-slate-700'
              }`}
            >
              <span>{calc.title}</span>
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
