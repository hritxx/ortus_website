import React from "react";
import Clients from "@/components/Clients";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";

import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";
import { FeaturesSectionDemo } from "@/components/FeatureSection";
import InvestmentPlans from "@/components/InvestmentPlans";
import { StatList, StatListItem } from "@/components/StatList";
import StartupCertificate from "@/components/StartupCertificate";
import Universities from "@/components/Universities";
import Link from "next/link";
import { ArrowRight, Smartphone, Calendar } from "lucide-react";
import FinancialSurvey from "@/components/survey/FinancialSurvey";
import HeroSection from "@/components/hero/HeroSection";

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
