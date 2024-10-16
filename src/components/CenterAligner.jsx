import React from "react";
import FadeIn from "./FadeIn";

const CenterAligner = ({ children, className }) => {
  return (
    <FadeIn>
      <section
        className={`flex items-center justify-center min-h-[600px] ${className} `}
      >
        <div className="max-w-[1200px] w-full mx-auto">{children}</div>
      </section>
    </FadeIn>
  );
};

export default CenterAligner;
