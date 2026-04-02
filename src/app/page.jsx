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
// Removed SipCalculator as it's now a standalone page
import StartupCertificate from "@/components/StartupCertificate";
import Link from "next/link";
import { ArrowRight, Smartphone, Calendar } from "lucide-react";


export default function Home() {
  return (
    <main className="text-black">
      
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
            <Smartphone className="w-4 h-4" />
            <span>Download the Ortus Finance App today</span>
          </div>
          
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Let your financial success shine online with us!
          </h1>
          <p className="mt-6 text-xl text-neutral-600 leading-relaxed">
            <strong className="font-semibold text-blue-800">
              ORTUS FINANCE Pvt. Ltd.
            </strong>{" "}
            is founded by NISM-certified finance professionals from Tripura with{" "}
            <strong className="font-semibold">
              backgrounds in business administration and capital markets
            </strong>
            . Our AMFI-registered team (ARN-347142) ensures a disciplined, transparent,
            and ethical approach to mutual fund distribution.
          </p>
          <p className="mt-4 text-xl text-neutral-600 leading-relaxed">
            We prioritize investor education and assist clients in identifying
            suitable investment avenues through strategic guidance and
            data-backed insights. Experience seamless investing with our new mobile app.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.ortusfinance.app"
              target="_blank"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start Investing
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              href="https://elevate.ortusfinance.in"
              target="_blank"
              className="inline-flex justify-center items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Calendar className="w-4 h-4" />
              Book 30-min Consultation
            </Link>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Google Play Store
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Trusted by 450+ clients
            </div>
          </div>

        </FadeIn>
      </Container>
      <FeaturesSectionDemo />
      <StartupCertificate />
      <Services />
      <InvestmentPlans />
      <Clients />
      <Testimonial />
      <Faq />
      <ContactSection />
    </main>
  );
}
