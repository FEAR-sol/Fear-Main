import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handlePageNavigation = (path) => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
  };

  const navLinks = [
    { label: 'HOME', action: () => handlePageNavigation('/'), style: 'dark' },
    { label: 'SERVICES', action: handleServicesClick, style: 'dark' },
    { label: 'ABOUT', action: () => handlePageNavigation('/about'), style: 'dark' },
    { label: 'CONTACT', action: () => handlePageNavigation('/contact'), style: 'dark' },
    { label: 'ARTICLES', action: () => handlePageNavigation('/articles'), style: 'light' },
    { label: 'BLOGS', action: () => handlePageNavigation('/blogs'), style: 'light' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-radial-gray/95 backdrop-blur-sm w-full max-w-full overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-8 py-2 flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src="/fear_logo.png"
            alt="Fear Logo"
            className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[80px] xl:h-[80px] object-contain"
          />
        </Link>

        {/* Hamburger — always visible */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 flex-shrink-0 rounded-full hover:bg-fear-card/40 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-6 h-0.5 bg-black block"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-black block"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-6 h-0.5 bg-black block"
          />
        </button>
      </div>

      {/* Dropdown menu — all screen sizes */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="bg-radial-gray/98 backdrop-blur-sm border-t border-black/10 overflow-hidden w-full max-w-full"
          >
            <div className="max-w-container mx-auto px-4 sm:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {navLinks.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={link.action}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full px-4 py-3 rounded-full text-sm font-medium transition-colors ${
                    link.style === 'dark'
                      ? 'bg-fear-dark text-white hover:bg-fear-dark/90'
                      : 'bg-fear-card text-fear-dark hover:bg-fear-card/80 border border-fear-dark/20'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
