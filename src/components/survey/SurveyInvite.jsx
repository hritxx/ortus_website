"use client";
import { motion } from "framer-motion";
import { HeartPulse, ArrowRight, X } from "lucide-react";
import { UI_TEXT } from "./data/uiText";
import { LANGUAGES } from "./data/languages";
import { t } from "./data/languages";

/**
 * Initial invite popup — asks user if they want to take the financial health checkup.
 * Shown once per browser session after a 2.5s delay.
 */
export default function SurveyInvite({ lang, setLang, onStart, onDismiss }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
      className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl bg-white shadow-2xl"
      style={{ perspective: "1200px" }}
    >
      {/* Close button */}
      <button
        onClick={onDismiss}
        className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full
                   bg-white/80 text-neutral-500 backdrop-blur transition hover:bg-neutral-100 hover:text-neutral-700
                   cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Top gradient banner with animated icon */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-neutral-900 px-8 py-10 text-center text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 w-24 h-24 rounded-full border border-white/30" />
          <div className="absolute bottom-2 right-10 w-16 h-16 rounded-full border border-white/20" />
          <div className="absolute top-10 right-20 w-8 h-8 rounded-full bg-white/10" />
        </div>

        {/* Animated pulse icon */}
        <motion.div
          className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping" style={{ animationDuration: "2s" }} />
          <div className="absolute inset-2 rounded-full bg-blue-400/15 animate-ping" style={{ animationDuration: "2.5s" }} />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
            <HeartPulse className="h-8 w-8 text-white" strokeWidth={2} />
          </div>
        </motion.div>

        <div className="text-xs font-semibold uppercase tracking-[3px] text-blue-300 mb-3">
          Ortus Finance
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold leading-tight mb-2">
          {t(UI_TEXT.inviteTitle, lang)}
        </h2>
        <p className="text-sm text-blue-200/80 leading-relaxed max-w-xs mx-auto">
          {t(UI_TEXT.inviteSubtitle, lang)}
        </p>
      </div>

      {/* Body */}
      <div className="px-8 py-8">
        {/* Language picker */}
        <div className="mb-6">
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 text-center">
            {t(UI_TEXT.chooseLang, lang)}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(LANGUAGES).map(([code, { nativeName }]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer
                  ${lang === code
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-neutral-100 text-neutral-600 hover:bg-blue-50 hover:text-blue-700"
                  }`}
              >
                {nativeName}
              </button>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700
                     px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25
                     transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/30
                     cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          {t(UI_TEXT.startBtn, lang)}
          <ArrowRight className="h-5 w-5" />
        </motion.button>

        <button
          onClick={onDismiss}
          className="mt-3 w-full rounded-xl border-2 border-neutral-200 px-6 py-3 text-sm font-medium
                     text-neutral-500 transition-all duration-200 hover:border-neutral-300 hover:text-neutral-700
                     cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
        >
          {t(UI_TEXT.laterBtn, lang)}
        </button>

        <p className="mt-4 text-center text-xs text-neutral-400">
          ⏱ {t(UI_TEXT.takesTime, lang)}
        </p>
      </div>
    </motion.div>
  );
}
