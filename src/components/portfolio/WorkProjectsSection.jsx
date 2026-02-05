import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Scene3D from './3D/Scene3D';

export default function WorkProjectsSection({ isDarkMode }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const filters = ['All', 'Web App', 'Mobile', 'E-Commerce', 'SaaS'];

  const projects = [
    {
      id: 1,
      title: 'FinTrack Dashboard',
      category: 'SaaS',
      description: 'A comprehensive financial tracking platform with real-time analytics, AI-powered insights, and seamless integrations with major banks.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'ShopEase E-Commerce',
      category: 'E-Commerce',
      description: 'Full-stack e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'HealthSync App',
      category: 'Mobile',
      description: 'Cross-platform health monitoring application with wearable device integration and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'HealthKit', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'TeamCollab Pro',
      category: 'Web App',
      description: 'Enterprise team collaboration platform with real-time communication, project management, and file sharing.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'WebSocket', 'Docker', 'GraphQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'CloudStack CRM',
      category: 'SaaS',
      description: 'Modern CRM system with AI-powered lead scoring, automated workflows, and comprehensive reporting.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['Angular', 'Python', 'Kubernetes', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'FoodieHub Delivery',
      category: 'Mobile',
      description: 'Food delivery platform with real-time order tracking, restaurant management, and driver optimization.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Node.js', 'Google Maps', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`relative py-32 overflow-hidden ${isDarkMode
          ? 'bg-gradient-to-b from-slate-950 to-slate-900'
          : 'bg-gradient-to-b from-slate-50 to-white'
        }`}
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <Scene3D isDarkMode={isDarkMode} scrollProgress={scrollProgress} variant="projects" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${isDarkMode
              ? 'bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_50%)]'
              : 'bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_50%)]'
            }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDarkMode
              ? 'bg-violet-500/20 text-violet-400'
              : 'bg-violet-100 text-violet-600'
            }`}>
            Work Projects
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Professional{' '}
            <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
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
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                  : isDarkMode
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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