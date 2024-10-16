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
          Our vision is to be a trusted investment leader, offering innovative
          solutions and superior returns through expert, transparent, and
          customer-focused management.
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
            <ListItem title="Portfolio Management">
              Our experienced team crafts and manages personalized portfolios
              based on your financial goals, ensuring a balance of growth and
              risk management.
            </ListItem>
            <ListItem title="Tax Planning">
              We offer comprehensive tax-saving strategies to help you maximize
              gains while staying compliant with regulatory requirements.
            </ListItem>
            <ListItem title="Investment Advisory">
              We provide expert advice to guide you through various investment
              opportunities, including stocks, bonds, and other securities,
              tailored to your risk appetite and return expectations.
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
