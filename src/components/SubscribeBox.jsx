import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { subscribeEmail } from '../data/blogsData';

const SubscribeBox = ({ compact = false }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'duplicate'
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const result = subscribeEmail(email);
      setStatus(result.success ? 'success' : 'duplicate');
      setLoading(false);
      if (result.success) setEmail('');
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-fear-dark rounded-2xl ${compact ? 'p-6 sm:p-8' : 'p-8 sm:p-12'} w-full`}
    >
      <div className={`${compact ? '' : 'max-w-xl mx-auto text-center'}`}>
        <p className="text-fear-card text-xs font-medium tracking-[0.2em] uppercase mb-3">
          Stay Ahead
        </p>
        <h3 className={`text-white font-serif ${compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'} font-medium mb-2`}>
          Weekly Insights from FEAR
        </h3>
        <p className="text-fear-text-light text-sm mb-6">
          Get weekly insights on AI, websites, and digital growth.
        </p>

        <form onSubmit={handleSubmit} className={`flex gap-3 ${compact ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'}`}>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus(null); }}
            placeholder="Enter your email"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-fear-card transition-colors"
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-fear-card text-fear-dark font-medium text-sm px-7 py-3 rounded-full hover:bg-white transition-colors whitespace-nowrap disabled:opacity-60"
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </motion.button>
        </form>

        <AnimatePresence>
          {status && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`mt-3 text-xs ${
                status === 'success' ? 'text-green-400' :
                status === 'duplicate' ? 'text-yellow-400' : 'text-red-400'
              }`}
            >
              {status === 'success' && '✓ You\'re in. Welcome to the FEAR community.'}
              {status === 'duplicate' && 'You\'re already subscribed.'}
              {status === 'error' && 'Please enter a valid email address.'}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SubscribeBox;
