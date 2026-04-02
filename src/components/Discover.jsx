import React from "react";
import Section from "./Section";
import imageScreen from "@/images/screen.jpg";
// import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section
      title="Research and Analysis"
      image={{ src: imageScreen, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We conduct{" "}
          <strong className="font-semibold text-neutral-950">
            in-depth market research
          </strong>{" "}
          and data-driven analysis to ensure every investment decision is
          well-informed and aligned with current trends.
        </p>
        <p>
          Our NISM-certified team analyzes market conditions, economic
          indicators, and fund performance metrics to identify suitable
          investment opportunities for your portfolio.
        </p>
        <p>
          We compile our findings into comprehensive{" "}
          <strong className="font-semibold text-neutral-950">
            recommendations
          </strong>{" "}
          that are easy to understand, helping you make informed decisions about
          your investments.
        </p>
      </div>
    </Section>
  );
};

export default Discover;
