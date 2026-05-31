"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ArrowRight, Check, Sparkles, HelpCircle, Loader2 } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { ALL_QUESTIONS } from "./data/questions";
import { SECTIONS } from "./data/sections";
import { LANGUAGES, t } from "./data/languages";
import { UI_TEXT } from "./data/uiText";
import { SECTION_ILLUSTRATIONS } from "./SurveyIllustrations";
import { CHEEKY_REMARKS } from "./data/cheekyRemarks";
import ThemePicker from "./ThemePicker";

/**
 * Question stepper component — fully customizable themed layout.
 * Displays interactive section introductions and dynamic questionnaire flows.
 */
export default function SurveyQuestions({ lang, setLang, onComplete, theme, themeId, setThemeId }) {
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);
  const [showSectionBanner, setShowSectionBanner] = useState(true);

  const questions = ALL_QUESTIONS;
  const currentQ = questions[qIndex];
  const currentSection = SECTIONS.find((s) => s.id === currentQ.sectionId);
  const sectionIndex = SECTIONS.findIndex((s) => s.id === currentQ.sectionId);

  const prevSection = qIndex > 0 ? questions[qIndex - 1].sectionId : null;
  const isNewSection = prevSection !== currentQ.sectionId;
  const isLight = themeId === "light";

  // Selected answer score for the active question (if any)
  const selectedScore = answers[currentQ.id];

  const handleSelectOption = useCallback((score) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: score }));
  }, [currentQ.id]);

  const handleContinue = useCallback(() => {
    if (selectedScore === undefined) return;
    setDirection(1);

    if (qIndex < questions.length - 1) {
      const nextQ = questions[qIndex + 1];
      if (nextQ.sectionId !== currentQ.sectionId) {
        setShowSectionBanner(true);
      }
      setQIndex(qIndex + 1);
    } else {
      // Calculate results
      const sectionScores = {};
      for (const section of SECTIONS) {
        const sectionQs = questions.filter((q) => q.sectionId === section.id);
        const sectionScore = sectionQs.reduce((sum, q) => sum + (answers[q.id] || 0), 0);
        sectionScores[section.id] = { score: sectionScore, maxScore: section.maxScore };
      }
      const rawTotal = Object.values(sectionScores).reduce((sum, s) => sum + s.score, 0);
      const totalScore = Math.round((rawTotal / 79) * 100);
      onComplete({ totalScore, sectionScores, answers });
    }
  }, [qIndex, answers, questions, currentQ, selectedScore, onComplete]);

  const handleBack = useCallback(() => {
    if (qIndex > 0) {
      setDirection(-1);
      setQIndex(qIndex - 1);
    }
  }, [qIndex]);

  const overallProgress = ((qIndex + 1) / questions.length) * 100;
  const SectionIcon = LucideIcons[currentSection?.icon] || HelpCircle;
  const IllustrationComponent = SECTION_ILLUSTRATIONS[currentQ.sectionId];

  // Dismiss section banner on load or step transition (increased slightly for premium reading time)
  useEffect(() => {
    if (showSectionBanner && isNewSection) {
      const timer = setTimeout(() => setShowSectionBanner(false), 1500);
      return () => clearTimeout(timer);
    } else if (showSectionBanner && !isNewSection) {
      setShowSectionBanner(false);
    }
  }, [showSectionBanner, isNewSection, qIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className={`relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl border shadow-2xl flex flex-col justify-between min-h-[580px] transition-colors duration-300 ${theme.bg} ${theme.cardBg}`}
    >
      {/* Background Glowing Orb */}
      {!isLight && (
        <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      )}

      {/* Top progress bar */}
      <div className={`h-1 w-full rounded-t-[inherit] ${isLight ? "bg-neutral-200" : "bg-white/5"}`}>
        <motion.div
          className={`h-full bg-gradient-to-r rounded-r-full ${theme.progressBar}`}
          initial={{ width: 0 }}
          animate={{ width: `${overallProgress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Header controls & dots */}
      <div className={`px-6 pt-4 pb-3 border-b z-10 ${isLight ? "bg-neutral-100/50 border-neutral-200/60" : "bg-neutral-900/20 border-white/5"} backdrop-blur-sm`}>
        <div className="flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center mb-3">
          {/* Section index indicator */}
          <span className={`text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap ${theme.textMuted}`}>
            {t(UI_TEXT.sectionOf, lang)
              .replace("{current}", sectionIndex + 1)
              .replace("{total}", SECTIONS.length)}
          </span>
          
          {/* Theme selection + Language picker */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
            <ThemePicker themeId={themeId} setThemeId={setThemeId} />
            <div className="flex gap-1 overflow-x-auto max-w-[140px] sm:max-w-[200px] scrollbar-none pr-1">
              {Object.entries(LANGUAGES).map(([code, { nativeName }]) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold transition-all border cursor-pointer
                    ${lang === code ? theme.pillActive : theme.pillInactive}`}
                >
                  {nativeName}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section dots progress indicator */}
        <div className="flex justify-start gap-1.5">
          {SECTIONS.map((s, i) => (
            <div
              key={s.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i < sectionIndex 
                  ? (isLight ? "w-4 bg-indigo-500" : "w-4 bg-blue-500") 
                  : i === sectionIndex 
                    ? (isLight ? "w-6 bg-indigo-600" : "w-6 bg-indigo-500") 
                    : (isLight ? "w-1.5 bg-neutral-200" : "w-1.5 bg-white/10")
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative px-6 py-6 flex-1 flex flex-col justify-start">
        <AnimatePresence mode="wait">
          {showSectionBanner && isNewSection ? (
            /* Dedicated Section Intro Screen to prevent overlapping text */
            <motion.div
              key={`intro-${currentSection.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-4 min-h-[380px]"
            >
              <span className={`text-[10px] font-extrabold uppercase tracking-[4px] mb-2 ${theme.accent}`}>
                Section {sectionIndex + 1} of {SECTIONS.length}
              </span>
              <h2 className={`text-2xl font-black mb-6 tracking-tight ${isLight ? "text-neutral-900" : "text-white"}`}>
                {t(currentSection?.name, lang)}
              </h2>
              <div className="w-36 h-36 mb-6">
                {IllustrationComponent && <IllustrationComponent />}
              </div>
              <div className={`flex items-center gap-2 text-xs font-semibold ${theme.textMuted}`}>
                <Loader2 className={`h-4 w-4 animate-spin ${theme.accent}`} />
                <span>Loading questions...</span>
              </div>
            </motion.div>
          ) : (
            /* Normal Question Rendering */
            <motion.div
              key={currentQ.id}
              custom={direction}
              initial={{ x: direction > 0 ? 30 : -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -30 : 30, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex-1 flex flex-col justify-between"
            >
              <div>
                {/* Section Header */}
                <div className="flex items-center gap-1.5 mb-2.5">
                  <SectionIcon className={`h-3.5 w-3.5 ${theme.accent}`} />
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider ${theme.accent}`}>
                    {t(currentSection?.name, lang)}
                  </span>
                </div>

                {/* Question Text */}
                <h2 className={`text-base sm:text-lg font-bold leading-snug mb-5 ${isLight ? "text-neutral-800" : "text-white"}`}>
                  {t(currentQ.question, lang)}
                </h2>

                {/* Answer options */}
                <div className="flex flex-col gap-2.5 mb-4">
                  {currentQ.options.map((opt, i) => {
                    const isSelected = selectedScore === opt.score;
                    return (
                      <motion.button
                        key={i}
                        onClick={() => handleSelectOption(opt.score)}
                        whileHover={{ scale: 1.002, x: 1 }}
                        whileTap={{ scale: 0.998 }}
                        className={`relative flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 cursor-pointer
                          ${isSelected
                            ? theme.pillActive
                            : (isLight 
                                ? "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50"
                                : "border-white/5 bg-white/5 text-neutral-300 hover:border-white/10 hover:bg-white/10"
                              )
                          }`}
                      >
                        <div className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border transition-all
                          ${isSelected 
                            ? "border-transparent bg-white shadow-sm" 
                            : (isLight ? "border-neutral-300" : "border-white/20")
                          }`}>
                          {isSelected && <Check className={`h-3 w-3 stroke-[3.5] ${isLight ? "text-indigo-600" : theme.accent}`} />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold leading-snug">{t(opt.label, lang)}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Cheeky Real-Talk Dynamic Drawer */}
              <AnimatePresence>
                {selectedScore !== undefined && CHEEKY_REMARKS[currentQ.id]?.[selectedScore] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: 10 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden mt-2"
                  >
                    <div className={`rounded-xl border p-3.5 text-[11px] sm:text-xs leading-relaxed flex items-start gap-2
                      ${isLight 
                        ? "border-amber-200 bg-amber-50/50 text-amber-900" 
                        : "border-amber-500/20 bg-amber-500/5 text-amber-200/90 shadow-[0_4px_12px_rgba(245,158,11,0.03)]"
                      }`}
                    >
                      <Sparkles className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-amber-500 block mb-0.5">Ortus Insider:</span>
                        {CHEEKY_REMARKS[currentQ.id][selectedScore]}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Nav Bar */}
      {!(showSectionBanner && isNewSection) && (
        <div className={`flex items-center justify-between border-t px-6 py-4 z-10 rounded-b-[inherit] ${theme.navBg}`}>
          <button
            onClick={handleBack}
            disabled={qIndex === 0}
            className={`flex items-center gap-1 text-xs font-semibold transition-all cursor-pointer focus:outline-none
              ${qIndex === 0 
                ? "text-neutral-600 cursor-not-allowed" 
                : `${theme.textMuted} hover:text-blue-400`
              }`}
          >
            <ChevronLeft className="h-4 w-4" />
            {t(UI_TEXT.back, lang)}
          </button>

          {/* Question Counter */}
          <span className={`text-[10px] font-bold ${theme.textMutedExtra}`}>
            {t(UI_TEXT.questionOf, lang)
              .replace("{current}", qIndex + 1)
              .replace("{total}", questions.length)}
          </span>

          {/* Continue Button (Glows only when selection is active) */}
          <motion.button
            onClick={handleContinue}
            disabled={selectedScore === undefined}
            whileHover={selectedScore !== undefined ? { scale: 1.02 } : {}}
            whileTap={selectedScore !== undefined ? { scale: 0.98 } : {}}
            className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer focus:outline-none
              ${selectedScore !== undefined
                ? theme.buttonPrimary
                : (isLight 
                    ? "bg-neutral-200 border-neutral-300 text-neutral-400 cursor-not-allowed"
                    : "bg-neutral-900 border-white/5 text-neutral-500 cursor-not-allowed"
                  )
              }`}
          >
            <span>Continue</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
