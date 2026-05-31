"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { m, useInView, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Calendar,
  FileText,
  MapPin,
  Shield,
  CheckCircle2,
  Award,
  Landmark,
  ShieldCheck
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const CertificateDetail = ({ icon: Icon, label, value, reducedMotion }) => {
  return (
    <m.div 
      whileHover={reducedMotion ? undefined : { y: -4, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="relative group p-5 rounded-[18px] bg-white/90 border border-neutral-100 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_14px_34px_rgba(37,99,235,0.10)] transition-shadow duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative flex items-center gap-4">
        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/50 text-blue-600 border border-blue-100/50 shadow-inner group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-1">
            {label}
          </p>
          <p className="text-sm font-semibold text-neutral-900 tracking-tight">
            {value}
          </p>
        </div>
      </div>
    </m.div>
  );
};

const StartupCertificate = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#f7f9fc]">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1080px] h-[560px] bg-blue-500/12 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[820px] h-[620px] bg-indigo-500/6 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[620px] h-[620px] bg-emerald-500/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.07),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(37,99,235,0.05),transparent_26%),radial-gradient(circle_at_100%_100%,rgba(16,185,129,0.04),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-15" />
        <div className="absolute left-[-120px] top-[34%] h-[720px] w-[720px] rounded-full border border-white/50 opacity-40" />
        <div className="absolute left-[-40px] top-[38%] h-[560px] w-[560px] rounded-full border border-white/40 opacity-35" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <m.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
            <m.div variants={fadeIn} className="flex justify-center mb-6">
              <div className="relative group cursor-default">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-18 group-hover:opacity-28 transition duration-300"></div>
                <div className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-neutral-200/60 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[11px] font-semibold text-neutral-700 tracking-[0.16em] uppercase">
                    Verified & Authenticated
                  </span>
                </div>
              </div>
            </m.div>
            
            <m.h2 
              variants={fadeIn}
              className="text-[40px] sm:text-[56px] lg:text-[76px] font-semibold tracking-[-0.04em] text-neutral-950 mb-6 leading-[0.95]"
            >
              Official Startup Registration
            </m.h2>
            
            <m.p 
              variants={fadeIn}
              className="text-[17px] sm:text-[18px] text-neutral-500 font-medium"
            >
              Registered under the{" "}
              <span className="text-blue-600 font-semibold">Tripura Start-Up Policy</span>{" "}
              by the Government of Tripura
            </m.p>
          </div>

          {/* Premium Certificate Card */}
          <m.div 
            variants={fadeIn}
            className="w-full max-w-5xl mx-auto"
          >
            <m.div 
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.005 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              className="relative rounded-[30px] bg-white shadow-[0_28px_80px_-28px_rgba(15,23,42,0.18)] border border-neutral-200/60 overflow-hidden group"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-70 pointer-events-none" />

              {/* Top Banner (Navy Gradient) */}
              <div className="relative bg-[#0A102A] overflow-hidden">
                {/* Banner Effects */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[110px]" />
                  <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[110px]" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(96,165,250,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.14),transparent_26%),linear-gradient(135deg,transparent,rgba(255,255,255,0.03),transparent)] opacity-80" />
                <div className="absolute inset-x-[22%] top-[10%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_58%)] opacity-40" />
                
                <div className="relative px-8 py-9 sm:px-12 sm:py-10 flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
                  {/* Left: Government Logos & Text */}
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex items-center gap-0">
                      <div className="relative z-10 -mr-4 flex h-20 w-20 items-center justify-center rounded-full bg-white p-3 shadow-[0_18px_35px_rgba(0,0,0,0.18)] overflow-hidden">
                        <Image src="/images/dit.png" alt="Directorate of IT Tripura" width={74} height={74} className="relative z-10 object-contain w-full h-full drop-shadow-sm" />
                      </div>
                      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white p-3 shadow-[0_18px_35px_rgba(0,0,0,0.18)] overflow-hidden">
                        <Image src="/images/startup_tripura.png" alt="Startup Tripura" width={90} height={90} className="relative z-10 object-contain w-full h-full drop-shadow-sm" />
                      </div>
                    </div>
                    
                    <div className="text-center sm:text-left mt-4 sm:mt-0 lg:ml-2">
                      <h3 className="text-2xl sm:text-[28px] font-semibold text-white tracking-tight drop-shadow-md">
                        Government of Tripura
                      </h3>
                      <p className="text-blue-200/80 font-medium text-sm sm:text-base mt-1 tracking-wide">
                        Directorate of Information Technology
                      </p>
                    </div>
                  </div>

                  {/* Right: Floating Certificate Panel */}
                  <div className="relative group/panel cursor-default">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/35 to-indigo-400/35 rounded-[20px] blur opacity-65 group-hover/panel:opacity-80 transition duration-300" />
                    <div className="relative flex flex-col items-center lg:items-start px-6 py-4 rounded-[20px] bg-[#0F1735]/86 border border-white/10 shadow-[0_22px_40px_rgba(0,0,0,0.26)]">
                      <p className="text-[10px] font-bold text-blue-300/70 uppercase tracking-[0.24em] mb-2">
                        Certificate No.
                      </p>
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-indigo-300" strokeWidth={1.5} />
                        <span className="text-white font-mono font-medium text-[21px] tracking-[0.16em]">
                          TR-ST-2025-102
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/10 w-full justify-center lg:justify-start text-emerald-400/90">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-semibold uppercase tracking-wider">
                          Digitally Authenticated
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="relative bg-white px-8 py-12 sm:px-12 sm:py-16">
                
                {/* Watermark Seal Background */}
                <div className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 opacity-[0.045] pointer-events-none select-none">
                  <Award className="w-[260px] h-[260px]" />
                </div>

                {/* Verified Badge */}
                <div className="flex justify-center mb-10 relative z-10">
                  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-50/70 border border-emerald-100/80 shadow-[0_10px_24px_rgba(16,185,129,0.08)]">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-45"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </div>
                    <span className="text-emerald-700 font-bold text-xs uppercase tracking-[0.15em]">
                      Registered Start-Up
                    </span>
                  </div>
                </div>

                {/* Company Name */}
                <div className="text-center mb-16 relative z-10">
                  <h4 className="text-[34px] sm:text-[48px] lg:text-[52px] font-bold text-neutral-900 tracking-[-0.035em] mb-3 leading-none">
                    Ortus Finance Pvt Ltd
                  </h4>
                  <div className="flex items-center justify-center gap-3 text-neutral-500 font-medium text-sm sm:text-base">
                    <span>Private Limited Company</span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300" />
                    <span>Financial Services</span>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 relative z-10">
                  <CertificateDetail icon={Building2} label="Industry" value="Services" reducedMotion={shouldReduceMotion} />
                  <CertificateDetail icon={Landmark} label="Entity Type" value="Pvt. Ltd" reducedMotion={shouldReduceMotion} />
                  <CertificateDetail icon={Calendar} label="Issued Date" value="07 Nov 2025" reducedMotion={shouldReduceMotion} />
                  <CertificateDetail icon={MapPin} label="Region" value="Tripura, India" reducedMotion={shouldReduceMotion} />
                </div>

                {/* Footer Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-neutral-100 relative z-10">
                  {/* Issued By */}
                  <div className="flex items-center gap-4 group/issuer">
                    <div className="w-12 h-12 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center group-hover/issuer:bg-white group-hover/issuer:shadow-md transition-shadow duration-300">
                      <Shield className="w-5 h-5 text-neutral-600" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.22em] mb-1">
                        Issued By Authority
                      </p>
                      <p className="text-sm font-semibold text-neutral-900 tracking-tight">
                        Directorate of IT, Tripura
                      </p>
                      <p className="text-[13px] text-neutral-500">
                        Government of Tripura
                      </p>
                    </div>
                  </div>

                  {/* Status Panel */}
                  <div className="relative group/status">
                    <div className="absolute -inset-1 bg-emerald-500 rounded-xl blur opacity-10 group-hover/status:opacity-15 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-3 px-5 py-3 rounded-xl bg-[#F2FAF5] border border-emerald-100/60 shadow-[0_10px_24px_rgba(16,185,129,0.08)] group-hover/status:shadow-[0_14px_28px_rgba(16,185,129,0.12)] transition-shadow duration-300">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100/50">
                        <BadgeCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-emerald-600/70 uppercase tracking-[0.2em] mb-0.5">
                          Status
                        </p>
                        <p className="text-sm font-bold text-emerald-700 tracking-tight leading-none">
                          Verified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </m.div>
          </m.div>

          {/* Trust Badges Row */}
          <m.div 
            variants={fadeIn}
            className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Shield, text: "Govt. Verified", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100/50" },
              { icon: BadgeCheck, text: "Officially Registered", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100/50" },
              { icon: FileText, text: "Legal Certification", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100/50" },
            ].map((badge, i) => (
              <m.div
                key={i}
                whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/82 border border-neutral-200/50 shadow-[0_8px_22px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] transition-shadow duration-300 cursor-default"
              >
                <div className={`w-8 h-8 rounded-xl ${badge.bg} ${badge.border} border flex items-center justify-center shadow-inner`}>
                  <badge.icon className={`w-4 h-4 ${badge.color}`} strokeWidth={2} />
                </div>
                <span className="text-[13px] font-semibold text-neutral-700 tracking-tight">
                  {badge.text}
                </span>
              </m.div>
            ))}
          </m.div>

        </m.div>
      </div>
    </section>
  );
};

export default StartupCertificate;
