"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Users,
  Award,
  Briefcase,
  ChevronRight,
  Building2,
  GraduationCap,
  ExternalLink,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import { useRouter } from "next/navigation";

const interns = [
  {
    name: "To Be Announced",
    institute: "University / Institute",
    program: "Upcoming Internship Program",
    duration: "TBD",
    performance: "TBD",
  },
  {
    name: "To Be Announced",
    institute: "University / Institute",
    program: "Upcoming Internship Program",
    duration: "TBD",
    performance: "TBD",
  },
  {
    name: "To Be Announced",
    institute: "University / Institute",
    program: "Upcoming Internship Program",
    duration: "TBD",
    performance: "TBD",
  },
];

const programs = [
  {
    title: "Summer Internship Program",
    description:
      "A hands-on 8-week program for students to work on real-world finance and technology projects under expert mentorship.",
    duration: "8 weeks",
    intake: "Summer 2025",
    icon: GraduationCap,
    features: [
      "Real-world projects",
      "Expert mentorship",
      "Industry exposure",
      "Certificate of completion",
    ],
  },
  {
    title: "Graduate Trainee Program",
    description:
      "A 6-month rotational program for fresh graduates to gain exposure to various domains like trading, analytics, and client advisory.",
    duration: "6 months",
    intake: "Quarterly",
    icon: Users,
    features: [
      "Cross-functional rotation",
      "Leadership development",
      "Performance bonuses",
      "Career progression",
    ],
  },
  {
    title: "Finance & Tech Bootcamp",
    description:
      "A 2-week intensive bootcamp for students and young professionals to learn the fundamentals of finance, investing, and financial technology.",
    duration: "2 weeks",
    intake: "Monthly",
    icon: Briefcase,
    features: [
      "Intensive curriculum",
      "Industry case studies",
      "Networking opportunities",
      "Job placement assistance",
    ],
  },
];

const jobOpenings = [
  {
    title: "NISM Certified Research Analyst",
    location: "Agartala / Remote",
    type: "Full-time",
    department: "Research",
    experience: "1-3 years",
    salary: "As per industry standards",
    description:
      "Conduct in-depth market research and analysis to provide investment recommendations for our clients.",
    requirements: [
      "NISM Series XV (Research Analyst) certification",
      "Strong analytical and research skills",
      "Knowledge of equity and debt markets",
    ],
  },
  {
    title: "NISM Certified Investment Adviser (Series A & B)",
    location: "Agartala / Remote",
    type: "Full-time",
    department: "Advisory",
    experience: "2-5 years",
    salary: "As per industry standards",
    description:
      "Provide personalized investment advice to clients based on their financial goals and risk profile.",
    requirements: [
      "NISM Series X-A and X-B certification",
      "Experience in client advisory",
      "Strong communication skills",
    ],
  },
  {
    title: "Quant Financial Analyst",
    location: "Remote / Hybrid",
    type: "Full-time",
    department: "Research",
    experience: "2-4 years",
    salary: "As per industry standards",
    description:
      "Develop quantitative models and data-driven strategies for portfolio optimization and risk management.",
    requirements: [
      "Python, R, or MATLAB proficiency",
      "Statistical modeling expertise",
      "Finance/Mathematics background",
    ],
  },
  {
    title: "Sales and Marketing (Relationship Manager)",
    location: "Agartala / Field",
    type: "Full-time",
    department: "Sales",
    experience: "1-3 years",
    salary: "As per industry standards + Incentives",
    description:
      "Build and maintain client relationships, drive business growth, and promote our financial services.",
    requirements: [
      "Excellent interpersonal skills",
      "Sales/Marketing experience",
      "Knowledge of mutual funds preferred",
    ],
  },
];

const studentAchievements = [
  {
    name: "Coming Soon",
    college: "University Name",
    role: "Role Title",
    type: "placement",
  },
  {
    name: "Coming Soon",
    college: "University Name",
    role: "Role Title",
    type: "internship",
  },
  {
    name: "Coming Soon",
    college: "University Name",
    role: "Role Title",
    type: "placement",
  },
];

