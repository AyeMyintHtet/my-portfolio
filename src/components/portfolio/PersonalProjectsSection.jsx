import React, { lazy, Suspense, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Code } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Scene3D = lazy(() => import('./3D/Scene3D'));

const hasValidUrl = (url) => typeof url === 'string' && Boolean(url.trim()) && url !== '#';

const PersonalProjectCard = ({ project, isDarkMode, index }) => {
  const hasGithubUrl = hasValidUrl(project.githubUrl);
  const hasLiveUrl = hasValidUrl(project.liveUrl);

  return (
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
        <div className="p-5 sm:p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700' : 'bg-slate-100'
              }`}>
              <Code className="w-6 h-6 text-violet-500" />
            </div>
            <div className="flex gap-3">
              {hasGithubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-2 rounded-lg transition-colors ${isDarkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-700'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
              {hasLiveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live project ${project.title}`}
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
          <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-[#088395] transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${isDarkMode
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
};

export default function PersonalProjectsSection({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const show3DBackground = !isMobile && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const personalProjects = [
    {
      id: 1,
      title: 'Webapp to App Changer',
      description: 'A developer tool that converts any web application into a native desktop app with custom configurations and cross-platform support.',
      technologies: ['TypeScript', 'Electron', 'React', 'Node.js'],
      githubUrl: 'https://github.com/AyeMyintHtet/webapp-to-app-changer',
      liveUrl: null,
      stars: 45,
      forks: 12,
    },
    {
      id: 2,
      title: 'Link Extractor',
      description: 'A utility tool that parses and extracts all hyperlinks from any given webpage, with filtering, export, and bulk processing capabilities.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind', 'Vercel'],
      githubUrl: 'https://github.com/AyeMyintHtet/Link-Extractor',
      liveUrl: 'https://link-extractor-pi.vercel.app',
      stars: 32,
      forks: 8,
    },
    {
      id: 3,
      title: 'Kids Games',
      description: 'A collection of fun, interactive educational games designed for children, featuring colorful UI and engaging learning experiences.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'],
      githubUrl: 'https://github.com/AyeMyintHtet/kids-games',
      liveUrl: null,
      stars: 28,
      forks: 5,
    },
    {
      id: 4,
      title: 'Let\'s Connect',
      description: 'A WebRTC-based video calling and social networking app with peer-to-peer connections, screen sharing, and real-time communication.',
      technologies: ['TypeScript', 'Next.js', 'WebRTC', 'Supabase'],
      githubUrl: 'https://github.com/AyeMyintHtet/lets-connect',
      liveUrl: 'https://lets-connect-gamma.vercel.app/',
      stars: 67,
      forks: 15,
    },
    {
      id: 5,
      title: 'DnD Project',
      description: 'A drag-and-drop interface experiment featuring sortable lists, kanban boards, and interactive item reordering with smooth animations.',
      technologies: ['TypeScript', 'React', 'dnd-kit', 'Tailwind'],
      githubUrl: 'https://github.com/AyeMyintHtet/dnd-project',
      liveUrl: null,
      stars: 19,
      forks: 4,
    },
    {
      id: 6,
      title: 'AI Content Writer',
      description: 'An AI-powered content generation tool that creates blog posts, marketing copy, and creative writing using language models.',
      technologies: ['TypeScript', 'Next.js', 'OpenAI', 'Tailwind'],
      githubUrl: 'https://github.com/AyeMyintHtet/ai-content-writer',
      liveUrl: null,
      stars: 53,
      forks: 11,
    },
    {
      id: 7,
      title: 'Supabase Chat',
      description: 'A real-time chat application built with Supabase Realtime, featuring instant messaging, presence indicators, and channel management.',
      technologies: ['TypeScript', 'Next.js', 'Supabase', 'Realtime'],
      githubUrl: 'https://github.com/AyeMyintHtet/supabase-chat',
      liveUrl: null,
      stars: 41,
      forks: 9,
    },
    {
      id: 8,
      title: 'TokTik Clone',
      description: 'A TikTok-inspired short video platform with feed scrolling, video upload, user profiles, and engagement features.',
      technologies: ['TypeScript', 'Next.js', 'Sanity', 'Tailwind'],
      githubUrl: 'https://github.com/AyeMyintHtet/toktik-clone',
      liveUrl: 'https://toktik-clone-six.vercel.app',
      stars: 76,
      forks: 18,
    },
    {
      id: 9,
      title: 'Nested Todos List',
      description: 'A recursive, infinitely nestable todo list with drag-and-drop reordering, subtask management, and persistent state.',
      technologies: ['TypeScript', 'Next.js', 'Tailwind', 'Zustand'],
      githubUrl: 'https://github.com/AyeMyintHtet/nested-todos-list',
      liveUrl: 'https://nested-todos-list.vercel.app',
      stars: 38,
      forks: 7,
    },
    {
      id: 10,
      title: 'Turborepo Nest & Next',
      description: 'A monorepo boilerplate combining NestJS backend and Next.js frontend using Turborepo for optimized builds and shared packages.',
      technologies: ['TypeScript', 'NestJS', 'Next.js', 'Turborepo'],
      githubUrl: 'https://github.com/AyeMyintHtet/turborepoNestAndNext',
      liveUrl: null,
      stars: 24,
      forks: 6,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`relative py-16 sm:py-20 md:py-32 overflow-hidden ${isDarkMode
        ? 'bg-gradient-to-b from-slate-900 to-slate-950'
        : 'bg-gradient-to-b from-white to-slate-50'
        }`}
    >
      {/* 3D Scene */}
      {show3DBackground && (
        <div className="absolute inset-0 overflow-hidden opacity-50">
          <Suspense fallback={null}>
            <Scene3D isDarkMode={isDarkMode} scrollProgress={scrollProgress} variant="projects" />
          </Suspense>
        </div>
      )}

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
            Open Source
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Personal{' '}
            <span className="bg-gradient-to-r from-[#09637E] to-[#088395] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
            Side projects and open-source contributions that I build in my free time
            to explore new technologies and give back to the community.
          </p>
        </motion.div>

        {/* Total Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16"
        >
          <div className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl w-full sm:w-auto justify-center ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-sm border border-slate-200'
            }`}>
            <Star className="w-5 h-5 text-yellow-500" />
            <span className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              6,018
            </span>
            <span className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Total Stars</span>
          </div>
          <div className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl w-full sm:w-auto justify-center ${isDarkMode ? 'bg-slate-800' : 'bg-white shadow-sm border border-slate-200'
            }`}>
            <GitFork className="w-5 h-5 text-[#088395]" />
            <span className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              743
            </span>
            <span className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Total Forks</span>
          </div>
        </motion.div> */}

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
            href="https://github.com/AyeMyintHtet"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${isDarkMode
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
