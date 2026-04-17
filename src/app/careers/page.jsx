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
  Star,
  Building,
  GraduationCap,
  ExternalLink,
  Trophy,
} from "lucide-react";
import PageIntro from "@/components/PageIntro";
import { useRouter } from "next/navigation";

const interns = [
  {
    name: "To Be Announced",
    institute: "University / Institute",
    image: "/api/placeholder/150/150",
    program: "Upcoming Internship Program",
    duration: "TBD",
    performance: "TBD",
  },
  {
    name: "To Be Announced",
    institute: "University / Institute",
    image: "/api/placeholder/150/150",
    program: "Upcoming Internship Program",
    duration: "TBD",
    performance: "TBD",
  },
  {
    name: "To Be Announced",
    institute: "University / Institute",
    image: "/api/placeholder/150/150",
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
    icon: <GraduationCap className="w-8 h-8" />,
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
    icon: <Users className="w-8 h-8" />,
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
    icon: <Briefcase className="w-8 h-8" />,
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
    image: null,
  },
  {
    name: "Coming Soon",
    college: "University Name",
    role: "Role Title",
    type: "internship",
    image: null,
  },
  {
    name: "Coming Soon",
    college: "University Name",
    role: "Role Title",
    type: "placement",
    image: null,
  },
];

const Careers = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("opportunities");
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <PageIntro>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Careers at Ortus Finance
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Join our team of innovators and shape the future of financial
          technology.
        </p>
      </PageIntro>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 mb-8">
                <Star className="w-4 h-4 text-blue-200 mr-2" />
                <span className="text-blue-100 text-sm font-medium">
                  Shape the Future of Finance
                </span>
              </div>

              <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                At Ortus Finance, we&apos;re building the future of financial
                technology. Join our world-class team of innovators, analysts,
                and visionaries.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:careers@ortusfinance.com"
                  className="group inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Apply Now
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={() =>
                    document
                      .getElementById("opportunities")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  View Openings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              {
                id: "opportunities",
                label: "Career Opportunities",
                icon: <Briefcase className="w-4 h-4" />,
              },
              {
                id: "programs",
                label: "Development Programs",
                icon: <Award className="w-4 h-4" />,
              },
              {
                id: "achievements",
                label: "Student Achievements",
                icon: <Trophy className="w-4 h-4" />,
              },
              {
                id: "interns",
                label: "Our Talent",
                icon: <Users className="w-4 h-4" />,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm"
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Job Opportunities */}
          {activeTab === "opportunities" && (
            <div id="opportunities" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Current Openings
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Discover exciting career opportunities in finance and
                  technology
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {jobOpenings.map((job, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex items-center text-gray-500 mb-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Building className="w-4 h-4 mr-1" />
                            <span className="text-sm">{job.department}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {job.type}
                          </span>
                          <span className="text-sm text-gray-500 mt-1">
                            {job.experience}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {job.description}
                      </p>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-500">
                            Salary Range
                          </span>
                          <span className="text-lg font-bold text-green-600">
                            {job.salary}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        {job.requirements.map((req, reqIdx) => (
                          <div
                            key={reqIdx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {req}
                          </div>
                        ))}
                      </div>

                      <button
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                        onClick={() => {
                          window.location.href =
                            "mailto:careers@ortusfinance.in";
                        }}
                      >
                        Apply Now
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Development Programs */}
          {activeTab === "programs" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Development Programs
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Comprehensive training programs designed to accelerate your
                  career growth
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {programs.map((program, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-200 transition-colors">
                        <div className="text-blue-600 group-hover:scale-110 transition-transform">
                          {program.icon}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {program.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="flex items-center justify-between mb-6 text-sm">
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Award className="w-4 h-4 mr-1" />
                          <span>{program.intake}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        {program.features.map((feature, featureIdx) => (
                          <div
                            key={featureIdx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Student Achievements */}
          {activeTab === "achievements" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Student Achievements
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Celebrating our students who have been placed or completed
                  internships with us
                </p>
              </div>

              {/* Internship Application CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Interested in an Internship?
                    </h3>
                    <p className="text-blue-100">
                      Apply for our internship programs and kickstart your
                      career in finance
                    </p>
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeCcgggoEb98fpvu_iMNW1OwHJzukigsI8wB1IQxnK6xjALnw/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Apply for Internship
                  </a>
                </div>
              </div>

              {/* Placements Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
                  Placements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studentAchievements
                    .filter((student) => student.type === "placement")
                    .map((student, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {student.name}
                            </h4>
                            <p className="text-sm text-gray-600">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 text-blue-500 mr-2" />
                  Internships
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studentAchievements
                    .filter((student) => student.type === "internship")
                    .map((student, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {student.name}
                            </h4>
                            <p className="text-sm text-gray-600">
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
          )}

          {/* Our Interns */}
          {activeTab === "interns" && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Our Rising Stars
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Meet our exceptional interns who are making significant
                  contributions to our success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {interns.map((intern, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                  >
                    <div className="p-8 text-center">
                      <div className="relative mb-6">
                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 p-1">
                          <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-600">
                              {intern.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                        </div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {intern.name}
                      </h3>

                      <p className="text-blue-600 font-medium mb-1">
                        {intern.institute}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">
                        {intern.program}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{intern.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1 text-yellow-500" />
                          <span className="text-yellow-600 font-medium">
                            {intern.performance}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Join our team of exceptional professionals and be part of the
              financial technology revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ortusfinance.com"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Your Application
              </a>
              <button
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                onClick={() => router.push("/process")}
              >
                View Company Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
