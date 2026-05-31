'use client';
import React from 'react';
import { m } from 'framer-motion';
import { Users, Shield, Award, Clock } from 'lucide-react';

const metrics = [
  { icon: Users, title: "450+", subtitle: "Happy Clients", color: "text-blue-600", bg: "bg-blue-100/50" },
  { icon: Shield, title: "100%", subtitle: "Transparent Process", color: "text-emerald-600", bg: "bg-emerald-100/50" },
  { icon: Award, title: "10+", subtitle: "Years Expertise", color: "text-amber-600", bg: "bg-amber-100/50" },
  { icon: Clock, title: "24/7", subtitle: "Investor Support", color: "text-rose-600", bg: "bg-rose-100/50" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.8
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function MetricCards() {
  return (
    <m.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
    >
      {metrics.map((item, i) => (
        <m.div 
          key={i}
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
          className="flex items-center gap-3 sm:gap-4 bg-white/90 border border-white/80 shadow-sm rounded-2xl p-3 sm:p-5 transition-all hover:shadow-lg hover:shadow-blue-900/5 cursor-default group transform-gpu will-change-transform"
        >
          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${item.bg} group-hover:bg-white`}>
            <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
          </div>
          <div>
            <h4 className="text-sm sm:text-lg font-bold text-neutral-900">{item.title}</h4>
            <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-tight mt-0.5">{item.subtitle}</p>
          </div>
        </m.div>
      ))}
    </m.div>
  );
}
