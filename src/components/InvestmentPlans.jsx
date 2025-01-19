import Link from "next/link";

export default function InvestmentPlans() {
  return (
    <section
      id="investmentPlans"
      className="py-20 bg-neutral-900 text-white mt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold mb-4">Investment Plans</h2>
          <p className="text-lg text-gray-300">
            Choose the plan that fits your financial journey. Start small or go
            big, the choice is yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 6-Month Lump Sum Plan */}
          <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-blue-500 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">6-Month Lump Sum</h3>
              <div className="text-blue-500 mb-6">
                <span className="text-2xl">Starting From {"   "}</span>
                <span className="text-4xl font-bold">₹5,000</span>
              </div>
              <div className="border-t border-neutral-700 pt-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span>Duration: 6 Months</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span>Targeted Returns: 6-8%</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span>Simple Portfolio Management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Monthly SIP Plan (Popular) */}
          <div className="bg-neutral-800 rounded-2xl p-8 border-2 border-blue-500 transform scale-105 shadow-2xl animate__animated animate__fadeInUp">
            <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm">
              Popular
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">Monthly SIP Plan</h3>
              <div className="text-blue-500 mb-6">
                <span className="text-2xl">Starting From {"   "}</span>
                <span className="text-4xl font-bold">₹200</span>
              </div>
              <div className="border-t border-neutral-700 pt-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span>Duration: 6 Months or 1 Year</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span>Flexible Investment Amount</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span>Targeted Returns: 10-12%</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span>Portfolio Customization Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 1-Year Lump Sum Plan */}
          <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-blue-500 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">1-Year Lump Sum</h3>
              <div className="text-blue-500 mb-6">
                <span className="text-2xl">Starting From {"   "}</span>
                <span className="text-4xl font-bold">₹10,000</span>
              </div>
              <div className="border-t border-neutral-700 pt-6">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span>Duration: 1 Year</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span>Targeted Returns: 10-12%</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span>Advanced Portfolio Management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span>Priority Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="https://app.ortusfinance.in"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors animate__animated animate__pulse animate__infinite"
          >
            Get Started Now
          </Link>
          <p className="mt-4 text-gray-400">
            Returns are subject to market conditions and not guaranteed
          </p>
        </div>
      </div>
    </section>
  );
}
