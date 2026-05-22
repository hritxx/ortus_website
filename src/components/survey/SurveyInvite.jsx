"use client";
import { motion } from "framer-motion";
import { HeartPulse, ArrowRight, X } from "lucide-react";
import { UI_TEXT } from "./data/uiText";
import { LANGUAGES } from "./data/languages";
import { t } from "./data/languages";

/**
 * Initial invite popup — asks user if they want to take the financial health checkup.
 * Redesigned with a stunning premium dark glassmorphism theme and glowing accents.
 */
export default function SurveyInvite({ lang, setLang, onStart, onDismiss }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 30 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 22 }}
      className="relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl shadow-blue-500/10"
      style={{ perspective: "1200px" }}
    >
      {/* Background glowing gradients */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      {/* Close button */}
      <button
        onClick={onDismiss}
        className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full
                   bg-white/5 border border-white/10 text-neutral-400 backdrop-blur transition-all duration-200
                   hover:bg-white/10 hover:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Header Banner */}
      <div className="relative px-8 pt-10 pb-6 text-center text-white overflow-hidden border-b border-white/5 bg-gradient-to-b from-neutral-900/50 to-transparent rounded-t-[inherit]">
        {/* Glowing Pulse Icon Container */}
        <motion.div
          className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Neon Ring Glows */}
          <div className="absolute inset-0 rounded-full bg-blue-500/15 animate-ping" style={{ animationDuration: "3s" }} />
          <div className="absolute inset-2 rounded-full bg-blue-500/10 animate-ping" style={{ animationDuration: "4s" }} />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 border border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.25)]">
            <HeartPulse className="h-7 w-7 text-blue-400" strokeWidth={2.2} />
          </div>
        </motion.div>

        <div className="text-[10px] font-bold uppercase tracking-[4px] text-blue-400 mb-2">
          Ortus Finance
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-white mb-3">
          {t(UI_TEXT.inviteTitle, lang)}
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mx-auto">
          {t(UI_TEXT.inviteSubtitle, lang)}
        </p>
      </div>

      {/* Body Area */}
      <div className="px-8 pb-8 pt-6">
        {/* Language selector */}
        <div className="mb-6 bg-white/5 border border-white/5 rounded-2xl p-4">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3 text-center">
            {t(UI_TEXT.chooseLang, lang)}
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 pr-1">
            {Object.entries(LANGUAGES).map(([code, { nativeName }]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border
                  ${lang === code
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-neutral-900 border-white/5 text-neutral-400 hover:border-white/10 hover:text-white"
                  }`}
              >
                {nativeName}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.01, translateY: -1 }}
            whileTap={{ scale: 0.99 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700
                       px-6 py-4 text-sm sm:text-base font-bold text-white shadow-xl shadow-blue-600/20
                       transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/30 border border-blue-500/30
                       cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            {t(UI_TEXT.startBtn, lang)}
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>

          <button
            onClick={onDismiss}
            className="mt-3 w-full rounded-xl border border-white/10 px-6 py-3 text-xs sm:text-sm font-bold
                       text-neutral-400 bg-neutral-900/60 transition-all duration-200 hover:border-white/20 hover:text-white
                       cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            {t(UI_TEXT.laterBtn, lang)}
          </button>
        </div>

        {/* Time warning footer */}
        <p className="mt-5 text-center text-[10px] sm:text-xs text-neutral-500 flex items-center justify-center gap-1">
          <span>⏱</span> {t(UI_TEXT.takesTime, lang)}
        </p>
      </div>
    </motion.div>
  );
}
