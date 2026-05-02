"use client";
/**
 * Section-specific SVG illustrations for the Financial Health Checkup.
 * Line-art style in blue tones with gentle float animation.
 */

const svgBase = "w-full h-full";

export function IncomeIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Wallet */}
      <rect x="25" y="40" width="70" height="45" rx="8" stroke="currentColor" strokeWidth="2.5" opacity="0.8" />
      <path d="M25 55h70" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <rect x="70" y="58" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="79" cy="64" r="2.5" fill="currentColor" opacity="0.5" />
      {/* Coins */}
      <circle cx="38" cy="32" r="8" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <text x="35" y="36" fontSize="10" fill="currentColor" opacity="0.6" fontFamily="sans-serif">₹</text>
      <circle cx="55" cy="28" r="6" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      {/* Arrow up */}
      <path d="M85 35V18m0 0l-6 6m6-6l6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      {/* Growth dots */}
      <circle cx="30" cy="95" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="50" cy="92" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="70" cy="88" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function SpendingIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Cart */}
      <path d="M20 30h10l12 45h46l10-30H42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <circle cx="52" cy="85" r="5" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <circle cx="80" cy="85" r="5" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      {/* Price tag */}
      <rect x="72" y="18" width="28" height="18" rx="4" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <text x="78" y="31" fontSize="10" fill="currentColor" opacity="0.5" fontFamily="sans-serif">₹</text>
      {/* Flow arrows */}
      <path d="M55 50l8-8m0 0l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M63 42v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Coins floating */}
      <circle cx="95" cy="50" r="4" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="15" cy="60" r="3" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

export function EmergencyIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Shield */}
      <path d="M60 15L25 35v25c0 22 15 38 35 45 20-7 35-23 35-45V35L60 15z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" opacity="0.7" />
      {/* Plus/cross */}
      <path d="M60 45v30M45 60h30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Pulse line */}
      <path d="M15 100l20 0 5-10 8 20 6-15 5 5h46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
    </svg>
  );
}

export function DebtIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Credit card */}
      <rect x="20" y="30" width="80" height="50" rx="8" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
      <path d="M20 45h80" stroke="currentColor" strokeWidth="3" opacity="0.3" />
      <rect x="30" y="55" width="25" height="4" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="30" y="63" width="15" height="4" rx="2" fill="currentColor" opacity="0.2" />
      {/* Chain break */}
      <circle cx="78" cy="63" r="6" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="92" cy="63" r="6" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <path d="M84 63h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" strokeDasharray="2 2" />
      {/* Arrow down */}
      <path d="M60 90v15m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      {/* Warning */}
      <path d="M95 20l5 10H90l5-10z" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  );
}

export function SavingsIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Piggy bank body */}
      <ellipse cx="55" cy="65" rx="30" ry="25" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
      {/* Ear */}
      <ellipse cx="38" cy="48" rx="6" ry="8" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      {/* Eye */}
      <circle cx="42" cy="58" r="2.5" fill="currentColor" opacity="0.5" />
      {/* Snout */}
      <ellipse cx="28" cy="65" rx="5" ry="4" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      {/* Coin slot */}
      <path d="M48 40h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      {/* Legs */}
      <path d="M40 88v8M50 88v8M60 88v8M70 88v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      {/* Growth chart */}
      <path d="M80 80l8-15 8-5 8-20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <circle cx="88" cy="65" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="96" cy="60" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="104" cy="40" r="2" fill="currentColor" opacity="0.4" />
      {/* Coin */}
      <circle cx="55" cy="30" r="6" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <text x="52" y="34" fontSize="8" fill="currentColor" opacity="0.4" fontFamily="sans-serif">₹</text>
    </svg>
  );
}

export function GoalsIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={`${svgBase} ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Target circles */}
      <circle cx="60" cy="55" r="35" stroke="currentColor" strokeWidth="2" opacity="0.3" />
      <circle cx="60" cy="55" r="25" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="60" cy="55" r="15" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="60" cy="55" r="5" fill="currentColor" opacity="0.6" />
      {/* Arrow hitting target */}
      <path d="M95 20L63 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
      <path d="M95 20l-12 2 10 10 2-12z" fill="currentColor" opacity="0.5" />
      {/* Flag */}
      <path d="M30 95V100" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <path d="M30 95l15-5-15-5v10z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.3" />
      {/* Stars */}
      <path d="M15 30l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z" fill="currentColor" opacity="0.25" />
      <path d="M100 75l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5 1.5-3z" fill="currentColor" opacity="0.2" />
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
