"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Lock, User, Phone, Mail, ArrowRight, Loader2, Check, X } from "lucide-react";
import { UI_TEXT } from "./data/uiText";
import { t } from "./data/languages";
import { getTier } from "./data/scoring";
import ThemePicker from "./ThemePicker";

const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Clean vector flag of India using simple SVG shapes.
 */
function IndianFlagSvg() {
  return (
    <svg width="15" height="10" viewBox="0 0 30 20" className="rounded-sm shrink-0 shadow-sm border border-white/10">
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="6.67" width="30" height="6.67" fill="#FFFFFF" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2" fill="#000080" />
    </svg>
  );
}

/**
 * Validates a single form field and returns an error message or empty string.
 */
function validateField(field, value, lang) {
  if (field === "name" && !value.trim()) {
    return t(UI_TEXT.nameRequired, lang);
  }
  if (field === "phone" && !PHONE_REGEX.test(value)) {
    return t(UI_TEXT.invalidPhone, lang);
  }
  if (field === "email" && value.trim() && !EMAIL_REGEX.test(value)) {
    return t(UI_TEXT.invalidEmail, lang);
  }
  return "";
}

/**
 * Lead-capture form shown after quiz completion, before score reveal.
 * Fully styled dynamically matching selected enterprise theme.
 */
