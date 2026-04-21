import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TICKER_ITEMS = [
  'Web Development', 'AI Automation', 'Mobile Apps', 'Brand Identity',
  'Product Design', 'AI Chatbots', 'SEO & Growth', 'UI/UX Design',
];

// Timestamp-based RAF ticker — consistent speed on all devices including mobile
const SPEED_PX_PER_SEC = 80; // px per second — increase to go faster

const Ticker = () => {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = (timestamp) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      // Move by exact pixels based on elapsed ms — frame-rate independent
      xRef.current -= (SPEED_PX_PER_SEC * delta) / 1000;

      // Reset when one full copy has scrolled past
      const halfWidth = track.scrollWidth / 4; // 4 copies, reset at 1/4
      if (Math.abs(xRef.current) >= halfWidth) {
        xRef.current = 0;
      }

      track.style.transform = `translateX(${xRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, []);

  // 4 copies so it never gaps on any screen width
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          width: 'max-content',
          willChange: 'transform',
          transform: 'translateX(0)',
          WebkitTransform: 'translateX(0)',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            className="inline-flex items-center gap-8 px-4 text-fear-card/55 text-xs tracking-[0.22em] uppercase font-medium"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-fear-card/25 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};

const stats = [
  { number: '8+', label: 'Products Shipped' },
  { number: '5+', label: 'Happy Clients' },
  { number: '100%', label: 'Satisfaction' },
];

const pills = [
  { icon: '⬡', label: 'Web Platforms' },
  { icon: '◈', label: 'Mobile Apps' },
  { icon: '◎', label: 'AI Automation' },
  { icon: '◇', label: 'Brand Identity' },
];

const EASE = [0.16, 1, 0.3, 1];

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col bg-radial-gray relative"
      style={{ touchAction: 'auto', WebkitOverflowScrolling: 'touch' }}
    >
      {/* ── Background grid + glow ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #c4bdb3 0%, transparent 65%)' }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #c4bdb3 0%, transparent 65%)' }}
        />
        {/* Floating orb animation */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #8B7355 0%, transparent 70%)' }}
          animate={{ y: [0, -24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 pt-28 pb-10">
        <div className="w-full max-w-5xl mx-auto">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 text-center"
          >
            <span className="h-px w-8 bg-fear-dark/30 hidden sm:block" />
            <span className="text-fear-text-gray text-xs tracking-[0.35em] uppercase font-medium text-center w-full sm:w-auto">
              We Design, Develop & Deploy
            </span>
            <span className="h-px w-8 bg-fear-dark/30 hidden sm:block" />
          </motion.div>

          {/* FEAR wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="font-serif text-fear-dark leading-none text-center select-none mb-4"
            style={{ fontSize: 'clamp(5rem, 18vw, 13rem)', letterSpacing: '-0.03em' }}
          >
            FEAR
          </motion.h1>

          {/* Tagline row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="h-px w-12 bg-fear-dark/20" />
            <p className="font-josefin text-fear-dark/60 text-sm sm:text-base md:text-lg tracking-[0.18em] text-center">
              Face Everything And Rise
            </p>
            <span className="h-px w-12 bg-fear-dark/20" />
          </motion.div>

          {/* Bold headline */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
            className="font-serif text-fear-dark text-2xl sm:text-3xl md:text-4xl text-center leading-tight mb-4 max-w-3xl mx-auto"
          >
            We build apps that grow from 0 to 100K users without breaking.
          </motion.h2>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
            className="text-fear-text-gray text-sm sm:text-base max-w-lg mx-auto leading-relaxed text-center mb-8"
          >
            Websites, mobile apps, and AI tools — built for startups and growing brands that refuse to stay small.
          </motion.p>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: EASE }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 mb-10 w-full max-w-xs sm:max-w-none mx-auto"
          >
            {pills.map((p, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.07, ease: EASE }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full border border-fear-dark/15 bg-fear-card/40 text-fear-dark text-xs font-medium tracking-wide"
              >
                <span className="text-fear-dark/50 text-[10px]">{p.icon}</span>
                {p.label}
              </motion.span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
          >
            <Link to="/contact" className="relative group">
              <motion.button
                whileHover={{ scale: 1.06, boxShadow: '0 14px 32px rgba(26,26,26,0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="relative px-9 py-3.5 bg-fear-dark text-white rounded-full text-sm font-medium tracking-wide transition-all overflow-hidden"
              >
                {/* shine sweep on hover */}
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)' }}
                />
                <span className="relative flex items-center gap-2">
                  Start a Project
                  <motion.span
                    className="inline-block"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >→</motion.span>
                </span>
              </motion.button>
              {/* tooltip */}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-fear-dark text-white text-[11px] font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 shadow-lg">
                Let's build something 🚀
                <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-fear-dark" />
              </span>
            </Link>

            <Link to="/about" className="relative group">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(26,26,26,0.1)' }}
                whileTap={{ scale: 0.97 }}
                className="px-9 py-3.5 border border-fear-dark/20 text-fear-dark rounded-full text-sm font-medium tracking-wide hover:border-fear-dark/50 hover:bg-fear-dark/5 transition-all"
              >
                Who We Are
              </motion.button>
              {/* tooltip */}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-fear-dark text-white text-[11px] font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 shadow-lg">
                Meet the team 👋
                <span className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-fear-dark" />
              </span>
            </Link>
          </motion.div>

          {/* Stats bar — always horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35, ease: EASE }}
            className="flex flex-row items-stretch justify-center divide-x divide-fear-dark/10 border border-fear-dark/10 rounded-2xl overflow-hidden mx-auto w-full sm:w-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-4 px-4 sm:px-10 md:px-14 bg-fear-card/25 hover:bg-fear-card/45 transition-colors flex-1 sm:flex-none"
              >
                <span className="font-serif text-2xl sm:text-3xl text-fear-dark mb-0.5 leading-none">{stat.number}</span>
                <span className="text-fear-text-gray text-[10px] sm:text-xs tracking-wide mt-1 text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.55 }}
            className="text-center text-fear-text-gray/60 text-xs tracking-wide mt-6"
          >
            Trusted by founders across India &nbsp;·&nbsp; From idea to live product
          </motion.p>

        </div>
      </div>

      {/* ── Ticker ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="w-full bg-fear-dark py-4 flex-shrink-0"
      >
        <Ticker />
      </motion.div>

    </section>
  );
};

export default Hero;
