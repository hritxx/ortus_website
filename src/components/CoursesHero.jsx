import React from "react";
import { Zap, Users, BookOpen, Award, DollarSign } from "lucide-react";

const stats = [
  { icon: Users, value: "1k+", label: "Students" },
  { icon: BookOpen, value: "10+", label: "Courses" },
  { icon: Award, value: "95%", label: "Success Rate" },
];

export default function CoursesHero() {
  return (
    <div className="relative z-10 pt-20 pb-16">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-white font-semibold text-sm">
            Premium Financial Education
          </span>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-3">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
