import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
// import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import SipCalculator from "@/components/SipCalculator";
// import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          At{" "}
          <strong className="font-semibold text-blue-800">ORTUS FINANCE</strong>{" "}
          , we create tailored investment strategies based on your financial
          goals and risk profile. Our expert team ensures optimal returns
          through structured asset allocation, with a focus on transparency and
          risk management.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>

      <div className="mt-24 sm:mt-32 lg:mt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl text-center mb-4">
              Plan Your Financial Journey
            </h2>
            <p className="text-lg text-neutral-600 text-center mb-8">
              Use our comprehensive investment calculators to project your returns, so you can execute your strategy with confidence.
            </p>
          </div>
        </div>
        <SipCalculator />
      </div>

      {/* Values */}
      <Values />

      <ContactSection />
    </>
  );
};

export default ProcessPage;
