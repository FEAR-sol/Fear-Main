import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-radial-gray overflow-hidden w-full max-w-full"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center w-full max-w-full px-4">
            {/* Animated FEAR Logo */}
            <motion.div
              className="relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              {/* Main FEAR Text */}
              <motion.h1 
                className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-fear-dark text-center"
                style={{ letterSpacing: '-0.02em' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                FEAR
              </motion.h1>
            </motion.div>

            {/* Loading Bar */}
            <div className="w-36 sm:w-48 h-0.5 bg-fear-dark/20 rounded-full mt-6 overflow-hidden">
              <motion.div
                className="h-full bg-fear-dark rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
