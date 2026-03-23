import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TICKER_ITEMS = [
  'Web Development', 'AI Automation', 'Mobile Apps', 'Brand Identity',
  'Product Design', 'AI Chatbots', 'SEO & Growth', 'UI/UX Design',
  'Web Development', 'AI Automation', 'Mobile Apps', 'Brand Identity',
  'Product Design', 'AI Chatbots', 'SEO & Growth', 'UI/UX Design',
];

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
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 pt-28 pb-10">
        <div className="w-full max-w-5xl mx-auto">

          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="h-px w-8 bg-fear-dark/30" />
            <span className="text-fear-text-gray text-xs tracking-[0.35em] uppercase font-medium">
              We Design, Develop & Deploy
            </span>
            <span className="h-px w-8 bg-fear-dark/30" />
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
            className="flex items-center justify-center gap-4 mb-3"
          >
            <span className="h-px w-12 bg-fear-dark/20" />
            <p className="font-josefin text-fear-dark/60 text-sm sm:text-base md:text-lg tracking-[0.18em] text-center">
              Face Everything And Rise
            </p>
            <span className="h-px w-12 bg-fear-dark/20" />
          </motion.div>

          {/* Sub-tagline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
            className="text-fear-text-gray text-sm sm:text-base max-w-lg mx-auto leading-relaxed text-center mb-8"
          >
            We design, build, and launch digital products — websites, apps, and AI tools — for startups and growing brands.
          </motion.p>

          {/* Service pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: EASE }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {pills.map((p, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.07, ease: EASE }}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-fear-dark/15 bg-fear-card/40 text-fear-dark text-xs font-medium tracking-wide"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 10px 28px rgba(26,26,26,0.2)' }}
                whileTap={{ scale: 0.97 }}
                className="px-9 py-3.5 bg-fear-dark text-white rounded-full text-sm font-medium tracking-wide transition-all"
              >
                Start a Project
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.03, borderColor: 'rgba(26,26,26,0.5)' }}
                whileTap={{ scale: 0.97 }}
                className="px-9 py-3.5 border border-fear-dark/20 text-fear-dark rounded-full text-sm font-medium tracking-wide hover:border-fear-dark/50 transition-colors"
              >
                Who We Are
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.35, ease: EASE }}
            className="flex flex-col sm:flex-row items-stretch justify-center divide-y sm:divide-y-0 sm:divide-x divide-fear-dark/10 border border-fear-dark/10 rounded-2xl overflow-hidden mx-auto w-full sm:w-auto"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-5 px-10 sm:px-14 bg-fear-card/25 hover:bg-fear-card/45 transition-colors w-full sm:w-auto"
              >
                <span className="font-serif text-3xl text-fear-dark mb-0.5 leading-none">{stat.number}</span>
                <span className="text-fear-text-gray text-xs tracking-wide mt-1">{stat.label}</span>
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
        className="w-full bg-fear-dark py-4 overflow-hidden flex-shrink-0"
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-8 px-4 text-fear-card/55 text-xs tracking-[0.22em] uppercase font-medium flex-shrink-0"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-fear-card/25 inline-block" />
            </span>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
