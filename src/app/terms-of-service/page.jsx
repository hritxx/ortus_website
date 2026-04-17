import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Terms of Service | Ortus Finance",
  description: "Terms and Conditions for using Ortus Finance Pvt. Ltd. services - Mutual Fund Distribution and Financial Services.",
};

const TermsOfServicePage = () => {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of Service">
        <p>
          Last updated: March 17, 2026
        </p>
      </PageIntro>

      <Container className="mt-16 mb-24">
        <FadeIn>
          <div className="prose prose-lg max-w-4xl mx-auto">
            {/* Agreement & Eligibility */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                1. Agreement & Eligibility
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                By engaging with any services provided by Ortus Finance Pvt. Ltd.
                (hereinafter &quot;the Company&quot;), the user (hereinafter &quot;the Client&quot;)
                enters into a legally binding agreement and affirms that they have
                reached the age of majority (18 years) or possess valid parental or
                guardian consent for investment-related activities.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                The Client acknowledges that they have read, understood, and agree to be
                bound by these Terms of Service.
              </p>
            </section>

            {/* Nature of Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                2. Nature of Services
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Ortus Finance Pvt. Ltd. is an AMFI-registered Mutual Fund Distributor
                (ARN-351189). Our services include:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                <li>Distribution of SEBI-regulated mutual fund schemes</li>
                <li>Financial education and awareness programs</li>
                <li>Assistance with investment documentation and KYC</li>
                <li>Portfolio review and fund selection guidance</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                We facilitate investments through authorized platforms including BSE StAR
                MF and MF Utilities.
              </p>
            </section>

            {/* Important Disclaimer */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                3. Important Disclaimer - Not Investment Advice
              </h2>
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                <p className="text-neutral-700 leading-relaxed">
                  <strong>The Client acknowledges and agrees that:</strong>
                </p>
                <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                  <li>
                    Ortus Finance Pvt. Ltd. is a Mutual Fund Distributor, NOT a
                    SEBI-registered Investment Adviser or Research Analyst
                  </li>
                  <li>
                    No communication, whether written or verbal, shall be construed as
                    personalized investment, legal, or tax advice
                  </li>
                  <li>
                    All investment decisions are made solely by the Client based on their
                    own judgment and risk assessment
                  </li>
                  <li>
                    The Company shall not be held liable for any financial decisions made
                    by the Client
                  </li>
                </ul>
              </div>
            </section>

            {/* Investment Risks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                4. Investment Risks
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                The Client acknowledges and accepts the following:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                <li>
                  Mutual fund investments are subject to market risks
                </li>
                <li>
                  Past performance of any fund is not indicative of future returns
                </li>
                <li>
                  The NAV of mutual fund units may go up or down depending on market
                  conditions
                </li>
                <li>
                  There is no guarantee or assurance of returns on any investment
                </li>
                <li>
                  The Client should read all scheme-related documents carefully before
                  investing
                </li>
              </ul>
            </section>

            {/* Fee Structure */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                5. Fee Structure
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                As a mutual fund distributor, Ortus Finance earns commission from Asset
                Management Companies (AMCs) for facilitating investments. This commission
                is embedded in the expense ratio of the mutual fund schemes and does not
                represent an additional charge to the Client.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                For any additional services or consultations, fee structures will be
                disclosed and agreed upon in advance.
              </p>
            </section>

            {/* Client Obligations */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                6. Client Obligations
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                The Client agrees to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                <li>Provide accurate and complete KYC information</li>
                <li>Update contact and personal details in a timely manner</li>
                <li>Review all investment documents before signing</li>
                <li>Make informed decisions based on their own risk assessment</li>
                <li>
                  Communicate promptly regarding any changes to their investment
                  objectives
                </li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                All materials provided by Ortus Finance, including educational content,
                presentations, and digital resources, constitute the intellectual property
                of the Company. The Client is granted a limited, non-exclusive,
                non-transferable license for personal use only.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                Any unauthorized reproduction, redistribution, or commercial exploitation
                of these materials is strictly prohibited.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                To the maximum extent permitted by applicable law, Ortus Finance Pvt.
                Ltd., its directors, employees, and associates shall not be held liable
                for:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                <li>Any direct, indirect, incidental, or consequential damages</li>
                <li>
                  Loss of capital, profits, or anticipated savings from investments
                </li>
                <li>
                  Any losses arising from market fluctuations or economic conditions
                </li>
                <li>
                  Technical failures or interruptions beyond our reasonable control
                </li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                The Client agrees to indemnify and hold harmless the Company against any
                claims arising from violation of these terms or misuse of services.
              </p>
            </section>

            {/* Grievance Redressal */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                9. Grievance Redressal
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                For any complaints or grievances, the Client may:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                <li>
                  Contact us at: admin@ortusfinance.in
                </li>
                <li>
                  Escalate to AMFI (Association of Mutual Funds in India) if unresolved
                </li>
                <li>
                  Approach SEBI through the SCORES platform for regulatory matters
                </li>
              </ul>
            </section>

            {/* Jurisdiction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                10. Jurisdiction & Amendments
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance
                with the laws of India. Any disputes arising hereunder shall be subject to
                the exclusive jurisdiction of the courts located in Agartala, Tripura.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                Ortus Finance Pvt. Ltd. reserves the right to amend, modify, or update
                these terms at any time without prior notice. Continued use of our
                services following such modifications shall be deemed as acceptance of the
                revised terms.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                Contact Information
              </h2>
              <div className="bg-neutral-50 p-6 rounded-xl">
                <p className="text-neutral-700">
                  <strong>Ortus Finance Pvt. Ltd.</strong>
                </p>
                <p className="text-neutral-600 mt-2">
                  CIN: U66190TR2024PTC018133
                </p>
                <p className="text-neutral-600">
                  AMFI ARN: 351189
                </p>
                <p className="text-neutral-600 mt-2">
                  Email: admin@ortusfinance.in
                </p>
                <p className="text-neutral-600">
                  Address: Agartala, Tripura, India
                </p>
              </div>
            </section>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default TermsOfServicePage;
