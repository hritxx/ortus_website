'use client';
import React from 'react';

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#fafcff]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Radial gradient overlays */}
      <div className="absolute top-[-10%] right-[-5%] w-[760px] h-[760px] rounded-full bg-[radial-gradient(circle_at_center,#dbeafe,transparent_70%)] opacity-55 blur-2xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle_at_center,#eff6ff,transparent_70%)] opacity-60 blur-2xl"></div>
      
      {/* Noise texture for premium feel */}
      <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
    </div>
  );
}
