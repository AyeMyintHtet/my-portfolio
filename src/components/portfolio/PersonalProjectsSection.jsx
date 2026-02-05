import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Code } from 'lucide-react';
import Scene3D from './3D/Scene3D';

const PersonalProjectCard = ({ project, isDarkMode, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: -10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="group perspective-1000"
  >
    <div
      className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 ${isDarkMode
          ? 'bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border border-slate-700 hover:border-[#088395]/50 hover:shadow-2xl hover:shadow-[#088395]/10'
          : 'bg-white border border-slate-200 hover:border-[#7AB2B2] hover:shadow-2xl hover:shadow-[#088395]/10'
        }`}
    >
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#09637E] via-[#088395] to-[#7AB2B2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
            }`}>
            <Code className="w-6 h-6 text-violet-500" />
          </div>
          <div className="flex gap-3">
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`p-2 rounded-lg transition-colors ${isDarkMode
                  ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                whileHover={{ scale: 1.1, rotate: -5 }}
                className={`p-2 rounded-lg transition-colors ${isDarkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-bold mb-3 group-hover:text-[#088395] transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode
                  ? 'bg-[#088395]/20 text-[#7AB2B2]'
                  : 'bg-[#EBF4F6] text-[#088395]'
                }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6">
          <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{project.stars}</span>
          </div>
          <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
            <GitFork className="w-4 h-4" />
            <span>{project.forks}</span>
          </div>
        </div>
      </div>

      {/* Hover Glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#088395]/5 to-[#09637E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
    </div>
  </motion.div>
);

export default function PersonalProjectsSection({ isDarkMode }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const personalProjects = [
    {
      id: 1,
      title: 'React Component Library',
      description: 'A collection of 50+ reusable React components with TypeScript support, Storybook documentation, and comprehensive testing.',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 1240,
      forks: 230,
    },
    {
      id: 2,
      title: 'AI Image Generator',
      description: 'An open-source AI-powered image generation tool using Stable Diffusion with a beautiful web interface.',
      technologies: ['Python', 'FastAPI', 'React', 'Tailwind'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 890,
      forks: 156,
    },
    {
      id: 3,
      title: 'VS Code Theme',
      description: 'A carefully crafted dark theme for Visual Studio Code with optimized syntax highlighting for 20+ languages.',
      technologies: ['JSON', 'CSS', 'VS Code API'],
      githubUrl: '#',
      liveUrl: null,
      stars: 2100,
      forks: 89,
    },
    {
      id: 4,
      title: 'CLI Task Manager',
      description: 'A powerful command-line task management tool with sync capabilities, productivity analytics, and Pomodoro timer.',
      technologies: ['Go', 'SQLite', 'Cobra'],
      githubUrl: '#',
      liveUrl: null,
      stars: 567,
      forks: 78,
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with 7-day forecasts, interactive maps, and severe weather alerts using multiple APIs.',
      technologies: ['Vue.js', 'Mapbox', 'Chart.js', 'OpenWeather'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 432,
      forks: 67,
    },
    {
      id: 6,
      title: 'Markdown Editor',
      description: 'A distraction-free markdown editor with live preview, export options, and cloud sync functionality.',
      technologies: ['Electron', 'React', 'Monaco Editor'],
      githubUrl: '#',
      liveUrl: '#',
      stars: 789,
      forks: 123,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`relative py-32 overflow-hidden ${isDarkMode
          ? 'bg-gradient-to-b from-slate-900 to-slate-950'
          : 'bg-gradient-to-b from-white to-slate-50'
        }`}
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <Scene3D isDarkMode={isDarkMode} scrollProgress={scrollProgress} variant="projects" />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-1/4 left-10 w-64 h-64 rounded-full blur-3xl ${isDarkMode ? 'bg-[#088395]/10' : 'bg-[#7AB2B2]/20'
            }`}
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-[#09637E]/10' : 'bg-[#088395]/20'
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
              ? 'bg-[#09637E]/20 text-[#7AB2B2]'
              : 'bg-[#EBF4F6] text-[#09637E]'
            }`}>
            Open Source
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Personal{' '}
            <span className="bg-gradient-to-r from-[#09637E] to-[#088395] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
            Side projects and open-source contributions that I build in my free time
            to explore new technologies and give back to the community.
          </p>
        </motion.div>

        {/* Total Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-16"
        >
          <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-sm border border-slate-200'
            }`}>
            <Star className="w-5 h-5 text-yellow-500" />
            <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              6,018
            </span>
            <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Total Stars</span>
          </div>
          <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-sm border border-slate-200'
            }`}>
            <GitFork className="w-5 h-5 text-[#088395]" />
            <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              743
            </span>
            <span className={isDarkMode ? 'text-slate-400' : 'text-slate-500'}>Total Forks</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <PersonalProjectCard
              key={project.id}
              project={project}
              isDarkMode={isDarkMode}
              index={index}
            />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 ${isDarkMode
                ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                : 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}