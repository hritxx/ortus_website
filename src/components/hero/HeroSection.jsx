'use client';
import React from 'react';
import Container from '@/components/Container';
import HeroBackground from './HeroBackground';
import HeroTextContent from './HeroTextContent';
import HeroVisuals from './HeroVisuals';
import MetricCards from './MetricCards';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-white pt-24 sm:pt-32 pb-16 lg:pb-24">
      <HeroBackground />
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <div className="w-full lg:w-[55%] shrink-0">
            <HeroTextContent />
          </div>

          {/* Right Column: 3D Visuals */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end">
            <HeroVisuals />
          </div>

        </div>

        {/* Bottom Section: Metric Cards */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
           <MetricCards />
        </div>
      </Container>
    </section>
  );
}
