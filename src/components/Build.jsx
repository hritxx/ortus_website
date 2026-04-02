import React from "react";
import Section from "./Section";
import imageCharts from "@/images/charts.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Risk Assessment" image={{ src: imageCharts, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our team performs thorough{" "}
          <strong className="font-semibold text-neutral-950">
            risk evaluations{" "}
          </strong>{" "}
          based on market conditions, economic indicators, and client profiles
          to protect your capital and ensure stability.
        </p>
        <p>
          We assess your risk tolerance and investment horizon to recommend
          mutual fund schemes that align with your financial goals, whether
          you&apos;re seeking growth, income, or capital preservation.
        </p>
        <p>
          Regular portfolio reviews help ensure your investments stay on track,
          with clear explanations and actionable insights that empower you to
          make confident decisions.
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
