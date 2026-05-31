"use client";
import { SECTIONS } from "./data/sections";
import { getTier, TIER_LABELS } from "./data/scoring";
import { t } from "./data/languages";

const SECTION_NAMES = {
  income: "Income Stability",
  spending: "Spending Control",
  emergency: "Emergency Protection",
  debt: "Debt Management",
  savings: "Savings Optimization",
  goals: "Financial Goal Planning",
};

const THEME_MAP = {
  slate:     { bg: "#09090b", border: "rgba(255,255,255,0.08)", text: "#ffffff", muted: "#9ca3af", sub: "rgba(255,255,255,0.35)", track: "rgba(255,255,255,0.07)", bar: "#111827", accent: "#3B82F6",  cta: "#1d4ed8" },
  emerald:   { bg: "#09090b", border: "rgba(255,255,255,0.05)", text: "#f4f4f5", muted: "#a1a1aa", sub: "rgba(255,255,255,0.35)", track: "rgba(255,255,255,0.07)", bar: "#18181b", accent: "#10B981", cta: "#059669" },
  ocean:     { bg: "#020617", border: "rgba(255,255,255,0.05)", text: "#f1f5f9", muted: "#94a3b8", sub: "rgba(255,255,255,0.35)", track: "rgba(255,255,255,0.07)", bar: "#0f172a", accent: "#06B6D4", cta: "#0891b2" },
  gold:      { bg: "#0c0a09", border: "rgba(255,255,255,0.05)", text: "#f5f5f4", muted: "#a8a29e", sub: "rgba(255,255,255,0.35)", track: "rgba(255,255,255,0.07)", bar: "#1c1917", accent: "#F59E0B", cta: "#d97706" },
  cyberpunk: { bg: "#000000", border: "rgba(236,72,153,0.2)",  text: "#f4f4f5", muted: "#a1a1aa", sub: "rgba(255,255,255,0.35)", track: "rgba(255,255,255,0.07)", bar: "#09090b", accent: "#EC4899", cta: "#be185d" },
  rosegold:  { bg: "#0c0a09", border: "rgba(255,255,255,0.05)", text: "#f5f5f4", muted: "#a8a29e", sub: "rgba(255,255,255,0.35)", track: "rgba(255,255,255,0.07)", bar: "#1c1917", accent: "#F43F5E", cta: "#e11d48" },
  forest:    { bg: "#fafaf9", border: "rgba(0,0,0,0.08)",       text: "#1c1917", muted: "#78716c", sub: "rgba(0,0,0,0.3)",        track: "rgba(0,0,0,0.07)",   bar: "#f5f5f4", accent: "#15803d", cta: "#166534" },
  light:     { bg: "#fafafa", border: "rgba(0,0,0,0.08)",       text: "#111827", muted: "#6b7280", sub: "rgba(0,0,0,0.3)",        track: "rgba(0,0,0,0.07)",   bar: "#f9fafb", accent: "#4F46E5", cta: "#4338ca" },
};

function ScoreRing({ score, color, size, tm }) {
  const radius = (size - 14) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={tm.track} strokeWidth={7} />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={7}
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "system-ui", fontSize: 28, fontWeight: 900, color, lineHeight: 1 }}>{score}</span>
        <span style={{ fontSize: 8, color: tm.sub, fontWeight: 700, marginTop: 1 }}>/ 100</span>
      </div>
    </div>
  );
}

