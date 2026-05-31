"use client";
import { Award, AlertCircle, Check, BookOpen, Clock, User, Target, Wallet, ShoppingCart, Shield, CreditCard, PiggyBank, HelpCircle } from "lucide-react";
import { SECTIONS } from "./data/sections";
import { getTier, TIER_LABELS, getSectionAdvice, getAdviceLevel } from "./data/scoring";
import { getRecommendedCourses } from "./data/courses";
import { UI_TEXT } from "./data/uiText";
import { t } from "./data/languages";

const SECTION_ICONS = { Wallet, ShoppingCart, Shield, CreditCard, PiggyBank, Target, HelpCircle };

const SECTION_NAMES = {
  income: "Income Stability",
  spending: "Spending Control",
  emergency: "Emergency Protection",
  debt: "Debt Management",
  savings: "Savings Optimization",
  goals: "Financial Goal Planning"
};

function StaticScoreRing({ score, color, size = 140 }) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative mx-auto" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth={10} />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={10}
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-5xl font-extrabold leading-none" style={{ color }}>{score}</span>
        <span className="text-[10px] text-neutral-400 font-bold mt-0.5">out of 100</span>
      </div>
    </div>
  );
}

function StaticBar({ section, score, maxScore, lang, isLight }) {
  const pct = (score / maxScore) * 100;
  const barColor = pct <= 35 ? "#EF4444" : pct <= 65 ? "#F59E0B" : pct <= 85 ? "#3B82F6" : "#10B981";
  const Icon = SECTION_ICONS[section.icon] || HelpCircle;

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-neutral-400" />
          <span className={`text-xs font-semibold ${isLight ? "text-neutral-700" : "text-neutral-300"}`}>
            {t(section.name, lang)}
          </span>
        </div>
        <span className="text-xs font-bold" style={{ color: barColor }}>{score}/{maxScore}</span>
      </div>
      <div className={`h-2 w-full rounded-full overflow-hidden border ${isLight ? "bg-neutral-200 border-neutral-300/40" : "bg-white/10 border-white/5"}`}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: barColor }} />
      </div>
    </div>
  );
}

