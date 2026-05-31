"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Share2, RotateCcw, BookOpen, Clock, User, Award, ExternalLink, X, Check, AlertCircle, Lock } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { SECTIONS } from "./data/sections";
import { getTier, TIER_LABELS, getSectionAdvice, getAdviceLevel } from "./data/scoring";
import { getRecommendedCourses } from "./data/courses";
import { UI_TEXT } from "./data/uiText";
import { t } from "./data/languages";

const SECTION_NAMES = {
  income: "Income Stability",
  spending: "Spending Control",
  emergency: "Emergency Protection",
  debt: "Debt Management",
  savings: "Savings Optimization",
  goals: "Financial Goal Planning"
};

/**
 * Animated score ring component (SVG) — polished with neon glows for the premium dark theme.
 * Pulses outer glow circle in the background for a breath-like premium feel.
 */
function ScoreRing({ score, color, size = 160 }) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={10} />
        {/* Pulsing outer glow stroke */}
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={10}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="opacity-30"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          style={{ transformOrigin: "center", filter: `blur(4px) drop-shadow(0 0 8px ${color})` }}
        />
        {/* Main interactive progress stroke */}
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={10}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          strokeLinecap="round"
          style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatedCounter target={score} color={color} />
        <span className="text-[10px] text-neutral-400 font-bold mt-0.5">{t(UI_TEXT.outOf100, "en")}</span>
      </div>
    </div>
  );
}

