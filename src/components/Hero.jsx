import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  // Floating shapes data - Safe positioning for mobile
  const floatingShapes = [
    { size: 200, delay: 0, duration: 20, x: '15%', y: '25%' },
    { size: 150, delay: 2, duration: 25, x: '75%', y: '65%' },
    { size: 120, delay: 4, duration: 18, x: '65%', y: '15%' },
    { size: 180, delay: 1, duration: 22, x: '20%', y: '75%' },
  ];

  const stats = [
    { number: '8+', label: 'Projects Delivered' },
    { number: '5+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 relative w-full max-w-full" style={{ overflow: 'hidden' }}>
      <div className="absolute inset-0 w-full h-full" style={{ overflow: 'hidden' }}>
      {/* Animated Background Shapes - Completely hidden on mobile */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-fear-card/30 to-fear-card/10 blur-3xl hidden lg:block mobile-hide"
          style={{
            width: Math.min(shape.size, 150), // Further reduced size
            height: Math.min(shape.size, 150),
            left: shape.x,
            top: shape.y,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      </div>

      <motion.div 
        className="max-w-container mx-auto text-center relative z-10 w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Decorative Top Element */}
        <motion.div
          className="flex items-center justify-center mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <motion.span 
            className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            WELCOME TO
          </motion.span>
        </motion.div>

        {/* Main Title with Gradient */}
        <motion.div className="relative inline-block mb-4 sm:mb-6 w-full max-w-full overflow-hidden">
          <motion.h1 
            className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-hero font-normal tracking-tight relative z-10 break-words"
            style={{
              background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            variants={titleVariants}
          >
            FEAR
          </motion.h1>
          
          {/* Decorative Brackets - Completely hidden on mobile */}
          <motion.div
            className="absolute left-4 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 text-2xl md:text-6xl text-fear-card font-serif hidden xl:block mobile-hide"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            [
          </motion.div>
          <motion.div
            className="absolute right-4 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 text-2xl md:text-6xl text-fear-card font-serif hidden xl:block mobile-hide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            ]
          </motion.div>
        </motion.div>

        {/* Subtitle with Animated Underline */}
        <motion.div className="relative inline-block mb-3 sm:mb-4" variants={itemVariants}>
          <motion.p 
            className="font-josefin text-lg sm:text-xl md:text-2xl text-gray-700 tracking-wide"
          >
            Face Everything And Rise
          </motion.p>
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-black to-transparent mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </motion.div>

        <motion.p 
          className="font-josefin text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 tracking-wide"
          variants={itemVariants}
        >
          We Design, Develop & Deploy
        </motion.p>

        {/* CTA Button with Enhanced Design */}
        <Link to="/contact">
          <motion.button 
            className="px-8 sm:px-10 py-3 sm:py-4 bg-fear-dark text-white rounded-full text-sm sm:text-base font-medium hover:bg-fear-dark/90 transition-all hover:shadow-lg relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact US</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </Link>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12 max-w-3xl mx-auto w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-fear-card/30 shadow-lg group-hover:shadow-xl transition-all" style={{ backgroundColor: '#BFBCB6' }}>
                <motion.h3 
                  className="text-3xl sm:text-4xl font-serif text-black mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: 2.2 + index * 0.1 
                  }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
              
              {/* Decorative Corner */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-black opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
