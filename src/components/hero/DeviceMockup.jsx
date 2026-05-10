'use client';
import React from 'react';
import { TrendingUp, PieChart, Shield, PlusCircle, User, Bell } from 'lucide-react';

export default function DeviceMockup() {
  return (
    <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[3rem] border-[8px] border-neutral-900 bg-white shadow-2xl overflow-hidden mx-auto select-none pointer-events-none">
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-neutral-900 rounded-full z-20"></div>
      
      {/* Screen Content */}
      <div className="relative h-full w-full bg-slate-50 flex flex-col pt-14 pb-6 px-5 z-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-[11px] text-neutral-500 font-medium">Good Morning,</p>
            <p className="text-lg text-neutral-900 font-bold">Investor 👋</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
            <User className="w-5 h-5 text-neutral-500" />
          </div>
        </div>

        {/* Portfolio Card */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-5 text-white shadow-lg shadow-blue-900/20 mb-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150"></div>
          <p className="text-xs font-medium text-blue-100 mb-1 relative z-10">Total Portfolio Value</p>
          <p className="text-2xl sm:text-3xl font-bold mb-2 relative z-10 tracking-tight">₹ 24,75,000</p>
          <div className="flex items-center gap-1 text-xs font-medium bg-white/20 inline-flex px-2 py-1 rounded-md backdrop-blur-md relative z-10">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-emerald-50">12.5% (1Y)</span>
          </div>
          
          {/* Sparkline Graph */}
          <div className="mt-5 h-12 w-full flex items-end justify-between relative z-10">
             <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
               <path d="M0,35 C10,35 20,20 30,25 C40,30 50,10 60,15 C70,20 80,5 100,0" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M0,35 C10,35 20,20 30,25 C40,30 50,10 60,15 C70,20 80,5 100,0 L100,40 L0,40 Z" fill="url(#sparkline-gradient)" className="opacity-50" />
               <defs>
                 <linearGradient id="sparkline-gradient" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                   <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                 </linearGradient>
               </defs>
             </svg>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex justify-between mb-6 px-1">
          {[
            { icon: PlusCircle, label: "Invest", color: "text-blue-600", bg: "bg-blue-100" },
            { icon: PieChart, label: "SIP", color: "text-emerald-600", bg: "bg-emerald-100" },
            { icon: Shield, label: "Explore", color: "text-indigo-600", bg: "bg-indigo-100" },
            { icon: Bell, label: "More", color: "text-neutral-600", bg: "bg-neutral-100" },
          ].map((action, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${action.bg}`}>
                <action.icon className={`w-5 h-5 ${action.color}`} />
              </div>
              <span className="text-[10px] font-medium text-neutral-600">{action.label}</span>
            </div>
          ))}
        </div>

        {/* Top Funds */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold text-neutral-900">Top Funds</h3>
            <span className="text-xs text-blue-600 font-semibold">See all</span>
          </div>
          <div className="space-y-2.5">
            {[
              { name: "Flexi Cap Fund", return: "15.6%", trend: "up" },
              { name: "Index Fund", return: "12.4%", trend: "up" },
              { name: "Mid Cap Fund", return: "18.7%", trend: "up" },
            ].map((fund, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-xs font-bold">
                    {fund.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-semibold text-neutral-800">{fund.name}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-md">
                  <TrendingUp className="w-3 h-3" />
                  {fund.return}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
