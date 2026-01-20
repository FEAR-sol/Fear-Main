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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-radial-gray/95 backdrop-blur-sm w-full max-w-full overflow-hidden">
      <div className="max-w-container mx-auto px-4 sm:px-8 py-2 flex items-center justify-between w-full">
        <Link to="/" className="flex items-center flex-shrink-0">
          <img 
            src="/fear_logo.png" 
            alt="Fear Logo" 
            className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] lg:w-[75px] lg:h-[75px] xl:w-[80px] xl:h-[80px] object-contain"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 flex-shrink-0">
          <button 
            onClick={() => handlePageNavigation('/')}
            className="px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 bg-fear-dark text-white rounded-full text-xs lg:text-sm font-medium hover:bg-fear-dark/90 transition-colors whitespace-nowrap"
          >
            HOME
          </button>
          <button 
            onClick={handleServicesClick}
            className="px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 bg-fear-dark text-white rounded-full text-xs lg:text-sm font-medium hover:bg-fear-dark/90 transition-colors whitespace-nowrap"
          >
            SERVICES
          </button>
          <button 
            onClick={() => handlePageNavigation('/about')}
            className="px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 bg-fear-dark text-white rounded-full text-xs lg:text-sm font-medium hover:bg-fear-dark/90 transition-colors whitespace-nowrap"
          >
            ABOUT
          </button>
          <button 
            onClick={() => handlePageNavigation('/contact')}
            className="px-3 lg:px-4 xl:px-6 py-2 lg:py-2.5 bg-fear-dark text-white rounded-full text-xs lg:text-sm font-medium hover:bg-fear-dark/90 transition-colors whitespace-nowrap"
          >
            CONTACT
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-8 h-8 sm:w-10 sm:h-10 flex flex-col items-center justify-center gap-1 sm:gap-1.5 flex-shrink-0"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-5 sm:w-6 h-0.5 bg-black transition-all"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 sm:w-6 h-0.5 bg-black transition-all"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-5 sm:w-6 h-0.5 bg-black transition-all"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-radial-gray/98 backdrop-blur-sm border-t border-black/10 overflow-hidden w-full max-w-full"
          >
            <div className="px-4 py-6 flex flex-col gap-3 w-full">
              <button 
                onClick={() => handlePageNavigation('/')}
                className="w-full px-6 py-3 bg-fear-dark text-white rounded-full text-sm font-medium hover:bg-fear-dark/90 transition-colors"
              >
                HOME
              </button>
              <button 
                onClick={handleServicesClick}
                className="w-full px-6 py-3 bg-fear-dark text-white rounded-full text-sm font-medium hover:bg-fear-dark/90 transition-colors"
              >
                SERVICES
              </button>
              <button 
                onClick={() => handlePageNavigation('/about')}
                className="w-full px-6 py-3 bg-fear-dark text-white rounded-full text-sm font-medium hover:bg-fear-dark/90 transition-colors"
              >
                ABOUT
              </button>
              <button 
                onClick={() => handlePageNavigation('/contact')}
                className="w-full px-6 py-3 bg-fear-dark text-white rounded-full text-sm font-medium hover:bg-fear-dark/90 transition-colors"
              >
                CONTACT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
