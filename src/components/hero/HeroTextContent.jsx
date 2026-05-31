'use client';
import React from 'react';
import { m } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Smartphone, Star } from 'lucide-react';
import AnimatedUnderline from './AnimatedUnderline';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function HeroTextContent() {
  return (
    <m.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center w-full max-w-2xl pt-10 pb-12 lg:py-24 z-10"
    >
      {/* Trust Badge */}
      <m.div variants={itemVariants} className="mb-6 lg:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 text-blue-700 text-xs sm:text-sm font-semibold w-fit backdrop-blur-md shadow-sm">
        <Smartphone className="w-4 h-4" />
        <span>Download the Ortus Finance App today</span>
        <ArrowRight className="w-3 h-3 ml-1" />
      </m.div>

      {/* Headline */}
      <m.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 leading-[1.05] mb-6 sm:mb-8">
        Let your financial success <AnimatedUnderline>shine</AnimatedUnderline> online.
      </m.h1>

      {/* Supporting Copy */}
      <m.p variants={itemVariants} className="text-lg sm:text-xl text-neutral-600 leading-relaxed mb-8 sm:mb-10 max-w-[90%]">
        <strong className="font-semibold text-neutral-900">ORTUS FINANCE Pvt. Ltd.</strong> is founded by NISM-certified professionals. Experience seamless mutual fund distribution, data-backed insights, and goal-based planning.
      </m.p>

      {/* CTAs */}
      <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-14">
        <Link
          href="https://play.google.com/store/apps/details?id=com.ortusfinance.app"
          target="_blank"
          className="group relative inline-flex justify-center items-center gap-2 rounded-full bg-neutral-950 px-8 py-4.5 text-base font-semibold text-white transition-all hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-neutral-900/20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full blur-md pointer-events-none"></div>
          <span className="relative z-10">Start Investing</span>
          <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
        </Link>
        
        <Link
          href="https://elevate.ortusfinance.in"
          target="_blank"
          className="group inline-flex justify-center items-center gap-2 rounded-full bg-white border border-neutral-200 px-8 py-4.5 text-base font-semibold text-neutral-900 transition-all hover:bg-neutral-50 hover:border-blue-200 hover:text-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
        >
          <Calendar className="w-4 h-4 text-neutral-500 group-hover:text-blue-600 transition-colors" />
          <span>Book 30-min Consultation</span>
        </Link>
      </m.div>

      {/* Trust Indicators */}
      <m.div variants={itemVariants} className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-neutral-500 font-medium">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
               <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center overflow-hidden shadow-sm">
                 <UserAvatar seed={i} />
               </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex text-amber-400 mb-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
            </div>
            <span className="text-xs">Trusted by <strong className="text-neutral-900 font-bold">450+ clients</strong></span>
          </div>
        </div>
        
        <div className="h-10 w-px bg-neutral-200 hidden sm:block"></div>
        
        <div className="flex items-center gap-2">
           <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.523 19.349c-.27.273-.41.657-.367 1.05.042.392.26.745.586.953.535.342 1.25.32 1.765-.055l12.44-9.05c.427-.31.68-.8.68-1.326s-.253-1.016-.68-1.326l-12.44-9.05c-.515-.375-1.23-.397-1.765-.055-.326.208-.544.56-.586.953-.043.393.097.777.367 1.05l7.747 7.749-7.747 7.749z"/>
           </svg>
           <span className="font-semibold text-neutral-700">Google Play <span className="font-medium text-neutral-500">Verified</span></span>
        </div>
      </m.div>

    </m.div>
  );
}

// Simple avatar placeholder generator for the trust section
function UserAvatar({ seed }) {
  const colors = ['#f87171', '#60a5fa', '#34d399', '#fbbf24', '#a78bfa'];
  const color = colors[seed % colors.length];
  
  return (
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white" style={{ backgroundColor: color }}>
      <circle cx="18" cy="14" r="6" fill="currentColor" />
      <path d="M18 22c-7 0-11 4-11 9h22c0-5-4-9-11-9z" fill="currentColor" />
    </svg>
  );
}
