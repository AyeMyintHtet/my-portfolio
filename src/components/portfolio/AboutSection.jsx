import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Palette, Rocket, Zap, Award, Coffee } from 'lucide-react';
import Scene3D from './3D/Scene3D';

const SkillBar = ({ skill, percentage, isDarkMode, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="mb-4"
  >
    <div className="flex justify-between mb-2">
      <span className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
        {skill}
      </span>
      <span className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
        {percentage}%
      </span>
    </div>
    <div className={`h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay: delay + 0.3, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="h-full rounded-full bg-gradient-to-r from-[#088395] to-[#09637E]"
      />
    </div>
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label, isDarkMode, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    className={`p-6 rounded-2xl text-center transition-all duration-300 ${isDarkMode
        ? 'bg-slate-800/50 border border-slate-700 hover:border-[#088395]/50'
        : 'bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#7AB2B2]'
      }`}
  >
    <div className={`inline-flex p-3 rounded-xl mb-4 ${isDarkMode ? 'bg-[#088395]/20' : 'bg-[#EBF4F6]'
      }`}>
      <Icon className="w-6 h-6 text-[#088395]" />
    </div>
    <div className={`text-3xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
      {value}
    </div>
    <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
      {label}
    </div>
  </motion.div>
);

export default function AboutSection({ isDarkMode }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const skills = [
    { skill: 'React / Next.js', percentage: 95 },
    { skill: 'TypeScript', percentage: 90 },
    { skill: 'Node.js / Express', percentage: 88 },
    { skill: 'Python / Django', percentage: 82 },
    { skill: 'UI/UX Design', percentage: 78 },
  ];

  const stats = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Rocket, value: '50+', label: 'Projects Delivered' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Zap, value: '99%', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Building scalable web applications with modern frameworks and best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful interfaces that users love to interact with.',
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
      className={`relative py-32 overflow-hidden ${isDarkMode
          ? 'bg-gradient-to-b from-slate-900 to-slate-950'
          : 'bg-gradient-to-b from-white to-slate-50'
        }`}
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <Scene3D isDarkMode={isDarkMode} scrollProgress={scrollProgress} variant="about" />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className={`absolute -top-1/2 -right-1/2 w-full h-full border rounded-full ${isDarkMode ? 'border-[#088395]/10' : 'border-[#7AB2B2]/20'
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
          className="text-center mb-20"
        >
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDarkMode
              ? 'bg-[#088395]/20 text-[#7AB2B2]'
              : 'bg-[#EBF4F6] text-[#088395]'
            }`}>
            About Me
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-[#088395] to-[#09637E] bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
            I'm a passionate software engineer dedicated to building innovative solutions
            that make a difference.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
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
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                  alt="Profile"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className={`absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl z-20 ${isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-100'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      100%
                    </div>
                    <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Project Success
                    </div>
                  </div>
                </div>
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
              className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}
            >
              My Technical Skills
            </motion.h3>

            <div className="space-y-6">
              {skills.map((item, index) => (
                <SkillBar
                  key={item.skill}
                  skill={item.skill}
                  percentage={item.percentage}
                  isDarkMode={isDarkMode}
                  delay={index * 0.1}
                />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className={`mt-8 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}
            >
              With a strong foundation in both frontend and backend technologies,
              I bring ideas to life through clean, efficient code and thoughtful design.
              I'm constantly learning and adapting to new technologies to deliver
              the best solutions.
            </motion.p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
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
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group p-8 rounded-3xl transition-all duration-300 ${isDarkMode
                  ? 'bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700 hover:border-[#088395]/50'
                  : 'bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#7AB2B2]'
                }`}
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 ${isDarkMode
                  ? 'bg-[#088395]/20 group-hover:bg-[#088395]/30'
                  : 'bg-[#EBF4F6] group-hover:bg-[#7AB2B2]/20'
                }`}>
                <service.icon className="w-8 h-8 text-[#088395]" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}