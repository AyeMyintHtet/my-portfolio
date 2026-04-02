import React, { lazy, Suspense, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Palette, Rocket, Zap, Award, Coffee } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const SkillCloud = lazy(() => import('./3D/SkillCloud'));

const StatCard = ({ icon: Icon, value, label, isDarkMode, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`p-4 sm:p-6 rounded-2xl text-center transition-all duration-300 ${isDarkMode
      ? 'bg-slate-800/50 border border-slate-700 hover:border-[#088395]/50'
      : 'bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#7AB2B2]'
      }`}
  >
    <div className={`inline-flex p-2 sm:p-3 rounded-xl mb-2 sm:mb-4 ${isDarkMode ? 'bg-[#088395]/20' : 'bg-[#EBF4F6]'
      }`}>
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#088395]" />
    </div>
    <div className={`text-2xl sm:text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
      {value}
    </div>
    <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
      {label}
    </div>
  </motion.div>
);

export default function AboutSection({ isDarkMode }) {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const show3DSkillCloud = !isMobile && !prefersReducedMotion;

  const stats = [
    { icon: Award, value: '6+', label: 'Years Experience' },
    { icon: Rocket, value: '8+', label: 'Projects Delivered' },
    { icon: Coffee, value: '10+', label: 'Personal Projects' },
    { icon: Zap, value: '100%', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      icon: Palette,
      title: 'Web Development',
      description: 'Building scalable web applications with modern frameworks and best practices.',
    },
    {
      icon: Code2,
      title: 'Backend Development',
      description: 'Experience with Express.js, MongoDB, SQL, Docker, Redis, and RabbitMQ.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and search engine visibility.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative py-16 sm:py-20 md:py-32 overflow-hidden ${isDarkMode
        ? 'bg-gradient-to-b from-slate-900 to-slate-950'
        : 'bg-gradient-to-b from-white to-slate-50'
        }`}
    >
      {/* 3D Scene */}
      {/* <div className="absolute inset-0 overflow-hidden opacity-40"> */}
      {/* <Scene3D isDarkMode={isDarkMode} scrollProgress={scrollProgress} variant="about" /> */}
      {/* </div> */}

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className={`absolute -top-1/2 -right-1/2 w-full h-full border rounded-full ${isDarkMode ? 'border-[#088395]/10' : 'border-[#7AB2B2]/20'
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
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDarkMode
            ? 'bg-[#088395]/20 text-[#7AB2B2]'
            : 'bg-[#EBF4F6] text-[#088395]'
            }`}>
            About Me
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-[#088395] to-[#09637E] bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
            I'm a passionate software engineer dedicated to building innovative solutions
            that make a difference.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-10 sm:mb-14 md:mb-20">
          {/* Left: Image and Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10 rounded-3xl overflow-hidden"
              >
                {show3DSkillCloud ? (
                  <Suspense fallback={<div className={`h-[300px] sm:h-[400px] md:h-[500px] ${isDarkMode ? 'bg-slate-800/30' : 'bg-slate-100/60'}`} />}>
                    <SkillCloud isDarkMode={isDarkMode} />
                  </Suspense>
                ) : (
                  <div className={`h-[280px] sm:h-[350px] md:h-[500px] w-full rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-start justify-center gap-3 sm:gap-4 ${isDarkMode ? 'bg-slate-800/40 border border-slate-700 text-slate-300' : 'bg-slate-100 border border-slate-200 text-slate-700'}`}>
                    <p className="text-lg font-semibold">Core Stack</p>
                    <p className="text-sm leading-relaxed">
                      React, Next.js, TypeScript, Node.js, Express.js, Docker, Redis, MongoDB, and SQL.
                    </p>
                    <p className="text-sm leading-relaxed">
                      3D cloud is disabled on mobile and when reduced motion is enabled.
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Decorative Elements */}
              <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-2xl -z-10 ${isDarkMode ? 'bg-violet-500/20' : 'bg-violet-200'
                }`} />
              <div className={`absolute -bottom-4 -left-4 w-32 h-32 rounded-full -z-10 ${isDarkMode ? 'bg-indigo-500/20' : 'bg-indigo-200'
                }`} />
            </div>
          </motion.div>

          {/* Right: Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 md:mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
            >
              Technical Experience
            </motion.h3>

            {/* <div className="space-y-6">
              {skills.map((item, index) => (
                <SkillBar
                  key={item.skill}
                  skill={item.skill}
                  percentage={item.percentage}
                  isDarkMode={isDarkMode}
                  delay={index * 0.1}
                />
              ))}
            </div> */}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className={`mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
            >
              I have 6+ years of experience building scalable FinTech, e-commerce, and real-time platforms across
              Southeast Asia. I specialize in React, TypeScript, and Next.js, with strong expertise in WebSocket-based
              real-time systems and role-based access control. I also work across backend infrastructure with Express.js,
              MongoDB, Docker, Redis, and RabbitMQ, and have a consistent track record of delivering production systems,
              mentoring engineers, and collaborating with cross-functional teams.
            </motion.p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-14 md:mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              isDarkMode={isDarkMode}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 ${isDarkMode
                ? 'bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700 hover:border-[#088395]/50'
                : 'bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#7AB2B2]'
                }`}
            >
              <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 md:mb-6 transition-all duration-300 ${isDarkMode
                ? 'bg-[#088395]/20 group-hover:bg-[#088395]/30'
                : 'bg-[#EBF4F6] group-hover:bg-[#7AB2B2]/20'
                }`}>
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#088395]" />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
