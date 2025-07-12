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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-8xl mx-auto">
          {/* PPF Plan - Left */}
          <div className="bg-neutral-800 rounded-2xl p-6 lg:p-8 border border-green-700 hover:border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
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
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-white">
                PPF Plan
              </h3>
              <p className="text-gray-400 text-sm">Public Provident Fund</p>
            </div>
            {/* Price */}
            <div className="text-center mb-6 lg:mb-8 p-4 bg-neutral-700/50 rounded-xl">
              <div className="text-gray-400 text-sm mb-1">Minimum amount</div>
              <div className="text-green-400">
                <span className="text-2xl lg:text-3xl font-bold">₹500</span>
                <span className="text-base lg:text-lg">/month</span>
              </div>
            </div>
            {/* Features */}
            <div className="space-y-3 mb-6 lg:mb-8 flex-grow">
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span>Duration: 5-20 Years</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span>Tax-Free Returns</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span>Current Interest: ~10-12% p.a.</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                <span>Safe & Government Backed</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
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

          {/* SIP Plan - Second */}
          <div className="relative bg-neutral-800 rounded-2xl p-6 lg:p-8 border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            {/* Popular Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 lg:px-4 py-1 rounded-full text-xs lg:text-sm font-semibold">
              Most Popular
            </div>
            <div className="pt-4 flex flex-col h-full">
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
                <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-white">
                  Monthly SIP Plan
                </h3>
                <p className="text-gray-400 text-sm">
                  Systematic Investment Plan
                </p>
              </div>
              {/* Price */}
              <div className="text-center mb-6 lg:mb-8 p-4 bg-neutral-700/50 rounded-xl">
                <div className="text-gray-400 text-sm mb-1">Starting from</div>
                <div className="text-blue-400">
                  <span className="text-2xl lg:text-3xl font-bold">₹200</span>
                  <span className="text-base lg:text-lg">/month</span>
                </div>
              </div>
              {/* Features */}
              <div className="space-y-3 mb-6 lg:mb-8 flex-grow">
                <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Duration: 6 Months to 5 Years</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Flexible Investment Amount</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Expected Returns: 12-15%</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Portfolio Diversification</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span>Real-time Tracking</span>
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

          {/* Fixed Deposit Plan - Third */}
          <div className="bg-neutral-800 rounded-2xl p-6 lg:p-8 border border-orange-700 hover:border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            {/* Icon */}
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-white">
                High Yield FD
              </h3>
              <p className="text-gray-400 text-sm">Fixed Deposit Plan</p>
            </div>
            {/* Price */}
            <div className="text-center mb-6 lg:mb-8 p-4 bg-neutral-700/50 rounded-xl">
              <div className="text-gray-400 text-sm mb-1">Minimum amount</div>
              <div className="text-orange-400">
                <span className="text-2xl lg:text-3xl font-bold">₹25,000</span>
                <span className="text-base lg:text-lg">/deposit</span>
              </div>
            </div>
            {/* Features */}
            <div className="space-y-3 mb-6 lg:mb-8 flex-grow">
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span>Duration: 1-20 Years</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span>Guaranteed Returns</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span>Interest Rate: 10.5-12%</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span>No Market Risk</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span>Quarterly Interest Payout</span>
              </div>
            </div>
            {/* CTA Button */}
            <Link
              href="https://app.ortusfinance.in"
              className="block w-full text-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors duration-300"
            >
              Book FD Now
            </Link>
          </div>

          {/* SWP Plan - Fourth */}
          <div className="bg-neutral-800 rounded-2xl p-6 lg:p-8 border border-purple-700 hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
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
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-white">
                SWP Plan
              </h3>
              <p className="text-gray-400 text-sm">Systematic Withdrawal Plan</p>
            </div>
            {/* Price */}
            <div className="text-center mb-6 lg:mb-8 p-4 bg-neutral-700/50 rounded-xl">
              <div className="text-gray-400 text-sm mb-1">Minimum investment</div>
              <div className="text-purple-400">
                <span className="text-xl lg:text-2xl xl:text-3xl font-bold">₹5,00,000</span>
                <span className="text-sm lg:text-base xl:text-lg">/lumpsum</span>
              </div>
            </div>
            {/* Features */}
            <div className="space-y-3 mb-6 lg:mb-8 flex-grow">
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                <span>Duration: 5-20 Years</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                <span>Regular Monthly Income</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                <span>Expected Returns: 10-12%</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                <span>Capital Appreciation</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm lg:text-base">
                <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                <span>Retirement Income Solution</span>
              </div>
            </div>
            {/* CTA Button */}
            <Link
              href="https://app.ortusfinance.in"
              className="block w-full text-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors duration-300"
            >
              Start SWP Plan
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="max-w-4xl mx-auto bg-neutral-800/50 rounded-2xl p-6 lg:p-8 border border-neutral-700">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4 text-white">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-gray-300 mb-6 lg:mb-8 text-base lg:text-lg max-w-2xl mx-auto">
              Join hundreds of investors who trust us with their financial
              future. Get started in minutes with our user-friendly platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link
                href="https://app.ortusfinance.in"
                className="px-6 lg:px-8 py-3 lg:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 text-sm lg:text-base"
              >
                Get Started Now
              </Link>
              <Link
                href="/contact"
                className="px-6 lg:px-8 py-3 lg:py-4 border border-neutral-600 hover:border-neutral-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-colors duration-300 text-sm lg:text-base"
              >
                Talk to Expert
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 lg:mt-8 flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-sm text-gray-400">
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

          <p className="mt-4 lg:mt-6 text-xs text-gray-500 max-w-3xl mx-auto leading-relaxed">
            * Returns are subject to market conditions and are not guaranteed.
            Past performance does not guarantee future results. Please read all
            scheme related documents carefully.
          </p>
        </div>
      </div>
    </section>
  );
}
