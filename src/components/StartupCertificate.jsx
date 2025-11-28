"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Container from "./Container";
import FadeIn from "./FadeIn";
import {
  HiOutlineBadgeCheck,
  HiOutlineOfficeBuilding,
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineLocationMarker,
  HiOutlineGlobe,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { BsBuilding, BsAward, BsCheckCircleFill } from "react-icons/bs";
import { RiGovernmentLine } from "react-icons/ri";
import { FaIndustry, FaRegCalendarCheck } from "react-icons/fa";
import clsx from "clsx";

const CertificateDetail = ({ icon: Icon, label, value, highlight = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3 p-3 rounded-lg bg-white/70 backdrop-blur-sm border border-white/80 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div
        className={clsx(
          "flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg shadow-sm",
          highlight
            ? "bg-gradient-to-br from-green-400 to-green-600 text-white"
            : "bg-gradient-to-br from-blue-400 to-blue-600 text-white"
        )}
      >
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
          {label}
        </p>
        <p
          className={clsx(
            "text-sm font-bold",
            highlight ? "text-green-700" : "text-neutral-800"
          )}
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
};

// Animated Wave Component for Indian Flag Background
// const WavyFlagBackground = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {/* Saffron Wave */}
//       <motion.div
//         className="absolute w-[200%] h-1/3 top-0 left-0"
//         style={{
//           background: "linear-gradient(180deg, rgba(255, 153, 51, 0.15) 0%, rgba(255, 153, 51, 0.05) 100%)",
//         }}
//         animate={{
//           x: [0, -100, 0],
//           skewX: [0, 2, 0, -2, 0],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.svg
//         className="absolute top-[30%] left-0 w-[200%] h-16 opacity-20"
//         viewBox="0 0 1440 54"
//         preserveAspectRatio="none"
//       >
//         <motion.path
//           d="M0,22 C480,54 960,0 1440,22 L1440,0 L0,0 Z"
//           fill="rgba(255, 153, 51, 0.4)"
//           animate={{
//             d: [
//               "M0,22 C480,54 960,0 1440,22 L1440,0 L0,0 Z",
//               "M0,32 C480,0 960,54 1440,32 L1440,0 L0,0 Z",
//               "M0,22 C480,54 960,0 1440,22 L1440,0 L0,0 Z",
//             ],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </motion.svg>

//       {/* White Wave (Middle) */}
//       <motion.div
//         className="absolute w-[200%] h-1/3 top-1/3 left-0"
//         style={{
//           background: "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)",
//         }}
//         animate={{
//           x: [0, 50, 0, -50, 0],
//           skewX: [0, -1, 0, 1, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.svg
//         className="absolute top-[60%] left-0 w-[200%] h-16 opacity-30"
//         viewBox="0 0 1440 54"
//         preserveAspectRatio="none"
//       >
//         <motion.path
//           d="M0,27 C360,54 720,0 1080,27 C1260,40 1350,14 1440,27 L1440,0 L0,0 Z"
//           fill="rgba(200, 200, 200, 0.3)"
//           animate={{
//             d: [
//               "M0,27 C360,54 720,0 1080,27 C1260,40 1350,14 1440,27 L1440,0 L0,0 Z",
//               "M0,20 C360,0 720,54 1080,20 C1260,10 1350,40 1440,20 L1440,0 L0,0 Z",
//               "M0,27 C360,54 720,0 1080,27 C1260,40 1350,14 1440,27 L1440,0 L0,0 Z",
//             ],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </motion.svg>

//       {/* Green Wave */}
//       <motion.div
//         className="absolute w-[200%] h-1/3 bottom-0 left-0"
//         style={{
//           background: "linear-gradient(0deg, rgba(19, 136, 8, 0.15) 0%, rgba(19, 136, 8, 0.05) 100%)",
//         }}
//         animate={{
//           x: [0, -80, 0, 80, 0],
//           skewX: [0, 1, 0, -1, 0],
//         }}
//         transition={{
//           duration: 9,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
//       <motion.svg
//         className="absolute bottom-[5%] left-0 w-[200%] h-16 opacity-20"
//         viewBox="0 0 1440 54"
//         preserveAspectRatio="none"
//       >
//         <motion.path
//           d="M0,27 C480,0 960,54 1440,27 L1440,54 L0,54 Z"
//           fill="rgba(19, 136, 8, 0.4)"
//           animate={{
//             d: [
//               "M0,27 C480,0 960,54 1440,27 L1440,54 L0,54 Z",
//               "M0,35 C480,54 960,0 1440,35 L1440,54 L0,54 Z",
//               "M0,27 C480,0 960,54 1440,27 L1440,54 L0,54 Z",
//             ],
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </motion.svg>

//       {/* Floating particles for depth */}
//       {[...Array(6)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 rounded-full"
//           style={{
//             background: i % 3 === 0 ? "rgba(255, 153, 51, 0.3)" : i % 3 === 1 ? "rgba(255, 255, 255, 0.4)" : "rgba(19, 136, 8, 0.3)",
//             left: `${15 + i * 15}%`,
//             top: `${20 + (i % 3) * 30}%`,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             x: [0, 10, 0],
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 4 + i,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.5,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

const StartupCertificate = () => {
  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Animated Indian Flag Background */}
      {/* <WavyFlagBackground /> */}
      
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-orange-50/30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-600" />

      <Container className="relative z-10">
        <FadeIn>
          {/* Section Header - Compact */}
          <div className="text-center mb-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold shadow-lg shadow-green-500/25 mb-4"
            >
              <HiOutlineBadgeCheck className="w-4 h-4" />
              Government Registered Start-Up
            </motion.span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Official{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Registered under the{" "}
              <span className="font-semibold text-blue-700">
                Tripura Start-Up Policy
              </span>{" "}
              by the Govt. of Tripura
            </p>
          </div>

          {/* Main Certificate Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-7xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl shadow-blue-900/10 ring-1 ring-neutral-900/5">
              {/* Indian Flag Gradient Top Border */}
              <div className="h-2 bg-gradient-to-r from-orange-500 via-white to-green-600" />

              {/* Certificate Header - Compact */}
              <div className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
                  {/* Left: Government Logos - Larger on mobile */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
                    {/* DIT Logo */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative"
                    >
                      <div className="w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-white/95 backdrop-blur p-2 shadow-xl ring-2 ring-white/30 flex items-center justify-center">
                        <Image
                          src="/images/dit.png"
                          alt="Directorate of IT Tripura"
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </motion.div>

                    {/* Startup Tripura Logo */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="relative"
                    >
                      <div className="w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl bg-white/95 backdrop-blur p-2 shadow-xl ring-2 ring-white/30 flex items-center justify-center">
                        <Image
                          src="/images/startup_tripura.png"
                          alt="Startup Tripura"
                          width={80}
                          height={80}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </motion.div>

                    {/* Text Info - Compact */}
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                        Government of Tripura
                      </h3>
                      <p className="mt-1 text-blue-200 text-sm sm:text-base lg:text-lg">
                        Directorate of Information Technology
                      </p>
                    </div>
                  </div>

                  {/* Right: Certificate Number - Compact */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col items-center lg:items-end gap-2"
                  >
                    <div className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <p className="text-[10px] text-blue-200 uppercase tracking-wider mb-0.5">
                        Certificate No.
                      </p>
                      <div className="flex items-center gap-2">
                        <HiOutlineDocumentText className="w-5 h-5 text-amber-400" />
                        <span className="text-amber-300 font-mono font-bold text-lg lg:text-xl">
                          TR-ST-2025-102
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-green-400">
                      <BsCheckCircleFill className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">
                        Verified & Authenticated
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Certificate Body - Compact */}
              <div className="px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10 bg-gradient-to-b from-blue-50/50 to-white">
                {/* Status Badge + Company Info Combined */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 ring-2 ring-green-500/30 shadow-md shadow-green-500/10"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-green-800 font-extrabold text-base sm:text-lg tracking-wide">
                      REGISTERED START-UP
                    </span>
                    <HiOutlineShieldCheck className="w-6 h-6 text-green-600" />
                  </motion.div>
                </div>

                {/* Company Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center mb-6"
                >
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                    Ortus Finance Pvt Ltd
                  </h4>
                  <p className="mt-1.5 text-sm text-neutral-600">
                    <span className="font-semibold text-neutral-800">
                      Private Limited Company
                    </span>{" "}
                    | Services Industry
                  </p>
                </motion.div>

                {/* Details Grid - 4 columns, compact */}
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4">
                  <CertificateDetail
                    icon={FaIndustry}
                    label="Industry"
                    value="Services"
                  />
                  <CertificateDetail
                    icon={BsBuilding}
                    label="Type"
                    value="Pvt. Ltd"
                  />
                  <CertificateDetail
                    icon={FaRegCalendarCheck}
                    label="Issued"
                    value="07 Nov 2025"
                    highlight
                  />
                  <CertificateDetail
                    icon={HiOutlineLocationMarker}
                    label="Region"
                    value="Tripura, India"
                  />
                </div>

                {/* Compact Footer */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-neutral-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <HiOutlineGlobe className="w-5 h-5 text-blue-600" />
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
                      <HiOutlineBadgeCheck className="w-5 h-5 text-white" />
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

              {/* Indian Flag Gradient Bottom Border */}
              <div className="h-1.5 bg-gradient-to-r from-orange-500 via-white to-green-600" />
            </div>
          </motion.div>

          {/* Trust Indicators - Compact inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <HiOutlineShieldCheck className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-neutral-700">
                Govt. Verified
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <HiOutlineBadgeCheck className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-neutral-700">
                Officially Registered
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <HiOutlineDocumentText className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-neutral-700">
                Legal Certification
              </span>
            </div>
          </motion.div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default StartupCertificate;
