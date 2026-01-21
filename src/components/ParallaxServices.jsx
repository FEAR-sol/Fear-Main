import React from 'react';
import { motion } from 'framer-motion';
import ParallaxServiceCard from './ParallaxServiceCard';

const ParallaxServices = () => {
  const services = [
    {
      title: 'Web Development',
      image: '/web.jpg',
      link: 'https://fear-web-dev.netlify.app/',
      items: [
        'Web Design',
        'Web Development', 
        'Host And Maintenance',
        'SEO optimization And Integration'
      ]
    },
    {
      title: 'App Development',
      image: '/APP.png',
      link: 'https://app-development2101.netlify.app/',
      items: [
        'App Design',
        'App Development',
        'Maintenance and Support', 
        'ASO and Integration'
      ]
    },
    {
      title: 'AI Solutions',
      image: '/AI.jpg',
      link: 'https://fear-ai-solutions.netlify.app/',
      items: [
        'AI Customization',
        'AI Automation',
        'AI Chatbot',
        'AI Voice Assistant'
      ]
    },
    {
      title: 'Branding\nAnd Collaboration',
      image: '/branding.png',
      link: 'https://fear-branding.netlify.app/',
      items: [
        'Logo Design',
        'Poster Design',
        'Thumbnail Design',
        'Brochure Design'
      ]
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
    <section id="services" className="relative py-12 sm:py-16 md:py-20 bg-fear-dark w-full max-w-full" style={{ overflow: 'hidden' }}>
      <div className="absolute inset-0 w-full h-full" style={{ overflow: 'hidden' }}>
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 w-full">
          {/* Enhanced Sticky Text Section */}
          <motion.div 
            className="lg:sticky lg:top-24 lg:self-start h-fit w-full max-w-full overflow-hidden"
            style={{
              // Ensure sticky behavior works properly
              position: 'sticky',
              top: '6rem', // 24 * 0.25rem = 6rem
              zIndex: 20
            }}
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
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

          {/* Enhanced Scrolling Services Section with Proper Height */}
          <div 
            className="w-full max-w-full overflow-hidden px-2 sm:px-0"
            style={{
              // Ensure enough height for proper sticky behavior
              minHeight: '200vh' // This ensures the sticky content stays until all cards are scrolled
            }}
          >
            <div className="space-y-8 sm:space-y-12 md:space-y-16 py-2 sm:py-4 md:py-6 lg:py-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center relative w-full max-w-full"
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
                  {/* Number Badge - Hidden on mobile to prevent overflow */}
                  <motion.div
                    className="absolute left-2 md:left-4 lg:-left-2 xl:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center font-serif text-sm sm:text-lg md:text-xl font-bold text-black shadow-lg z-10 hidden sm:flex mobile-hide"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {index + 1}
                  </motion.div>
                  <div className="w-full sm:pl-6 md:pl-8 lg:pl-8 xl:pl-12 max-w-full">
                    <ParallaxServiceCard 
                      image={service.image}
                      link={service.link}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxServices;
