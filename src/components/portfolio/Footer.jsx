import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer({ isDarkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <footer
      className={`relative py-20 overflow-hidden ${isDarkMode
        ? 'bg-slate-950 border-t border-slate-800'
        : 'bg-slate-100 border-t border-slate-200'
        }`}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${isDarkMode
        ? 'bg-gradient-to-t from-violet-950/20 to-transparent'
        : 'bg-gradient-to-t from-violet-100/50 to-transparent'
        }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className={`p-2 rounded-xl ${isDarkMode
                ? 'bg-gradient-to-br from-[#09637E] to-[#088395]'
                : 'bg-gradient-to-br from-[#088395] to-[#7AB2B2]'
                }`}>
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                Aye<span className="text-[#088395]">Folio</span>
              </span>
            </div>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
              Building beautiful digital experiences with modern technologies.
              Let's create something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-sm transition-colors ${isDarkMode
                      ? 'text-slate-400 hover:text-[#7AB2B2]'
                      : 'text-slate-600 hover:text-[#088395]'
                      }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
              Get in Touch
            </h3>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
              ayemyinthtet099@gmail.com
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-xl transition-colors ${isDarkMode
                    ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                    : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-50 shadow-sm'
                    }`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className={`flex flex-col md:flex-row items-center justify-between pt-8 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'
          }`}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm flex items-center gap-1 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'
              }`}
          >
            © 2026 Aye Myint Htet. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            and lots of coffee.
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className={`mt-4 md:mt-0 p-3 rounded-xl transition-colors ${isDarkMode
              ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              : 'bg-white text-slate-500 hover:text-slate-900 shadow-sm hover:shadow-md'
              }`}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}