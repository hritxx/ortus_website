import Clients from "@/components/Clients";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";
import { FeaturesSectionDemo } from "@/components/FeatureSection";
import InvestmentPlans from "@/components/InvestmentPlans";
import { StatList, StatListItem } from "@/components/StatList";
import SipCalculator from "@/components/SipCalculator";
import StartupCertificate from "@/components/StartupCertificate";


export default function Home() {
  return (
    <main className="text-black">
      
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Let your financial success shine online with us!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            <strong className="font-semibold text-blue-800">
              ORTUS FINANCE Pvt. Ltd.
            </strong>{" "}
            is co-founded by finance professionals from Tripura who bring{" "}
            <strong className="font-semibold">
              over a decade of expertise{" "}
            </strong>
            in trading, portfolio analysis, and fund management. With a
            background in business administration and hands-on experience in the
            capital markets, our leadership ensures a disciplined, transparent,
            and ethical approach to financial services.
          </p>
          <p className="mt-4 text-xl text-neutral-600">
            We prioritize investor education and assist clients in identifying
            suitable investment avenues through strategic guidance and
            data-backed insights.
          </p>
          {/* <StatList className="mt-12 mb-16">
            <StatListItem value="450+" label="Clients" />
            <StatListItem value="52" label="Placed clients" />
            <StatListItem value="₹3 Crores " label="Available Funds" />
          </StatList> */}

        </FadeIn>
      </Container>
      <FeaturesSectionDemo />
      <StartupCertificate />
      <Services />
      <SipCalculator />
      <InvestmentPlans />
      <Clients />
      <Testimonial />
      <Faq />
      <ContactSection />
    </main>
  );
}
