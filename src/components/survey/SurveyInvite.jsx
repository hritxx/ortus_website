"use client";
import { motion } from "framer-motion";
import { HeartPulse, ArrowRight, X, Clock } from "lucide-react";
import { UI_TEXT } from "./data/uiText";
import { LANGUAGES } from "./data/languages";
import { t } from "./data/languages";
import ThemePicker from "./ThemePicker";

/**
 * Initial invite popup — asks user if they want to take the financial health checkup.
 * Fully configurable enterprise styling matching selected theme.
 */
export default function SurveyInvite({ lang, setLang, onStart, onDismiss, theme, themeId, setThemeId }) {
  const isLight = themeId === "light";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 30 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 22 }}
      className={`relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl border shadow-2xl transition-colors duration-300 ${theme.bg} ${theme.cardBg}`}
      style={{ perspective: "1200px" }}
    >
      {/* Background glowing gradients */}
      {!isLight && (
        <>
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
        </>
      )}

      {/* Floating Theme Picker */}
      <div className="absolute top-4 left-4 z-20">
        <ThemePicker themeId={themeId} setThemeId={setThemeId} />
      </div>

      {/* Close button */}
      <button
        onClick={onDismiss}
        className={`absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2
          ${isLight 
            ? "bg-neutral-100 border-neutral-200 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 focus-visible:ring-indigo-500" 
            : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10 hover:text-white focus-visible:ring-blue-500"
          }`}
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>

      {/* Header Banner */}
      <div className={`relative px-8 pt-16 pb-6 text-center overflow-hidden bg-gradient-to-b rounded-t-[inherit] ${theme.headerBg}`}>
        {/* Glowing Pulse Icon Container */}
        <motion.div
          className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Neon Ring Glows */}
          {!isLight && (
            <>
              <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping" style={{ animationDuration: "3s" }} />
              <div className="absolute inset-2 rounded-full bg-blue-500/5 animate-ping" style={{ animationDuration: "4s" }} />
            </>
          )}
          <div className={`relative flex h-16 w-16 items-center justify-center rounded-full border transition-all ${theme.iconBg}`}>
            <HeartPulse className={`h-7 w-7 ${theme.accent}`} strokeWidth={2.2} />
          </div>
        </motion.div>

        <div className={`text-[10px] font-extrabold uppercase tracking-[4px] mb-2 ${theme.accent}`}>
          Ortus Finance
        </div>
        <h2 className={`font-display text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight mb-3 ${isLight ? "text-neutral-900" : "text-white"}`}>
          {t(UI_TEXT.inviteTitle, lang)}
        </h2>
        <p className={`text-xs sm:text-sm leading-relaxed max-w-sm mx-auto ${theme.textMuted}`}>
          {t(UI_TEXT.inviteSubtitle, lang)}
        </p>
      </div>

      {/* Body Area */}
      <div className="px-8 pb-8 pt-5">
        {/* Language selector */}
        <div className={`mb-6 border rounded-2xl p-4 transition-colors duration-300 ${isLight ? "bg-neutral-100/60 border-neutral-200/60" : "bg-white/5 border-white/5"}`}>
          <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 text-center ${theme.textMuted}`}>
            {t(UI_TEXT.chooseLang, lang)}
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 pr-1">
            {Object.entries(LANGUAGES).map(([code, { nativeName }]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border
                  ${lang === code ? theme.pillActive : theme.pillInactive}`}
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
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 ${theme.buttonPrimary}`}
          >
            {t(UI_TEXT.startBtn, lang)}
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.button>

          <button
            onClick={onDismiss}
            className={`w-full rounded-xl px-6 py-3 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 ${theme.buttonSecondary}`}
          >
            {t(UI_TEXT.laterBtn, lang)}
          </button>
        </div>

        {/* Time warning footer (SVG/Lucide clock instead of character emoji) */}
        <p className={`mt-5 justify-center text-[10px] sm:text-xs flex items-center gap-1.5 ${theme.textMutedExtra}`}>
          <Clock className="h-3.5 w-3.5" />
          <span>{t(UI_TEXT.takesTime, lang)}</span>
        </p>
      </div>
    </motion.div>
  );
}
