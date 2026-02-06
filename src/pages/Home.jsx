import React, { useState, useEffect } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillCloud from '@/components/portfolio/3D/SkillCloud';
import WorkProjectsSection from '@/components/portfolio/WorkProjectsSection';
import PersonalProjectsSection from '@/components/portfolio/PersonalProjectsSection';
import Footer from '@/components/portfolio/Footer';

import Lenis from 'lenis';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);

    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'
      }`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HeroSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      {/* <SkillCloud isDarkMode={isDarkMode} /> */}
      <WorkProjectsSection isDarkMode={isDarkMode} />
      <PersonalProjectsSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}