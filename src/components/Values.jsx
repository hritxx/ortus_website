import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          At{" "}
          <strong className="font-semibold text-blue-900">ORTUS FINANCE</strong>{" "}
          , our core values are built on trust, transparency, and
          client-centricity, ensuring that every decision we make aligns with
          your financial success
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Every investment recommendation is backed by thorough research and
            data analysis to ensure it aligns with your financial objectives.
          </GridListItem>
          <GridListItem title="Efficient">
            We streamline the investment process so you can focus on your goals,
            not paperwork. Quick onboarding, seamless transactions.
          </GridListItem>
          <GridListItem title="Adaptable">
            Your financial plan evolves as your life does — we adjust strategies
            to match your changing goals and circumstances.
          </GridListItem>
          <GridListItem title="Honest">
            Complete transparency in fees, risks, and expected outcomes. No
            hidden charges, no surprises — just clear communication.
          </GridListItem>
          <GridListItem title="Loyal">
            We build long-term relationships, guiding you through every market
            cycle with consistent support and trusted advice.
          </GridListItem>
          <GridListItem title="Innovative">
            We leverage technology to make investing accessible across Northeast
            India through our mobile app and digital platforms.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
