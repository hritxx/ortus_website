import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import TeamSection from "@/components/TeamSection";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        title="Invest with Confidence, Grow with
Assurance "
      >
        <p>
          At{" "}
          <strong className="font-semibold text-blue-800">
            Ortus Finance Private Limited
          </strong>{" "}
          , we are committed to empowering your financial journey with smart,
          compliant, and growth-oriented investment solutions. As a{" "}
          <strong className="font-semibold">
            government-registered private limited company
          </strong>
          ,{""}
          we act as a financial facilitator—helping individuals and businesses
          make informed investment decisions.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 ">
          <p>
            We focus on{" "}
            <strong className="font-semibold">
              structured asset allocation
            </strong>{" "}
            across regulated financial instruments such as equities, mutual
            funds, and other securities, in line with market conditions and
            client risk profiles. Our goal is to deliver consistent and
            sustainable returns while strictly adhering to applicable financial
            laws and regulations.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        {/* <StatList>
          <StatListItem value="450+" label="Clients" />
          <StatListItem value="52" label="Placed clients" />
          <StatListItem value="₹3 Crores+" label="Available Funds" />
        </StatList> */}
      </Container>
      <TeamSection />
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
