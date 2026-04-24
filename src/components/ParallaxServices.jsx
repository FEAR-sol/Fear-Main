'use client';

import { motion } from 'framer-motion';
import ParallaxServiceCard from './ParallaxServiceCard';

const ParallaxServices = () => {
  const services = [
    { image: '/web.jpg', link: 'https://web.fearagency.in' },
    { image: '/APP.png', link: 'https://app.fearagency.in' },
    { image: '/AI.jpg', link: 'https://ai.fearagency.in/' },
    { image: '/branding.png', link: 'https://brand.fearagency.in/' },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-20 bg-fear-dark w-full">
      <motion.div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)' }}
        animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-12 sm:mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.div className="mb-4 flex items-center justify-center gap-4" variants={textVariants}>
            <div className="h-px w-12 bg-gray-400" />
            <p className="text-sm text-gray-400">Services</p>
            <div className="h-px w-12 bg-gray-400" />
          </motion.div>
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" variants={textVariants}>
            Four Pillars of<br />Forward Thinking.
          </motion.h2>
          <motion.div className="h-1 w-20 bg-white mb-6 mx-auto" variants={textVariants} />
          <motion.p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto" variants={textVariants}>
            We help small and mid-sized teams navigate the journey from vision to impact. Whether you're starting fresh or evolving what you've built, we guide you at every step.
          </motion.p>
        </motion.div>

        {/* Stacked cards — just scroll */}
        <div className="space-y-8 sm:space-y-12">
          {services.map((service, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ParallaxServiceCard image={service.image} link={service.link} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxServices;
