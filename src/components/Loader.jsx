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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-radial-gray"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center">
            {/* Animated FEAR Logo */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              {/* Main FEAR Text */}
              <motion.h1 
                className="font-serif text-8xl font-normal tracking-tight text-fear-dark"
                initial={{ letterSpacing: '0.5em', opacity: 0 }}
                animate={{ letterSpacing: '-0.02em', opacity: 1 }}
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
            <div className="w-64 h-1 bg-fear-dark/20 rounded-full mt-8 overflow-hidden">
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

            {/* Rotating Circle Accent */}
            <motion.div
              className="absolute -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <svg width="300" height="300" viewBox="0 0 300 300">
                <circle
                  cx="150"
                  cy="150"
                  r="140"
                  stroke="#1A1A1A"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 8"
                  opacity="0.2"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
