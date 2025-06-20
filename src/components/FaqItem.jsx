
import React, { useState } from "react";

const FaqItem = ({ title, answer, index }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="group bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 mb-4">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
        aria-expanded={accordionOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900 pr-4 leading-relaxed group-hover:text-blue-900 transition-colors duration-200">
            {title}
          </h3>
          <div className="flex-shrink-0">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                accordionOpen
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
              }`}
            >
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  accordionOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </button>

      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pb-6">
          <div className="pt-4 border-t border-gray-200">
            <div className="bg-blue-50 rounded-xl p-4 mt-2">
              <p className="text-gray-800 leading-relaxed font-medium">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