function AnimatedCounter({ target, color }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      setCount(Math.round(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="font-display text-5xl font-extrabold leading-none" style={{ color, textShadow: `0 0 10px ${color}30` }}>
      {count}
    </span>
  );
}

/**
 * Section score bar with glowing gradient fill and dynamic colors.
 */
function SectionBar({ section, score, maxScore, lang, delay = 0 }) {
  const pct = (score / maxScore) * 100;
  const barColor = pct <= 35 ? "#EF4444" : pct <= 65 ? "#F59E0B" : pct <= 85 ? "#3B82F6" : "#10B981";
  const Icon = LucideIcons[section.icon] || LucideIcons.HelpCircle;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-neutral-400" />
          <span className="text-xs sm:text-sm font-semibold text-neutral-300">{t(section.name, lang)}</span>
        </div>
        <span className="text-xs sm:text-sm font-bold" style={{ color: barColor }}>
          {score}/{maxScore}
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden border border-white/5">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: barColor, boxShadow: `0 0 6px ${barColor}50` }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay: 0.4 + delay * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/**
 * Results page — score ring, breakdowns, advice, and course recommendations in glowing dark mode.
 */
export default function SurveyResults({ lang, results, onRetake, onClose }) {
  const { totalScore, sectionScores } = results;
  const tier = getTier(totalScore);
  const recommendedCourses = getRecommendedCourses(sectionScores);

  const handleShare = () => {
    const text = `I just completed a Financial Health Checkup and discovered areas where I can improve my money management. Take yours here: https://ortusfinance.in\n\n— Powered by Ortus Finance`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  // 1. Dynamic Score Interpretation Block
  const interpretationText = totalScore >= 76
    ? "You're performing well financially and are in a prime position to optimize your portfolio and focus on aggressive wealth creation."
    : totalScore >= 51
    ? "You have a solid foundation, but there are still critical gaps limiting your long-term wealth building and investment potential."
    : "Your score indicates several critical financial risks that should be addressed as soon as possible. Focus on stabilizing monthly expenses and building an emergency fund.";

  // 5. Score-Change Framing Calculations
  let nextTierInfo = null;
  if (totalScore <= 25) {
    nextTierInfo = { points: 26 - totalScore, name: "Building Foundations", color: "#EA580C" };
  } else if (totalScore <= 50) {
    nextTierInfo = { points: 51 - totalScore, name: "On the Right Track", color: "#2563EB" };
  } else if (totalScore <= 75) {
    nextTierInfo = { points: 76 - totalScore, name: "Financially Fit!", color: "#16A34A" };
  }

  // 3. Surface Biggest Weakness First
  const weakestSection = SECTIONS.reduce((weakest, section) => {
    const current = sectionScores[section.id] || { score: 0, maxScore: section.maxScore };
    const currentPct = current.score / current.maxScore;
    if (!weakest) return { section, pct: currentPct };
    return currentPct < weakest.pct ? { section, pct: currentPct } : weakest;
  }, null)?.section;

  // 14. Show Strengths Section
  const strengths = SECTIONS.filter(section => {
    const scoreInfo = sectionScores[section.id] || { score: 0, maxScore: section.maxScore };
    const pct = scoreInfo.score / scoreInfo.maxScore;
    return pct >= 0.7; // Strong performance: 70% or more
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className="relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl shadow-blue-500/10"
    >
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full
                     bg-white/5 border border-white/10 text-neutral-400 backdrop-blur transition-all duration-200
                     hover:bg-white/10 hover:text-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      )}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Score Header */}
      <div className="relative px-8 pt-8 pb-8 text-center text-white border-b border-white/5 bg-gradient-to-b from-neutral-900/40 to-transparent rounded-t-[inherit]">
        <p className="text-[10px] font-bold uppercase tracking-[4px] text-blue-400 mb-5">
          {t(UI_TEXT.yourScore, lang)}
        </p>

        {/* Pulsing Score Ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
        >
          <ScoreRing score={totalScore} color={tier.color} />
        </motion.div>

        {/* 2. Percentile Comparison */}
        <div className="mt-3">
          <span className="text-xs text-neutral-400 font-medium">
            Higher than <span className="text-white font-bold">{Math.round(totalScore * 0.8 + 10)}%</span> of assessment participants
          </span>
        </div>

        {/* Tier Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-4 flex items-center justify-center gap-2"
        >
          <Award className="h-5 w-5" style={{ color: tier.color, filter: `drop-shadow(0 0 4px ${tier.color}50)` }} />
          <span className="text-lg font-extrabold" style={{ color: tier.color }}>
            {t(TIER_LABELS[tier.id], lang)}
          </span>
        </motion.div>

        {/* 5. Score-Change Framing */}
        {nextTierInfo ? (
          <div className="text-xs text-neutral-500 mt-1.5 font-medium">
            You are <span className="text-white font-bold">{nextTierInfo.points} points</span> away from <span style={{ color: nextTierInfo.color }} className="font-bold">{nextTierInfo.name}</span>
          </div>
        ) : (
          <div className="text-xs text-emerald-400 mt-1.5 font-bold flex items-center justify-center gap-1">
            <Check className="h-3.5 w-3.5 text-emerald-400" />
            Top Tier Financial Fitness Achieved!
          </div>
        )}

        {/* 1. Dynamic Score Interpretation Block */}
        <div className="mt-4 max-w-xs mx-auto text-xs text-neutral-300 bg-white/5 border border-white/5 rounded-2xl px-4 py-3 leading-relaxed">
          {interpretationText}
        </div>

        {/* 13. Downloadable Report Perception Checklist */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 mt-5 text-[9px] text-neutral-500 font-bold uppercase tracking-wider">
          <span className="flex items-center gap-1 text-emerald-500"><Check className="h-3 w-3 shrink-0 text-emerald-400" /> Assessment Complete</span>
          <span className="flex items-center gap-1 text-emerald-500"><Check className="h-3 w-3 shrink-0 text-emerald-400" /> Score Calculated</span>
          <span className="flex items-center gap-1 text-emerald-500"><Check className="h-3 w-3 shrink-0 text-emerald-400" /> Recommendations Ready</span>
        </div>
      </div>

      {/* 3. Surface Weakest Section First */}
      {weakestSection && (
        <div className="mx-6 mt-6 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 flex gap-3 items-start">
          <div className="rounded-full bg-red-500/10 p-2 text-red-400 shrink-0 mt-0.5">
            <AlertCircle className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-red-400 mb-0.5 tracking-wider">
              Biggest Opportunity
            </div>
            <div className="text-white font-bold text-sm">
              {t(weakestSection.name, lang)}
            </div>
            <div className="text-xs text-neutral-300 mt-1 leading-normal">
              This is currently your lowest-scoring area. Focused improvements here will have the highest impact on your overall financial health.
            </div>
          </div>
        </div>
      )}

      {/* 14. Top Strengths List */}
      {strengths.length > 0 && (
        <div className="mx-6 mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex gap-3 items-start">
          <div className="rounded-full bg-emerald-500/10 p-2 text-emerald-400 shrink-0 mt-0.5">
            <Award className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] uppercase font-bold text-emerald-400 mb-1 tracking-wider">
              Your Top Strengths
            </div>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {strengths.map(s => (
                <span key={s.id} className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                  <Check className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                  {t(s.name, lang)}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Breakdown */}
      <div className="px-6 py-6 border-b border-white/5 bg-neutral-900/10">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
          {t(UI_TEXT.breakdown, lang)}
        </h3>
        {SECTIONS.map((section, i) => (
          <SectionBar
            key={section.id}
            section={section}
            score={sectionScores[section.id]?.score || 0}
            maxScore={section.maxScore}
            lang={lang}
            delay={i}
          />
        ))}
      </div>

      {/* Advice */}
      <div className="px-6 py-6 border-b border-white/5">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 mb-3.5">
          {t(UI_TEXT.advice, lang)}
        </h3>
        <div className="space-y-3">
          {SECTIONS.map((section, i) => {
            const { score, maxScore } = sectionScores[section.id] || { score: 0, maxScore: section.maxScore };
            const adviceText = getSectionAdvice(section.id, score, maxScore, lang);
            const level = getAdviceLevel(score, maxScore);
            const isWeak = level === "low";
            const borderCol = isWeak ? "border-red-500 bg-red-500/5 text-red-200" : level === "mid" ? "border-amber-500 bg-amber-500/5 text-amber-200" : "border-emerald-500 bg-emerald-500/5 text-emerald-200";
            const Icon = LucideIcons[section.icon] || LucideIcons.HelpCircle;

            // 6. Split sentences to form actionable checklists rather than plain paragraphs
            const sentences = adviceText.split(". ").filter(s => s.trim());

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + i * 0.08 }}
                className={`rounded-2xl p-4 text-xs leading-relaxed border-l-4 ${borderCol}`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 opacity-80" />
                    <span className="font-bold uppercase tracking-wide text-[10px] opacity-90">{t(section.name, lang)}</span>
                  </div>
                  {/* 7. Actionable Priority Area Badge */}
                  {isWeak && (
                    <span className="inline-flex rounded-full bg-red-500/10 px-2 py-0.5 text-[9px] font-bold text-red-400 border border-red-500/20 uppercase tracking-wider shrink-0">
                      Priority Area
                    </span>
                  )}
                </div>
                
                {/* Actionable items checklist */}
                <div className="space-y-1.5 mt-2">
                  {sentences.map((sentence, idx) => {
                    const cleanSentence = sentence.trim().endsWith(".") ? sentence.trim() : `${sentence.trim()}.`;
                    return (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] opacity-90 leading-relaxed text-neutral-300">
                        <div className={`shrink-0 mt-0.5 rounded-full p-0.5 ${isWeak ? 'bg-red-500/10 text-red-400' : level === 'mid' ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                          <Check className="h-2.5 w-2.5 shrink-0" />
                        </div>
                        <span>{cleanSentence}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Recommendations */}
      {recommendedCourses.length > 0 && (
        <div className="px-6 py-6 border-b border-white/5 bg-neutral-900/10">
          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
            {t(UI_TEXT.recommendedCourses, lang)}
          </h3>

          {/* 8. Recommendations Bridge */}
          <div className="mb-4 rounded-xl bg-blue-500/5 border border-blue-500/20 p-3.5 flex gap-2.5 items-start">
            <BookOpen className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-300 leading-normal">
              Based on your results, we&apos;ve selected the most relevant learning resources to help close your critical financial gaps.
            </p>
          </div>

          <div className="space-y-3.5">
            {recommendedCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-neutral-900 p-5 hover:border-blue-500/30 transition-all duration-300 shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-0.5 text-[9px] font-bold text-blue-400 border border-blue-500/20">
                        {course.type}
                      </span>
                      <span className="text-[9px] text-neutral-500 flex items-center gap-1 font-bold">
                        <Clock className="h-2.5 w-2.5" /> {course.duration}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{course.name}</h4>
                    <p className="text-[10px] sm:text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">{course.description}</p>
                    
                    {/* 9. Course Relevance Badges */}
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[9px] font-bold text-amber-400 border border-amber-500/20">
                        🎯 Helps improve: {course.relevantSections.map(s => SECTION_NAMES[s]).join(" & ")}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-3">
                      <User className="h-3 w-3 text-neutral-500" />
                      <span className="text-[10px] font-bold text-neutral-500">{course.instructor}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-sm sm:text-base font-extrabold ${course.price === 0 ? "text-emerald-400" : "text-white"}`}>
                      {course.priceLabel}
                    </div>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-bold text-white transition hover:bg-blue-700 cursor-pointer shadow-lg shadow-blue-600/20 border border-blue-500/30"
                    >
                      {t(UI_TEXT.enrollNow, lang)}
                      <ExternalLink className="h-2.5 w-2.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 11. Consultation CTA Block */}
      <div className="mx-6 mb-4 mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 relative overflow-hidden flex flex-col sm:flex-row gap-4 sm:items-center justify-between shadow-lg shadow-blue-500/5">
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
        <div className="flex-1">
          <div className="font-bold text-sm text-white flex items-center gap-1.5">
            <Award className="h-4 w-4 text-blue-400 animate-pulse" />
            Want a personalized action plan?
          </div>
          <p className="text-[11px] text-neutral-300 mt-1 leading-normal">
            Speak with an Ortus expert advisor for a 1-on-1 financial session tailored specifically to your score.
          </p>
        </div>
        <a
          href="https://elevatebyortusfinance.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-xs font-bold text-white shadow-xl shadow-blue-600/20 transition hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-blue-500/30 text-center shrink-0"
        >
          Book Free Consultation
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {/* Buttons & CTA Hierarchy */}
      <div className="px-6 py-6 space-y-3.5 rounded-b-[inherit]">
        {/* Primary CTA */}
        <a
          href="https://elevatebyortusfinance.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:shadow-2xl hover:scale-[1.01] cursor-pointer border border-blue-500/30 text-center"
        >
          <Award className="h-4 w-4" />
          Book Free Consultation
        </a>

        {/* Secondary CTA */}
        <a
          href="https://courses.ortusfinance.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-xs font-bold text-neutral-300 bg-neutral-900 transition hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5 cursor-pointer text-center"
        >
          <BookOpen className="h-4 w-4" />
          Explore All Courses
        </a>

        {/* Tertiary share & retake options */}
        <div className="flex gap-3 pt-1">
          <button
            onClick={handleShare}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 px-4 py-3 text-[11px] font-bold text-neutral-400 bg-neutral-950 transition hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/5 cursor-pointer"
          >
            <Share2 className="h-3.5 w-3.5 text-emerald-400" />
            {t(UI_TEXT.shareWhatsApp, lang)}
          </button>
          <button
            onClick={onRetake}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 px-4 py-3 text-[11px] font-bold text-neutral-400 bg-neutral-950 transition hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5 text-blue-400" />
            {t(UI_TEXT.retake, lang)}
          </button>
        </div>

        {/* 15. End Screen Retention Progress Tracker */}
        <div className="text-[10px] text-neutral-500 text-center mt-2.5">
          Reassess after 30 days to track your progress and watch your score grow.
        </div>

        <p className="text-center text-[9px] font-bold text-neutral-600 tracking-wider pt-2 uppercase">
          {t(UI_TEXT.poweredBy, lang)}
        </p>
      </div>
    </motion.div>
  );
}
