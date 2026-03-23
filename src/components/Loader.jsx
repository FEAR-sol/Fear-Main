import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-radial-gray overflow-hidden w-full max-w-full"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center w-full max-w-full px-4">
            {/* Animated FEAR Logo */}
            <motion.div
              className="relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              {/* Main FEAR Text */}
              <motion.h1 
                className="font-serif text-6xl sm:text-7xl md:text-8xl font-normal text-fear-dark text-center"
                style={{ letterSpacing: '-0.02em' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                FEAR
              </motion.h1>
            </motion.div>

            {/* Animated Tagline */}
            <motion.p
              className="font-josefin text-lg text-fear-text-gray mt-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Face Everything And Rise
            </motion.p>

            {/* Loading Bar */}
            <div className="w-48 sm:w-64 h-1 bg-fear-dark/20 rounded-full mt-8 overflow-hidden">
              <motion.div
                className="h-full bg-fear-dark rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>

            {/* Animated Dots */}
            <div className="flex gap-2 mt-6">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-fear-dark rounded-full"
                  initial={{ opacity: 0.3, scale: 0.8 }}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
