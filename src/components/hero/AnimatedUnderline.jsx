'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedUnderline({ children, delay = 0.5 }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10 text-blue-600">{children}</span>
      <motion.svg
        viewBox="0 0 200 20"
        className="absolute left-0 w-full -bottom-2 h-auto z-0 overflow-visible"
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M5,15 Q100,5 195,15"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { 
              pathLength: 1, 
              opacity: 1, 
              transition: { duration: 1, delay, ease: "easeOut" }
            }
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </motion.svg>
    </span>
  );
}
