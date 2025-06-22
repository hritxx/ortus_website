"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronRight,
  Play,
  Star,
  Clock,
  Users,
  TrendingUp,
  BookOpen,
  Award,
  Zap,
  Target,
  DollarSign,
  BarChart3,
} from "lucide-react";

import MeetingImage from "@/images/meeting.jpg";
import FinanceCompanyImage from "@/images/financeCOmpany.jpg";
import ChartsImage from "@/images/charts.jpg";
import LaptopImage from "@/images/laptop.jpg";


import CoursesHero from "@/components/CoursesHero";
import CoursesCTA from "@/components/CoursesCTA";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";
import Faq from "@/components/FAQSection";
import Testimonial from "@/components/Testimonials2";

const courses = [
  {
    title: "Stock Market Mastery",
    description:
      "Master the art of stock trading with advanced strategies, technical analysis, and risk management techniques used by Wall Street professionals.",
    image: MeetingImage,
    link: "#",
    level: "Beginner",
    duration: "8 weeks",
    students: "2.4k",
    rating: 4.9,
    price: "₹299",
    color: "from-purple-600 to-pink-600",
    icon: TrendingUp,
    features: [
      "Live Trading Sessions",
      "Portfolio Analysis",
      "Market Psychology",
    ],
  },
  {
    title: "Mutual Funds Universe",
    description:
      "Navigate the complex world of mutual funds with expert guidance on fund selection, performance analysis, and portfolio optimization.",
    image: FinanceCompanyImage,
    link: "#",
    level: "Intermediate",
    duration: "6 weeks",
    students: "1.8k",
    rating: 4.8,
    price: "₹249",
    color: "from-blue-600 to-cyan-600",
    icon: BarChart3,
    features: ["Fund Comparison Tools", "Risk Assessment", "Tax Optimization"],
  },
  {
    title: "Financial Freedom Blueprint",
    description:
      "Build lasting wealth through strategic financial planning, budgeting mastery, and intelligent investment allocation strategies.",
    image: ChartsImage,
    link: "#",
    level: "Beginner",
    duration: "10 weeks",
    students: "3.2k",
    rating: 4.9,
    price: "₹199",
    color: "from-green-600 to-emerald-600",
    icon: Target,
    features: [
      "Personal Budget Planner",
      "Debt Management",
      "Emergency Fund Strategy",
    ],
  },
  {
    title: "Technical Analysis Pro",
    description:
      "Decode market patterns with advanced charting techniques, algorithmic trading strategies, and quantitative analysis methods.",
    image: LaptopImage,
    link: "#",
    level: "Advanced",
    duration: "12 weeks",
    students: "1.5k",
    rating: 4.7,
    price: "₹499",
    color: "from-orange-600 to-red-600",
    icon: Zap,
    features: [
      "Custom Indicators",
      "Automated Strategies",
      "Backtesting Tools",
    ],
  },
  {
    title: "Wealth Creation Accelerator",
    description:
      "Accelerate your path to financial independence with proven wealth-building strategies and retirement planning excellence.",
    image: FinanceCompanyImage,
    link: "#",
    level: "Intermediate",
    duration: "14 weeks",
    students: "2.1k",
    rating: 4.8,
    price: "₹399",
    color: "from-indigo-600 to-purple-600",
    icon: Award,
    features: ["Retirement Calculator", "Tax Strategies", "Estate Planning"],
  },
  {
    title: "Elite Portfolio Management",
    description:
      "Master institutional-level portfolio management with advanced diversification, risk modeling, and performance optimization.",
    image: ChartsImage,
    link: "#",
    level: "Expert",
    duration: "16 weeks",
    students: "892",
    rating: 4.9,
    price: "₹699",
    color: "from-pink-600 to-rose-600",
    icon: BookOpen,
    features: ["Risk Models", "Asset Allocation", "Performance Analytics"],
  },
];
const FloatingParticles = React.memo(function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: "linear-gradient(45deg, #60a5fa, #a855f7)",
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
});
FloatingParticles.displayName = "FloatingParticles";

const AnimatedBackground = React.memo(() => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" />
    <div
      className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-green-400/5 to-emerald-400/5 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "4s" }}
    />
  </div>
));
AnimatedBackground.displayName = "AnimatedBackground";
const CourseCard = React.memo(function CourseCard({ course, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  const IconComponent = course.icon;

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className={`group relative transform transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Reduced glow effect */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      />

      <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
        {/* Simplified animated border */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-pulse" />

        {/* Course Level Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${course.color} z-10`}
        >
          {course.level}
        </div>
        {/* Image with overlay */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
          />


          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/90 rounded-full p-3 transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-gray-800 ml-0.5" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div
                className={`p-2 rounded-xl bg-gradient-to-r ${course.color}`}
              >
                <IconComponent className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                  {course.title}
                </h3>
                <div className="flex items-center space-x-3 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                {course.price}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
            {course.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {course.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-200 border border-white/20 hover:bg-white/20 transition-colors duration-200"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex space-x-3">
            <button
              className={`flex-1 py-3 px-4 bg-gradient-to-r ${course.color} text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Enroll Now</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
            <button className="px-4 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
              Preview
            </button>
          </div>
        </div>

        {/* Simplified corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
          <div
            className={`absolute transform rotate-45 translate-x-4 -translate-y-4 w-8 h-8 bg-gradient-to-r ${course.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
          />
        </div>
      </div>
    </div>
  );
});

export default function CoursesPage() {
  return (<>
    <PageIntro>
      <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
        Elevate Your Financial Knowledge
      </h1>
      <p className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed">
        Join our expert-led courses designed to transform your financial skills
        and empower you to achieve your investment goals.
      </p>
    </PageIntro>
    <FadeIn>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      <AnimatedBackground />
      <FloatingParticles />
      <CoursesHero />
      <div className="relative z-10 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, idx) => (
              <CourseCard key={idx} course={course} index={idx} />
            ))}
          </div>
          <CoursesCTA />
        </div>
      </div>
    </div>
    <Testimonial />
    <Faq/>
    </FadeIn>
    </>
  );
}