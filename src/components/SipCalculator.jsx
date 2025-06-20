"use client";

import { useState } from "react";

function calculateSIPAnnual(monthly, years, rate) {
  // monthly = SIP amount per month
  // years = total years
  // rate = annual interest rate in %
  const r = rate / 100;
  let FV = 0;
  for (let i = 0; i < years * 12; i++) {
    // Each installment compounds for (years - i/12) years
    FV += monthly * Math.pow(1 + r, years - i / 12);
  }
  return FV;
}

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const invested = monthly * 12 * years;
  const futureValue = calculateSIPAnnual(monthly, years, rate);
  const returns = futureValue - invested;

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto mt-24 mb-20 border border-blue-200 transition-all duration-300">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-2 tracking-tight drop-shadow">
        SIP Calculator
      </h2>
      <p className="text-neutral-600 mb-8 text-lg">
        Plan your wealth with{" "}
        <span className="font-semibold text-blue-700">annual compounding</span>{" "}
        SIP investments.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-semibold text-blue-800 mb-2">
            Monthly Investment (₹)
          </label>
          <input
            type="number"
            min={500}
            max={100000}
            step={500}
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-lg font-semibold text-blue-900 focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-800 mb-2">
            Investment Period (Years)
          </label>
          <input
            type="number"
            min={1}
            max={30}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-lg font-semibold text-blue-900 focus:ring-2 focus:ring-blue-400 transition mt-2"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-blue-800 mb-2">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            min={5}
            max={20}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-lg font-semibold text-blue-900 focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-blue-50 rounded-2xl p-8 shadow-inner transition-all duration-300">
        <div className="flex-1 text-center">
          <div className="text-neutral-500 text-base">Invested Amount</div>
          <div className="text-xl font-bold text-blue-700 mt-1">
            ₹{invested.toLocaleString()}
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-neutral-500 text-base">Estimated Returns</div>
          <div className="text-xl font-bold text-green-600 mt-1">
            ₹{returns.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="text-neutral-500 text-base">Total Value</div>
          <div className="text-2xl font-extrabold text-blue-900 mt-1">
            ₹
            {futureValue.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-neutral-500">
        <span className="italic">
          * Calculated with annual compounding. Actual returns may vary.
        </span>
      </div>
    </div>
  );
}
