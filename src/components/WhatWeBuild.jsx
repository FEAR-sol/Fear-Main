import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, staggerContainer, lineDraw, viewport, EASE } from '../utils/animations';

const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Platforms',
    desc: 'Custom business websites and digital platforms designed for performance, conversion, and scale.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile Applications',
    desc: 'User-focused mobile apps built to deliver seamless digital experiences on any device.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Automation',
    desc: 'Smart systems that automate workflows, reduce manual work, and make your business run faster.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Brand & Product Design',
    desc: 'Strong digital identities and user experiences that make brands stand out and convert.',
  },
];

const unique = [
  { title: 'Startup-Friendly', desc: 'No bloated retainers — just focused execution that moves fast and delivers real results.' },
  { title: 'Technology-First', desc: 'Built on scalable infrastructure, not shortcuts that break at growth.' },
  { title: 'Design + Engineering', desc: 'Creative design and strong technical development — both matter equally here.' },
  { title: 'AI-Enabled Speed', desc: 'Modern AI tools accelerate development without sacrificing quality or reliability.' },
];

const capCardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.08 },
  }),
  rest: { y: 0, boxShadow: '0 2px 12px rgba(26,26,26,0.06)' },
  hover: {
    y: -8,
    boxShadow: '0 24px 48px rgba(26,26,26,0.14)',
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
};

const AccordionItem = ({ item, index, isOpen, onToggle }) => {
  return (
    <motion.div
      variants={index % 2 === 0 ? slideLeft : slideRight}
      custom={index * 0.08}
      className="border border-fear-dark/10 rounded-2xl overflow-hidden bg-fear-card/30"
    >
      {/* Header — always visible, click to toggle */}
      <button
        onClick={() => onToggle(index)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-fear-card/50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          {/* Checkmark icon — no bg, black color */}
          <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-fear-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-serif text-fear-dark text-base sm:text-lg font-medium">{item.title}</h4>
        </div>
        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="flex-shrink-0"
        >
          <svg className="w-4 h-4 text-fear-dark/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      {/* Dropdown content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pl-[4.25rem]">
              <p className="text-fear-text-gray text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WhatWeBuild = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 w-full max-w-full bg-radial-gray overflow-hidden">
      <div className="max-w-container mx-auto">

        {/* Who We Help */}
        <motion.div
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-20"
        >
          <motion.p variants={fadeUp} custom={0} className="text-fear-text-gray text-xs font-medium tracking-[0.3em] uppercase mb-5">
            Who We Help
          </motion.p>
          <motion.h2
            variants={fadeUp} custom={0.1}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-fear-dark mb-5 leading-tight"
          >
            Built for Founders,<br className="hidden sm:block" /> Startups & Growing Brands
          </motion.h2>
          <motion.div variants={lineDraw(0.3)} className="h-px bg-fear-dark/20 w-16 mx-auto mb-5" />
          <motion.p variants={fadeUp} custom={0.2} className="text-fear-text-gray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're launching your first product, rebuilding your digital presence, or scaling with AI — FEAR builds with you, not just for you.
          </motion.p>
        </motion.div>

        {/* Capabilities heading */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-6 text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="text-fear-text-gray text-xs font-medium tracking-[0.3em] uppercase mb-2">What We Build</motion.p>
          <motion.h3 variants={fadeUp} custom={0.1} className="font-serif text-2xl sm:text-3xl text-fear-dark mb-12">Our Core Capabilities</motion.h3>
        </motion.div>

        {/* Capability cards — icon bg removed, icon color black */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-20">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={capCardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              animate="rest"
              viewport={viewport}
              className="bg-fear-card rounded-2xl p-5 sm:p-6 border border-fear-card/30 cursor-default"
            >
              {/* Icon — no black bg, icon itself is black */}
              <motion.div
                className="w-10 h-10 flex items-center justify-center mb-4 text-fear-dark"
                whileHover={{ rotate: 6, scale: 1.1, transition: { duration: 0.25 } }}
              >
                {cap.icon}
              </motion.div>
              <h4 className="font-serif text-fear-dark text-base sm:text-lg font-medium mb-2">{cap.title}</h4>
              <p className="text-fear-text-gray text-xs sm:text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why FEAR is Different — accordion */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-8"
        >
          <motion.p variants={fadeUp} custom={0} className="text-fear-text-gray text-xs font-medium tracking-[0.3em] uppercase mb-2">What Makes Us Unique</motion.p>
          <motion.h3 variants={fadeUp} custom={0.1} className="font-serif text-2xl sm:text-3xl text-fear-dark mb-2">Why FEAR is Different</motion.h3>
          <motion.p variants={fadeUp} custom={0.2} className="text-fear-text-gray text-sm mb-8">Click any item to learn more</motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col gap-3 max-w-2xl mx-auto"
        >
          {unique.map((u, i) => (
            <AccordionItem
              key={i}
              item={u}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeBuild;
