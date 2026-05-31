"use client";
import { SURVEY_THEMES } from "./data/themes";

/**
 * Reusable, interactive theme switcher component.
 * Renders curated, professional color dots with active outlines and matching glows.
 */
export default function ThemePicker({ themeId, setThemeId }) {
  const currentTheme = SURVEY_THEMES[themeId] || SURVEY_THEMES.slate;
  const isLight = themeId === "light";

  return (
    <div 
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border shadow-sm transition-all duration-300 backdrop-blur-md select-none
        ${isLight 
          ? "bg-neutral-200/50 border-neutral-300/40" 
          : "bg-black/40 border-white/5"
        }`}
    >
      <span className={`text-[9px] font-bold uppercase tracking-wider ${isLight ? "text-neutral-500" : "text-neutral-400"}`}>
        Theme:
      </span>
      <div className="flex items-center gap-1.5">
        {Object.values(SURVEY_THEMES).map((t) => {
          const isActive = themeId === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setThemeId(t.id)}
              className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 cursor-pointer hover:scale-120 hover:opacity-100 focus:outline-none
                ${isActive 
                  ? "scale-110 opacity-100" 
                  : "opacity-60"
                }`}
              style={{ 
                backgroundColor: t.themeDotColor,
                borderColor: isActive ? (t.id === "light" ? "#404040" : "#ffffff") : "transparent",
                boxShadow: isActive ? `0 0 8px ${t.themeDotColor}80` : "none"
              }}
              title={t.name}
              aria-label={`Switch to ${t.name} theme`}
            />
          );
        })}
      </div>
    </div>
  );
}
