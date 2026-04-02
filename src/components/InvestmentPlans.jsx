import Link from "next/link";
import { Calendar, ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

export default function InvestmentPlans() {
  return (
    <section id="investmentPlans" className="py-20 bg-neutral-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            AMFI Registered Distributor
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Start Your Investment Journey</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We help you invest in SEBI-regulated mutual fund schemes through systematic investment
            plans (SIPs) and lump sum investments. As an AMFI-registered distributor (ARN-347142),
            we guide you through the right fund selection based on your goals.
          </p>
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-blue-400 text-sm font-semibold mb-2">Step 1</div>
            <h3 className="text-xl font-bold mb-3">Book a Consultation</h3>
            <p className="text-gray-400">
              Tell us about your financial goals, risk appetite, and investment timeline in a free
              30-minute consultation.
            </p>
          </div>

          <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-blue-400 text-sm font-semibold mb-2">Step 2</div>
            <h3 className="text-xl font-bold mb-3">Get a Personalized Plan</h3>
            <p className="text-gray-400">
              We recommend suitable SEBI-regulated mutual fund schemes based on your profile and
              objectives.
            </p>
          </div>

          <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-blue-400 text-sm font-semibold mb-2">Step 3</div>
            <h3 className="text-xl font-bold mb-3">Start Investing</h3>
            <p className="text-gray-400">
              Begin your investment journey with ongoing support and regular portfolio reviews from
              our team.
            </p>
          </div>
        </div>

        {/* Investment Options */}
        <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Investment Options We Facilitate</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">📈</div>
              <h4 className="font-semibold mb-1">Equity Funds</h4>
              <p className="text-sm text-gray-400">For long-term growth</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold mb-1">Debt Funds</h4>
              <p className="text-sm text-gray-400">For stable returns</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">⚖️</div>
              <h4 className="font-semibold mb-1">Hybrid Funds</h4>
              <p className="text-sm text-gray-400">Balanced approach</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">💰</div>
              <h4 className="font-semibold mb-1">ELSS Funds</h4>
              <p className="text-sm text-gray-400">Tax-saving option</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="https://elevate.ortusfinance.in"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-700 hover:bg-neutral-600 text-white font-semibold rounded-xl transition-colors duration-300"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto p-4 bg-neutral-800/50 rounded-xl border border-neutral-700">
            <p className="text-xs text-gray-400 leading-relaxed">
              <Shield className="w-4 h-4 inline mr-1" />
              <strong>Important:</strong> Mutual fund investments are subject to market risks. Read all
              scheme-related documents carefully before investing. Past performance is not indicative
              of future returns. The NAV of units issued under the schemes may go up or down depending
              on factors and forces affecting securities market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
