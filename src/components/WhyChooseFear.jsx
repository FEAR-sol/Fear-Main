import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseFear = () => {
  const features = [
    {
      title: 'Full Service Agency',
      description: 'From your first logo to AI-powered automation, from a high-converting website to scalable mobile apps.',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop',
      number: '01'
    },
    {
      title: 'Long Term Value',
      description: 'Every choice is made with your long term growth in mind',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
      number: '02'
    },
    {
      title: 'End-To-End Solutions',
      description: 'We understand your vision, align with your goals, and build solutions that evolve as your business grows.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
      number: '03'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const bannerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <motion.div 
        className="max-w-container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-8 sm:mb-12 md:mb-16 tracking-wider text-black"
          variants={titleVariants}
        >
          WHY CHOOSE FEAR?
        </motion.h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg relative group"
              style={{ backgroundColor: '#BFBCB6' }}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Number Badge */}
              <motion.div 
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-full flex items-center justify-center font-serif text-xs sm:text-sm font-bold"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.3, type: "spring" }}
              >
                {feature.number}
              </motion.div>

              {/* Image with Overlay */}
              <div className="h-40 sm:h-48 overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-200 z-10"
                />
                <motion.img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Content */}
              <motion.div 
                className="p-4 sm:p-6 md:p-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
              >
                <motion.h3 
                  className="text-lg sm:text-xl md:text-2xl font-serif mb-3 sm:mb-4 text-black"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 leading-relaxed text-xs sm:text-sm text-justify"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.05, duration: 0.3 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>

              {/* Bottom Accent Line */}
              <motion.div 
                className="h-1 bg-black"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          className="bg-fear-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
          variants={bannerVariants}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.2 }
          }}
        >
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            initial={{ x: -100 }}
            animate={{ x: 100 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 20,
              ease: "linear"
            }}
          >
            <div className="w-full h-full" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
            }} />
          </motion.div>

          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-3 sm:mb-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            We focus on Clarity, Consistency, and Long term value
          </motion.h3>
          <motion.p 
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto relative z-10 text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            Every design choice, line of code, and AI solution is created with your growth in mind
            not short-term delivery.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseFear;
