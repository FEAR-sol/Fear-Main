import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, staggerContainer, lineDraw, viewport, EASE } from '../utils/animations';

const capabilities = [
  {
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
    title: 'Web Platforms',
    desc: 'Custom business websites and digital platforms designed for performance, conversion, and scale.',
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>),
    title: 'Mobile Applications',
    desc: 'User-focused mobile apps built to deliver seamless digital experiences on any device.',
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>),
    title: 'AI Automation',
    desc: 'Smart systems that automate workflows, reduce manual work, and make your business run faster.',
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>),
    title: 'Brand & Product Design',
    desc: 'Strong digital identities and user experiences that make brands stand out and convert.',
  },
];

const unique = [
  { title: 'Startup-Friendly', desc: 'No bloated retainers — just focused execution that moves fast.' },
  { title: 'Technology-First', desc: 'Built on scalable infrastructure, not shortcuts that break at growth.' },
  { title: 'Design + Engineering', desc: 'Creative design and strong technical development — both matter equally.' },
  { title: 'AI-Enabled Speed', desc: 'Modern AI tools accelerate development without sacrificing quality.' },
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

const WhatWeBuild = () => {
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

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
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
              className="bg-fear-card rounded-2xl p-6 border border-fear-card/30 cursor-default"
            >
              <motion.div
                className="w-10 h-10 bg-fear-dark text-white rounded-xl flex items-center justify-center mb-4"
                whileHover={{ rotate: 6, scale: 1.1, transition: { duration: 0.25 } }}
              >
                {cap.icon}
              </motion.div>
              <h4 className="font-serif text-fear-dark text-lg font-medium mb-2">{cap.title}</h4>
              <p className="text-fear-text-gray text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What Makes Us Unique heading */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-10"
        >
          <motion.p variants={fadeUp} custom={0} className="text-fear-text-gray text-xs font-medium tracking-[0.3em] uppercase mb-2">What Makes Us Unique</motion.p>
          <motion.h3 variants={fadeUp} custom={0.1} className="font-serif text-2xl sm:text-3xl text-fear-dark mb-10">Why FEAR is Different</motion.h3>
        </motion.div>

        {/* Unique items */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {unique.map((u, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? slideLeft : slideRight}
              custom={i * 0.08}
              whileHover={{ x: 4, transition: { duration: 0.25 } }}
              className="flex gap-4 bg-fear-card/40 rounded-2xl p-6 border border-fear-card/30"
            >
              <motion.div
                className="w-8 h-8 bg-fear-dark rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewport}
                transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.2 + i * 0.08 }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <div>
                <h4 className="font-serif text-fear-dark text-lg font-medium mb-1">{u.title}</h4>
                <p className="text-fear-text-gray text-sm leading-relaxed">{u.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeBuild;
