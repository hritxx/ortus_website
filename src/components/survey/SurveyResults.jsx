"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Share2, RotateCcw, ExternalLink, Award, BookOpen, Clock, User } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { SECTIONS } from "./data/sections";
import { getTier, TIER_LABELS, getSectionAdvice, getAdviceLevel } from "./data/scoring";
import { getRecommendedCourses } from "./data/courses";
import { UI_TEXT } from "./data/uiText";
import { t } from "./data/languages";

/**
 * Animated score ring component (SVG).
 */
function ScoreRing({ score, color, size = 160 }) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#f3f4f6" strokeWidth={10} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={10}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <AnimatedCounter target={score} color={color} />
        <span className="text-xs text-neutral-400 mt-0.5">{t(UI_TEXT.outOf100, "en")}</span>
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
    <span className="font-display text-5xl font-bold leading-none" style={{ color }}>
      {count}
    </span>
  );
}

/**
 * Section score bar with animated width.
 */
function SectionBar({ section, score, maxScore, lang, delay = 0 }) {
  const pct = (score / maxScore) * 100;
  const barColor = pct <= 30 ? "#DC2626" : pct <= 60 ? "#EA580C" : pct <= 85 ? "#2563EB" : "#16A34A";
  const Icon = LucideIcons[section.icon] || LucideIcons.HelpCircle;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-neutral-400" />
          <span className="text-sm font-medium text-neutral-700">{t(section.name, lang)}</span>
        </div>
        <span className="text-sm font-bold" style={{ color: barColor }}>
          {score}/{maxScore}
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-neutral-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: barColor }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, delay: 0.5 + delay * 0.15, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

/**
 * Results page — score ring, breakdowns, advice, and course recommendations.
 */
export default function SurveyResults({ lang, results, onRetake }) {
  const { totalScore, sectionScores } = results;
  const tier = getTier(totalScore);

  const recommendedCourses = getRecommendedCourses(sectionScores);

  const handleShare = () => {
    const tierLabel = t(TIER_LABELS[tier.id], lang) || t(TIER_LABELS[tier.id], "en");
    const text = `I scored ${totalScore}/100 on the Financial Health Checkup! ${tierLabel}\n\nCheck your financial health for free: https://ortusfinance.in\n\n— Powered by Ortus Finance`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl bg-white shadow-2xl"
    >
      {/* Score header */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-neutral-900 px-8 pt-8 pb-10 text-center text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />

        <p className="text-xs font-semibold uppercase tracking-[3px] text-blue-300 mb-5">
          {t(UI_TEXT.yourScore, lang)}
        </p>

        <motion.div
          initial={{ scale: 0.8, rotateY: -20 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        >
          <ScoreRing score={totalScore} color={tier.color} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-4 flex items-center justify-center gap-2"
        >
          <Award className="h-5 w-5" style={{ color: tier.color }} />
          <span className="text-lg font-bold" style={{ color: tier.color }}>
            {t(TIER_LABELS[tier.id], lang)}
          </span>
        </motion.div>
      </div>

      {/* Score breakdown */}
      <div className="px-6 pt-6 pb-4">
        <h3 className="text-base font-bold text-neutral-900 mb-4">
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

      {/* Personalized advice */}
      <div className="px-6 pb-4">
        <h3 className="text-base font-bold text-neutral-900 mb-3">
          {t(UI_TEXT.advice, lang)}
        </h3>
        <div className="space-y-2.5">
          {SECTIONS.map((section) => {
            const { score, maxScore } = sectionScores[section.id] || { score: 0, maxScore: section.maxScore };
            const adviceText = getSectionAdvice(section.id, score, maxScore, lang);
            const level = getAdviceLevel(score, maxScore);
            const isWeak = level === "low";
            const Icon = LucideIcons[section.icon] || LucideIcons.HelpCircle;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + SECTIONS.indexOf(section) * 0.1 }}
                className={`rounded-xl p-3.5 text-sm leading-relaxed border-l-4 ${
                  isWeak ? "bg-red-50/80 border-red-400" : level === "mid" ? "bg-amber-50/80 border-amber-400" : "bg-green-50/80 border-green-400"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className="h-3.5 w-3.5 text-neutral-500" />
                  <span className="font-semibold text-neutral-700 text-xs">{t(section.name, lang)}</span>
                </div>
                <p className="text-neutral-600 text-xs leading-relaxed">{adviceText}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Course recommendations */}
      {recommendedCourses.length > 0 && (
        <div className="px-6 pb-4">
          <h3 className="text-base font-bold text-neutral-900 mb-3">
            {t(UI_TEXT.recommendedCourses, lang)}
          </h3>
          <div className="space-y-3">
            {recommendedCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-4
                           hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">
                        {course.type}
                      </span>
                      <span className="text-[10px] text-neutral-400 flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {course.duration}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-neutral-900 leading-snug">{course.name}</h4>
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-2">{course.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <User className="h-3 w-3 text-neutral-400" />
                      <span className="text-xs text-neutral-500">{course.instructor}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-lg font-bold ${course.price === 0 ? "text-green-600" : "text-neutral-900"}`}>
                      {course.priceLabel}
                    </div>
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-xs
                                 font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
                    >
                      {t(UI_TEXT.enrollNow, lang)}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="px-6 pb-6 pt-2 space-y-3">
        <a
          href="https://courses.ortusfinance.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700
                     px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20
                     transition hover:shadow-xl cursor-pointer"
        >
          <BookOpen className="h-4 w-4" />
          {t(UI_TEXT.exploreAll, lang)}
        </a>

        <div className="flex gap-3">
          <button
            onClick={handleShare}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-neutral-200
                       px-4 py-3 text-sm font-semibold text-neutral-600 transition hover:border-green-400
                       hover:text-green-700 hover:bg-green-50 cursor-pointer"
          >
            <Share2 className="h-4 w-4" />
            {t(UI_TEXT.shareWhatsApp, lang)}
          </button>
          <button
            onClick={onRetake}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-neutral-200
                       px-4 py-3 text-sm font-semibold text-neutral-600 transition hover:border-blue-400
                       hover:text-blue-700 hover:bg-blue-50 cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            {t(UI_TEXT.retake, lang)}
          </button>
        </div>

        <p className="text-center text-[10px] text-neutral-400 pt-1">
          {t(UI_TEXT.poweredBy, lang)}
        </p>
      </div>
    </motion.div>
  );
}
