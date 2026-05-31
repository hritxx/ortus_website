"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Lock, User, Phone, Mail, ArrowRight, Loader2, Check, X } from "lucide-react";
import { UI_TEXT } from "./data/uiText";
import { t } from "./data/languages";
import { getTier } from "./data/scoring";

const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
 * Collects name + phone (required) and email (optional), validates,
 * and POSTs to /api/survey-submit before transitioning to results.
 */
export default function SurveyDetails({ lang, results, onSubmitted }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const tier = getTier(results.totalScore);

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
        className="relative w-full max-w-lg mx-auto p-12 text-center rounded-3xl
                   bg-neutral-950 border border-white/10 shadow-2xl shadow-blue-500/10
                   flex flex-col items-center justify-center min-h-[340px]"
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
        
        <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">
          Details Received!
        </h3>
        <p className="text-sm text-neutral-400 animate-pulse">
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
      className="relative w-full max-w-lg mx-auto overflow-hidden rounded-3xl
                 bg-neutral-950 border border-white/10 shadow-2xl shadow-blue-500/10"
    >
      {/* Background Orbs */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      {/* Compact Score Teaser Header */}
      <div className="relative px-6 pt-5 pb-4 text-center border-b border-white/5
                      bg-gradient-to-b from-neutral-900/40 to-transparent rounded-t-[inherit]">
        {/* Compact lock and blurred score row */}
        <div className="flex items-center justify-center gap-3.5 mb-3.5 max-w-xs mx-auto">
          <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-neutral-900 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.08)]">
            <span
              className="font-display text-2xl font-extrabold select-none blur-[5px] opacity-40 leading-none"
              style={{ color: tier.color }}
              aria-hidden="true"
            >
              {results.totalScore}
            </span>
            <Lock className="absolute h-3.5 w-3.5 text-white/50" />
          </div>
          <div className="text-left shrink-0">
            <div className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider">Potential Rating</div>
            <div className="text-xs font-black blur-[4px] opacity-40 select-none" style={{ color: tier.color }}>{tier.label}</div>
          </div>
        </div>

        {/* Compact Locked Score Headline Block */}
        <div className="space-y-1 max-w-sm mx-auto">
          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-300 border border-blue-500/20 mb-1">
            Assessment Complete
          </div>
          <h2 className="font-display text-base sm:text-lg font-extrabold text-white leading-tight">
            See Your Digital Readiness Score
          </h2>
          <p className="text-[11px] text-neutral-400 leading-normal max-w-xs mx-auto">
            Discover your overall score, category breakdown, and personalized recommendations.
          </p>
        </div>

        {/* Compact Partial Score Insights Grid with Lucide Icons */}
        <div className="mt-3.5 grid grid-cols-2 gap-x-4 gap-y-1.5 text-left text-[11px] text-neutral-400 bg-white/5 border border-white/5 rounded-xl p-3 max-w-xs mx-auto">
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>Completed</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
            <span>{Object.keys(results.sectionScores).length} Analyzed</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500 font-medium">
            <Lock className="h-3 w-3 text-neutral-600 shrink-0" />
            <span>Score Locked</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-500 font-medium">
            <Lock className="h-3 w-3 text-neutral-600 shrink-0" />
            <span>Plan Locked</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 sm:px-8 py-5 space-y-3.5">
        {/* Progress Context */}
        <div className="text-[11px] text-neutral-500 text-center font-semibold">
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
          prefix="🇮🇳 +91"
          inputMode="numeric"
          autoComplete="tel"
          helperText="Required to deliver your assessment results."
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
        />

        {/* Submit error */}
        {submitError && (
          <p className="text-xs text-red-400 text-center bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2">
            {submitError}
          </p>
        )}

        {/* Trust reinforcement */}
        <div className="flex justify-center gap-4 text-[11px] text-neutral-500 font-semibold pt-1">
          <span className="flex items-center gap-1"><Lock className="h-2.5 w-2.5" /> Secure</span>
          <span className="flex items-center gap-1"><X className="h-2.5 w-2.5 text-neutral-500" /> No spam</span>
          <span className="flex items-center gap-1"><Check className="h-2.5 w-2.5 text-neutral-500" /> Free report</span>
        </div>

        {/* Submit button */}
        <motion.button
          onClick={handleSubmit}
          disabled={!isFormValid || submitting}
          whileHover={isFormValid && !submitting ? { scale: 1.01, translateY: -1 } : {}}
          whileTap={isFormValid && !submitting ? { scale: 0.99 } : {}}
          className={`flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-3.5
                      text-sm font-bold transition-all duration-300 border
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                      ${isFormValid && !submitting
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-500/30 text-white shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 cursor-pointer"
                        : "bg-neutral-900 border-white/5 text-neutral-500 cursor-not-allowed"
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
      <p className="text-center text-[9px] font-bold text-neutral-600 tracking-wider pb-4 uppercase">
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
}) {
  return (
    <motion.div
      animate={error ? { x: [-6, 6, -4, 4, -2, 2, 0] } : {}}
      transition={{ duration: 0.4 }}
      className={optional ? "opacity-75 hover:opacity-100 transition-opacity duration-200" : ""}
    >
      <label className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
        <Icon className="h-3 w-3" />
        {label}
        {optional && (
          <span className="ml-1 text-[8px] font-bold text-neutral-600 bg-neutral-800 px-1.5 py-0.5 rounded-full normal-case tracking-normal">
            optional
          </span>
        )}
      </label>
      <div className={`flex items-center rounded-xl border bg-white/5 transition-all duration-200
                       focus-within:border-blue-500/50 focus-within:bg-blue-500/5
                       focus-within:shadow-[0_0_12px_rgba(59,130,246,0.08)]
                       ${error ? "border-red-500/50 bg-red-500/5" : "border-white/10"}`}>
        {prefix && (
          <div className="pl-4 pr-3 border-r border-white/10 text-xs font-bold text-neutral-400 select-none shrink-0 flex items-center gap-1">
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
          className={`w-full bg-transparent ${prefix ? "pl-2" : "pl-4"} pr-4 py-3 text-xs text-white
                     placeholder:text-neutral-600 focus:outline-none`}
        />
      </div>
      {error ? (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-[10px] text-red-400 font-semibold pl-1"
        >
          {error}
        </motion.p>
      ) : (
        helperText && (
          <p className="mt-1 text-[10px] text-neutral-500 pl-1">
            {helperText}
          </p>
        )
      )}
    </motion.div>
  );
}
