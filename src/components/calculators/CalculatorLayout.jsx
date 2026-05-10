'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Smartphone } from 'lucide-react';
import CalculatorInput from './CalculatorInput';
import CalculatorResults from './CalculatorResults';
import CalculatorChart from './CalculatorChart';
import CalculatorFAQ from './CalculatorFAQ';
import CalculatorExplanation from './CalculatorExplanation';
import PopularCalculators from './PopularCalculators';
import Container from '@/components/Container';

const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

/** Build initial values from config defaults */
function buildDefaults(inputs) {
  const defaults = {};
  inputs.forEach((input) => {
    defaults[input.key] = input.defaultValue;
  });
  return defaults;
}

/** Restore cached inputs if within TTL */
function restoreFromCache(slug) {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(`calc_${slug}`);
    if (!raw) return null;
    const { inputs, ts } = JSON.parse(raw);
    if (Date.now() - ts < CACHE_TTL) return inputs;
  } catch {
    // Ignore storage errors
  }
  return null;
}

export default function CalculatorLayout({ config }) {
  const defaults = buildDefaults(config.inputs);
  const [values, setValues] = useState(defaults);
  const [hydrated, setHydrated] = useState(false);

  // Restore from cache on mount
  useEffect(() => {
    const cached = restoreFromCache(config.slug);
    if (cached) setValues((prev) => ({ ...prev, ...cached }));
    setHydrated(true);
  }, [config.slug]);

  // Memoized calculation
  const results = useMemo(
    () => config.calculate(values),
    [values, config]
  );

  // Cache to sessionStorage on change
  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem(
        `calc_${config.slug}`,
        JSON.stringify({ inputs: values, ts: Date.now() })
      );
    } catch {
      // Ignore storage errors
    }
  }, [values, config.slug, hydrated]);

  const handleChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Container className="py-12 sm:py-16">
      {/* Header */}
      <header className="mb-8">
        <Link
          href="/tools"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Tools
        </Link>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          {config.title}
        </h1>
        <p className="text-base text-slate-600">{config.subtitle}</p>
      </header>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left column — Results + Inputs */}
        <div className="space-y-6">
          <CalculatorResults results={results} />

          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">
              Input fields:
            </h2>
            <div className="bg-white rounded-xl border border-slate-200">
              {config.inputs.map((input) => (
                <CalculatorInput
                  key={input.key}
                  config={input}
                  value={values[input.key]}
                  onChange={handleChange}
                  allValues={values}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right column — Chart + Popular Calculators */}
        <div className="space-y-6">
          <CalculatorChart
            chartData={results.chartData}
            chartConfig={config.chart}
          />

          {results.maturityYear && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
              <p className="text-sm text-blue-700 font-medium">
                Estimated Maturity Year:{' '}
                <span className="font-bold">{results.maturityYear}</span>
              </p>
            </div>
          )}

          <PopularCalculators currentSlug={config.slug} />
        </div>
      </div>

      {/* Explanation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <CalculatorExplanation explanation={config.explanation} />
        <div /> {/* Spacer for alignment */}
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <CalculatorFAQ faqs={config.faqs} calculatorTitle={config.title} />
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center text-white">
        <h3 className="text-xl font-bold mb-2">
          Want more advanced calculators?
        </h3>
        <p className="text-slate-300 mb-6 text-sm">
          Download the Ortus Finance app for SIP, Goal SIP, NPS, CAGR,
          FIRE, and Tax calculators.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.ortusfinance.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-slate-100 transition"
        >
          <Smartphone className="w-4 h-4" />
          Download on Play Store
        </a>
      </div>
    </Container>
  );
}
