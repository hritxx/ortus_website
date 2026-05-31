"use client";
import { m } from "framer-motion";
import { Moon, Leaf, Compass, Coins, Zap, Gem, Trees, Sun } from "lucide-react";
import { SURVEY_THEMES } from "./data/themes";

const THEME_ICONS = {
  slate: Moon,
  emerald: Leaf,
  ocean: Compass,
  gold: Coins,
  cyberpunk: Zap,
  rosegold: Gem,
  forest: Trees,
  light: Sun,
};

const THEME_SHORT_NAMES = {
  slate: "Slate",
  emerald: "Emerald",
  ocean: "Ocean",
  gold: "Gold",
  cyberpunk: "Neon",
  rosegold: "Rose",
  forest: "Forest",
  light: "Light",
};

/**
 * Individual theme tab button with icon and slide-in label.
 */
function ThemeButton({ theme, isActive, isLight, onClick, pickerId }) {
  const IconComponent = THEME_ICONS[theme.id] || Sun;
  const shortName = THEME_SHORT_NAMES[theme.id] || theme.name;

  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-medium transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1
        ${isActive 
          ? "text-white font-semibold" 
          : isLight 
            ? "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-200/50" 
            : "text-neutral-400 hover:text-white hover:bg-white/5"
        }`}
      title={theme.name}
      aria-label={`Switch to ${theme.name} theme`}
    >
      {isActive && (
        <m.div
          layoutId={`activeThemeBackground-${pickerId}`}
          className="absolute inset-0 rounded-full shadow-sm"
          style={{ 
            backgroundColor: theme.themeDotColor,
            boxShadow: `0 2px 8px ${theme.themeDotColor}40`
          }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-1">
        <IconComponent className="h-3.5 w-3.5 shrink-0" />
        {isActive && (
          <m.span 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="text-[10px] tracking-tight whitespace-nowrap overflow-hidden ml-0.5 font-bold"
          >
            {shortName}
          </m.span>
        )}
      </span>
    </button>
  );
}

/**
 * Reusable, interactive theme switcher component.
 * Renders a premium sliding segmented control using Framer Motion.
 * Uses custom pickerId to prevent AnimatePresence dual-mount layoutId collision flickering.
 */
export default function ThemePicker({ themeId, setThemeId, pickerId = "default" }) {
  const isLight = themeId === "light";

  return (
    <div 
      className={`inline-flex items-center gap-1 p-1 rounded-full border shadow-sm transition-all duration-300 backdrop-blur-md select-none
        ${isLight 
          ? "bg-neutral-100/80 border-neutral-200/80" 
          : "bg-black/60 border-white/10"
        }`}
    >
      <span className={`hidden sm:inline-block text-[9px] font-bold uppercase tracking-wider px-2 ${isLight ? "text-neutral-500" : "text-neutral-400"}`}>
        Theme
      </span>
      <div className="flex items-center gap-0.5">
        {Object.values(SURVEY_THEMES).map((t) => (
          <ThemeButton
            key={t.id}
            theme={t}
            isActive={themeId === t.id}
            isLight={isLight}
            onClick={() => setThemeId(t.id)}
            pickerId={pickerId}
          />
        ))}
      </div>
    </div>
  );
}
