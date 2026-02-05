// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from './3D/Scene3D';

const Particle = ({ isDarkMode }) => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomDuration = 15 + Math.random() * 10;
  const randomSize = 2 + Math.random() * 4;

  return (
    <motion.div
      className={`absolute rounded-full ${isDarkMode ? 'bg-violet-500/30' : 'bg-violet-400/40'
        }`}
      style={{
        width: randomSize,
        height: randomSize,
        left: `${randomX}%`,
        bottom: '-10%',
      }}
      animate={{
        y: [0, -1200],
        x: [0, Math.random() * 100 - 50],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

const TypeWriter = ({ words, isDarkMode }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-flex items-center">
      <span className="bg-gradient-to-r from-[#088395] via-[#7AB2B2] to-[#09637E] bg-clip-text text-transparent">
        {currentText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className={`ml-1 w-1 h-12 md:h-16 ${isDarkMode ? 'bg-[#7AB2B2]' : 'bg-[#088395]'}`}
      />
    </span>
  );
};

export default function HeroSection({ isDarkMode }) {
  const containerRef = useRef(null);
  const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Explorer'];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDarkMode
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950'
        : 'bg-gradient-to-br from-slate-50 via-white to-violet-50'
        }`}
    >
      {/* 3D Scene Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }}
        >
          <Scene3D isDarkMode={isDarkMode} scrollProgress={scrollYProgress} variant="hero" />
        </motion.div>
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 ${isDarkMode
            ? 'bg-[linear-gradient(rgba(8,131,149,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(8,131,149,0.03)_1px,transparent_1px)]'
            : 'bg-[linear-gradient(rgba(8,131,149,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(8,131,149,0.05)_1px,transparent_1px)]'
            } bg-[size:60px_60px]`}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <Particle key={i} isDarkMode={isDarkMode} />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-[#088395]/20' : 'bg-[#7AB2B2]/30'
          }`}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className={`absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-[#09637E]/20' : 'bg-[#088395]/30'
          }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${isDarkMode
              ? 'bg-slate-800/50 border-slate-700 text-[#7AB2B2]'
              : 'bg-white/80 border-slate-200 text-[#088395] shadow-sm'
              }`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Available for hire</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
        >
          Hi, I'm{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-[#088395] via-[#7AB2B2] to-[#09637E] bg-clip-text text-transparent">
              Aye Myint Htet
            </span>
            <motion.svg
              viewBox="0 0 300 12"
              className="absolute -bottom-2 left-0 w-full"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.path
                d="M5 6 Q 150 0 295 6"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#088395" />
                  <stop offset="100%" stopColor="#09637E" />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8"
        >
          <TypeWriter words={roles} isDarkMode={isDarkMode} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
        >
          I craft beautiful, high-performance web applications with modern technologies.
          Passionate about creating seamless user experiences and clean code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="group relative px-8 py-6 text-lg rounded-full bg-gradient-to-r from-[#09637E] to-[#088395] hover:from-[#088395] hover:to-[#7AB2B2] text-white shadow-xl shadow-[#088395]/25 transition-all duration-300 hover:shadow-2xl hover:shadow-[#088395]/30 hover:-translate-y-1"
          >
            View My Work
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={`px-8 py-6 text-lg rounded-full transition-all duration-300 hover:-translate-y-1 ${isDarkMode
              ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
              : 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400'
              }`}
          >
            Download CV
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full transition-all duration-300 ${isDarkMode
                ? 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 hover:text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`p-2 rounded-full ${isDarkMode ? 'text-slate-500' : 'text-slate-400'
            }`}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}