'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, lineDraw, viewport, EASE } from '../utils/animations';

const services = [
  {
    title: 'Web Development',
    items: ['Web Design', 'Web Development', 'Host And Maintenance', 'SEO optimization And Integration'],
  },
  {
    title: 'App Development',
    items: ['App Design', 'App Development', 'Maintenance and Support', 'ASO and Integration'],
  },
  {
    title: 'AI Solutions',
    items: ['AI Customization', 'AI Automation', 'AI Chatbot', 'AI Voice Assistant'],
  },
  {
    title: 'Branding\nAnd Collaboration',
    items: ['Logo Design', 'Poster Design', 'Thumbnail Design', 'Brochure Design'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay: i * 0.1 },
  }),
  rest: { y: 0, boxShadow: '0 2px 12px rgba(26,26,26,0.06)' },
  hover: {
    y: -6,
    boxShadow: '0 20px 40px rgba(26,26,26,0.12)',
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: (i) => ({
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20, delay: i },
  }),
};

const Services = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-8 relative bg-radial-gray w-full max-w-full">

      {/* Section heading */}
      <motion.div
        variants={staggerContainer(0.12, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="text-center mb-16 sm:mb-20"
      >
        <motion.p variants={fadeUp} custom={0} className="text-fear-text-gray text-xs font-medium tracking-[0.3em] uppercase mb-4">
          What We Offer
        </motion.p>
        <motion.h2
          variants={fadeUp} custom={0.1}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-fear-dark mb-4"
        >
          Our Services
        </motion.h2>
        <motion.div
          variants={lineDraw(0.3)}
          className="h-px w-16 sm:w-24 bg-fear-dark mx-auto"
        />
      </motion.div>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              animate="rest"
              viewport={viewport}
              className="bg-fear-card rounded-2xl p-6 border border-fear-card/30 h-full"
            >
              <h3 className="text-xl font-medium text-fear-dark mb-6 whitespace-pre-line leading-tight font-serif">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, j) => (
                  <motion.li
                    key={j}
                    className="text-fear-text-gray text-sm flex items-start gap-3"
                    variants={fadeUp}
                    custom={0.3 + j * 0.07}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    <motion.span
                      className="w-2 h-2 bg-fear-dark rounded-full flex-shrink-0 mt-1.5"
                      custom={0.4 + j * 0.07}
                      variants={dotVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewport}
                    />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
