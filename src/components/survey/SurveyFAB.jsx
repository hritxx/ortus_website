"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClipboardCheck } from "lucide-react";

/**
 * Floating Action Button for re-opening the survey.
 * Appears in the bottom-right corner with a pulse animation.
 */
export default function SurveyFAB({ onClick, visible = true }) {
  const [hovered, setHovered] = useState(false);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.8 }}
        transition={{ delay: 4, duration: 0.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
        style={{ perspective: "600px" }}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap
                         rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white
                         shadow-lg"
            >
              Take Financial Health Checkup
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-neutral-900 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse rings */}
        <div className="absolute inset-0 rounded-full animate-[fab-ping_2s_ease-in-out_infinite] bg-blue-500/30" />
        <div className="absolute inset-0 rounded-full animate-[fab-ping_2s_ease-in-out_infinite_0.5s] bg-blue-500/20" />

        {/* Button */}
        <motion.button
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.1, rotateY: 8 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full
                     bg-gradient-to-br from-blue-600 to-blue-700
                     text-white shadow-lg shadow-blue-500/30
                     transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/40
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2
                     cursor-pointer"
          aria-label="Take Financial Health Checkup"
        >
          <ClipboardCheck className="h-6 w-6" strokeWidth={2.2} />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
