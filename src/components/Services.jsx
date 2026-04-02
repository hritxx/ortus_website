import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageCharts from "../images/charts.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="At ORTUS FINANCE, we specialize in
turning your financial aspirations into
reality."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our vision is to be a trusted investment facilitator, offering
          accessible financial solutions through expert, transparent, and
          customer-focused service.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageCharts}
                sizes="(min-width:1024px) 41rem,31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/*LIST ITEMS */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Mutual Fund Distribution">
              As an AMFI-registered distributor (ARN-347142), we help you invest
              in SEBI-regulated mutual fund schemes suited to your financial
              goals and risk profile.
            </ListItem>
            <ListItem title="Tax Planning">
              We offer comprehensive tax-saving strategies to help you maximize
              gains while staying compliant with regulatory requirements.
            </ListItem>
            <ListItem title="Financial Education & Awareness">
              We help individuals understand various investment avenues,
              including mutual funds, equities, and fixed income instruments,
              through educational content and awareness programs.
            </ListItem>
            <ListItem title="Risk Management">
              Through structured asset allocation, we minimize risk while
              optimizing returns, ensuring a secure yet profitable investment
              experience.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
