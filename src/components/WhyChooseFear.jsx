'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, lineDraw, viewport, EASE } from '../utils/animations';
import Link from 'next/link';

const features = [
  {
    title: 'Full-Stack Studio',
    description: 'Logo to AI automation, website to mobile app — all under one roof, one team, one vision.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    number: '01',
  },
  {
    title: 'Long-Term Partnership',
    description: "We don't disappear after launch. Every decision is made with your long-term growth in mind.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    number: '02',
  },
  {
    title: 'End-to-End Execution',
    description: 'We align with your goals and build solutions that evolve as your business grows — from MVP to scale.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    number: '03',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

const WhyChooseFear = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 w-full max-w-full overflow-hidden">
      <div className="max-w-container mx-auto w-full">

        {/* Title */}
        <motion.div
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-10"
        >
          <motion.p variants={fadeUp} custom={0} className="text-fear-text-gray text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Why Us
          </motion.p>
          <motion.h2
            variants={fadeUp} custom={0.1}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-center tracking-wider text-fear-dark"
          >
            WHY CHOOSE FEAR?
          </motion.h2>
          <motion.div variants={lineDraw(0.3)} className="h-px w-16 bg-fear-dark/20 mx-auto mt-5 mb-4" />
          <motion.p variants={fadeUp} custom={0.2} className="text-fear-text-gray text-sm sm:text-base max-w-xl mx-auto">
            We're not just a vendor. We're the team that ships, stays, and scales with you.
          </motion.p>
        </motion.div>

        {/* Feature Cards — no images, clean icon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8 sm:mb-10 w-full">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px rgba(26,26,26,0.12)',
                transition: { duration: 0.25, ease: [0, 0, 0.2, 1] },
              }}
              className="rounded-2xl p-6 sm:p-8 border border-fear-dark/10 bg-fear-card/30 relative group"
            >
              {/* Number badge */}
              <span className="absolute top-5 right-5 font-serif text-fear-dark/15 text-3xl font-bold select-none">
                {feature.number}
              </span>

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl border border-fear-dark/15 flex items-center justify-center text-fear-dark mb-5 group-hover:border-fear-dark/30 transition-colors">
                {feature.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-serif mb-2 text-fear-dark">{feature.title}</h3>
              <p className="text-fear-text-gray text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: EASE }}
          className="bg-fear-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-xl relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px)',
            }}
          />
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="text-xl sm:text-2xl md:text-3xl font-serif text-white mb-3 relative z-10"
          >
            Clarity. Consistency. Long-term Value.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto relative z-10 mb-6"
          >
            FEAR doesn't just build products. We build foundations that scale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className="relative z-10"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-white text-fear-dark rounded-full text-sm font-medium tracking-wide transition-all"
              >
                Start a Project →
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseFear;
