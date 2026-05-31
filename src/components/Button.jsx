import clsx from "clsx";
import Link from "next/link";

const Button = ({ invert, href, className, children, ...props }) => {
  const isRegister = children === "Register";

  // Register button gets a premium gradient treatment
  if (isRegister) {
    return (
      <a
        href="https://elevatebyortusfinance.in"
        className={clsx(
          className,
          "group relative inline-flex items-center gap-2 rounded-full px-5 py-2 sm:text-sm md:text-base font-bold transition-all duration-300",
          "bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
          "shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35",
          "hover:scale-[1.03] active:scale-[0.98]",
          "border border-blue-400/30"
        )}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {/* Pulsing live dot */}
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span>Register</span>
      </a>
    );
  }

  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 sm:text-sm md:text-lg lg:text-lg font-semibold transition",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-black text-white hover:bg-gray-600"
  );

  // Check if the button text is "Contact Us" and split it for small screens
  let inner;
  if (children === "Contact Us") {
    inner = (
      <>
        <span className="sm:hidden flex flex-col items-center">
          <span>Contact</span>
          <span>Us</span>
        </span>
        <span className="hidden sm:block">{children}</span>
      </>
    );
  } else {
    inner = <span>{children}</span>;
  }

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
