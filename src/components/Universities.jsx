"use client";
import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

import chandigarhLogo from "@/images/clients/chandigarh_university/logo.png";
import icfaiLogo from "@/images/clients/ICFAI_university/logo.png";
import parulLogo from "@/images/clients/parul_university/logo.png";

const universities = [
  {
    name: "Chandigarh University",
    location: "Punjab, India",
    logo: chandigarhLogo,
    description: "Placement drives and internship programs",
  },
  {
    name: "ICFAI University",
    location: "Tripura, India",
    logo: icfaiLogo,
    description: "Campus recruitment and career sessions",
  },
  {
    name: "Parul University",
    location: "Gujarat, India",
    logo: parulLogo,
    description: "Internship collaboration and workshops",
  },
];

const Universities = () => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <Container>
        {/* Header Section */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-sm font-medium mb-6">
              Campus Connect
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Universities & Colleges We Partner With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading universities across India for placements,
              internships, and career development programs.
            </p>
          </div>
        </FadeIn>

        {/* Universities Grid */}
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {universities.map((university) => (
              <FadeIn key={university.name}>
                <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Logo Container */}
                    <div className="w-24 h-24 flex items-center justify-center bg-gray-50 rounded-xl group-hover:bg-indigo-50 transition-colors duration-300 p-4">
                      <Image
                        src={university.logo}
                        alt={university.name}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* University Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {university.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {university.location}
                      </p>
                      <p className="text-sm text-indigo-600 font-medium">
                        {university.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* Info Banner */}
        <FadeIn>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Want us to visit your campus?
                </h3>
                <p className="text-gray-600">
                  We conduct placement drives, career workshops, and financial literacy sessions.
                </p>
              </div>
              <a
                href="mailto:careers@ortusfinance.in"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-sm whitespace-nowrap"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Universities;
