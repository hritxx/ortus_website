"use client";

import React from "react";
import Image from "next/image";
import Container from "./Container";
import FadeIn from "./FadeIn";
import {
  BadgeCheck,
  Building2,
  Calendar,
  FileText,
  MapPin,
  Shield,
  CheckCircle2,
} from "lucide-react";

const CertificateDetail = ({ icon: Icon, label, value, highlight = false }) => {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-neutral-100 shadow-sm">
      <div
        className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg ${
          highlight
            ? "bg-green-100 text-green-600"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
          {label}
        </p>
        <p
          className={`text-sm font-semibold ${
            highlight ? "text-green-700" : "text-neutral-900"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

const StartupCertificate = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Container>
        <FadeIn>
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-6">
              <BadgeCheck className="w-4 h-4" />
              Government Recognized
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl mb-4">
              Official Startup Registration
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Registered under the{" "}
              <span className="font-semibold text-blue-700">
                Tripura Start-Up Policy
              </span>{" "}
              by the Government of Tripura
            </p>
          </div>

          {/* Main Certificate Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden">
              {/* Header Strip */}
              <div className="h-1.5 bg-gradient-to-r from-orange-500 via-white to-green-600" />

              {/* Certificate Header */}
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 px-6 py-8 sm:px-10 sm:py-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  {/* Government Logos */}
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white p-2 shadow-md">
                        <Image
                          src="/images/dit.png"
                          alt="Directorate of IT Tripura"
                          width={72}
                          height={72}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white p-2 shadow-md">
                        <Image
                          src="/images/startup_tripura.png"
                          alt="Startup Tripura"
                          width={72}
                          height={72}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        Government of Tripura
                      </h3>
                      <p className="text-blue-200 text-sm sm:text-base">
                        Directorate of Information Technology
                      </p>
                    </div>
                  </div>

                  {/* Certificate Number */}
                  <div className="flex flex-col items-center lg:items-end gap-2">
                    <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <p className="text-xs text-blue-200 uppercase tracking-wider mb-1">
                        Certificate No.
                      </p>
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-amber-300" />
                        <span className="text-amber-200 font-mono font-bold text-lg">
                          TR-ST-2025-102
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-green-300">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-medium">
                        Verified & Authenticated
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="px-6 py-8 sm:px-10 sm:py-10 bg-gradient-to-b from-blue-50/50 to-white">
                {/* Status Badge */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-50 border-2 border-green-200">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-800 font-bold text-base tracking-wide">
                      REGISTERED START-UP
                    </span>
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                </div>

                {/* Company Name */}
                <div className="text-center mb-8">
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900">
                    Ortus Finance Pvt Ltd
                  </h4>
                  <p className="mt-2 text-neutral-600">
                    <span className="font-semibold text-neutral-800">
                      Private Limited Company
                    </span>{" "}
                    | Financial Services
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <CertificateDetail
                    icon={Building2}
                    label="Industry"
                    value="Services"
                  />
                  <CertificateDetail
                    icon={FileText}
                    label="Entity Type"
                    value="Pvt. Ltd"
                  />
                  <CertificateDetail
                    icon={Calendar}
                    label="Issued Date"
                    value="07 Nov 2025"
                    highlight
                  />
                  <CertificateDetail
                    icon={MapPin}
                    label="Region"
                    value="Tripura, India"
                  />
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Issued By</p>
                      <p className="text-sm font-semibold text-neutral-800">
                        Directorate of IT, Tripura
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 border border-green-200">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                      <BadgeCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-green-600 uppercase tracking-wide font-medium">
                        Status
                      </p>
                      <p className="text-sm font-bold text-green-700">
                        Verified
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-neutral-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <Shield className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-sm font-medium text-neutral-700">
                Govt. Verified
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-neutral-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <BadgeCheck className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-neutral-700">
                Officially Registered
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-neutral-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <FileText className="w-4 h-4 text-amber-600" />
              </div>
              <span className="text-sm font-medium text-neutral-700">
                Legal Certification
              </span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default StartupCertificate;
