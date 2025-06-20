"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import ujjivanFinance from "../images/clients/ujjain-finance/ujjivan.png";
import tataAig from "../images/clients/tata-aig/tata-aig.png";
import hdfc from "../images/clients/hdfc/hdfc.png";
import sbi from "../images/clients/sbi/sbi.png";

import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Button from "./Button";

const clients = [
  {
    name: "State Bank of India",
    logo: sbi,
    description: "India's largest public sector bank",
  },
  {
    name: "Ujjivan Finance",
    logo: ujjivanFinance,
    description: "Leading microfinance institution",
  },
  {
    name: "Tata AIG",
    logo: tataAig,
    description: "Insurance and financial services",
  },
  {
    name: "HDFC Bank",
    logo: hdfc,
    description: "Premier banking solutions",
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re proud to partner with leading organizations who trust
              us with their most important projects
            </p>
          </div>
        </FadeIn>

        {/* Clients Grid */}
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {clients.map((client) => (
              <FadeIn key={client.name}>
                <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Logo Container with consistent sizing */}
                    <div className="w-32 h-20 flex items-center justify-center bg-gray-50 rounded-xl p-4 group-hover:bg-gray-100 transition-colors duration-300">
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={120}
                        height={80}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                        unoptimized
                      />
                    </div>

                    {/* Client Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {client.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {client.description}
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
                  300+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Call to Action */}
        <FadeIn>
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to join our success stories?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business achieve its goals
              with our proven expertise and dedicated support.
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
              Start a Conversation
            </button>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Clients;
