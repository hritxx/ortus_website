'use client';

/**
 * CalculatorInput — renders a single input field based on its config type.
 * Types: currency, percentage, slider, select, radio.
 */

/** Currency input with ₹ prefix */
function CurrencyInput({ config, value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-green-50 text-green-700 text-sm font-bold">
        ₹
      </span>
      <input
        id={config.key}
        type="number"
        min={config.min}
        max={config.max}
        step={config.step}
        value={value}
        onChange={(e) => onChange(config.key, Number(e.target.value))}
        className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 text-right focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
      />
    </div>
  );
}

/** Percentage input with % suffix badge */
function PercentageInput({ config, value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <input
        id={config.key}
        type="number"
        min={config.min}
        max={config.max}
        step={config.step}
        value={value}
        onChange={(e) => onChange(config.key, Number(e.target.value))}
        className="flex-1 rounded-lg border border-slate-300 bg-green-50 px-3 py-2.5 text-sm font-semibold text-slate-800 text-right focus:ring-2 focus:ring-green-400 focus:border-green-400 outline-none transition"
      />
      <span className="text-sm font-semibold text-slate-500">%</span>
    </div>
  );
}

/** Slider with editable number input */
function SliderInput({ config, value, onChange }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <input
          id={config.key}
          type="number"
          min={config.min}
          max={config.max}
          step={config.step}
          value={value}
          onChange={(e) => onChange(config.key, Number(e.target.value))}
          className="w-24 rounded-lg border border-slate-300 bg-green-50 px-3 py-2.5 text-sm font-semibold text-slate-800 text-right focus:ring-2 focus:ring-green-400 outline-none transition"
        />
        {config.unit && (
          <span className="text-xs font-medium text-green-600">
            {config.unit}
          </span>
        )}
      </div>
      <input
        type="range"
        min={config.min}
        max={config.max}
        step={config.step}
        value={value}
        onChange={(e) => onChange(config.key, Number(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
        aria-label={config.label}
      />
    </div>
  );
}

/** Select dropdown */
function SelectInput({ config, value, onChange }) {
  return (
    <select
      id={config.key}
      value={value}
      onChange={(e) => onChange(config.key, e.target.value)}
      className="w-full rounded-lg border border-slate-300 bg-green-50 px-3 py-2.5 text-sm font-semibold text-slate-800 text-right focus:ring-2 focus:ring-green-400 outline-none transition cursor-pointer appearance-none"
    >
      {config.options.map((opt) => (
        <option key={typeof opt === 'string' ? opt : opt.value} value={typeof opt === 'string' ? opt : opt.value}>
          {typeof opt === 'string' ? opt : opt.label}
        </option>
      ))}
    </select>
  );
}

/** Radio button group */
function RadioInput({ config, value, onChange }) {
  return (
    <div className="flex items-center gap-4">
      {config.options.map((opt) => (
        <label
          key={String(opt.value)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            name={config.key}
            checked={value === opt.value}
            onChange={() => onChange(config.key, opt.value)}
            className="w-4 h-4 text-green-500 border-slate-300 focus:ring-green-400"
          />
          <span className="text-sm font-medium text-slate-700">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}

const INPUT_MAP = {
  currency: CurrencyInput,
  percentage: PercentageInput,
  slider: SliderInput,
  select: SelectInput,
  radio: RadioInput,
};

/** Main input row — label + input, handles visibility via showWhen */
export default function CalculatorInput({ config, value, onChange, allValues }) {
  // Conditional visibility
  if (config.showWhen) {
    const { key, value: expected } = config.showWhen;
    if (allValues[key] !== expected) return null;
  }

  const InputComponent = INPUT_MAP[config.type];
  if (!InputComponent) return null;

  return (
    <div className="flex items-center justify-between py-4 px-4 border-b border-slate-100 last:border-b-0">
      <label
        htmlFor={config.key}
        className="text-sm font-semibold text-slate-700 flex items-center gap-1 max-w-[50%]"
      >
        {config.label}
        {config.tooltip && (
          <span className="text-slate-400 cursor-help" title={config.tooltip}>
            ⓘ
          </span>
        )}
      </label>
      <div className="w-[45%]">
        <InputComponent
          config={config}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
