"use client";

import Link from "next/link";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import { Calendar, ArrowRight, Shield, TrendingUp, Users, BarChart3, Scale, PiggyBank, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    description: "Share your financial goals, risk appetite, and investment timeline in a complimentary 30-minute consultation with our certified advisors.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Get a Personalized Plan",
    description: "Receive tailored recommendations for SEBI-regulated mutual fund schemes aligned with your profile and long-term objectives.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Start Investing",
    description: "Begin your investment journey with ongoing support, regular portfolio reviews, and transparent reporting from our team.",
    icon: Users,
  },
];

const investmentOptions = [
  {
    title: "Equity Funds",
    description: "Capital appreciation through diversified stock portfolios for long-term wealth creation",
    icon: BarChart3,
    color: "blue",
  },
  {
    title: "Debt Funds",
    description: "Stable returns through fixed-income securities with lower volatility",
    icon: Shield,
    color: "green",
  },
  {
    title: "Hybrid Funds",
    description: "Balanced allocation across equity and debt for moderate risk-reward",
    icon: Scale,
    color: "purple",
  },
  {
    title: "ELSS Funds",
    description: "Tax benefits under Section 80C with equity-linked growth potential",
    icon: PiggyBank,
    color: "amber",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    icon: "text-blue-600",
    border: "border-blue-100 hover:border-blue-200",
  },
  green: {
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    icon: "text-green-600",
    border: "border-green-100 hover:border-green-200",
  },
  purple: {
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    icon: "text-purple-600",
    border: "border-purple-100 hover:border-purple-200",
  },
  amber: {
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    icon: "text-amber-600",
    border: "border-amber-100 hover:border-amber-200",
  },
};

export default function InvestmentPlans() {
  return (
    <section id="investmentPlans" className="py-24 sm:py-32 mt-20">
      <Container>
        <FadeIn>
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              AMFI Registered Distributor (ARN-351189)
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl mb-4">
              Start Your Investment Journey
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              We facilitate investments in SEBI-regulated mutual fund schemes through systematic investment
              plans (SIPs) and lump sum investments. Our certified team guides you through the right fund
              selection based on your financial goals.
            </p>
          </div>
        </FadeIn>

        {/* How It Works - Steps */}
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {steps.map((step) => (
              <FadeIn key={step.number}>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md hover:border-neutral-200 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Investment Options */}
        <FadeIn>
          <div className="bg-gradient-to-br from-neutral-50 to-blue-50/30 rounded-3xl p-8 sm:p-12 border border-neutral-100 mb-16">
            <h3 className="text-2xl font-bold text-center text-neutral-900 mb-10">
              Investment Options We Facilitate
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentOptions.map((option) => {
                const colors = colorClasses[option.color];
                return (
                  <div
                    key={option.title}
                    className={`bg-white rounded-xl p-6 border ${colors.border} transition-all duration-300 hover:shadow-md`}
                  >
                    <div className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                      <option.icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">{option.title}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{option.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                href="https://elevate.ortusfinance.in"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="max-w-3xl mx-auto p-6 bg-amber-50 rounded-xl border border-amber-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-amber-700" />
                </div>
                <p className="text-sm text-amber-800 leading-relaxed text-left">
                  <strong>Important Disclosure:</strong> Mutual fund investments are subject to market risks.
                  Please read all scheme-related documents carefully before investing. Past performance is not
                  indicative of future returns. The NAV of units issued under the schemes may fluctuate depending
                  on factors and forces affecting the securities market.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
