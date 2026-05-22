"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { ALL_QUESTIONS } from "./data/questions";
import { SECTIONS } from "./data/sections";
import { LANGUAGES, t } from "./data/languages";
import { UI_TEXT } from "./data/uiText";
import { SECTION_ILLUSTRATIONS } from "./SurveyIllustrations";
import { CHEEKY_REMARKS } from "./data/cheekyRemarks";

/**
 * Question stepper component — redesigned with a stunning dark glassmorphic fintech theme.
 * Features animated SVGs, real-time "Ortus Real-Talk" cheeky feedback, and smooth navigation.
 */
export default function SurveyQuestions({ lang, setLang, onComplete }) {
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
  const SectionIcon = LucideIcons[currentSection?.icon] || LucideIcons.HelpCircle;
  const IllustrationComponent = SECTION_ILLUSTRATIONS[currentQ.sectionId];

  // Dismiss section banner on load or step transition
  useEffect(() => {
    if (showSectionBanner && isNewSection) {
      const timer = setTimeout(() => setShowSectionBanner(false), 1400);
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
      className="relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl shadow-blue-500/10 flex flex-col justify-between min-h-[580px]"
    >
      {/* Background Glowing Orb */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Top progress bar */}
      <div className="h-1 w-full bg-white/5 rounded-t-[inherit]">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-r-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${overallProgress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Header controls & dots */}
      <div className="px-6 pt-4 pb-2 border-b border-white/5 bg-neutral-900/20 backdrop-blur-sm z-10">
        <div className="flex justify-between items-center mb-3">
          {/* Section index indicator */}
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            {t(UI_TEXT.sectionOf, lang)
              .replace("{current}", sectionIndex + 1)
              .replace("{total}", SECTIONS.length)}
          </span>
          {/* Language picker */}
          <div className="flex gap-1 overflow-x-auto max-w-[200px] scrollbar-none pr-1">
            {Object.entries(LANGUAGES).map(([code, { nativeName }]) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`shrink-0 px-2 py-0.5 rounded-full text-[9px] font-bold transition-all border cursor-pointer
                  ${lang === code ? "bg-blue-600 border-blue-500 text-white" : "bg-neutral-900 border-white/5 text-neutral-500 hover:text-neutral-300"}`}
              >
                {nativeName}
              </button>
            ))}
          </div>
        </div>

        {/* Section dots indicator */}
        <div className="flex justify-start gap-1.5">
          {SECTIONS.map((s, i) => (
            <div
              key={s.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i < sectionIndex ? "w-4 bg-blue-500" : i === sectionIndex ? "w-6 bg-indigo-500" : "w-1.5 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Section transition banner */}
      <AnimatePresence>
        {showSectionBanner && isNewSection && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden absolute top-[68px] inset-x-0 z-20 border-b border-white/10"
          >
            <div className="bg-gradient-to-r from-blue-950 via-neutral-900 to-indigo-950 px-6 py-3.5 text-center text-white">
              <div className="flex items-center justify-center gap-1.5">
                <SectionIcon className="h-4 w-4 text-blue-400" />
                <h3 className="text-sm font-bold tracking-wide">{t(currentSection?.name, lang)}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Question Scrollable Body */}
      <div className="relative px-6 py-6 flex-1 flex flex-col justify-start">
        {/* Animated illustration background */}
        {IllustrationComponent && (
          <div className="absolute top-4 right-4 w-20 h-20 text-blue-400/20 opacity-30 pointer-events-none">
            <IllustrationComponent />
          </div>
        )}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentQ.id}
            custom={direction}
            initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -50 : 50, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              {/* Section Header */}
              <div className="flex items-center gap-1.5 mb-2.5">
                <SectionIcon className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  {t(currentSection?.name, lang)}
                </span>
              </div>

              {/* Question Text */}
              <h2 className="text-base sm:text-lg font-bold text-white leading-snug mb-5 pr-12">
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
                      whileHover={{ scale: 1.005, x: 2 }}
                      whileTap={{ scale: 0.995 }}
                      className={`relative flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 cursor-pointer
                        ${isSelected
                          ? "border-blue-500 bg-blue-600/10 text-white shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                          : "border-white/5 bg-white/5 text-neutral-300 hover:border-white/10 hover:bg-white/10"
                        }`}
                    >
                      <div className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border transition-all
                        ${isSelected ? "border-blue-500 bg-blue-600 shadow-[0_0_6px_rgba(59,130,246,0.4)]" : "border-white/20"}`}>
                        {isSelected && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} />}
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
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-3.5 text-[11px] sm:text-xs leading-relaxed text-amber-200/90 shadow-[0_4px_12px_rgba(245,158,11,0.03)] flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-amber-400 block mb-0.5">Ortus Insider:</span>
                      {CHEEKY_REMARKS[currentQ.id][selectedScore]}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Nav Bar */}
      <div className="flex items-center justify-between border-t border-white/5 px-6 py-4 bg-neutral-900/10 backdrop-blur-sm z-10 rounded-b-[inherit]">
        <button
          onClick={handleBack}
          disabled={qIndex === 0}
          className={`flex items-center gap-1 text-xs font-semibold transition-all cursor-pointer
            ${qIndex === 0 ? "text-neutral-600 cursor-not-allowed" : "text-neutral-400 hover:text-white"}`}
        >
          <ChevronLeft className="h-4 w-4" />
          {t(UI_TEXT.back, lang)}
        </button>

        {/* Question Counter */}
        <span className="text-[10px] text-neutral-500 font-bold">
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
          className={`inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer
            ${selectedScore !== undefined
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40"
              : "bg-neutral-900 border-white/5 text-neutral-500 cursor-not-allowed"
            }`}
        >
          <span>Continue</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.button>
      </div>
    </motion.div>
  );
}