export default function SurveyDetails({ lang, results, onSubmitted, theme, themeId, setThemeId }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const tier = getTier(results.totalScore);
  const isLight = themeId === "light";

  const handleChange = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value, lang) }));
    }
  }, [touched, lang]);

  const handleBlur = useCallback((field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateField(field, form[field], lang),
    }));
  }, [form, lang]);

  const handleSubmit = useCallback(async () => {
    const newErrors = {
      name: validateField("name", form.name, lang),
      phone: validateField("phone", form.phone, lang),
      email: validateField("email", form.email, lang),
    };
    setErrors(newErrors);
    setTouched({ name: true, phone: true, email: true });

    if (Object.values(newErrors).some(Boolean)) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || null,
        totalScore: results.totalScore,
        sectionScores: results.sectionScores,
      };

      const res = await fetch("/api/survey-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      setSubmitted(true);
      setTimeout(() => {
        onSubmitted();
      }, 800);
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }, [form, lang, results, onSubmitted]);

  const isFormValid =
    form.name.trim() &&
    PHONE_REGEX.test(form.phone) &&
    (!form.email.trim() || EMAIL_REGEX.test(form.email));

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className={`relative w-full max-w-lg mx-auto p-12 text-center rounded-3xl border shadow-2xl flex flex-col items-center justify-center min-h-[340px] transition-colors duration-300 ${theme.bg} ${theme.cardBg}`}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
          </svg>
        </motion.div>
        
        <h3 className={`text-xl font-extrabold mb-2 tracking-tight ${isLight ? "text-neutral-900" : "text-white"}`}>
          Details Received!
        </h3>
        <p className={`text-sm animate-pulse ${theme.textMuted}`}>
          Preparing your financial readiness results...
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className={`relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl border shadow-2xl transition-colors duration-300 ${theme.bg} ${theme.cardBg}`}
    >
      {/* Background Orbs */}
      {!isLight && (
        <>
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
        </>
      )}

      {/* Floating Theme Picker */}
      <div className="absolute top-4 left-4 z-20">
        <ThemePicker themeId={themeId} setThemeId={setThemeId} />
      </div>

      {/* Compact Score Teaser Header */}
      <div className={`relative px-6 pt-14 pb-4 text-center border-b bg-gradient-to-b rounded-t-[inherit] ${theme.headerBg}`}>
        {/* Compact lock and blurred score row */}
        <div className="flex items-center justify-center gap-3.5 mb-3.5 max-w-xs mx-auto">
          <div className={`relative w-11 h-11 flex items-center justify-center rounded-xl border shadow-[0_0_15px_rgba(59,130,246,0.08)] ${isLight ? 'bg-neutral-100 border-neutral-300' : 'bg-neutral-900 border-white/10'}`}>
            <span
              className="font-display text-2xl font-extrabold select-none blur-[5px] opacity-40 leading-none animate-pulse"
              style={{ color: tier.color }}
              aria-hidden="true"
            >
              {results.totalScore}
            </span>
            <Lock className={`absolute h-3.5 w-3.5 ${isLight ? 'text-neutral-500' : 'text-white/50'}`} />
          </div>
          <div className="text-left shrink-0">
            <div className={`text-[9px] font-bold uppercase tracking-wider ${theme.textMuted}`}>Potential Rating</div>
            <div className="text-xs font-black blur-[4px] opacity-40 select-none animate-pulse" style={{ color: tier.color }}>{tier.label}</div>
          </div>
        </div>

        {/* Compact Locked Score Headline Block */}
        <div className="space-y-1 max-w-sm mx-auto">
          <div className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold border mb-1 ${theme.badgeAccent}`}>
            Assessment Complete
          </div>
          <h2 className={`font-display text-base sm:text-lg font-extrabold leading-tight ${isLight ? 'text-neutral-900' : 'text-white'}`}>
            See Your Digital Readiness Score
          </h2>
          <p className={`text-[11px] leading-normal max-w-xs mx-auto ${theme.textMuted}`}>
            Discover your overall score, category breakdown, and personalized recommendations.
          </p>
        </div>

        {/* Compact Partial Score Insights Grid with Lucide Icons */}
        <div className={`mt-3.5 grid grid-cols-2 gap-x-4 gap-y-1.5 text-left text-[11px] border rounded-xl p-3 max-w-xs mx-auto transition-colors duration-300 ${isLight ? 'bg-neutral-100/60 border-neutral-200/60 text-neutral-600' : 'bg-white/5 border-white/5 text-neutral-400'}`}>
          <div className="flex items-center gap-1.5 text-emerald-500 font-semibold">
            <Check className="h-3.5 w-3.5 shrink-0" />
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-500 font-semibold">
            <Check className="h-3.5 w-3.5 shrink-0" />
            <span>{Object.keys(results.sectionScores).length} Analyzed</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500 font-medium">
            <Lock className="h-3 w-3 shrink-0" />
            <span>Score Locked</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500 font-medium">
            <Lock className="h-3 w-3 shrink-0" />
            <span>Plan Locked</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 sm:px-8 py-5 space-y-3.5">
        {/* Progress Context */}
        <div className={`text-[11px] text-center font-bold uppercase tracking-wider ${theme.textMutedExtra}`}>
          Final step • takes less than 10 seconds
        </div>

        {/* Name */}
        <FormField
          icon={User}
          label={t(UI_TEXT.nameLabel, lang)}
          value={form.name}
          placeholder={t(UI_TEXT.namePlaceholder, lang)}
          error={touched.name ? errors.name : ""}
          onChange={(v) => handleChange("name", v)}
          onBlur={() => handleBlur("name")}
          autoComplete="name"
          theme={theme}
          isLight={isLight}
        />

        {/* Phone */}
        <FormField
          icon={Phone}
          label={t(UI_TEXT.phoneLabel, lang)}
          value={form.phone}
          placeholder={t(UI_TEXT.phonePlaceholder, lang)}
          error={touched.phone ? errors.phone : ""}
          onChange={(v) => handleChange("phone", v.replace(/\D/g, "").slice(0, 10))}
          onBlur={() => handleBlur("phone")}
          prefix={
            <div className="flex items-center gap-1.5">
              <IndianFlagSvg />
              <span>+91</span>
            </div>
          }
          inputMode="numeric"
          autoComplete="tel"
          helperText="Required to deliver your assessment results."
          theme={theme}
          isLight={isLight}
        />

        {/* Email */}
        <FormField
          icon={Mail}
          label={t(UI_TEXT.emailLabel, lang)}
          value={form.email}
          placeholder={t(UI_TEXT.emailPlaceholder, lang)}
          error={touched.email ? errors.email : ""}
          onChange={(v) => handleChange("email", v)}
          onBlur={() => handleBlur("email")}
          type="email"
          optional
          autoComplete="email"
          theme={theme}
          isLight={isLight}
        />

        {/* Submit error */}
        {submitError && (
          <p className="text-xs text-red-400 text-center bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2">
            {submitError}
          </p>
        )}

        {/* Trust reinforcement */}
        <div className={`flex justify-center gap-4 text-[10px] font-bold uppercase tracking-wider pt-1 ${theme.textMutedExtra}`}>
          <span className="flex items-center gap-1"><Lock className="h-3 w-3" /> Secure</span>
          <span className="flex items-center gap-1"><X className="h-3 w-3" /> No spam</span>
          <span className="flex items-center gap-1"><Check className="h-3 w-3" /> Free report</span>
        </div>

        {/* Submit button */}
        <motion.button
          onClick={handleSubmit}
          disabled={!isFormValid || submitting}
          whileHover={isFormValid && !submitting ? { scale: 1.01, translateY: -1 } : {}}
          whileTap={isFormValid && !submitting ? { scale: 0.99 } : {}}
          className={`flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-3.5
                      text-sm font-bold transition-all duration-300 border focus:outline-none focus-visible:ring-2
                      ${isFormValid && !submitting
                        ? theme.buttonPrimary
                        : (isLight
                            ? "bg-neutral-200 border-neutral-300 text-neutral-400 cursor-not-allowed"
                            : "bg-neutral-900 border-white/5 text-neutral-500 cursor-not-allowed"
                          )
                      }`}
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>{t(UI_TEXT.submitting, lang)}</span>
            </>
          ) : (
            <>
              <span>{t(UI_TEXT.submitDetails, lang)}</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </motion.button>
      </div>

      {/* Footer */}
      <p className={`text-center text-[9px] font-bold tracking-wider pb-4 uppercase ${theme.textMutedExtra}`}>
        {t(UI_TEXT.poweredBy, lang)}
      </p>
    </motion.div>
  );
}

/**
 * Reusable form field with icon, label, optional prefix, and error display.
 */
function FormField({
  icon: Icon,
  label,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
  prefix,
  type = "text",
  inputMode,
  optional = false,
  autoComplete,
  helperText,
  theme,
  isLight,
}) {
  return (
    <motion.div
      animate={error ? { x: [-6, 6, -4, 4, -2, 2, 0] } : {}}
      transition={{ duration: 0.4 }}
      className={optional ? "opacity-75 hover:opacity-100 transition-opacity duration-200" : ""}
    >
      <label className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider mb-1 ${theme.textMuted}`}>
        <Icon className="h-3 w-3" />
        {label}
        {optional && (
          <span className={`ml-1 text-[8px] font-bold px-1.5 py-0.5 rounded-full normal-case tracking-normal ${isLight ? 'bg-neutral-200 text-neutral-600' : 'bg-neutral-800 text-neutral-500'}`}>
            optional
          </span>
        )}
      </label>
      <div className={`flex items-center rounded-xl border transition-all duration-200 ${theme.inputBg}
                       ${error ? "border-red-500/50 bg-red-500/5 focus-within:border-red-500 focus-within:bg-red-500/5" : ""}`}>
        {prefix && (
          <div className={`pl-4 pr-3 border-r text-xs font-bold select-none shrink-0 flex items-center gap-1.5 ${isLight ? 'border-neutral-200 text-neutral-500' : 'border-white/10 text-neutral-400'}`}>
            {prefix}
          </div>
        )}
        <input
          type={type}
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`w-full bg-transparent ${prefix ? "pl-2.5" : "pl-4"} pr-4 py-3 text-xs ${isLight ? 'text-neutral-900' : 'text-white'}
                     placeholder:text-neutral-600 focus:outline-none`}
        />
      </div>
      {error ? (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-[10px] text-red-400 font-semibold pl-1 animate-pulse"
        >
          {error}
        </motion.p>
      ) : (
        helperText && (
          <p className={`mt-1 text-[10px] pl-1 ${theme.textMutedExtra}`}>
            {helperText}
          </p>
        )
      )}
    </motion.div>
  );
}
