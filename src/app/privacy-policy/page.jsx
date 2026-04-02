import PageIntro from "@/components/PageIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "Privacy Policy | Ortus Finance",
  description: "Privacy Policy for Ortus Finance Pvt. Ltd. - How we collect, use, and protect your personal information.",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy">
        <p>
          Last updated: March 17, 2026
        </p>
      </PageIntro>

      <Container className="mt-16 mb-24">
        <FadeIn>
          <div className="prose prose-lg max-w-4xl mx-auto">
            {/* Data Collection */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                Data Collection
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Ortus Finance Pvt. Ltd. (hereinafter referred to as &quot;the Company,&quot;
                &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to the protection of user
                privacy and the security of personal data. This Privacy Policy governs
                the collection, storage, and utilization of Personal Identifiable
                Information (PII) provided by users upon registering for our mutual fund
                distribution services, financial consultation, and educational programs.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                By accessing our services, you hereby consent to the collection of data
                including:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                <li>Legal name and contact information (email address, phone number)</li>
                <li>PAN card details and KYC documentation</li>
                <li>Financial information relevant to investment profiling</li>
                <li>Billing information for service fees</li>
                <li>Communication records for service delivery</li>
              </ul>
            </section>

            {/* How Information is Used */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                How Information is Used
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                <li>Facilitating investments in SEBI-regulated mutual fund schemes</li>
                <li>KYC compliance as required by SEBI and AMFI regulations</li>
                <li>Processing transactions through BSE StAR MF and MF Utilities</li>
                <li>Providing investment-related communication and updates</li>
                <li>Improving our services and user experience</li>
                <li>Compliance with applicable financial regulations</li>
              </ul>
            </section>

            {/* Cookies & Tracking */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                Cookies & Tracking
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                Our website employs cookies, web beacons, and similar tracking
                technologies to enhance user experience, analyze website traffic, and
                monitor the effectiveness of our services. We utilize third-party
                analytics tools to collect non-identifiable technical data, such as IP
                addresses and browser types, to improve our service delivery.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                You may disable cookies through your browser settings, though this may
                affect certain functionality of our website.
              </p>
            </section>

            {/* Payment Processing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                Payment Processing
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                All financial transactions are facilitated exclusively through
                SEBI-registered platforms and third-party payment processing partners.
                Ortus Finance does not store, retain, or have access to sensitive
                cardholder data, including credit card numbers, CVV codes, or net banking
                credentials. Investment transactions are processed through authorized
                channels such as BSE StAR MF and MF Utilities.
              </p>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                Data Sharing
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We share your information only with:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                <li>Asset Management Companies (AMCs) for investment processing</li>
                <li>Registrar and Transfer Agents (RTAs) for transaction records</li>
                <li>KYC Registration Agencies (KRAs) for compliance verification</li>
                <li>Regulatory authorities as required by law</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                We maintain a strict policy against the sale, lease, or unauthorized
                disclosure of user data to third-party entities for marketing purposes.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                Data Security
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect
                your personal data against unauthorized access, alteration, disclosure, or
                destruction. This includes encryption, secure storage practices, and
                regular security assessments.
              </p>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                User Rights
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-neutral-600 mt-4 space-y-2">
                <li>Access your personal data held by us</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to regulatory requirements)</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with relevant data protection authorities</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                Contact for Privacy Concerns
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                For any privacy-related concerns or requests, please contact us at:
              </p>
              <div className="bg-neutral-50 p-6 rounded-xl mt-4">
                <p className="text-neutral-700">
                  <strong>Ortus Finance Pvt. Ltd.</strong>
                </p>
                <p className="text-neutral-600 mt-2">
                  Email: admin@ortusfinance.in
                </p>
                <p className="text-neutral-600">
                  Address: Agartala, Tripura, India
                </p>
              </div>
            </section>

            {/* Compliance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-950 mb-4">
                Compliance
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                This Privacy Policy is in compliance with the Information Technology Act,
                2000, the Information Technology (Reasonable Security Practices and
                Procedures and Sensitive Personal Data or Information) Rules, 2011, and
                the Digital Personal Data Protection Act, 2023.
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                We reserve the right to update this Privacy Policy at any time. Changes
                will be posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;
