import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    "black",
    invert ? "text-white hover:text-blue-700" : "text-golden hover:text-black"
  );
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h1
      className={clsx(
        "cursor-pointer sm:text-xl md:text-2xl lg:text-2xl  font-bold duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h1>
  );
};

export default Logo;
