'use client';

/**
 * HeroBackground — animated gradient mesh with floating financial icons.
 * Pure CSS animations, no external libs. Respects prefers-reduced-motion.
 */
export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      {/* Gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Floating icons */}
      <span className="hero-float hero-float-1">₹</span>
      <span className="hero-float hero-float-2">📈</span>
      <span className="hero-float hero-float-3">📊</span>

      <style jsx>{`
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
        }
        .hero-orb-1 {
          width: 400px;
          height: 400px;
          background: #3b82f6;
          top: -100px;
          right: -50px;
          animation: float-orb 8s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 300px;
          height: 300px;
          background: #10b981;
          bottom: -80px;
          left: 10%;
          animation: float-orb 10s ease-in-out infinite reverse;
        }
        .hero-orb-3 {
          width: 250px;
          height: 250px;
          background: #8b5cf6;
          top: 40%;
          right: 20%;
          animation: float-orb 12s ease-in-out infinite 2s;
        }
        .hero-float {
          position: absolute;
          font-size: 1.5rem;
          opacity: 0.08;
          animation: float-icon 6s ease-in-out infinite;
        }
        .hero-float-1 {
          top: 20%;
          right: 15%;
          animation-delay: 0s;
          font-size: 2.5rem;
          font-weight: 700;
        }
        .hero-float-2 {
          top: 60%;
          right: 30%;
          animation-delay: 2s;
        }
        .hero-float-3 {
          top: 35%;
          right: 45%;
          animation-delay: 4s;
        }
        @keyframes float-orb {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes float-icon {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-orb, .hero-float {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
