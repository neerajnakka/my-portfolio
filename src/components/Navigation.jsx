import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { useState } from 'react';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleResumeClick = () => {
    const resumeUrl =
      'https://drive.google.com/file/d/10vjXQMq8XNoW7YEMPKBjsRWiNiEVedgK/view';
    window.open(resumeUrl, '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full backdrop-blur-2xl bg-background/80 border-b border-border z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))] rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))] text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl">
                  NC
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  Neeraj Chandra
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary" />
                  Full-Stack & DevOps
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 group"
              >
                <span className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-muted-foreground group-hover:text-foreground'
                }`}>
                  {link.label}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))]"
                    layoutId="underline"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <motion.button
              onClick={handleResumeClick}
              className="ml-4 relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))] rounded-lg font-semibold text-sm text-primary-foreground overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-300"></span>
              <FileText className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Resume</span>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-2xl bg-background/95 border-t border-border"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary bg-white/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <motion.button
                onClick={() => {
                  handleResumeClick();
                  setIsOpen(false);
                }}
                className="w-full mt-2 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-[hsl(var(--gradient-blue))] rounded-lg text-base font-semibold text-primary-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="w-4 h-4" />
                View Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
