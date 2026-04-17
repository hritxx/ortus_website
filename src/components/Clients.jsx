"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const platforms = [
  {
    name: "BSE StAR MF",
    description: "BSE's mutual fund distribution platform",
  },
  {
    name: "MF Utilities",
    description: "Industry-owned transaction platform",
  },
  {
    name: "AMFI Registered",
    description: "ARN-351189 certified distributor",
  },
  {
    name: "NISM Certified",
    description: "Qualified investment professionals",
  },
];

const Clients = () => {
  const router = useRouter();

  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        {/* Header Section */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Partners & Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We distribute mutual fund schemes through SEBI-regulated platforms
              and work with AMCs registered with SEBI.
            </p>
          </div>
        </FadeIn>

        {/* Platforms Grid */}
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {platforms.map((platform) => (
              <FadeIn key={platform.name}>
                <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon Container */}
                    <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>

                    {/* Platform Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {platform.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Stats Section */}
        <FadeIn>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  450+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">Est. 2024</div>
                <div className="text-gray-600">Founded in Tripura</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to start your investment journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your financial goals
              through SEBI-regulated mutual fund schemes.
            </p>
            <button
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm"
              onClick={() => router.push("/contact")}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Book a Free Consultation
            </button>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Clients;
