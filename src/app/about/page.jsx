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
          <strong className="font-semibold text-blue-800">ORTUS FINANCE</strong>{" "}
          , we specialize in turning your financial aspirations into reality.
          Our investment firm pools resources from investors like you,
          strategically allocating funds across the stock market and other
          lucrative securities.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            <strong className="font-semibold text-blue-800">
              ORTUS FINANCE
            </strong>{" "}
            Pvt. Ltd. is a government-registered investment firm led by
            co-founders from Tripura who bring extensive knowledge in business
            administration, along with proven expertise as seasoned traders and
            fund mangers having experience of more than 10 years.
          </p>
          <p>
            With a focus on delivering attractive returns, we offer a structured
            asset allocation that carefully balances risk and growth, ensuring
            your investments are secure and profitable.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="360" label="Clients" />
          {/* <StatListItem value="52" label="Placed clients" /> */}
          <StatListItem value="₹85 Lakhs+ " label="Available Funds" />
        </StatList>
      </Container>
      <TeamSection />
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
