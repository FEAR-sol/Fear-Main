import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import ParallaxServiceCard from './ParallaxServiceCard';

const ParallaxServices = () => {
  const services = [
    { image: '/web.jpg', link: 'https://web.fearagency.in' },
    { image: '/APP.png', link: 'https://app.fearagency.in' },
    { image: '/AI.jpg', link: 'https://ai.fearagency.in/' },
    { image: '/branding.png', link: 'https://brand.fearagency.in/' },
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const n = services.length;

  const goTo = useCallback((i) => setCurrent((i + n) % n), [n]);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(p => (p + 1) % n), 5000);
  }, [n]);

  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); }, [resetTimer]);

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

        {/* Carousel */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Left Arrow */}
          <button onClick={() => { goTo(current - 1); resetTimer(); }}
            style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
            <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Viewport */}
          <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', borderRadius: '16px', position: 'relative' }}>
            {services.map((service, i) => (
              <div key={i} style={{
                position: i === 0 ? 'relative' : 'absolute',
                top: 0, left: 0, width: '100%',
                opacity: i === current ? 1 : 0,
                transform: `translateX(${(i - current) * 100}%)`,
                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease',
                pointerEvents: i === current ? 'auto' : 'none',
              }}>
                <ParallaxServiceCard image={service.image} link={service.link} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={() => { goTo(current + 1); resetTimer(); }}
            style={{ flexShrink: 0, width: '48px', height: '48px', borderRadius: '50%', background: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
            <svg width="20" height="20" fill="none" stroke="black" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
          {services.map((_, i) => (
            <button key={i} onClick={() => { goTo(i); resetTimer(); }}
              style={{ width: i === current ? '28px' : '8px', height: '8px', borderRadius: '4px', border: 'none', cursor: 'pointer', background: i === current ? 'white' : 'rgba(255,255,255,0.3)', transition: 'all 0.3s ease' }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxServices;
