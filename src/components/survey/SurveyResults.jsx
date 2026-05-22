"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Share2, RotateCcw, BookOpen, Clock, User, Award, ExternalLink } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { SECTIONS } from "./data/sections";
import { getTier, TIER_LABELS, getSectionAdvice, getAdviceLevel } from "./data/scoring";
import { getRecommendedCourses } from "./data/courses";
import { UI_TEXT } from "./data/uiText";
import { t } from "./data/languages";

/**
 * Animated score ring component (SVG) — polished with neon glows for the premium dark theme.
 */
function ScoreRing({ score, color, size = 160 }) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={10} />
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
export default function SurveyResults({ lang, results, onRetake }) {
  const { totalScore, sectionScores } = results;
  const tier = getTier(totalScore);
  const recommendedCourses = getRecommendedCourses(sectionScores);

  const handleShare = () => {
    const tierLabel = t(TIER_LABELS[tier.id], lang) || t(TIER_LABELS[tier.id], "en");
    const text = `I scored ${totalScore}/100 on the Ortus Financial Health Checkup! Tier: ${tierLabel}\n\nCheck your money fitness for free: https://ortusfinance.in\n\n— Powered by Ortus Finance`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className="relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl shadow-blue-500/10"
    >
      {/* Background Glowing Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      {/* Score Header */}
      <div className="relative px-8 pt-8 pb-8 text-center text-white border-b border-white/5 bg-gradient-to-b from-neutral-900/40 to-transparent rounded-t-[inherit]">
        <p className="text-[10px] font-bold uppercase tracking-[4px] text-blue-400 mb-5">
          {t(UI_TEXT.yourScore, lang)}
        </p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
        >
          <ScoreRing score={totalScore} color={tier.color} />
        </motion.div>

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
      </div>

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

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + i * 0.08 }}
                className={`rounded-2xl p-4 text-xs leading-relaxed border-l-4 ${borderCol}`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon className="h-3.5 w-3.5 opacity-80" />
                  <span className="font-bold uppercase tracking-wide text-[10px] opacity-90">{t(section.name, lang)}</span>
                </div>
                <p className="opacity-80 text-neutral-300 leading-relaxed text-[11px]">{adviceText}</p>
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
          <div className="space-y-3.5">
            {recommendedCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-neutral-900 p-4.5 hover:border-blue-500/30 transition-all duration-300 shadow-md"
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
                    <div className="flex items-center gap-1.5 mt-2">
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

      {/* Buttons */}
      <div className="px-6 py-6 space-y-3 rounded-b-[inherit]">
        <a
          href="https://courses.ortusfinance.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-blue-600/20 transition hover:shadow-2xl hover:scale-[1.01] cursor-pointer border border-blue-500/30"
        >
          <BookOpen className="h-4 w-4" />
          {t(UI_TEXT.exploreAll, lang)}
        </a>

        <div className="flex gap-3">
          <button
            onClick={handleShare}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 px-4 py-3 text-xs font-bold text-neutral-300 bg-neutral-900 transition hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/5 cursor-pointer"
          >
            <Share2 className="h-4 w-4 text-emerald-400" />
            {t(UI_TEXT.shareWhatsApp, lang)}
          </button>
          <button
            onClick={onRetake}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 px-4 py-3 text-xs font-bold text-neutral-300 bg-neutral-900 transition hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5 cursor-pointer"
          >
            <RotateCcw className="h-4 w-4 text-blue-400" />
            {t(UI_TEXT.retake, lang)}
          </button>
        </div>

        <p className="text-center text-[9px] font-bold text-neutral-600 tracking-wider pt-2 uppercase">
          {t(UI_TEXT.poweredBy, lang)}
        </p>
      </div>
    </motion.div>
  );
}
