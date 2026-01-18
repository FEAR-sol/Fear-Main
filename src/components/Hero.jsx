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

  // Floating shapes data
  const floatingShapes = [
    { size: 300, delay: 0, duration: 20, x: '10%', y: '20%' },
    { size: 200, delay: 2, duration: 25, x: '80%', y: '60%' },
    { size: 150, delay: 4, duration: 18, x: '70%', y: '10%' },
    { size: 250, delay: 1, duration: 22, x: '15%', y: '70%' },
  ];

  const stats = [
    { number: '8+', label: 'Projects Delivered' },
    { number: '5+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Animated Background Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-fear-card/30 to-fear-card/10 blur-3xl hidden md:block"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
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

      <motion.div 
        className="max-w-container mx-auto text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Decorative Top Element */}
        <motion.div
          className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="h-px w-8 sm:w-16 bg-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.span 
            className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            WELCOME TO
          </motion.span>
          <motion.div 
            className="h-px w-8 sm:w-16 bg-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Title with Gradient */}
        <motion.div className="relative inline-block mb-4 sm:mb-6">
          <motion.h1 
            className="font-serif text-6xl sm:text-8xl md:text-hero font-normal tracking-tight relative z-10"
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
          
          {/* Decorative Brackets - Hidden on mobile */}
          <motion.div
            className="absolute -left-8 sm:-left-12 top-1/2 -translate-y-1/2 text-4xl sm:text-6xl text-fear-card font-serif hidden sm:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            [
          </motion.div>
          <motion.div
            className="absolute -right-8 sm:-right-12 top-1/2 -translate-y-1/2 text-4xl sm:text-6xl text-fear-card font-serif hidden sm:block"
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20 max-w-3xl mx-auto w-full"
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
