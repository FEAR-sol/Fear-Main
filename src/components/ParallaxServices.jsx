import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const ParallaxServices = () => {
  const services = [
    {
      title: 'Web Development',
      image: '/web.jpg',
      link: '#', // Replace with your actual link
     
    },
    {
      title: 'App Development',
      image: '/APP.png',
      link: '#', // Replace with your actual link
      
      
    },
    {
      title: 'AI Solutions',
      image: '/AI.jpg',
      link: '#', // Replace with your actual link
      
    },
    {
      title: 'Branding\nAnd Collaboration',
      image: '/branding.png',
      link: '#', // Replace with your actual link
      
    }
  ];

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-20 bg-fear-dark">
      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Sticky Text Section */}
          <motion.div 
            className="lg:sticky lg:top-32 lg:self-start h-fit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div
              className="mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4"
              variants={textVariants}
            >
              <motion.div
                className="h-px w-8 sm:w-12 bg-gray-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <motion.p 
                className="text-xs sm:text-sm text-gray-400"
              >
                Services
              </motion.p>
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6"
              variants={textVariants}
            >
              Four Pillars of<br />Forward Thinking.
            </motion.h2>

            <motion.div
              className="h-1 w-16 sm:w-20 bg-white mb-4 sm:mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            <motion.p 
              className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-justify"
              variants={textVariants}
            >
              We help small and mid-sized teams navigate the journey from vision to impact. Whether you're starting fresh or evolving what you've built, we guide you at every step.
            </motion.p>

            {/* Decorative Element */}
            <motion.div
              className="mt-6 sm:mt-8 flex gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1, type: "spring" }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Scrolling Services Section */}
          <div className="space-y-6 sm:space-y-8 py-4 sm:py-6 md:py-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="min-h-[20vh] sm:min-h-[25vh] lg:min-h-[30vh] flex items-center relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                viewport={{ once: false, margin: "-50px", amount: 0.3 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                {/* Number Badge */}
                <motion.div
                  className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center font-serif text-lg sm:text-xl font-bold text-black shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {index + 1}
                </motion.div>
                <div className="w-full">
                  <ServiceCard 
                    title={service.title} 
                    items={service.items}
                    image={service.image}
                    link={service.link}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxServices;
