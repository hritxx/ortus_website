import React from "react";
import dynamic from "next/dynamic";
import { FeaturesSectionDemo } from "@/components/FeatureSection";

const FinancialSurvey = dynamic(() => import("@/components/survey/FinancialSurvey"), {
  ssr: false,
  loading: () => null,
});

const Clients = dynamic(() => import("@/components/Clients"));
const InvestmentPlans = dynamic(() => import("@/components/InvestmentPlans"));
const StartupCertificate = dynamic(() => import("@/components/StartupCertificate"));
const Universities = dynamic(() => import("@/components/Universities"));
const Testimonial = dynamic(() => import("@/components/Testimonial"));
const Faq = dynamic(() => import("@/components/Faq"));
const HeroSection = dynamic(() => import("@/components/hero/HeroSection"), {
  loading: () => null,
});
const Services = dynamic(() => import("@/components/Services"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

export default function Home() {
  return (
    <main className="text-black">
      {/* Financial Health Checkup Survey — modal overlay + FAB */}
      <FinancialSurvey />
      
      <HeroSection />
      <FeaturesSectionDemo />
      <StartupCertificate />
      <Services />
      <InvestmentPlans />
      <Clients />
      <Universities />
      <Testimonial />
      <Faq />
      <ContactSection />
    </main>
  );
}
