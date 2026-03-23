import React from 'react';
import { motion } from 'framer-motion';

const deliverables = [
  'Frontend user interface design & development',
  'Backend infrastructure & database management',
  'Secure product catalog & inventory system',
  'Order management & transaction functionality',
  'Mobile-responsive design across all devices',
  'SEO optimization & performance tuning',
];

const FeaturedProject = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 w-full max-w-full bg-radial-gray">
      <div className="max-w-container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-fear-text-gray text-xs font-medium tracking-[0.25em] uppercase mb-4">Our Work</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-fear-dark mb-4">Featured Project</h2>
          <p className="text-fear-text-gray text-base max-w-xl mx-auto">
            A look at what FEAR builds — from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-fear-dark rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 24px 60px rgba(26,26,26,0.2)' }}
        >
          {/* Top bar */}
          <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-fear-card text-xs font-medium tracking-[0.2em] uppercase">E-Commerce Platform</span>
              <h3 className="font-serif text-white text-2xl sm:text-3xl mt-1">Full-Stack E-Commerce Development</h3>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full bg-white/10 text-fear-card border border-white/10 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Live & Deployed
            </span>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — description */}
            <div className="px-6 sm:px-10 py-8 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                FEAR designed and developed a complete e-commerce system for a client — handling everything from the first wireframe to production deployment. The platform supports real transactions, inventory management, and a seamless user experience across all devices.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                This project demonstrates FEAR's ability to build full digital platforms end-to-end — combining design precision with engineering depth. As FEAR grows, this section will expand into a full portfolio showcase.
              </p>
            </div>

            {/* Right — deliverables */}
            <div className="px-6 sm:px-10 py-8">
              <p className="text-fear-card text-xs font-medium tracking-[0.2em] uppercase mb-5">What Was Delivered</p>
              <ul className="space-y-3">
                {deliverables.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <svg className="w-4 h-4 text-fear-card flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="px-6 sm:px-10 py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">More projects coming soon as FEAR grows.</p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 bg-fear-card text-fear-dark rounded-full text-sm font-medium hover:bg-white transition-colors"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProject;
