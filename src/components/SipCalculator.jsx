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

// Fixed Deposit Calculation (compound interest)
function calculateFD(principal, years, rate) {
  const r = rate / 100;
  return principal * Math.pow(1 + r, years);
}

// SWP Calculation (systematic withdrawal)
function calculateSWP(principal, monthlyWithdrawal, years, rate) {
  const r = rate / 100 / 12; // monthly rate
  const months = years * 12;
  let balance = principal;

  for (let i = 0; i < months; i++) {
    balance = balance * (1 + r) - monthlyWithdrawal;
    if (balance <= 0) break;
  }

  return Math.max(0, balance);
}

export default function SipCalculator() {
  // SIP States
  const [monthly, setMonthly] = useState("5000");
  const [years, setYears] = useState("10");
  const [rate, setRate] = useState("12");

  // PPF States
  const [ppfYearly, setPpfYearly] = useState("150000");
  const [ppfYears, setPpfYears] = useState("15");
  const [ppfRate, setPpfRate] = useState("12");

  // FD States
  const [fdPrincipal, setFdPrincipal] = useState("100000");
  const [fdYears, setFdYears] = useState("5");
  const [fdRate, setFdRate] = useState("12");

  // SWP States
  const [swpPrincipal, setSwpPrincipal] = useState("1000000");
  const [swpWithdrawal, setSwpWithdrawal] = useState("8000");
  const [swpYears, setSwpYears] = useState("10");
  const [swpRate, setSwpRate] = useState("10");

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

  // FD Calculations
  const fdPrincipalNum = Number(fdPrincipal) || 0;
  const fdYearsNum = Number(fdYears) || 0;
  const fdRateNum = Number(fdRate) || 0;
  const fdMaturityValue = calculateFD(fdPrincipalNum, fdYearsNum, fdRateNum);
  const fdReturns = fdMaturityValue - fdPrincipalNum;

  // SWP Calculations
  const swpPrincipalNum = Number(swpPrincipal) || 0;
  const swpWithdrawalNum = Number(swpWithdrawal) || 0;
  const swpYearsNum = Number(swpYears) || 0;
  const swpRateNum = Number(swpRate) || 0;
  const swpRemainingValue = calculateSWP(
    swpPrincipalNum,
    swpWithdrawalNum,
    swpYearsNum,
    swpRateNum
  );
  const swpTotalWithdrawn = swpWithdrawalNum * 12 * swpYearsNum;

  return (
    <div className="bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto mt-24 mb-20 border border-gray-200">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight text-center">
        Investment Calculator Suite
      </h2>
      <p className="text-gray-600 mb-8 text-lg text-center">
        Compare different investment options and plan your financial future
      </p>

      {/* Grid Layout for main calculators - shows calculators with results below on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* SIP Calculator + Results */}
        <div className="space-y-4">
          {/* SIP Inputs */}
          <div className="bg-white rounded-xl p-5 shadow border border-slate-200">
            <h3 className="text-lg font-bold text-slate-700 mb-3">
              SIP Calculator
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Monthly Investment (₹)
                </label>
                <input
                  type="number"
                  min={500}
                  max={100000}
                  step={500}
                  value={monthly}
                  onChange={(e) => setMonthly(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Period (Years)
                </label>
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Annual Return (%)
                </label>
                <input
                  type="number"
                  min={5}
                  max={20}
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                />
              </div>
            </div>
          </div>

          {/* SIP Results */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-5 shadow-inner border border-slate-200">
            <div className="text-center text-slate-700 font-bold text-base mb-3">
              SIP Results
            </div>
            <div className="space-y-2">
              <div className="text-center">
                <div className="text-gray-500 text-xs">Invested</div>
                <div className="text-sm font-bold text-slate-600">
                  ₹{sipInvested.toLocaleString()}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-xs">Returns</div>
                <div className="text-sm font-bold text-emerald-600">
                  ₹
                  {sipReturns.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-xs">Total Value</div>
                <div className="text-lg font-extrabold text-slate-800">
                  ₹
                  {sipFutureValue.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PPF Calculator + Results */}
        <div className="space-y-4">
          {/* PPF Inputs */}
          <div className="bg-white rounded-xl p-5 shadow border border-slate-200">
            <h3 className="text-lg font-bold text-slate-700 mb-3">
              PPF Calculator
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Yearly Investment (₹)
                </label>
                <input
                  type="number"
                  min={500}
                  max={150000}
                  step={500}
                  value={ppfYearly}
                  onChange={(e) => setPpfYearly(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Period (Years)
                </label>
                <input
                  type="number"
                  min={1}
                  max={15}
                  value={ppfYears}
                  onChange={(e) => setPpfYears(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Annual Return (%)
                </label>
                <input
                  type="number"
                  min={6}
                  max={8}
                  step={0.1}
                  value={ppfRate}
                  onChange={(e) => setPpfRate(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                />
              </div>
            </div>
          </div>

          {/* PPF Results */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-5 shadow-inner border border-slate-200">
            <div className="text-center text-slate-700 font-bold text-base mb-3">
              PPF Results
            </div>
            <div className="space-y-2">
              <div className="text-center">
                <div className="text-gray-500 text-xs">Invested</div>
                <div className="text-sm font-bold text-slate-600">
                  ₹{ppfInvested.toLocaleString()}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-xs">Returns</div>
                <div className="text-sm font-bold text-emerald-600">
                  ₹
                  {ppfReturns.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-xs">Total Value</div>
                <div className="text-lg font-extrabold text-slate-800">
                  ₹
                  {ppfFutureValue.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FD Calculator + Results */}
        <div className="space-y-4">
          {/* FD Inputs */}
          <div className="bg-white rounded-xl p-5 shadow border border-slate-200">
            <h3 className="text-lg font-bold text-slate-700 mb-3">
              Fixed Deposit
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Principal Amount (₹)
                </label>
                <input
                  type="number"
                  min={1000}
                  max={10000000}
                  step={1000}
                  value={fdPrincipal}
                  onChange={(e) => setFdPrincipal(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Period (Years)
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={fdYears}
                  onChange={(e) => setFdYears(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  min={3}
                  max={10}
                  step={0.1}
                  value={fdRate}
                  onChange={(e) => setFdRate(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                />
              </div>
            </div>
          </div>

          {/* FD Results */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-5 shadow-inner border border-slate-200">
            <div className="text-center text-slate-700 font-bold text-base mb-3">
              FD Results
            </div>
            <div className="space-y-2">
              <div className="text-center">
                <div className="text-gray-500 text-xs">Principal</div>
                <div className="text-sm font-bold text-slate-600">
                  ₹{fdPrincipalNum.toLocaleString()}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-xs">Interest</div>
                <div className="text-sm font-bold text-emerald-600">
                  ₹
                  {fdReturns.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-xs">Maturity Value</div>
                <div className="text-lg font-extrabold text-slate-800">
                  ₹
                  {fdMaturityValue.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SWP Calculator - Separate Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-slate-700 mb-4 text-center">
          Systematic Withdrawal Plan (SWP)
        </h3>
        <div className="bg-gradient-to-r from-slate-50 to-gray-100 rounded-2xl p-6 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SWP Inputs */}
            <div className="bg-white rounded-xl p-6 shadow border border-slate-200">
              <h4 className="text-lg font-bold text-slate-700 mb-4">
                Plan Your Withdrawals
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">
                    Investment Amount (₹)
                  </label>
                  <input
                    type="number"
                    min={100000}
                    max={50000000}
                    step={10000}
                    value={swpPrincipal}
                    onChange={(e) => setSwpPrincipal(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">
                    Monthly Withdrawal (₹)
                  </label>
                  <input
                    type="number"
                    min={1000}
                    max={100000}
                    step={500}
                    value={swpWithdrawal}
                    onChange={(e) => setSwpWithdrawal(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">
                    Period (Years)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={swpYears}
                    onChange={(e) => setSwpYears(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-2">
                    Annual Return (%)
                  </label>
                  <input
                    type="number"
                    min={5}
                    max={15}
                    step={0.1}
                    value={swpRate}
                    onChange={(e) => setSwpRate(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 focus:ring-2 focus:ring-slate-400 transition"
                  />
                </div>
              </div>
            </div>

            {/* SWP Results */}
            <div className="bg-white rounded-xl p-6 shadow border border-slate-200">
              <h4 className="text-lg font-bold text-slate-700 mb-4 text-center">
                Withdrawal Analysis
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-600">Total Withdrawn:</span>
                  <span className="text-lg font-bold text-slate-800">
                    ₹{swpTotalWithdrawn.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <span className="text-sm font-medium text-slate-600">Remaining Value:</span>
                  <span className="text-lg font-bold text-emerald-700">
                    ₹{swpRemainingValue.toLocaleString(undefined, {
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-slate-100 to-gray-100 rounded-lg">
                  <div className="text-sm font-medium text-slate-600 mb-1">Plan Status</div>
                  <div className={`text-2xl font-extrabold ${
                    swpRemainingValue > 0 ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {swpRemainingValue > 0 ? "✓ Sustainable" : "⚠ Depleted"}
                  </div>
                  {swpRemainingValue <= 0 && (
                    <div className="text-xs text-red-500 mt-1">
                      Consider reducing withdrawal amount or increasing investment
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Comparison Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center text-slate-700 mb-2">
          Why Choose Each Investment Plan?
        </h3>
        <p className="text-center text-gray-600 mb-8">
          Discover the unique advantages of each investment strategy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* SIP Benefits */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">📈</span>
              </div>
              <h4 className="text-lg font-bold text-slate-700">SIP Benefits</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Start with as little as ₹500/month</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Rupee cost averaging reduces risk</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Potential for long-term wealth creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Flexible - increase/decrease anytime</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Perfect for long-term wealth creation</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-slate-100 rounded-lg">
              <div className="text-xs text-slate-600 font-medium">10-Year Example:</div>
              <div className="text-sm font-bold text-slate-800">
                ₹5,000/month → ₹{(calculateSIPAnnual(5000, 10, 12)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>

          {/* PPF Benefits */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">🛡️</span>
              </div>
              <h4 className="text-lg font-bold text-slate-700">PPF Benefits</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">100% Tax-free returns</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Government-backed security</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Triple tax benefit (EEE status)</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">No market volatility risk</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Ideal for retirement planning</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-slate-100 rounded-lg">
              <div className="text-xs text-slate-600 font-medium">15-Year Example:</div>
              <div className="text-sm font-bold text-slate-800">
                ₹1.5L/year → ₹{(calculatePPFAnnual(150000, 15, 7.1)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>

          {/* FD Benefits */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">🏦</span>
              </div>
              <h4 className="text-lg font-bold text-slate-700">FD Benefits</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Guaranteed fixed returns</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">DICGC insurance up to ₹5 lakhs</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">No market risk involved</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Predictable income planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Perfect for conservative investors</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-slate-100 rounded-lg">
              <div className="text-xs text-slate-600 font-medium">5-Year Example:</div>
              <div className="text-sm font-bold text-slate-800">
                ₹1L → ₹{(calculateFD(100000, 5, 6.5)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
          </div>

          {/* SWP Benefits */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">💰</span>
              </div>
              <h4 className="text-lg font-bold text-slate-700">SWP Benefits</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Regular monthly income stream</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Capital appreciation potential</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Inflation-beating returns</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Flexible withdrawal amounts</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 mt-0.5">✓</span>
                <span className="text-slate-600">Ideal for retirement income</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-slate-100 rounded-lg">
              <div className="text-xs text-slate-600 font-medium">10-Year Example:</div>
              <div className="text-sm font-bold text-slate-800">
                ₹10L investment → ₹8K/month for 10 years
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-slate-600 to-gray-700 rounded-2xl p-6 text-white">
            <h4 className="text-xl font-bold mb-2">Ready to Start Your Investment Journey?</h4>
            <p className="mb-4 opacity-90">Choose the right investment strategy based on your goals and risk appetite</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">🎯 Goal-based Planning</span>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">📊 Portfolio Diversification</span>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">💡 Expert Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <span className="italic">
          * Calculations are indicative. Actual returns may vary based on market
          conditions.
        </span>
      </div>
    </div>
  );
}
