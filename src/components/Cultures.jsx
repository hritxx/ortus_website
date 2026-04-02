import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-blue-900 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Integrity" invert>
            We operate with complete transparency in every client interaction,
            fee disclosure, and investment recommendation.
          </GridListItem>
          <GridListItem title="Continuous Learning" invert>
            Our team holds NISM certifications and stays updated with evolving
            market regulations and investment strategies.
          </GridListItem>
          <GridListItem title="Client-Centricity" invert>
            Every decision we make is guided by what&apos;s best for our
            clients&apos; long-term financial well-being.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
