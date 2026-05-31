"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { HeartPulse, Coins } from "lucide-react";

/**
 * Floating Action Button for re-opening the survey.
 * Renders a responsive, creative financial health check pill.
 */
export default function SurveyFAB({ onClick, visible = true }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AnimatePresence>
      {visible && <m.div
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.8 }}
        transition={{ delay: 4, duration: 0.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-30"
        style={{ perspective: "600px" }}
      >
        {/* Tooltip (Visible on mobile only, since desktop has label text) */}
        <AnimatePresence>
          {hovered && (
            <m.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap
                         rounded-lg bg-neutral-900 px-3 py-2 text-xs font-semibold text-white
                         shadow-lg sm:hidden"
            >
              Take Health Checkup
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-neutral-900 rotate-45" />
            </m.div>
          )}
        </AnimatePresence>

        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full animate-[fab-ping_2s_ease-in-out_infinite] bg-blue-500/30" />
        <div className="absolute inset-0 rounded-full animate-[fab-ping_2s_ease-in-out_infinite_0.5s] bg-blue-500/20" />

        {/* Button */}
        <m.button
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.05, rotateY: 4 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex w-14 h-14 sm:w-auto sm:h-auto items-center justify-center gap-2.5 rounded-full
                     bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg shadow-blue-500/25 border border-blue-400/30
                     transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/45
                     sm:px-5 sm:py-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2
                     cursor-pointer select-none overflow-hidden"
          aria-label="Take Financial Health Checkup"
        >
          {/* Background decorative Coin silhouette */}
          <Coins className="absolute -right-1.5 -bottom-2 h-8 w-8 opacity-15 text-white pointer-events-none rotate-12 shrink-0" />

          {/* Pulsing Beacon Dot */}
          <span className="hidden sm:flex relative h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          {/* Icon */}
          <HeartPulse className="h-6 w-6 sm:h-5 sm:w-5 shrink-0" strokeWidth={2.2} />

          {/* Text Label */}
          <span className="hidden sm:inline-block text-[11px] font-black uppercase tracking-wider">
            Health Checkup
          </span>
        </m.button>
      </m.div>}
    </AnimatePresence>
  );
}
