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
import CourseCard from "@/components/CourseCard";
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
    color: "from-slate-600 to-slate-700",
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
    color: "from-slate-600 to-slate-700",
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
    color: "from-slate-600 to-slate-700",
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
    color: "from-slate-600 to-slate-700",
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
    color: "from-slate-600 to-slate-700",
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
    color: "from-slate-600 to-slate-700",
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
            background: "linear-gradient(45deg, #64748b, #475569)",
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
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-400/10 to-gray-400/10 rounded-full blur-3xl animate-pulse" />
    <div
      className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-slate-500/10 to-gray-500/10 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-400/5 to-slate-400/5 rounded-full blur-3xl animate-pulse"
      style={{ animationDelay: "4s" }}
    />
  </div>
));
AnimatedBackground.displayName = "AnimatedBackground";


export default function CoursesPage() {
  return (
    <>
      <PageIntro>
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 via-gray-700 to-slate-800">
          Elevate Your Financial Knowledge
        </h1>
        <p className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join our expert-led courses designed to transform your financial
          skills and empower you to achieve your investment goals.
        </p>
      </PageIntro>
      <FadeIn>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative">
          <AnimatedBackground />
          <FloatingParticles />
          <CoursesHero />
          <div className="relative z-10 pb-16">
            <div className="container mx-auto px-6">
              <FadeIn>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {courses.map((course, idx) => (
                    <CourseCard key={idx} course={course} index={idx} />
                  ))}
                </div>
              </FadeIn>
              <CoursesCTA />
            </div>
          </div>
        </div>
        <Testimonial />
        <Faq />
      </FadeIn>
    </>
  );
}