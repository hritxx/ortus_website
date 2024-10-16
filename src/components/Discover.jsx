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
          We dive deep into the financial markets to conduct thorough{" "}
          <strong className="font-semibold text-neutral-950">research</strong>{" "}
          and analysis, ensuring every investment decision is backed by data and
          insight.
        </p>
        <p>
          Our team of analysts spends weeks staring at charts, pretending to
          understand market trends while frantically Googling buzzwords.
          Meanwhile, our interns scour social media for any hot stock tips from
          influencers.
        </p>
        <p>
          Once the research phase is complete, we compile everything into a
          <strong className="font-semibold text-neutral-950">report</strong>{" "}
          that looks more impressive than it actually is, making sure to
          highlight the &quot;key findings&quot; that justify our
          recommendations — and, of course, our fees.
        </p>
      </div>
    </Section>
  );
};

export default Discover;