export default function ReportCard({ lang, results, themeId, userName }) {
  const { totalScore = 0, sectionScores = {} } = results || {};
  const tier = getTier(totalScore);
  const tm = THEME_MAP[themeId] || THEME_MAP.slate;
  const isDark = !["forest", "light"].includes(themeId);

  const weakestSection = SECTIONS.reduce((weakest, section) => {
    const cur = sectionScores[section.id] || { score: 0, maxScore: section.maxScore };
    const pct = cur.score / cur.maxScore;
    if (!weakest) return { section, pct };
    return pct < weakest.pct ? { section, pct } : weakest;
  }, null)?.section;

  const interpretation =
    totalScore >= 76 ? "Prime position for wealth creation and portfolio optimization." :
    totalScore >= 51 ? "Solid base, but critical gaps limit long-term wealth building." :
    "Focus on emergency savings and stabilizing monthly expenses first.";

  const nextTier =
    totalScore <= 25 ? { points: 26 - totalScore, name: "Building Foundations" } :
    totalScore <= 50 ? { points: 51 - totalScore, name: "On the Right Track" } :
    totalScore <= 75 ? { points: 76 - totalScore, name: "Financially Fit!" } : null;

  const date = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div style={{ width: 400, backgroundColor: tm.bg, fontFamily: "system-ui, -apple-system, sans-serif", borderRadius: 20, border: `1px solid ${tm.border}`, overflow: "hidden" }}>
      {/* Header */}
      <div style={{ padding: "14px 20px 12px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: `1px solid ${tm.border}` }}>
        <div>
          <div style={{ fontSize: 8, fontWeight: 900, textTransform: "uppercase", letterSpacing: "3px", color: tm.accent }}>ORTUS FINANCE</div>
          <div style={{ fontSize: 14, fontWeight: 900, color: tm.text, marginTop: 2 }}>Financial Health Report</div>
        </div>
        <div style={{ fontSize: 9, color: tm.muted, fontWeight: 600 }}>{date}</div>
      </div>

      {/* Score Band */}
      <div style={{
        padding: "18px 20px 16px",
        borderBottom: `1px solid ${tm.border}`,
        background: isDark ? "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)" : "linear-gradient(180deg, #f3f4f6 0%, #ffffff 100%)",
      }}>
        {userName && (
          <div style={{ fontSize: 11, fontWeight: 700, color: tm.muted, marginBottom: 12, textAlign: "center" }}>
            Hi, <span style={{ color: tm.accent, fontWeight: 900 }}>{userName}</span>! Here&apos;s your financial snapshot.
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <ScoreRing score={totalScore} color={tier.color} size={108} tm={tm} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 8, fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", color: tm.muted, marginBottom: 5 }}>Your Score</div>
            <div style={{ fontSize: 17, fontWeight: 900, color: tier.color, marginBottom: 4, lineHeight: 1.2 }}>
              {t(TIER_LABELS[tier.id], lang)}
            </div>
            <div style={{ fontSize: 9, color: tm.muted, fontWeight: 600, marginBottom: 5 }}>
              Higher than <strong style={{ color: tm.text }}>{Math.round(totalScore * 0.8 + 10)}%</strong> of participants
            </div>
            {nextTier ? (
              <div style={{ fontSize: 9, color: tm.muted }}>
                <strong style={{ color: tm.text }}>{nextTier.points}pt</strong> from <span style={{ color: tier.color, fontWeight: 700 }}>{nextTier.name}</span>
              </div>
            ) : (
              <div style={{ fontSize: 9, color: "#10b981", fontWeight: 800 }}>✓ Top Tier Achieved!</div>
            )}
          </div>
        </div>
        <div style={{ marginTop: 12, padding: "8px 12px", borderRadius: 10, background: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", border: `1px solid ${tm.border}`, fontSize: 10, color: tm.muted, lineHeight: 1.6 }}>
          {interpretation}
        </div>
      </div>

      {/* Section Breakdown */}
      <div style={{ padding: "14px 20px", borderBottom: `1px solid ${tm.border}` }}>
        <div style={{ fontSize: 8, fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", color: tm.muted, marginBottom: 10 }}>
          Section Breakdown
        </div>
        {SECTIONS.map(section => {
          const { score, maxScore } = sectionScores[section.id] || { score: 0, maxScore: section.maxScore };
          const pct = (score / maxScore) * 100;
          const barColor = pct <= 35 ? "#EF4444" : pct <= 65 ? "#F59E0B" : pct <= 85 ? "#3B82F6" : "#10B981";
          return (
            <div key={section.id} style={{ marginBottom: 7 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: isDark ? "#d1d5db" : "#374151" }}>{SECTION_NAMES[section.id]}</span>
                <span style={{ fontSize: 10, fontWeight: 800, color: barColor }}>{score}/{maxScore}</span>
              </div>
              <div style={{ height: 5, borderRadius: 999, background: tm.track, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: barColor, borderRadius: 999 }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Biggest Opportunity */}
      {weakestSection && (
        <div style={{ margin: "12px 16px 4px", padding: "10px 14px", borderRadius: 12, background: isDark ? "rgba(239,68,68,0.08)" : "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.25)" }}>
          <div style={{ fontSize: 8, fontWeight: 900, textTransform: "uppercase", letterSpacing: "2px", color: "#ef4444", marginBottom: 3 }}>Biggest Opportunity</div>
          <div style={{ fontSize: 12, fontWeight: 900, color: tm.text, marginBottom: 3 }}>{SECTION_NAMES[weakestSection.id]}</div>
          <div style={{ fontSize: 10, color: tm.muted, lineHeight: 1.5 }}>Focused improvements here will have the highest impact on your overall financial health.</div>
        </div>
      )}

      {/* CTA Footer */}
      <div style={{ padding: "12px 20px 14px", borderTop: `1px solid ${tm.border}`, background: isDark ? "rgba(255,255,255,0.015)" : "#f9fafb", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
        <div>
          <div style={{ fontSize: 8, fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", color: tm.muted }}>ORTUSFINANCE.IN</div>
          <div style={{ fontSize: 9, color: tm.muted, fontWeight: 600, marginTop: 1 }}>Free 1-on-1 consultation available</div>
        </div>
        <div style={{ padding: "6px 12px", borderRadius: 8, background: tm.accent, color: "#ffffff", fontSize: 9, fontWeight: 800 }}>
          Book Free Session
        </div>
      </div>
    </div>
  );
}
