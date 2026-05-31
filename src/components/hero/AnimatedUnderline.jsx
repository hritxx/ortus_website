'use client';
import React from 'react';
import { m } from 'framer-motion';

export default function AnimatedUnderline({ children, delay = 0.5 }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10 text-blue-600">{children}</span>
      <m.svg
        viewBox="0 0 200 20"
        className="absolute left-0 w-full -bottom-2 h-auto z-0 overflow-visible"
        initial="hidden"
        animate="visible"
      >
        <m.path
          d="M5,15 Q100,5 195,15"
          fill="transparent"
          stroke="#2563eb"
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
      </m.svg>
    </span>
  );
}