export default function PrintableReport({ lang, results, theme, themeId }) {
  const { totalScore = 0, sectionScores = {} } = results || {};
  const tier = getTier(totalScore);
  const recommendedCourses = getRecommendedCourses(sectionScores);
  const isLight = themeId === "light";

  const interpretationText = totalScore >= 76
    ? "You're performing well financially and are in a prime position to optimize your portfolio and focus on aggressive wealth creation."
    : totalScore >= 51
    ? "You have a solid foundation, but there are still critical gaps limiting your long-term wealth building and investment potential."
    : "Your score indicates several critical financial risks that should be addressed as soon as possible. Focus on stabilizing monthly expenses and building an emergency fund.";

  let nextTierInfo = null;
  if (totalScore <= 25) nextTierInfo = { points: 26 - totalScore, name: "Building Foundations", color: "#EA580C" };
  else if (totalScore <= 50) nextTierInfo = { points: 51 - totalScore, name: "On the Right Track", color: "#2563EB" };
  else if (totalScore <= 75) nextTierInfo = { points: 76 - totalScore, name: "Financially Fit!", color: "#16A34A" };

  const weakestSection = SECTIONS.reduce((weakest, section) => {
    const current = sectionScores[section.id] || { score: 0, maxScore: section.maxScore };
    const currentPct = current.score / current.maxScore;
    if (!weakest) return { section, pct: currentPct };
    return currentPct < weakest.pct ? { section, pct: currentPct } : weakest;
  }, null)?.section;

  const strengths = SECTIONS.filter(section => {
    const info = sectionScores[section.id] || { score: 0, maxScore: section.maxScore };
    return info.score / info.maxScore >= 0.7;
  });

  const reportDate = new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className={`print-page-root hidden print:block ${theme.bg} ${theme.cardBg}`}>
      {/* Print Header */}
      <div className={`px-8 pt-8 pb-5 border-b flex items-center justify-between ${isLight ? "border-neutral-200" : "border-white/10"}`}>
        <div>
          <div className={`text-[10px] font-extrabold uppercase tracking-[4px] ${theme.accent}`}>Ortus Finance</div>
          <div className={`text-xl font-black mt-0.5 ${isLight ? "text-neutral-900" : "text-white"}`}>Financial Health Report</div>
        </div>
        <div className={`text-right text-xs ${theme.textMuted}`}>
          <div className="font-bold">Generated on</div>
          <div>{reportDate}</div>
        </div>
      </div>

      {/* Score Header */}
      <div className={`px-8 py-8 text-center border-b bg-gradient-to-b ${theme.headerBg}`}>
        <p className={`text-[10px] font-extrabold uppercase tracking-[4px] mb-5 ${theme.accent}`}>Your Score</p>

        <StaticScoreRing score={totalScore} color={tier.color} />

        <div className="mt-3.5">
          <span className={`text-xs font-semibold ${theme.textMuted}`}>
            Higher than{" "}
            <span className={`font-black ${isLight ? "text-neutral-900" : "text-white"}`}>
              {Math.round(totalScore * 0.8 + 10)}%
            </span>{" "}
            of assessment participants
          </span>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          <Award className="h-5 w-5" style={{ color: tier.color }} />
          <span className="text-lg font-black" style={{ color: tier.color }}>
            {t(TIER_LABELS[tier.id], lang)}
          </span>
        </div>

        {nextTierInfo ? (
          <div className={`text-xs mt-1.5 font-semibold ${theme.textMuted}`}>
            You are{" "}
            <span className={`font-black ${isLight ? "text-neutral-900" : "text-white"}`}>{nextTierInfo.points} points</span>
            {" "}away from{" "}
            <span style={{ color: nextTierInfo.color }} className="font-extrabold">{nextTierInfo.name}</span>
          </div>
        ) : (
          <div className="text-xs text-emerald-500 mt-1.5 font-bold flex items-center justify-center gap-1.5">
            <Check className="h-4 w-4 text-emerald-500" />
            Top Tier Financial Fitness Achieved!
          </div>
        )}

        <div className={`mt-4 max-w-xs mx-auto text-xs border rounded-2xl px-4 py-3 leading-relaxed
          ${isLight ? "bg-neutral-100/80 border-neutral-200 text-neutral-600" : "bg-white/5 border-white/5 text-neutral-300"}`}
        >
          {interpretationText}
        </div>
      </div>

      {/* Weakest Section */}
      {weakestSection && (
        <div className={`mx-8 mt-6 rounded-2xl border p-4 flex gap-3 items-start print-avoid-break
          ${isLight ? "bg-red-50/50 border-red-200" : "bg-red-500/5 border-red-500/20"}`}
        >
          <div className="rounded-full bg-red-500/10 p-2 text-red-500 shrink-0 mt-0.5">
            <AlertCircle className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-red-500 mb-0.5 tracking-wider">Biggest Opportunity</div>
            <div className={`font-black text-sm ${isLight ? "text-neutral-900" : "text-white"}`}>
              {t(weakestSection.name, lang)}
            </div>
            <div className={`text-xs mt-1 leading-normal ${isLight ? "text-neutral-600" : "text-neutral-300"}`}>
              This is currently your lowest-scoring area. Focused improvements here will have the highest impact on your overall financial health.
            </div>
          </div>
        </div>
      )}

      {/* Strengths */}
      {strengths.length > 0 && (
        <div className={`mx-8 mt-4 rounded-2xl border p-4 flex gap-3 items-start print-avoid-break
          ${isLight ? "bg-emerald-50/50 border-emerald-200" : "bg-emerald-500/5 border-emerald-500/20"}`}
        >
          <div className="rounded-full bg-emerald-500/10 p-2 text-emerald-500 shrink-0 mt-0.5">
            <Award className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] uppercase font-bold text-emerald-500 mb-1 tracking-wider">Your Top Strengths</div>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {strengths.map(s => (
                <span key={s.id} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold border
                  ${isLight ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"}`}
                >
                  <Check className="h-2.5 w-2.5 text-emerald-500 shrink-0" />
                  {t(s.name, lang)}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Breakdown */}
      <div className={`px-8 py-6 border-b mt-6 ${isLight ? "bg-neutral-100/30 border-neutral-200" : "bg-neutral-900/10 border-white/5"}`}>
        <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 ${theme.textMuted}`}>
          {t(UI_TEXT.breakdown, lang)}
        </h3>
        {SECTIONS.map(section => (
          <StaticBar
            key={section.id}
            section={section}
            score={sectionScores[section.id]?.score || 0}
            maxScore={section.maxScore}
            lang={lang}
            isLight={isLight}
          />
        ))}
      </div>

      {/* Advice */}
      <div className={`px-8 py-6 border-b ${isLight ? "border-neutral-200" : "border-white/5"}`}>
        <h3 className={`text-xs font-bold uppercase tracking-wider mb-3.5 ${theme.textMuted}`}>
          {t(UI_TEXT.advice, lang)}
        </h3>
        <div className="space-y-3">
          {SECTIONS.map(section => {
            const { score, maxScore } = sectionScores[section.id] || { score: 0, maxScore: section.maxScore };
            const adviceText = getSectionAdvice(section.id, score, maxScore, lang);
            const level = getAdviceLevel(score, maxScore);
            const isWeak = level === "low";
            const borderCol = isLight
              ? (isWeak ? "border-red-500 bg-red-50/50 text-red-950" : level === "mid" ? "border-amber-500 bg-amber-50/50 text-amber-950" : "border-emerald-500 bg-emerald-50/50 text-emerald-950")
              : (isWeak ? "border-red-500 bg-red-500/5 text-red-200" : level === "mid" ? "border-amber-500 bg-amber-50/5 text-amber-200" : "border-emerald-500 bg-emerald-50/5 text-emerald-200");
            const Icon = SECTION_ICONS[section.icon] || HelpCircle;
            const sentences = adviceText.split(". ").filter(s => s.trim());

            return (
              <div key={section.id} className={`rounded-2xl p-4 text-xs leading-relaxed border-l-4 print-avoid-break ${borderCol}`}>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 opacity-80" />
                    <span className="font-extrabold uppercase tracking-wide text-[10px] opacity-90">{t(section.name, lang)}</span>
                  </div>
                  {isWeak && (
                    <span className="inline-flex rounded-full bg-red-500/10 px-2 py-0.5 text-[9px] font-extrabold text-red-500 border border-red-500/20 uppercase tracking-wider shrink-0">
                      Priority Area
                    </span>
                  )}
                </div>
                <div className="space-y-1.5 mt-2">
                  {sentences.map((sentence, idx) => {
                    const clean = sentence.trim().endsWith(".") ? sentence.trim() : `${sentence.trim()}.`;
                    return (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] opacity-90 leading-relaxed">
                        <div className={`shrink-0 mt-0.5 rounded-full p-0.5
                          ${isLight
                            ? (isWeak ? "bg-red-100 text-red-600" : level === "mid" ? "bg-amber-100 text-amber-600" : "bg-emerald-100 text-emerald-600")
                            : (isWeak ? "bg-red-500/10 text-red-400" : level === "mid" ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400")
                          }`}
                        >
                          <Check className="h-2.5 w-2.5 shrink-0" />
                        </div>
                        <span className={isLight ? "text-neutral-700 font-medium" : "text-neutral-300"}>{clean}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Courses */}
      {recommendedCourses.length > 0 && (
        <div className={`px-8 py-6 border-b ${isLight ? "bg-neutral-100/30 border-neutral-200" : "bg-neutral-900/10 border-white/5"}`}>
          <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 ${theme.textMuted}`}>
            {t(UI_TEXT.recommendedCourses, lang)}
          </h3>
          <div className={`mb-4 rounded-xl border p-3.5 flex gap-2.5 items-start ${theme.accentBg}`}>
            <BookOpen className={`h-4 w-4 shrink-0 mt-0.5 ${theme.accent}`} />
            <p className={`text-xs leading-normal font-semibold ${isLight ? "text-indigo-900" : "text-blue-300"}`}>
              Based on your results, we&apos;ve selected the most relevant learning resources to help close your critical financial gaps.
            </p>
          </div>
          <div className="space-y-4">
            {recommendedCourses.map(course => (
              <div key={course.id} className={`rounded-2xl border p-5 flex flex-col gap-3 print-avoid-break
                ${isLight ? "bg-white border-neutral-200/80" : "bg-neutral-900/60 border-white/5"}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold border ${theme.badgeAccent}`}>{course.type}</span>
                    <span className="text-[10px] text-neutral-500 flex items-center gap-1 font-bold">
                      <Clock className="h-3 w-3" /> {course.duration}
                    </span>
                  </div>
                  <div className={`text-base font-extrabold ${course.price === 0 ? "text-emerald-400" : (isLight ? "text-neutral-900" : "text-white")}`}>
                    {course.priceLabel}
                  </div>
                </div>
                <div>
                  <h4 className={`text-sm font-black leading-snug ${isLight ? "text-neutral-900" : "text-white"}`}>{course.name}</h4>
                  <p className={`text-xs leading-relaxed mt-1 ${theme.textMuted}`}>{course.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-bold border ${theme.badgeSuccess}`}>
                    <Target className="h-3.5 w-3.5 shrink-0" />
                    Helps improve: {course.relevantSections.map(s => SECTION_NAMES[s]).join(" & ")}
                  </span>
                </div>
                <div className={`flex items-center justify-between gap-4 pt-3 border-t ${isLight ? "border-neutral-100" : "border-white/5"}`}>
                  <div className="flex items-center gap-1.5 text-neutral-500">
                    <User className="h-3.5 w-3.5" />
                    <span className="text-[11px] font-semibold">{course.instructor}</span>
                  </div>
                  <span className={`text-[10px] font-semibold ${theme.textMuted}`}>{course.url}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Consultation CTA */}
      <div className={`mx-8 mb-6 mt-6 rounded-2xl border p-5 flex flex-col gap-3 print-avoid-break
        ${isLight ? "bg-indigo-50/50 border-indigo-200/60" : "bg-blue-500/5 border-blue-500/20"}`}
      >
        <div>
          <div className={`font-extrabold text-sm flex items-center gap-1.5 ${isLight ? "text-indigo-900" : "text-white"}`}>
            <Award className={`h-4 w-4 ${theme.accent}`} />
            Want a personalized action plan?
          </div>
          <p className={`text-[11px] mt-1 leading-normal ${isLight ? "text-neutral-600" : "text-neutral-300"}`}>
            Speak with an Ortus expert advisor for a 1-on-1 financial session tailored specifically to your score.
          </p>
        </div>
        <div className={`text-xs font-bold ${theme.accent}`}>
          Book your free consultation at: https://elevate.ortusfinance.in
        </div>
      </div>

      {/* Print Footer */}
      <div className={`text-center text-[9px] font-bold tracking-wider py-6 uppercase border-t
        ${isLight ? "border-neutral-200 text-neutral-400" : "border-white/10 text-neutral-500"}`}
      >
        ortusfinance.in · Powered by Ortus Finance
      </div>
    </div>
  );
}
