"use client";

import { useState } from "react";

// SIP Calculation (annual compounding)
function calculateSIPAnnual(monthly, years, rate) {
  const r = rate / 100;
  let FV = 0;
  for (let i = 0; i < years * 12; i++) {
    FV += monthly * Math.pow(1 + r, years - i / 12);
  }
  return FV;
}

// PPF Calculation (annual compounding, deposit at start of year)
function calculatePPFAnnual(yearly, years, rate) {
  const r = rate / 100;
  let FV = 0;
  for (let i = 0; i < years; i++) {
    FV += yearly * Math.pow(1 + r, years - i);
  }
  return FV;
}

export default function SipCalculator() {
  // SIP States
  const [monthly, setMonthly] = useState("5000");
  const [years, setYears] = useState("10");
  const [rate, setRate] = useState("12");

  // PPF States
  const [ppfYearly, setPpfYearly] = useState("150000");
  const [ppfYears, setPpfYears] = useState("15");
  const [ppfRate, setPpfRate] = useState("7.1");

  // SIP Calculations
  const monthlyNum = Number(monthly) || 0;
  const yearsNum = Number(years) || 0;
  const rateNum = Number(rate) || 0;
  const sipInvested = monthlyNum * 12 * yearsNum;
  const sipFutureValue = calculateSIPAnnual(monthlyNum, yearsNum, rateNum);
  const sipReturns = sipFutureValue - sipInvested;

  // PPF Calculations
  const ppfYearlyNum = Number(ppfYearly) || 0;
  const ppfYearsNum = Number(ppfYears) || 0;
  const ppfRateNum = Number(ppfRate) || 0;
  const ppfInvested = ppfYearlyNum * ppfYearsNum;
  const ppfFutureValue = calculatePPFAnnual(
    ppfYearlyNum,
    ppfYearsNum,
    ppfRateNum
  );
  const ppfReturns = ppfFutureValue - ppfInvested;

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto mt-24 mb-20 border border-blue-200 transition-all duration-300">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-2 tracking-tight drop-shadow">
        SIP & PPF Calculator
      </h2>
      <p className="text-neutral-600 mb-8 text-lg">
        Compare your wealth creation with{" "}
        <span className="font-semibold text-blue-700">SIP</span> and{" "}
        <span className="font-semibold text-green-700">PPF</span> investments.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* SIP Inputs */}
        <div className="bg-white rounded-xl p-6 shadow border border-blue-100">
          <h3 className="text-xl font-bold text-blue-800 mb-4">SIP Inputs</h3>
          <label className="block text-sm font-semibold text-blue-800 mb-2">
            Monthly Investment (₹)
          </label>
          <input
            type="number"
            min={500}
            max={100000}
            step={500}
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-lg font-semibold text-blue-900 focus:ring-2 focus:ring-blue-400 transition mb-4"
          />
          <label className="block text-sm font-semibold text-blue-800 mb-2">
            Investment Period (Years)
          </label>
          <input
            type="number"
            min={1}
            max={30}
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-lg font-semibold text-blue-900 focus:ring-2 focus:ring-blue-400 transition mb-4"
          />
          <label className="block text-sm font-semibold text-blue-800 mb-2">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            min={5}
            max={20}
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-lg font-semibold text-blue-900 focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        {/* PPF Inputs */}
        <div className="bg-white rounded-xl p-6 shadow border border-green-100">
          <h3 className="text-xl font-bold text-green-800 mb-4">PPF Inputs</h3>
          <label className="block text-sm font-semibold text-green-800 mb-2">
            Yearly Investment (₹)
          </label>
          <input
            type="number"
            min={500}
            max={150000}
            step={500}
            value={ppfYearly}
            onChange={(e) => setPpfYearly(e.target.value)}
            className="w-full rounded-lg border border-green-200 px-4 py-2 text-lg font-semibold text-green-900 focus:ring-2 focus:ring-green-400 transition mb-4"
          />
          <label className="block text-sm font-semibold text-green-800 mb-2">
            Investment Period (Years)
          </label>
          <input
            type="number"
            min={1}
            max={15}
            value={ppfYears}
            onChange={(e) => setPpfYears(e.target.value)}
            className="w-full rounded-lg border border-green-200 px-4 py-2 text-lg font-semibold text-green-900 focus:ring-2 focus:ring-green-400 transition mb-4"
          />
          <label className="block text-sm font-semibold text-green-800 mb-2">
            Expected Annual Return (%)
          </label>
          <input
            type="number"
            min={6}
            max={8}
            step={0.1}
            value={ppfRate}
            onChange={(e) => setPpfRate(e.target.value)}
            className="w-full rounded-lg border border-green-200 px-4 py-2 text-lg font-semibold text-green-900 focus:ring-2 focus:ring-green-400 transition"
          />
        </div>
      </div>
      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* SIP Results */}
        <div className="flex flex-col gap-4 bg-blue-50 rounded-2xl p-8 shadow-inner">
          <div className="text-center text-blue-800 font-bold text-lg mb-2">
            SIP Results
          </div>
          <div className="flex-1 text-center">
            <div className="text-neutral-500 text-base">Invested Amount</div>
            <div className="text-xl font-bold text-blue-700 mt-1">
              ₹{sipInvested.toLocaleString()}
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-neutral-500 text-base">Estimated Returns</div>
            <div className="text-xl font-bold text-green-600 mt-1">
              ₹
              {sipReturns.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-neutral-500 text-base">Total Value</div>
            <div className="text-2xl font-extrabold text-blue-900 mt-1">
              ₹
              {sipFutureValue.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
        </div>
        {/* PPF Results */}
        <div className="flex flex-col gap-4 bg-green-50 rounded-2xl p-8 shadow-inner">
          <div className="text-center text-green-800 font-bold text-lg mb-2">
            PPF Results
          </div>
          <div className="flex-1 text-center">
            <div className="text-neutral-500 text-base">Invested Amount</div>
            <div className="text-xl font-bold text-green-700 mt-1">
              ₹{ppfInvested.toLocaleString()}
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-neutral-500 text-base">Estimated Returns</div>
            <div className="text-xl font-bold text-blue-600 mt-1">
              ₹
              {ppfReturns.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-neutral-500 text-base">Total Value</div>
            <div className="text-2xl font-extrabold text-green-900 mt-1">
              ₹
              {ppfFutureValue.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </div>
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
