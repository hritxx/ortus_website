'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Target, PieChart, Activity } from 'lucide-react';
import DeviceMockup from './DeviceMockup';

const floatingKeyframes = { y: ["-10px", "10px", "-10px"] };

const Card = ({ icon: Icon, title, delay = 0, className = "" }) => (
  <motion.div 
    animate={floatingKeyframes}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute bg-white/90 border border-white/70 shadow-[0_8px_24px_rgb(0,0,0,0.08)] rounded-2xl p-3 sm:p-4 flex items-center gap-3 z-30 transform-gpu will-change-transform [backface-visibility:hidden] transition-transform duration-300 hover:scale-105 ${className}`}
  >
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
    </div>
    <span className="text-xs sm:text-sm font-bold text-neutral-800 pr-2 whitespace-nowrap">{title}</span>
  </motion.div>
);

export default function HeroVisuals() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects tied to scroll
  const yPhone = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yCards = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const rotatePhone = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <div ref={containerRef} className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center [perspective:1200px] mt-10 lg:mt-0 [transform-style:preserve-3d]">
      
      {/* 3D Device Container */}
      <motion.div
        style={{ y: yPhone, rotateZ: rotatePhone }}
        initial={{ opacity: 0, rotateY: -30, rotateX: 10, scale: 0.8 }}
        animate={{ opacity: 1, rotateY: -15, rotateX: 5, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 transform-gpu will-change-transform [transform-style:preserve-3d] [backface-visibility:hidden]"
      >
        <DeviceMockup />
        
        {/* Soft glow behind the device */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112%] h-[112%] bg-blue-400/16 blur-3xl rounded-full -z-10 pointer-events-none"></div>
      </motion.div>

      {/* Floating Elements (Parallaxed together) */}
      <motion.div style={{ y: yCards }} className="absolute inset-0 pointer-events-none z-30 transform-gpu will-change-transform [transform-style:preserve-3d]">
        
        <Card 
          icon={ShieldCheck} 
          title="Secure Investments" 
          delay={0}
          className="top-[5%] left-[0%] lg:left-[-15%]" 
        />
        
        <Card 
          icon={Target} 
          title="Goal-based Planning" 
          delay={1.5}
          className="bottom-[15%] left-[-5%] lg:left-[-10%]" 
        />

        <Card 
          icon={PieChart} 
          title="Diversified Portfolios" 
          delay={0.8}
          className="top-[25%] right-[-5%] lg:right-[-20%]" 
        />

        {/* 3D Bar Chart Visual */}
        <motion.div 
          animate={floatingKeyframes}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[20%] right-[0%] lg:right-[-10%] w-24 sm:w-32 h-32 sm:h-40 flex items-end justify-between gap-1.5 sm:gap-2 z-10 transform-gpu will-change-transform"
        >
          <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg" style={{ height: '40%' }}></div>
          <div className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-lg shadow-lg" style={{ height: '70%' }}></div>
          <div className="w-full bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t-lg shadow-lg relative" style={{ height: '100%' }}>
            {/* Arrow */}
            <Activity className="absolute -top-6 sm:-top-8 -right-3 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 text-emerald-500 transform rotate-[-15deg] drop-shadow-md" />
          </div>
        </motion.div>

        {/* Rupee Symbol */}
        <motion.div 
          animate={floatingKeyframes}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] right-[15%] text-6xl sm:text-8xl font-bold text-blue-900/5 z-0 select-none blur-[1px] transform-gpu will-change-transform"
        >
          ₹
        </motion.div>

        {/* Floating Coin Stack Approximation */}
        <motion.div 
          animate={floatingKeyframes}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[5%] right-[25%] hidden flex-col items-center justify-center drop-shadow-2xl z-20 sm:[display:flex] transform-gpu will-change-transform"
        >
          <div className="w-16 h-5 bg-[#FDE047] rounded-full border border-[#CA8A04] shadow-inner mb-[-10px] relative z-30 flex items-center justify-center text-[11px] text-[#A16207] font-bold">₹</div>
          <div className="w-16 h-5 bg-[#FACC15] rounded-full border border-[#CA8A04] shadow-inner mb-[-10px] relative z-20"></div>
          <div className="w-16 h-5 bg-[#EAB308] rounded-full border border-[#B45309] shadow-inner mb-[-10px] relative z-10"></div>
          <div className="w-16 h-5 bg-[#CA8A04] rounded-full border border-[#92400E] shadow-inner relative z-0"></div>
        </motion.div>

      </motion.div>
    </div>
  );
}
