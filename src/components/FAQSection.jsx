"use client";

import React from "react";
import FaqItem from "./FaqItem";
import Container from "./Container";
import { courseData } from "@/constants";
import FadeIn from "./FadeIn";

const Faq = () => {
  return (
    <Container>
      <FadeIn>
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our services and processes.
              Can&apos;t find what you&apos;re looking for? Feel free to contact
              us.
            </p>
          </div>

          {/* FAQ Items Container */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {courseData.map((item, index) => (
                <FaqItem
                  key={index}
                  index={index}
                  title={item.q}
                  answer={item.a}
                />
              ))}
            </div>

            {/* Call to Action Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Still have questions?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our team is here to help. Get in touch with us for
                  personalized assistance and detailed answers to your specific
                  questions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm">
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Faq;
