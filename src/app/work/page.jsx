import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

import React from "react";

const WorkPage = () => {
  return (
    <>
      <PageIntro
        eyebrow="Our Work"
        title="Helping You Achieve Your Financial Goals"
      >
        <p>
          At Ortus Finance, we focus on helping individuals and families across
          Northeast India build wealth through disciplined, long-term investing
          in SEBI-regulated mutual fund schemes.
        </p>
      </PageIntro>

      <Container className="mt-16 mb-24">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-950 mb-6">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Mutual Fund Distribution
                </h3>
                <p className="text-neutral-600">
                  As an AMFI-registered distributor (ARN-351189), we help you
                  invest in a wide range of SEBI-regulated mutual fund schemes
                  suited to your goals.
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Financial Education
                </h3>
                <p className="text-neutral-600">
                  We provide educational content and awareness programs to help
                  you understand investment options and make informed decisions.
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Goal-Based Planning
                </h3>
                <p className="text-neutral-600">
                  We help you align your investments with specific financial
                  goals, whether retirement, education, or wealth creation.
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  Ongoing Support
                </h3>
                <p className="text-neutral-600">
                  Regular portfolio reviews and guidance to help you stay on
                  track with your investment journey.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
            </div>

            <div className="mt-12 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-neutral-600 text-center">
                <strong>Disclaimer:</strong> Mutual fund investments are subject
                to market risks. Read all scheme-related documents carefully
                before investing. Past performance is not indicative of future
                returns.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default WorkPage;
