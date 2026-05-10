'use client';

import { useState } from 'react';

/**
 * CalculatorFAQ — accordion FAQ section with JSON-LD structured data.
 * Reuses the visual style of the existing FaqItem component.
 */

function FaqItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-blue-200 transition-all duration-200 mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
        aria-expanded={open}
        aria-controls={`calc-faq-${index}`}
      >
        <span className="text-sm font-semibold text-slate-800 pr-4">
          {question}
        </span>
        <svg
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={`calc-faq-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4">
          <p className="text-sm text-slate-600 leading-relaxed bg-blue-50 rounded-lg p-3">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CalculatorFAQ({ faqs, calculatorTitle }) {
  if (!faqs?.length) return null;

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section aria-label="Frequently Asked Questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        {calculatorTitle} — FAQs
      </h2>
      <div>
        {faqs.map((faq, i) => (
          <FaqItem key={i} question={faq.q} answer={faq.a} index={i} />
        ))}
      </div>
    </section>
  );
}
