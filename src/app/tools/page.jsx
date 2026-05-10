import Link from 'next/link';
import Container from '@/components/Container';
import { FREE_CALCULATORS, APP_ONLY_CALCULATORS } from '@/lib/calculators';
import { ArrowRight, Smartphone, Calculator, TrendingUp, Shield, Target } from 'lucide-react';

export const metadata = {
  title: 'Financial Tools & Calculators',
  description:
    'Free financial calculators for FD, NSC, HRA, Mutual Funds, and SSY. Plan your investments with accurate Indian financial calculators.',
  keywords: [
    'FD Calculator', 'NSC Calculator', 'HRA Calculator',
    'Mutual Fund Calculator', 'SSY Calculator', 'Financial Tools India',
  ],
  openGraph: {
    title: 'Financial Tools & Calculators | Ortus Finance',
    description: 'Plan your investments with our free Indian financial calculators.',
  },
};

const ICON_COLORS = [
  'bg-blue-100 text-blue-600',
  'bg-green-100 text-green-600',
  'bg-purple-100 text-purple-600',
  'bg-amber-100 text-amber-600',
  'bg-pink-100 text-pink-600',
];

const BENEFITS = [
  {
    icon: Calculator,
    title: 'Accurate Calculations',
    text: 'Our calculators use the exact formulas prescribed by RBI, government schemes, and SEBI-regulated instruments.',
  },
  {
    icon: TrendingUp,
    title: 'Better Financial Planning',
    text: 'Visualize your returns over time with interactive charts to make informed investment decisions.',
  },
  {
    icon: Shield,
    title: 'Compare Options',
    text: 'Compare different investment instruments side-by-side to find the best fit for your risk profile.',
  },
  {
    icon: Target,
    title: 'Goal-Based Planning',
    text: 'Set financial goals and calculate exactly how much you need to invest to achieve them.',
  },
];

export default function ToolsPage() {
  return (
    <Container className="py-16 sm:py-20">
      {/* Hero */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
          <Calculator className="w-4 h-4" />
          Free Financial Tools
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
          Financial Calculators & Tools
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Make smarter investment decisions with our free, accurate financial
          calculators built for the Indian financial system.
        </p>
      </header>

      {/* Free Calculators Grid */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">
          Free Calculators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FREE_CALCULATORS.map((calc, i) => (
            <Link
              key={calc.slug}
              href={`/tools/${calc.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-xl ${ICON_COLORS[i % ICON_COLORS.length]} flex items-center justify-center mb-4`}>
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                {calc.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{calc.subtitle}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                Calculate Now <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Use Financial Calculators */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Why Use Financial Calculators?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Financial calculators are essential tools for anyone looking to make
            informed investment decisions in India&apos;s diverse financial
            landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-200 p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App-Only Calculators */}
      <section className="mb-20">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-4">
              <Smartphone className="w-4 h-4" />
              Available on the App
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Advanced Calculators on the Ortus App
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Get access to our full suite of financial planning tools
              including SIP, Goal SIP, NPS, CAGR, FIRE, and Tax calculators.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {APP_ONLY_CALCULATORS.map((calc) => (
              <div
                key={calc.slug}
                className="bg-white/5 border border-white/10 rounded-xl p-5 text-white"
              >
                <h3 className="font-semibold mb-1">{calc.title}</h3>
                <p className="text-xs text-slate-400">{calc.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.ortusfinance.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-sm hover:bg-slate-100 transition"
            >
              <Smartphone className="w-5 h-5" />
              Download from Play Store
            </a>
          </div>
        </div>
      </section>

      {/* Educational Content */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          The Importance of Financial Planning
        </h2>
        <div className="prose prose-slate">
          <p className="text-slate-600 leading-relaxed mb-4">
            Financial planning is the cornerstone of a secure future. In India,
            where inflation averages 5-6% annually, simply saving money in a
            bank account often results in negative real returns. Understanding
            the power of compounding and making informed investment decisions
            can make the difference between financial security and financial
            stress.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Whether you&apos;re investing in government-backed instruments
            like NSC and SSY for guaranteed returns, or exploring
            market-linked options like mutual funds for higher growth
            potential, our calculators help you visualize your returns and
            compare options before committing your hard-earned money.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Tax planning is another crucial aspect — understanding how HRA
            exemptions work, or how ELSS funds save tax under Section 80C,
            can save you thousands of rupees every year. Use our free
            calculators to take the first step toward financial literacy.
          </p>
        </div>
      </section>
    </Container>
  );
}
