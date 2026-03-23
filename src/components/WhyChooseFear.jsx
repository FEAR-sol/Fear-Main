import { motion } from 'framer-motion';
import { fadeUp, scaleUp, staggerContainer, lineDraw, viewport, EASE } from '../utils/animations';

const features = [
  {
    title: 'Full-Stack Studio',
    description: 'From your first logo to AI-powered automation, from a high-converting website to a scalable mobile app — all under one roof, one team, one vision.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop',
    number: '01',
  },
  {
    title: 'Long-Term Partnership',
    description: "We don't disappear after launch. Every choice is made with your long-term growth in mind — not short-term delivery.",
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    number: '02',
  },
  {
    title: 'End-to-End Execution',
    description: 'We understand your vision, align with your goals, and build solutions that evolve as your business grows — from MVP to scale.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop',
    number: '03',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.12 },
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
          className="text-center mb-14"
        >
          <motion.p variants={fadeUp} custom={0} className="text-fear-text-gray text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Why Us
          </motion.p>
          <motion.h2
            variants={fadeUp} custom={0.1}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-center tracking-wider text-fear-dark"
          >
            WHY CHOOSE FEAR?
          </motion.h2>
          <motion.div variants={lineDraw(0.3)} className="h-px w-16 bg-fear-dark/20 mx-auto mt-5" />
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 w-full">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{
                y: -10,
                boxShadow: '0 24px 48px rgba(26,26,26,0.16)',
                transition: { duration: 0.25, ease: [0, 0, 0.2, 1] },
              }}
              className="rounded-3xl overflow-hidden shadow-lg relative group w-full"
              style={{ backgroundColor: '#BFBCB6' }}
            >
              {/* Number badge */}
              <motion.div
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-fear-dark text-white rounded-full flex items-center justify-center font-serif text-sm font-bold"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={viewport}
                transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.2 + i * 0.1 }}
              >
                {feature.number}
              </motion.div>

              {/* Image */}
              <div className="h-44 sm:h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-fear-dark/0 group-hover:bg-fear-dark/20 transition-colors duration-300 z-10" />
                <motion.img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-serif mb-3 text-fear-dark">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm text-justify">{feature.description}</p>
              </div>

              {/* Bottom accent */}
              <motion.div
                className="h-px bg-fear-dark/20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: EASE, delay: 0.3 + i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          variants={scaleUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="bg-fear-dark rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-xl relative overflow-hidden"
        >
          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px)',
            }}
          />
          <motion.h3
            variants={fadeUp} custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-3 sm:mb-4 relative z-10"
          >
            We focus on Clarity, Consistency, and Long-term Value
          </motion.h3>
          <motion.p
            variants={fadeUp} custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto relative z-10 text-justify"
          >
            Every design choice, line of code, and AI solution is created with your growth in mind — not short-term delivery. FEAR doesn't just build products. We build foundations.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseFear;
