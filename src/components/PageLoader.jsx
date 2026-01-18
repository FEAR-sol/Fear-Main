import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-radial-gray"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center">
            {/* Animated FEAR Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              {/* Main FEAR Text */}
              <motion.h1 
                className="font-serif text-7xl font-normal tracking-tight text-fear-dark"
                initial={{ letterSpacing: '0.3em', opacity: 0 }}
                animate={{ letterSpacing: '-0.02em', opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                FEAR
              </motion.h1>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-48 h-0.5 bg-fear-dark/20 rounded-full mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-fear-dark rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>

            {/* Rotating Circle Accent */}
            <motion.div
              className="absolute -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <svg width="250" height="250" viewBox="0 0 250 250">
                <circle
                  cx="125"
                  cy="125"
                  r="115"
                  stroke="#1A1A1A"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="3 6"
                  opacity="0.15"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
