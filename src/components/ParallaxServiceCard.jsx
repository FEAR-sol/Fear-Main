'use client';

import { motion } from 'framer-motion';

const ParallaxServiceCard = ({ image, link }) => {
  return (
    <motion.div
      style={{ borderRadius: '20px', overflow: 'hidden', background: '#1a1a2e', width: '100%' }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
    >
      {/* Image — full width, natural height, no crop */}
      {image && (
        <img
          src={image}
          alt="Service"
          style={{ display: 'block', width: '100%', height: 'auto' }}
          loading="lazy"
        />
      )}

      {/* Click to Explore */}
      {link && (
        <div style={{ padding: '16px 20px', background: '#BFBCB6' }}>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              width: '100%', padding: '16px', borderRadius: '12px',
              background: '#111', color: '#fff', fontWeight: '500', fontSize: '16px',
              textDecoration: 'none', position: 'relative', overflow: 'hidden'
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>Click to Explore</span>
            <motion.svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </div>
      )}
    </motion.div>
  );
};

export default ParallaxServiceCard;
