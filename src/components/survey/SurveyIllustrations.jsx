"use client";
/**
 * Enterprise-grade, beautiful, multi-layered SVG illustrations with glowing filters 
 * and self-contained CSS keyframe animations for Ortus Financial Survey.
 */

const glowFilter = (
  <defs>
    <filter id="svg-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#60A5FA" />
      <stop offset="100%" stopColor="#2563EB" />
    </linearGradient>
    <linearGradient id="emerald-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#34D399" />
      <stop offset="100%" stopColor="#059669" />
    </linearGradient>
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FBBF24" />
      <stop offset="100%" stopColor="#D97706" />
    </linearGradient>
    <linearGradient id="rose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#F87171" />
      <stop offset="100%" stopColor="#DC2626" />
    </linearGradient>
  </defs>
);

const svgBase = "w-full h-full drop-shadow-md select-none transition-transform duration-500 hover:scale-105";

export function IncomeIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes float-coin {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        @keyframes pulse-wallet {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .anim-coin1 { animation: float-coin 3.5s ease-in-out infinite; transform-origin: 40px 30px; }
        .anim-coin2 { animation: float-coin 4s ease-in-out infinite 1s; transform-origin: 80px 25px; }
        .anim-wallet { animation: pulse-wallet 5s ease-in-out infinite; transform-origin: 60px 65px; }
      `}</style>
      {glowFilter}
      
      {/* Background Glow */}
      <circle cx="60" cy="60" r="35" fill="url(#blue-grad)" opacity="0.08" filter="url(#svg-glow)" />

      <g className="anim-wallet">
        {/* Wallet Body */}
        <rect x="25" y="45" width="70" height="45" rx="10" stroke="url(#blue-grad)" strokeWidth="2.5" fill="#171717" fillOpacity="0.8" filter="url(#svg-glow)" />
        {/* Wallet Flap */}
        <path d="M65 45h25v22c0 3-2 5-5 5H65V45z" fill="#262626" stroke="url(#blue-grad)" strokeWidth="2" />
        <circle cx="78" cy="58" r="3" fill="#60A5FA" />
      </g>

      {/* Floating Holographic Coins */}
      <g className="anim-coin1" filter="url(#svg-glow)">
        <circle cx="42" cy="28" r="9" stroke="url(#gold-grad)" strokeWidth="2" fill="#171717" fillOpacity="0.9" />
        <text x="37" y="32" fontSize="12" fontWeight="bold" fill="#FBBF24" fontFamily="sans-serif">₹</text>
      </g>
      <g className="anim-coin2" filter="url(#svg-glow)">
        <circle cx="82" cy="22" r="7" stroke="url(#blue-grad)" strokeWidth="1.8" fill="#171717" fillOpacity="0.9" />
        <text x="79" y="25" fontSize="9" fontWeight="bold" fill="#60A5FA" fontFamily="sans-serif">₹</text>
      </g>
    </svg>
  );
}

export function SpendingIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes flow-cart {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(6px); }
        }
        @keyframes float-tag {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-4px) rotate(5deg); }
        }
        .anim-cart { animation: flow-cart 4s ease-in-out infinite; }
        .anim-tag { animation: float-tag 3s ease-in-out infinite; transform-origin: 85px 25px; }
      `}</style>
      {glowFilter}

      {/* Background Glow */}
      <circle cx="60" cy="60" r="35" fill="url(#rose-grad)" opacity="0.06" filter="url(#svg-glow)" />

      <g className="anim-cart">
        {/* Shopping Cart */}
        <path d="M20 32h12l10 38h42l10-26H46" stroke="url(#rose-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#svg-glow)" />
        {/* Wheels */}
        <circle cx="48" cy="80" r="6" stroke="url(#rose-grad)" strokeWidth="2" fill="#171717" />
        <circle cx="78" cy="80" r="6" stroke="url(#rose-grad)" strokeWidth="2" fill="#171717" />
      </g>

      {/* Hanging Premium Price Tag */}
      <g className="anim-tag" filter="url(#svg-glow)">
        <rect x="75" y="16" width="26" height="18" rx="4" transform="rotate(10 75 16)" stroke="url(#gold-grad)" strokeWidth="2" fill="#171717" />
        <circle cx="80" cy="22" r="1.5" fill="#FBBF24" />
        <text x="86" y="29" fontSize="10" fontWeight="bold" fill="#FBBF24" fontFamily="sans-serif">₹</text>
      </g>
    </svg>
  );
}

