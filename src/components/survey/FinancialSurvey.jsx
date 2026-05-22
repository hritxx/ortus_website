"use client";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import SurveyInvite from "./SurveyInvite";
import SurveyQuestions from "./SurveyQuestions";
import SurveyResults from "./SurveyResults";
import SurveyFAB from "./SurveyFAB";
import { DEFAULT_LANG } from "./data/languages";

const SESSION_KEY = "ortus_survey_shown";

/**
 * Main orchestrator for the Financial Health Checkup Survey.
 * Manages modal lifecycle: closed → invite → quiz → result
 * Uses sessionStorage to show the invite popup only once per browser session.
 */
export default function FinancialSurvey() {
  const [phase, setPhase] = useState("closed"); // closed | invite | quiz | result
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [results, setResults] = useState(null);
  const [fabVisible, setFabVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Client-side mount flag
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-show invite after 2.5s delay on first session visit
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setPhase("invite");
        sessionStorage.setItem(SESSION_KEY, "true");
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      // Already shown this session — show FAB immediately
      setFabVisible(true);
    }
  }, []);

  // Lock/unlock body scroll when modal is open
  useEffect(() => {
    if (phase !== "closed") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [phase]);

  const handleDismiss = useCallback(() => {
    setPhase("closed");
    setFabVisible(true);
  }, []);

  const handleStartQuiz = useCallback(() => {
    setPhase("quiz");
  }, []);

  const handleComplete = useCallback((resultData) => {
    setResults(resultData);
    setPhase("result");
  }, []);

  const handleRetake = useCallback(() => {
    setResults(null);
    setPhase("quiz");
  }, []);

  const handleOpenFromFAB = useCallback(() => {
    setResults(null);
    setPhase("invite");
    setFabVisible(false);
  }, []);

  const isModalOpen = phase !== "closed";

  return (
    <>
      {/* FAB — visible only when survey is closed */}
      <SurveyFAB onClick={handleOpenFromFAB} visible={fabVisible && !isModalOpen} />

      {/* Modal overlay — Portaled to document.body to prevent stacking context clipping on mobile */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] flex items-start justify-center px-3 pb-3 pt-20 sm:items-center sm:p-4"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm"
                onClick={phase === "invite" ? handleDismiss : undefined}
              />

              {/* Scrollable content area */}
              <div className="relative z-10 w-full max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain
                              scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-300
                              sm:max-h-[90vh]">
                <AnimatePresence mode="wait">
                  {phase === "invite" && (
                    <SurveyInvite
                      key="invite"
                      lang={lang}
                      setLang={setLang}
                      onStart={handleStartQuiz}
                      onDismiss={handleDismiss}
                    />
                  )}
                  {phase === "quiz" && (
                    <SurveyQuestions
                      key="quiz"
                      lang={lang}
                      setLang={setLang}
                      onComplete={handleComplete}
                    />
                  )}
                  {phase === "result" && results && (
                    <SurveyResults
                      key="result"
                      lang={lang}
                      results={results}
                      onRetake={handleRetake}
                    />
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
