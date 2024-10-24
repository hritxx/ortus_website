import clsx from "clsx";
import Link from "next/link";

const Button = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 sm:text-sm md:text-lg lg:text-lg font-semibold transition ",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-blue-900 text-white hover:bg-blue-800"
  );
  let inner = <span>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