export function EmergencyIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes pulse-shield {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(52,211,153,0.3)); }
          50% { transform: scale(1.05); filter: drop-shadow(0 0 8px rgba(52,211,153,0.6)); }
        }
        @keyframes pulse-line {
          0% { strokeDashoffset: 120; }
          100% { strokeDashoffset: 0; }
        }
        .anim-shield { animation: pulse-shield 3.5s ease-in-out infinite; transform-origin: 60px 50px; }
        .anim-pulse { strokeDasharray: 60 60; animation: pulse-line 4s linear infinite; }
      `}</style>
      {glowFilter}

      {/* Background Glow */}
      <circle cx="60" cy="50" r="30" fill="url(#emerald-grad)" opacity="0.08" filter="url(#svg-glow)" />

      {/* High-Tech Shield */}
      <g className="anim-shield" filter="url(#svg-glow)">
        <path d="M60 16L28 32v24c0 18 13 32 32 38 19-6 32-20 32-38V32L60 16z" stroke="url(#emerald-grad)" strokeWidth="2.5" strokeLinejoin="round" fill="#171717" fillOpacity="0.8" />
        <path d="M60 30v26M47 43h26" stroke="url(#emerald-grad)" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* Heartbeat EKG Life Line */}
      <path d="M15 95h22l5-12 6 22 6-16 4 6h47" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="anim-pulse" opacity="0.6" />
    </svg>
  );
}

export function DebtIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes float-card {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-5px) rotate(3deg); }
        }
        @keyframes snap-chain {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg); }
        }
        .anim-card { animation: float-card 4.5s ease-in-out infinite; transform-origin: 60px 45px; }
        .anim-chain { animation: snap-chain 3s ease-in-out infinite; transform-origin: 75px 70px; }
      `}</style>
      {glowFilter}

      {/* Background Glow */}
      <circle cx="60" cy="60" r="35" fill="url(#rose-grad)" opacity="0.06" filter="url(#svg-glow)" />

      {/* Credit Card floating */}
      <g className="anim-card" filter="url(#svg-glow)">
        <rect x="22" y="24" width="76" height="46" rx="8" stroke="url(#rose-grad)" strokeWidth="2.5" fill="#171717" fillOpacity="0.85" />
        {/* Magnet strip */}
        <path d="M22 36h76" stroke="url(#rose-grad)" strokeWidth="2.5" opacity="0.4" />
        {/* Hologram chip */}
        <rect x="32" y="44" width="14" height="10" rx="2" fill="#FBBF24" opacity="0.8" />
      </g>

      {/* Snapped Chain of Debt */}
      <g className="anim-chain" filter="url(#svg-glow)">
        <circle cx="70" cy="80" r="6" stroke="url(#emerald-grad)" strokeWidth="2" fill="#171717" />
        <circle cx="86" cy="80" r="6" stroke="url(#emerald-grad)" strokeWidth="2" fill="#171717" />
        {/* The Snapped Link */}
        <path d="M76 80h4M78 76l4 8" stroke="#34D399" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function SavingsIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes coin-drop {
          0% { transform: translateY(-20px); opacity: 0; }
          30% { opacity: 1; }
          70%, 100% { transform: translateY(18px); opacity: 0; }
        }
        @keyframes pulse-piggy {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .anim-piggy { animation: pulse-piggy 4s ease-in-out infinite; transform-origin: 60px 65px; }
        .anim-drop { animation: coin-drop 3s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045); }
      `}</style>
      {glowFilter}

      {/* Background Glow */}
      <circle cx="60" cy="65" r="30" fill="url(#gold-grad)" opacity="0.08" filter="url(#svg-glow)" />

      {/* Falling Coin */}
      <g className="anim-drop" filter="url(#svg-glow)">
        <circle cx="60" cy="32" r="6" stroke="url(#gold-grad)" strokeWidth="1.5" fill="#171717" />
        <text x="57" y="36" fontSize="9" fontWeight="bold" fill="#FBBF24" fontFamily="sans-serif">₹</text>
      </g>

      {/* Piggy Bank Body */}
      <g className="anim-piggy" filter="url(#svg-glow)">
        <ellipse cx="60" cy="68" rx="26" ry="22" stroke="url(#gold-grad)" strokeWidth="2.5" fill="#171717" fillOpacity="0.8" />
        {/* Snout */}
        <path d="M34 65c-2 0-3 2-3 4s1 4 3 4" stroke="url(#gold-grad)" strokeWidth="2" />
        {/* Ear */}
        <path d="M46 50c-2-6-8-4-8-4s2 8 8 8" stroke="url(#gold-grad)" strokeWidth="2" />
        {/* Eye */}
        <circle cx="46" cy="62" r="2.5" fill="#FBBF24" />
        {/* Slot */}
        <path d="M54 49h12" stroke="url(#gold-grad)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function GoalsIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes float-target {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes draw-arrow {
          0% { transform: translate(15px, -15px); opacity: 0; }
          100% { transform: translate(0, 0); opacity: 1; }
        }
        .anim-target { animation: float-target 5s ease-in-out infinite; transform-origin: 60px 60px; }
        .anim-arrow { animation: draw-arrow 2.5s ease-out infinite; }
      `}</style>
      {glowFilter}

      {/* Background Glow */}
      <circle cx="60" cy="60" r="35" fill="url(#blue-grad)" opacity="0.08" filter="url(#svg-glow)" />

      <g className="anim-target">
        {/* Concentric Target Rings */}
        <circle cx="60" cy="60" r="30" stroke="url(#blue-grad)" strokeWidth="2" fill="#171717" fillOpacity="0.8" filter="url(#svg-glow)" />
        <circle cx="60" cy="60" r="20" stroke="url(#blue-grad)" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="10" stroke="url(#blue-grad)" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="4" fill="#60A5FA" />

        {/* Dynamic Arrow hitting the Center */}
        <g className="anim-arrow" filter="url(#svg-glow)">
          <path d="M90 30L63 57" stroke="url(#gold-grad)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M63 57l6-2-2-6-4 8z" fill="#FBBF24" />
        </g>
      </g>
    </svg>
  );
}

/** Map section IDs to illustration components */
export const SECTION_ILLUSTRATIONS = {
  income: IncomeIllustration,
  spending: SpendingIllustration,
  emergency: EmergencyIllustration,
  debt: DebtIllustration,
  savings: SavingsIllustration,
  goals: GoalsIllustration,
};
