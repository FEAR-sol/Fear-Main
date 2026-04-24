'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeUp, slideLeft, staggerContainer, viewport, EASE } from '../utils/animations';

const offerings = [
  { label: 'First Website', desc: 'Launch your brand online with a professional, conversion-ready website.' },
  { label: 'Logo & Brand Identity', desc: 'Build a visual identity that looks premium from day one.' },
  { label: 'MVP Development', desc: 'Ship your first product fast — web or mobile, built to scale.' },
  { label: 'AI Interactive Automation', desc: 'Deploy intelligent workflows, smart assistants, and automated systems that work around the clock.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
};

const StartupFriendly = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 w-full max-w-full bg-radial-gray">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div
            variants={slideLeft}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              variants={fadeUp} custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="text-fear-text-gray text-xs font-medium tracking-[0.25em] uppercase mb-4"
            >
              For Founders
            </motion.p>
            <motion.h2
              variants={fadeUp} custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-fear-dark mb-6 leading-tight"
            >
              Startup-Friendly.<br />No Bloat. Just Results.
            </motion.h2>
            <motion.p
              variants={fadeUp} custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="text-fear-text-gray text-base sm:text-lg leading-relaxed mb-6"
            >
              Building your first product is hard enough. FEAR makes the digital side simple — from your first logo to your first live product. We work with early-stage founders who need quality execution without agency overhead.
            </motion.p>
            <motion.p
              variants={fadeUp} custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="text-fear-text-gray text-base leading-relaxed mb-8"
            >
              Whether you need a website, a brand identity, a mobile app, or an AI-powered tool — we scope it right, build it fast, and make sure it works.
            </motion.p>
            <motion.div
              variants={fadeUp} custom={0.4}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(26,26,26,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3 bg-fear-dark text-white rounded-full text-sm font-medium hover:bg-fear-dark/90 transition-colors"
                >
                  Let's Build Together
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — offering cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offerings.map((o, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(26,26,26,0.12)', transition: { duration: 0.25 } }}
                className="bg-fear-card rounded-2xl p-5 border border-fear-card/30"
                style={{ boxShadow: '0 2px 12px rgba(26,26,26,0.06)' }}
              >
                <motion.div
                  className="w-8 h-8 bg-fear-dark rounded-lg flex items-center justify-center mb-3"
                  whileHover={{ rotate: 6, scale: 1.1, transition: { duration: 0.2 } }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <h4 className="font-serif text-fear-dark text-base font-medium mb-1">{o.label}</h4>
                <p className="text-fear-text-gray text-xs leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartupFriendly;
