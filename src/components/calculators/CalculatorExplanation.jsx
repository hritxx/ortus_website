/**
 * CalculatorExplanation — renders rich-text explanation from config.
 * Each item can have an optional heading + paragraph text.
 */
export default function CalculatorExplanation({ explanation }) {
  if (!explanation?.length) return null;

  return (
    <section aria-label="Explanation" className="prose prose-slate max-w-none">
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Explanation</h2>
      {explanation.map((block, i) => (
        <div key={i} className="mb-4">
          {block.heading && (
            <h3 className="text-lg font-bold text-slate-700 mb-2">
              {block.heading}
            </h3>
          )}
          <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
            {block.text}
          </p>
        </div>
      ))}
    </section>
  );
}
