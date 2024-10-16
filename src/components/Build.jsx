import React from "react";
import Section from "./Section";
import imageCharts from "@/images/charts.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Risk Assessment" image={{ src: imageCharts, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          During the risk assessment phase, we conduct a detailed analysis of
          market volatility, interest rates, and other key factors. This
          analysis, of course, is peppered with enough jargon to make sure you
          nod along without asking too many questions.
        </p>
        <p>
          Every client is assigned a dedicated risk analyst who specializes in
          delivering worst-case scenarios. Their role is to expertly divert your
          attention from potential gains by focusing exclusively on the
          hypothetical losses that could occur in extreme situations.
        </p>
        <p>
          Our team schedules risk review calls at inconvenient times, ensuring
          you are either too distracted or too tired to fully understand the
          results. Afterward, we send you a report full of cryptic graphs and
          percentages that no one outside of a PhD program could decipher,
          giving the illusion of thoroughness.
        </p>
      </div>
      <Blockquote
        author={{
          name: "Warren Buffett",
          role: "Successful Investor of 20TH Century",
        }}
        className="mt-12"
      >
        If you don&apos;t find a way to make money while you sleep, you will
        work until you die.
      </Blockquote>
    </Section>
  );
};

export default Build;
