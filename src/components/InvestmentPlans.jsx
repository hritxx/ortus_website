import Link from "next/link";

export default function InvestmentPlans() {
  return (
    <section
      id="investmentPlans"
      className="py-20 bg-neutral-900 text-white mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            Investment Solutions
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Investment Plans
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your financial journey. Professional
            portfolio management with transparent pricing and competitive
            returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* PPF Plan - Left */}
          <div className="bg-neutral-800 rounded-2xl p-8 border border-green-700 hover:border-green-500 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Icon */}
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                PPF Plan
              </h3>
              <p className="text-gray-400 text-sm">Public Provident Fund</p>
            </div>
            {/* Price */}
            <div className="text-center mb-8 p-4 bg-neutral-700/50 rounded-xl">
              <div className="text-gray-400 text-sm mb-1">Minimum amount</div>
              <div className="text-green-400">
                <span className="text-3xl font-bold">₹500</span>
                <span className="text-lg">/month</span>
              </div>
            </div>
            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Duration: 15 Years</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Tax-Free Returns</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Current Interest: ~7.1% p.a.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Safe & Government Backed</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Partial Withdrawal Allowed</span>
              </div>
            </div>
            {/* CTA Button */}
            <Link
              href="https://www.onlineservices.nsdl.com/paam/PublicProvidentFund.html"
              className="block w-full text-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors duration-300"
              target="_blank"
            >
              Open PPF Account
            </Link>
          </div>

          {/* SIP Plan - Middle */}
          <div className="relative bg-neutral-800 rounded-2xl p-8 border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="pt-4">
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              {/* Title */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  Monthly SIP Plan
                </h3>
                <p className="text-gray-400 text-sm">
                  Systematic Investment Plan
                </p>
              </div>
              {/* Price */}
              <div className="text-center mb-8 p-4 bg-neutral-700/50 rounded-xl">
                <div className="text-gray-400 text-sm mb-1">Starting from</div>
                <div className="text-blue-400">
                  <span className="text-3xl font-bold">₹200</span>
                  <span className="text-lg">/month</span>
                </div>
              </div>
              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Duration: 6 Months or 1 Year</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Flexible Investment Amount</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Targeted Returns: 10-12%</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Portfolio Customization Available</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Mobile App Access</span>
                </div>
              </div>
              {/* CTA Button */}
              <Link
                href="https://app.ortusfinance.in"
                className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300"
              >
                Start SIP Journey
              </Link>
            </div>
          </div>

          {/* Lump Sum Plan - Right */}
          <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Icon */}
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                High Return FD (Lump Sum)
              </h3>
              <p className="text-gray-400 text-sm">One-time Investment</p>
            </div>
            {/* Price */}
            <div className="text-center mb-8 p-4 bg-neutral-700/50 rounded-xl">
              <div className="text-gray-400 text-sm mb-1">Minimum amount</div>
              <div className="text-purple-400">
                <span className="text-3xl font-bold">₹10,000</span>
                <span className="text-lg">/one-time</span>
              </div>
            </div>
            {/* Features */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Duration: 1 Year Lock-in</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Targeted Returns: 10-12%</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Advanced Portfolio Management</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Priority Support</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Detailed Performance Reports</span>
              </div>
            </div>
            {/* CTA Button */}
            <Link
              href="https://app.ortusfinance.in"
              className="block w-full text-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors duration-300"
            >
              Invest Lump Sum
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto bg-neutral-800/50 rounded-2xl p-8 border border-neutral-700">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of investors who trust us with their financial
              future. Get started in minutes with our user-friendly platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.ortusfinance.in"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300"
              >
                Get Started Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-neutral-600 hover:border-neutral-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-colors duration-300"
              >
                Talk to Expert
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SEBI Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Secure Platform</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500 max-w-2xl mx-auto">
            * Returns are subject to market conditions and are not guaranteed.
            Past performance does not guarantee future results. Please read all
            scheme related documents carefully.
          </p>
        </div>
      </div>
    </section>
  );
}
