import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ProjectCard({ project, isDarkMode, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const hasLiveUrl = typeof project.liveUrl === 'string' && Boolean(project.liveUrl.trim()) && project.liveUrl !== '#';
  const hasGithubUrl = typeof project.githubUrl === 'string' && Boolean(project.githubUrl.trim()) && project.githubUrl !== '#';
  const hasActionLinks = hasLiveUrl || hasGithubUrl;
  const isActionVisible = isHovered || isFocused;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocused(false);
        }
      }}
      onTouchStart={() => setIsFocused(true)}
      tabIndex={hasActionLinks ? 0 : -1}
      className="group relative"
    >
      <div
        className={`relative overflow-hidden rounded-3xl transition-all duration-500 h-full ${isDarkMode
          ? 'bg-slate-800/50 border border-slate-700 hover:border-[#09637E]/50'
          : 'bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-[#09637E]/30'
          }`}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isActionVisible ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${isDarkMode
              ? 'bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent'
              : 'bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent'
              } ${isActionVisible ? 'opacity-100' : 'opacity-60'}`}
          />

          {/* Action Links */}
          {hasActionLinks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isActionVisible ? 1 : 0, y: isActionVisible ? 0 : 20 }}
              className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity ${isActionVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              {hasLiveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live project ${project.title}`}
                  tabIndex={isActionVisible ? 0 : -1}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-full bg-white/90 text-slate-900 shadow-lg hover:bg-white transition-all"
                >
                  <Eye className="w-5 h-5" />
                </motion.a>
              )}
              {hasGithubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title}`}
                  tabIndex={isActionVisible ? 0 : -1}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-full bg-white/90 text-slate-900 shadow-lg hover:bg-white transition-all"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              )}
            </motion.div>
          )}

          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-4 left-4"
            >
              <Badge className="bg-gradient-to-r from-[#09637E] to-[#088395] text-white border-0 px-3 py-1">
                Featured
              </Badge>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className={`text-sm font-medium mb-2 bg-gradient-to-r from-[#09637E] to-[#d3f4f9] bg-clip-text text-transparent`}>
            {project.category}
          </div>

          {/* Title */}
          <h3 className={`text-xl font-bold mb-3 group-hover:text-[#09637E] transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-sm mb-4 line-clamp-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode
                  ? 'bg-slate-700 text-slate-300'
                  : 'bg-slate-100 text-slate-700'
                  }`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Link */}
          {hasLiveUrl ? (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live project ${project.title}`}
              className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-[#09637E] to-[#088395] bg-clip-text text-transparent"
              whileHover={{ x: 5 }}
            >
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          ) : hasGithubUrl ? (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.title}`}
              className="inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-[#09637E] to-[#088395] bg-clip-text text-transparent"
              whileHover={{ x: 5 }}
            >
              View Source
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          ) : (
            <span className={`inline-flex items-center gap-2 text-sm font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              Link unavailable
            </span>
          )}
        </div>

        {/* Glow Effect on Hover */}
        <motion.div
          className={`absolute inset-0 rounded-3xl pointer-events-none ${isDarkMode ? 'bg-violet-500/5' : 'bg-violet-500/5'
            }`}
          animate={{ opacity: isActionVisible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
