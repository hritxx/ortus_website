/**
 * Shared layout for /tools section.
 * Provides consistent wrapper and metadata.
 */
export default function ToolsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {children}
    </div>
  );
}
