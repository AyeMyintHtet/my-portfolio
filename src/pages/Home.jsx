import React, { useState, useEffect } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import WorkProjectsSection from '@/components/portfolio/WorkProjectsSection';
import PersonalProjectsSection from '@/components/portfolio/PersonalProjectsSection';
import Footer from '@/components/portfolio/Footer';

import Lenis from 'lenis';

const THEME_STORAGE_KEY = 'portfolio-theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

function getInitialThemeState() {
  if (typeof window === 'undefined') {
    return { isDarkMode: true, followsSystem: false };
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return { isDarkMode: savedTheme === 'dark', followsSystem: false };
  }

  return { isDarkMode: window.matchMedia(DARK_QUERY).matches, followsSystem: true };
}

export default function Home() {
  const [themeState, setThemeState] = useState(getInitialThemeState);
  const { isDarkMode, followsSystem } = themeState;

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

    let rafId = 0;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!followsSystem) return undefined;

    const mediaQuery = window.matchMedia(DARK_QUERY);
    const handleChange = (event) => {
      setThemeState((prev) => {
        if (!prev.followsSystem) return prev;
        return { ...prev, isDarkMode: event.matches };
      });
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [followsSystem]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', isDarkMode);
    root.style.colorScheme = isDarkMode ? 'dark' : 'light';

    if (followsSystem) {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      window.localStorage.setItem(THEME_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode, followsSystem]);

  const toggleTheme = () => {
    setThemeState((prev) => ({
      isDarkMode: !prev.isDarkMode,
      followsSystem: false,
    }));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'
      }`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <HeroSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <WorkProjectsSection isDarkMode={isDarkMode} />
      <PersonalProjectsSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
