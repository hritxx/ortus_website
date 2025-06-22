import React from "react";
import { ChevronRight } from "lucide-react";

export default function CoursesCTA() {
  return (
    <div className="mt-16 text-center">
      <div className="inline-block p-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl">
        <button className="px-8 py-4 bg-black rounded-2xl text-white font-bold text-lg hover:bg-transparent transition-all duration-300 transform hover:scale-105">
          <span className="flex items-center space-x-2">
            <span>Start Your Journey Today</span>
            <ChevronRight className="w-5 h-5" />
          </span>
        </button>
      </div>
      <p className="text-gray-400 mt-4 text-base">
        Join thousands of successful investors who transformed their lives with
        Ortus Finance
      </p>
    </div>
  );
}
