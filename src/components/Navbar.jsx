import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Scroll detection — show solid bg when scrolled
  useEffect(() => {
    // The page scrolls on the main element, not window
    const scrollEl = document.querySelector('main') || window;
    const handleScroll = () => {
      const scrollTop = scrollEl === window ? window.scrollY : scrollEl.scrollTop;
      setScrolled(scrollTop > 10);
    };
    scrollEl.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close menu
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    // Small delay so the toggle click doesn't immediately close
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 50);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

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
    { label: 'ARTICLES', action: () => handlePageNavigation('/articles'), style: 'dark' },
    { label: 'BLOGS', action: () => handlePageNavigation('/blogs'), style: 'dark' },
  ];

  return (
    <>
      {/* Full-screen overlay to catch outside clicks */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/10"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md shadow-md border-b border-black/8'
            : 'bg-radial-gray/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-8 py-2 flex items-center justify-between w-full">
          {/* Logo — larger on mobile */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/fear_logo.png"
              alt="Fear Logo"
              className="w-[76px] h-[76px] sm:w-[72px] sm:h-[72px] lg:w-[80px] lg:h-[80px] xl:w-[86px] xl:h-[86px] object-contain"
            />
          </Link>

          {/* Right side: contact icon + hamburger */}
          <div className="flex items-center gap-2">
            {/* Contact icon button */}
            <motion.button
              onClick={() => handlePageNavigation('/contact')}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-fear-dark text-white hover:bg-fear-dark/85 transition-colors"
              aria-label="Contact us"
              title="Contact"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.button>

            {/* Hamburger / Cross toggle */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full hover:bg-fear-card/40 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-[22px] h-[22px] flex flex-col justify-center items-center gap-[5px] relative">
                {/* Top bar */}
                <span
                  className="block h-[2px] w-full bg-black rounded-full transition-all duration-250 origin-center"
                  style={{
                    transform: isMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                  }}
                />
                {/* Middle bar */}
                <span
                  className="block h-[2px] w-full bg-black rounded-full transition-all duration-200"
                  style={{
                    opacity: isMenuOpen ? 0 : 1,
                    transform: isMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                  }}
                />
                {/* Bottom bar */}
                <span
                  className="block h-[2px] w-full bg-black rounded-full transition-all duration-250 origin-center"
                  style={{
                    transform: isMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Dropdown menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden border-t border-black/10 bg-white/98 backdrop-blur-md w-full"
            >
              <div className="max-w-container mx-auto px-4 sm:px-8 py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={link.action}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18, delay: i * 0.04 }}
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
    </>
  );
};

export default Navbar;
