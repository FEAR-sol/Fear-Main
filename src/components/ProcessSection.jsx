'use client';

import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewport, EASE } from '../utils/animations';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: "We start by understanding your business, goals, and challenges — before writing a single line of code or opening a design file.",
  },
  {
    number: '02',
    title: 'Design',
    desc: 'We create UI/UX concepts and digital architecture that are intentional, user-focused, and aligned with your brand.',
  },
  {
    number: '03',
    title: 'Development',
    desc: 'We build scalable platforms using modern technologies — clean code, solid infrastructure, and performance-first thinking.',
  },
  {
    number: '04',
    title: 'AI Integration',
    desc: 'Where it adds real value, we layer in automation and intelligent workflows — as infrastructure, not a gimmick.',
  },
  {
    number: '05',
    title: 'Launch & Support',
    desc: 'We deploy your product and stay with you — maintenance, updates, and long-term reliability are part of the deal.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 w-full max-w-full bg-fear-dark">
      <div className="max-w-container mx-auto">

        {/* Heading */}
        <motion.div
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} custom={0} className="text-fear-card text-xs font-medium tracking-[0.25em] uppercase mb-4">
            How We Work
          </motion.p>
          <motion.h2 variants={fadeUp} custom={0.1} className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            From Idea to Live Product
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.2} className="text-gray-400 text-base max-w-xl mx-auto">
            A clear, repeatable process that keeps you informed and in control at every stage.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  variants={isLeft ? slideLeft : slideRight}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${i > 0 ? 'lg:-mt-4' : ''}`}
                >
                  <div className={`${isLeft ? 'lg:text-right lg:pr-8' : 'lg:col-start-2 lg:pl-8'} mb-4 lg:mb-0`}>
                    <motion.div
                      className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors"
                      whileHover={{ scale: 1.02, transition: { duration: 0.25, ease: EASE } }}
                    >
                      <motion.span
                        className="font-serif text-fear-card text-4xl font-medium block mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewport}
                        transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                      >
                        {step.number}
                      </motion.span>
                      <h3 className="font-serif text-white text-xl sm:text-2xl mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center dot — desktop */}
                  <motion.div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-fear-card rounded-full border-2 border-fear-dark"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={viewport}
                    transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.15 + i * 0.08 }}
                  />

                  {isLeft && <div className="hidden lg:block" />}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
