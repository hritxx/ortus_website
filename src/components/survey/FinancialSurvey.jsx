"use client";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import SurveyInvite from "./SurveyInvite";
import SurveyQuestions from "./SurveyQuestions";
import SurveyDetails from "./SurveyDetails";
import SurveyResults from "./SurveyResults";
import SurveyFAB from "./SurveyFAB";
import { DEFAULT_LANG } from "./data/languages";
import { SURVEY_THEMES } from "./data/themes";

const SESSION_KEY = "ortus_survey_shown";

/**
 * Main orchestrator for the Financial Health Checkup Survey.
 * Manages modal lifecycle: closed → invite → quiz → result
 * Uses sessionStorage to show the invite popup only once per browser session.
 */
export default function FinancialSurvey() {
  const [phase, setPhase] = useState("closed"); // closed | invite | quiz | details | result
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [results, setResults] = useState(null);
  const [fabVisible, setFabVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Theme state persisted in localStorage
  const [themeId, setThemeId] = useState("light");

  // Load theme from localStorage on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("ortus_survey_theme");
      if (savedTheme && SURVEY_THEMES[savedTheme]) {
        setThemeId(savedTheme);
      }
    }
  }, []);

  const handleSetThemeId = useCallback((id) => {
    setThemeId(id);
    if (typeof window !== "undefined") {
      localStorage.setItem("ortus_survey_theme", id);
    }
  }, []);

  const theme = SURVEY_THEMES[themeId] || SURVEY_THEMES.slate;

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
    setPhase("details");
  }, []);

  const handleDetailsSubmitted = useCallback(() => {
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
                className={`absolute inset-0 backdrop-blur-sm transition-colors duration-500
                  ${theme.id === "light" ? "bg-neutral-900/40" : "bg-neutral-950/60"}`}
                onClick={phase === "invite" ? handleDismiss : undefined}
              />

              {/* Scrollable content area */}
              <div className="relative z-10 w-full max-h-[calc(100dvh-5.5rem)] overflow-y-auto overscroll-contain
                              scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-300
                              p-3 sm:p-4 sm:max-h-[90vh]">
                <AnimatePresence mode="wait">
                  {phase === "invite" && (
                    <SurveyInvite
                      key="invite"
                      lang={lang}
                      setLang={setLang}
                      onStart={handleStartQuiz}
                      onDismiss={handleDismiss}
                      theme={theme}
                      themeId={themeId}
                      setThemeId={handleSetThemeId}
                    />
                  )}
                  {phase === "quiz" && (
                    <SurveyQuestions
                      key="quiz"
                      lang={lang}
                      setLang={setLang}
                      onComplete={handleComplete}
                      theme={theme}
                      themeId={themeId}
                      setThemeId={handleSetThemeId}
                    />
                  )}
                  {phase === "details" && results && (
                    <SurveyDetails
                      key="details"
                      lang={lang}
                      results={results}
                      onSubmitted={handleDetailsSubmitted}
                      theme={theme}
                      themeId={themeId}
                      setThemeId={handleSetThemeId}
                    />
                  )}
                  {phase === "result" && results && (
                    <SurveyResults
                      key="result"
                      lang={lang}
                      results={results}
                      onRetake={handleRetake}
                      onClose={handleDismiss}
                      theme={theme}
                      themeId={themeId}
                      setThemeId={handleSetThemeId}
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
