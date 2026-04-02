import React, { lazy, Suspense, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { useIsMobile } from '@/hooks/use-mobile';

const Scene3D = lazy(() => import('./3D/Scene3D'));

export default function WorkProjectsSection({ isDarkMode }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const show3DBackground = !isMobile && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const filters = ['All', 'Web App', 'E-Commerce', 'SaaS'];

  const projects = [
    {
      id: 1,
      title: 'Encrypted Chat App',
      category: 'SaaS',
      description: 'End-to-end encrypted real-time chat application with secure key exchange, peer-to-peer messaging, and offline message delivery.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'WebSocket'],
      liveUrl: 'https://secured-chatapp.vercel.app',
      githubUrl: 'https://github.com/AyeMyintHtet/encrypted-chatapp',
      featured: true,
    },
    {
      id: 2,
      title: 'Buffet POS System',
      category: 'Web App',
      description: 'Full-featured restaurant point-of-sale system with order management, table tracking, and real-time kitchen display for buffet operations.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
      liveUrl: 'https://my-restaurant-pos.vercel.app',
      githubUrl: 'https://github.com/AyeMyintHtet/my-buffet-pos',
      featured: true,
    },
    {
      id: 3,
      title: 'Sales Analytics Dashboard',
      category: 'SaaS',
      description: 'Intelligent sales analytics platform with price tracking, competitive insights, and data-driven reporting for business decision-making.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['TypeScript', 'React', 'Node.js', 'Chart.js'],
      liveUrl: 'https://sales-analytics-i87l.onrender.com/',
      githubUrl: 'https://github.com/AyeMyintHtet/sales-analytics',
      featured: true,
    },
    {
      id: 4,
      title: 'FinTech Dashboard',
      category: 'SaaS',
      description: 'Comprehensive financial tracking dashboard with real-time analytics, portfolio management, and interactive data visualizations.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      liveUrl: null,
      githubUrl: 'https://github.com/AyeMyintHtet/fintech-dashboard',
      featured: false,
    },
    {
      id: 5,
      title: 'GrabNGo E-Commerce',
      category: 'E-Commerce',
      description: 'Modern e-commerce platform with product browsing, cart management, order processing, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://grabngo-brhy.onrender.com/',
      githubUrl: 'https://github.com/AyeMyintHtet/grabngo',
      featured: false,
    },
    {
      id: 6,
      title: 'Today Ogilvy',
      category: 'Web App',
      description: 'Corporate website for Today Ogilvy, a leading advertising and communications agency, featuring dynamic content and modern brand experience.',
      image: '/ogilvy.png',
      technologies: ['React', 'Next.js', 'TypeScript', 'CMS'],
      liveUrl: 'https://www.todayogilvy.com/',
      githubUrl: null,
      featured: true,
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`relative py-16 sm:py-20 md:py-32 overflow-hidden ${isDarkMode
        ? 'bg-gradient-to-b from-slate-950 to-slate-900'
        : 'bg-gradient-to-b from-slate-50 to-white'
        }`}
    >
      {/* 3D Scene */}
      {show3DBackground && (
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Suspense fallback={null}>
            <Scene3D isDarkMode={isDarkMode} scrollProgress={scrollProgress} variant="projects" />
          </Suspense>
        </div>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${isDarkMode
            ? 'bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_50%)]'
            }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDarkMode
            ? 'bg-[#09637E]/20 text-[#7AB2B2]'
            : 'bg-[#EBF4F6] text-[#09637E]'
            }`}>
            Work Projects
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Professional{' '}
            <span className="bg-gradient-to-r from-[#09637E] to-[#088395] bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
            Showcasing the projects I've delivered for clients and companies,
            built with cutting-edge technologies and best practices.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex overflow-x-auto sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 pb-2 sm:pb-0 scrollbar-hide"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeFilter === filter
                ? 'bg-gradient-to-r from-[#09637E] to-[#088395] text-white shadow-lg shadow-[#09637E]/25'
                : isDarkMode
                  ? 'bg-[#09637E]/20 text-[#7AB2B2]'
                  : 'bg-[#EBF4F6] text-[#09637E]'
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
