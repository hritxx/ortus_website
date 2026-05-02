"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Check } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { ALL_QUESTIONS } from "./data/questions";
import { SECTIONS } from "./data/sections";
import { LANGUAGES, t } from "./data/languages";
import { UI_TEXT } from "./data/uiText";
import { SECTION_ILLUSTRATIONS } from "./SurveyIllustrations";

/**
 * Question stepper component — walks through 18 questions across 6 sections.
 * Features 3D card transitions, section banners, and progress indicators.
 */
export default function SurveyQuestions({ lang, setLang, onComplete }) {
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [showSectionBanner, setShowSectionBanner] = useState(true);

  const questions = ALL_QUESTIONS;
  const currentQ = questions[qIndex];
  const currentSection = SECTIONS.find((s) => s.id === currentQ.sectionId);
  const sectionIndex = SECTIONS.findIndex((s) => s.id === currentQ.sectionId);

  // Check if we're at a new section boundary
  const prevSection = qIndex > 0 ? questions[qIndex - 1].sectionId : null;
  const isNewSection = prevSection !== currentQ.sectionId;

  const handleAnswer = useCallback((qId, score) => {
    setAnswers((prev) => ({ ...prev, [qId]: score }));
    setDirection(1);

    if (qIndex < questions.length - 1) {
      // Check if next question is a new section
      const nextQ = questions[qIndex + 1];
      if (nextQ.sectionId !== currentQ.sectionId) {
        setShowSectionBanner(true);
      }
      setTimeout(() => setQIndex(qIndex + 1), 250);
    } else {
      // Survey complete — compute section scores & call onComplete
      const finalAnswers = { ...answers, [qId]: score };
      const sectionScores = {};
      for (const section of SECTIONS) {
        const sectionQs = questions.filter((q) => q.sectionId === section.id);
        const sectionScore = sectionQs.reduce((sum, q) => sum + (finalAnswers[q.id] || 0), 0);
        sectionScores[section.id] = { score: sectionScore, maxScore: section.maxScore };
      }
      const totalScore = Object.values(sectionScores).reduce((sum, s) => sum + s.score, 0);
      setTimeout(() => onComplete({ totalScore, sectionScores, answers: finalAnswers }), 350);
    }
  }, [qIndex, answers, questions, currentQ, onComplete]);

  const handleBack = useCallback(() => {
    if (qIndex > 0) {
      setDirection(-1);
      setQIndex(qIndex - 1);
    }
  }, [qIndex]);

  // Overall progress
  const overallProgress = ((qIndex + 1) / questions.length) * 100;

  // Section-specific question index
  const sectionQuestions = questions.filter((q) => q.sectionId === currentQ.sectionId);
  const sectionQIndex = sectionQuestions.findIndex((q) => q.id === currentQ.id);

  // Get section icon component
  const SectionIcon = LucideIcons[currentSection?.icon] || LucideIcons.HelpCircle;
  const IllustrationComponent = SECTION_ILLUSTRATIONS[currentQ.sectionId];

  // Dismiss section banner after showing (moved to useEffect to avoid render-time setState)
  useEffect(() => {
    if (showSectionBanner && isNewSection) {
      const timer = setTimeout(() => setShowSectionBanner(false), 1500);
      return () => clearTimeout(timer);
    } else if (showSectionBanner && !isNewSection) {
      setShowSectionBanner(false);
    }
  }, [showSectionBanner, isNewSection, qIndex]);

  const cardVariants = {
    enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0, rotateY: dir > 0 ? -6 : 6 }),
    center: { x: 0, opacity: 1, rotateY: 0 },
    exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0, rotateY: dir > 0 ? 6 : -6 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl bg-white shadow-2xl"
    >
      {/* Top progress bar */}
      <div className="h-1.5 w-full bg-neutral-100">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-r-full"
          initial={{ width: 0 }}
          animate={{ width: `${overallProgress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* Section dots */}
      <div className="flex justify-center gap-2 pt-4 pb-2 px-6">
        {SECTIONS.map((s, i) => (
          <div
            key={s.id}
            className={`h-2 rounded-full transition-all duration-300 ${
              i < sectionIndex
                ? "w-6 bg-blue-500"
                : i === sectionIndex
                ? "w-8 bg-blue-600"
                : "w-2 bg-neutral-200"
            }`}
          />
        ))}
      </div>

      {/* Language picker (compact) */}
      <div className="flex gap-1.5 overflow-x-auto px-6 pb-3 scrollbar-hide">
        {Object.entries(LANGUAGES).map(([code, { nativeName }]) => (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-medium transition-all cursor-pointer
              ${lang === code
                ? "bg-blue-600 text-white"
                : "bg-neutral-100 text-neutral-500 hover:bg-blue-50"
              }`}
          >
            {nativeName}
          </button>
        ))}
      </div>

      {/* Section banner (shown briefly on section change) */}
      <AnimatePresence>
        {showSectionBanner && isNewSection && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 px-6 py-4 text-center text-white">
              <div className="flex items-center justify-center gap-2 mb-1">
                <SectionIcon className="h-5 w-5 text-blue-300" />
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  {t(UI_TEXT.sectionOf, lang)
                    .replace("{current}", sectionIndex + 1)
                    .replace("{total}", SECTIONS.length)}
                </span>
              </div>
              <h3 className="text-lg font-bold">{t(currentSection?.name, lang)}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Question area */}
      <div className="relative px-6 pb-8 pt-4" style={{ perspective: "1000px", minHeight: "320px" }}>
        {/* Section illustration (background) */}
        {IllustrationComponent && (
          <div className="absolute top-4 right-4 w-20 h-20 text-blue-100 opacity-40 pointer-events-none">
            <IllustrationComponent />
          </div>
        )}

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentQ.id}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Section label */}
            <div className="flex items-center gap-2 mb-3">
              <SectionIcon className="h-4 w-4 text-blue-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
                {t(currentSection?.name, lang)}
              </span>
            </div>

            {/* Question text */}
            <h2 className="text-xl font-bold text-neutral-900 leading-snug mb-6">
              {t(currentQ.question, lang)}
            </h2>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {currentQ.options.map((opt, i) => {
                const isSelected = answers[currentQ.id] === opt.score;
                return (
                  <motion.button
                    key={i}
                    onClick={() => handleAnswer(currentQ.id, opt.score)}
                    whileHover={{ scale: 1.01, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative flex items-center gap-3 rounded-xl border-2 px-5 py-4 text-left
                               transition-all duration-200 cursor-pointer
                      ${isSelected
                        ? "border-blue-500 bg-blue-50 text-blue-900"
                        : "border-neutral-200 bg-white text-neutral-700 hover:border-blue-300 hover:bg-blue-50/50"
                      }`}
                  >
                    {/* Radio indicator */}
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all
                      ${isSelected ? "border-blue-500 bg-blue-500" : "border-neutral-300"}`}>
                      {isSelected && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                    </div>
                    <span className="text-sm font-medium leading-snug">{t(opt.label, lang)}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-neutral-100 px-6 py-4">
        <button
          onClick={handleBack}
          disabled={qIndex === 0}
          className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer
            ${qIndex === 0 ? "text-neutral-300 cursor-not-allowed" : "text-neutral-500 hover:text-blue-600"}`}
        >
          <ChevronLeft className="h-4 w-4" />
          {t(UI_TEXT.back, lang)}
        </button>
        <span className="text-xs text-neutral-400">
          {t(UI_TEXT.questionOf, lang)
            .replace("{current}", qIndex + 1)
            .replace("{total}", questions.length)}
        </span>
      </div>
    </motion.div>
  );
}