const tabs = [
  {
    id: "opportunities",
    label: "Career Opportunities",
    icon: Briefcase,
  },
  {
    id: "programs",
    label: "Development Programs",
    icon: Award,
  },
  {
    id: "achievements",
    label: "Student Achievements",
    icon: Trophy,
  },
  {
    id: "interns",
    label: "Our Talent",
    icon: Users,
  },
];

const Careers = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("opportunities");

  return (
    <>
      <PageIntro eyebrow="Join Our Team" title="Careers at Ortus Finance">
        <p>
          Build your career with a team of certified professionals committed to
          transforming financial services in Northeast India. We value
          innovation, integrity, and growth.
        </p>
      </PageIntro>

      <Container className="mt-16 sm:mt-20">
        {/* Quick Apply CTA */}
        <FadeIn>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Ready to Join Our Team?
                </h3>
                <p className="text-neutral-600">
                  Send your resume and cover letter to start your journey with
                  Ortus Finance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:careers@ortusfinance.in"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Apply Now
                </a>
                <a
                  href="#opportunities"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-neutral-50 text-neutral-900 font-semibold rounded-xl border border-neutral-200 transition-colors"
                >
                  View Openings
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Navigation Tabs */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200 hover:border-neutral-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Content Sections */}
        <div id="opportunities" className="pb-20">
          {/* Job Opportunities */}
          {activeTab === "opportunities" && (
            <FadeIn>
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Current Openings
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Explore career opportunities in finance, research, and
                    client services
                  </p>
                </div>

                <FadeInStagger>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {jobOpenings.map((job, idx) => (
                      <FadeIn key={idx}>
                        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300 overflow-hidden h-full">
                          <div className="p-6 sm:p-8">
                            <div className="flex items-start justify-between gap-4 mb-4">
                              <div className="flex-1">
                                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                                  {job.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                                  <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Building2 className="w-4 h-4" />
                                    {job.department}
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                                  {job.type}
                                </span>
                                <span className="text-xs text-neutral-500">
                                  {job.experience}
                                </span>
                              </div>
                            </div>

                            <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                              {job.description}
                            </p>

                            <div className="space-y-2 mb-6">
                              {job.requirements.map((req, reqIdx) => (
                                <div
                                  key={reqIdx}
                                  className="flex items-start gap-2 text-sm text-neutral-600"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                  {req}
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                              <div className="text-sm">
                                <span className="text-neutral-500">
                                  Compensation:{" "}
                                </span>
                                <span className="font-medium text-neutral-900">
                                  {job.salary}
                                </span>
                              </div>
                              <a
                                href="mailto:careers@ortusfinance.in"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                              >
                                Apply
                                <ChevronRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </FadeInStagger>
              </div>
            </FadeIn>
          )}

          {/* Development Programs */}
          {activeTab === "programs" && (
            <FadeIn>
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Development Programs
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Structured programs designed to accelerate your professional
                    growth
                  </p>
                </div>

                <FadeInStagger>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {programs.map((program, idx) => (
                      <FadeIn key={idx}>
                        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300 h-full flex flex-col">
                          <div className="p-6 sm:p-8 flex-1 flex flex-col">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                              <program.icon className="w-6 h-6 text-blue-600" />
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 mb-3">
                              {program.title}
                            </h3>

                            <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-1">
                              {program.description}
                            </p>

                            <div className="flex items-center gap-4 mb-6 text-sm">
                              <div className="flex items-center gap-1.5 text-neutral-500">
                                <Clock className="w-4 h-4" />
                                {program.duration}
                              </div>
                              <div className="flex items-center gap-1.5 text-neutral-500">
                                <Calendar className="w-4 h-4" />
                                {program.intake}
                              </div>
                            </div>

                            <div className="space-y-2 mb-6">
                              {program.features.map((feature, featureIdx) => (
                                <div
                                  key={featureIdx}
                                  className="flex items-center gap-2 text-sm text-neutral-600"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  {feature}
                                </div>
                              ))}
                            </div>

                            <a
                              href="mailto:careers@ortusfinance.in"
                              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-xl transition-colors text-sm"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </FadeInStagger>
              </div>
            </FadeIn>
          )}

          {/* Student Achievements */}
          {activeTab === "achievements" && (
            <FadeIn>
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Student Achievements
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Recognizing students who have contributed to our growth
                    through placements and internships
                  </p>
                </div>

                {/* Internship Application CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-white text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">
                        Interested in an Internship?
                      </h3>
                      <p className="text-blue-100">
                        Apply for our internship programs and kickstart your
                        career in finance.
                      </p>
                    </div>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeCcgggoEb98fpvu_iMNW1OwHJzukigsI8wB1IQxnK6xjALnw/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Apply for Internship
                    </a>
                  </div>
                </div>

                {/* Placements Section */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    Placements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {studentAchievements
                      .filter((student) => student.type === "placement")
                      .map((student, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-xl border border-neutral-100 p-5 hover:border-neutral-200 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                              {student.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-neutral-900">
                                {student.name}
                              </h4>
                              <p className="text-sm text-neutral-500">
                                {student.college}
                              </p>
                              <p className="text-sm text-blue-600 font-medium">
                                {student.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Internships Section */}
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-500" />
                    Internships
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {studentAchievements
                      .filter((student) => student.type === "internship")
                      .map((student, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-xl border border-neutral-100 p-5 hover:border-neutral-200 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold">
                              {student.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-semibold text-neutral-900">
                                {student.name}
                              </h4>
                              <p className="text-sm text-neutral-500">
                                {student.college}
                              </p>
                              <p className="text-sm text-purple-600 font-medium">
                                {student.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          )}

          {/* Our Interns / Talent */}
          {activeTab === "interns" && (
            <FadeIn>
              <div className="space-y-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    Our Rising Talent
                  </h2>
                  <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                    Meet our exceptional interns contributing to our mission
                  </p>
                </div>

                <FadeInStagger>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interns.map((intern, idx) => (
                      <FadeIn key={idx}>
                        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all duration-300">
                          <div className="p-6 text-center">
                            <div className="relative inline-block mb-4">
                              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 p-0.5">
                                <div className="w-full h-full rounded-full bg-neutral-100 flex items-center justify-center">
                                  <span className="text-xl font-bold text-neutral-600">
                                    {intern.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <h3 className="text-lg font-bold text-neutral-900 mb-1">
                              {intern.name}
                            </h3>
                            <p className="text-blue-600 font-medium text-sm mb-1">
                              {intern.institute}
                            </p>
                            <p className="text-neutral-500 text-sm mb-4">
                              {intern.program}
                            </p>

                            <div className="flex items-center justify-center gap-4 text-sm">
                              <div className="flex items-center gap-1 text-neutral-500">
                                <Clock className="w-4 h-4" />
                                {intern.duration}
                              </div>
                              <div className="flex items-center gap-1 text-amber-600">
                                <Award className="w-4 h-4" />
                                {intern.performance}
                              </div>
                            </div>
                          </div>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </FadeInStagger>
              </div>
            </FadeIn>
          )}
        </div>

        {/* Bottom CTA */}
        <FadeIn>
          <div className="bg-neutral-900 rounded-2xl p-8 sm:p-12 text-center mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join our team of exceptional professionals and be part of
              transforming financial services in Northeast India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ortusfinance.in"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-neutral-900 rounded-xl font-semibold hover:bg-neutral-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Your Application
              </a>
              <button
                onClick={() => router.push("/about")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-neutral-700 text-white rounded-xl font-semibold hover:bg-neutral-800 transition-colors"
              >
                Learn About Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  );
};

export default Careers;
