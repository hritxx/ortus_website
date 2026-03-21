import Link from "next/link";

export default function InvestmentPlans() {
  const plans = [
    {
      title: "Premium SWP Plan",
      subtitle: "SWP Investment Fund",
      tag: "SWP",
      description: "Tax-saving mutual fund with 3-year lock-in. Invest up to ₹1.5L and save tax under Section 80C.",
      interest: "10",
      risk: "MEDIUM",
      min: "₹5,00,000",
      max: "₹15,00,000",
      lockIn: "60",
      benefits: ["Monthly withdrawal of ₹5,000", "Lock-in period of 5 years", "Equity returns potential", "Wealth creation + tax saving"],
      color: "blue"
    },
    {
      title: "Ortus Premium SIP Plan",
      subtitle: "Flexi Cap Fund",
      tag: "SIP",
      description: "Conservative debt fund investing in high-rated corporate bonds and government securities for stable returns.",
      interest: "15",
      risk: "HIGH",
      min: "₹2,500",
      max: "₹20,00,000",
      lockIn: "12",
      benefits: ["Low risk investment", "Stable returns", "Better than FD", "High credit quality", "Quarterly dividends"],
      color: "purple",
      popular: true
    },
    {
      title: "Ortus Smart SIP Plan",
      subtitle: "Momentum Investment Fund",
      tag: "SIP",
      description: "Generate regular income from your investments while keeping your capital invested and growing. Perfect for retirees.",
      interest: "12",
      risk: "HIGH",
      min: "₹200",
      max: "₹1,00,00,000",
      lockIn: "12",
      benefits: ["Regular monthly income", "Capital appreciation", "Tax-efficient withdrawals", "Flexible withdrawal amount", "Emergency fund access"],
      color: "green"
    },
    {
      title: "Ortus Gold & Silver",
      subtitle: "Flexi Cap Fund",
      tag: "LUMP SUM",
      description: "A balanced SIP plan perfect for building wealth systematically with monthly investments. Ideal for long-term financial goals.",
      interest: "10",
      risk: "MEDIUM",
      min: "₹15,000",
      max: "₹1,00,000",
      lockIn: "24",
      benefits: ["Start with ₹1000/month", "Rupee cost averaging", "Power of compounding", "Flexible investment amount", "Auto-debit facility"],
      color: "yellow"
    },
    {
      title: "Ortus Growth Fund",
      subtitle: "Momentum Investment",
      tag: "LUMP SUM",
      description: "A high-growth equity fund focused on emerging market leaders and innovative companies with strong fundamentals.",
      interest: "12.5",
      risk: "HIGH",
      min: "₹25,000",
      max: "₹49,99,999",
      lockIn: "60",
      benefits: ["Professional fund management", "Diversified portfolio", "Tax benefits under 80C", "Liquidity after lock-in", "Regular portfolio updates"],
      color: "red"
    }
  ];

  return (
    <section id="investmentPlans" className="py-20 bg-neutral-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            Investment Solutions
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">Investment Plans</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your financial journey. Professional portfolio management with transparent pricing and competitive returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative bg-neutral-800 rounded-2xl p-6 lg:p-8 border-2 border-neutral-700 hover:border-${plan.color}-500 shadow-xl transition-all duration-300 flex flex-col h-full`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs lg:text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-md bg-neutral-700 text-gray-300 font-semibold">{plan.tag}</span>
                <span className={`px-2 py-1 text-xs rounded-md font-semibold ${plan.risk === 'HIGH' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {plan.risk} RISK
                </span>
                <span className="px-2 py-1 text-xs rounded-md bg-green-500/20 text-green-400 font-semibold">{plan.interest}% Interest</span>
              </div>
              
              <div className="text-left mb-4">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{plan.title}</h3>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 line-clamp-3 mb-2">{plan.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-neutral-700/40 rounded-xl">
                <div>
                  <div className="text-gray-400 text-xs mb-1">Min Investment</div>
                  <div className="font-bold text-lg">{plan.min}</div>
                </div>
                <div>
                  <div className="text-gray-400 text-xs mb-1">Lock-in</div>
                  <div className="font-bold text-lg">{plan.lockIn} Months</div>
                </div>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                {plan.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-3 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 mt-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="https://app.ortusfinance.in"
                className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-300 mt-auto"
              >
                Invest Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
