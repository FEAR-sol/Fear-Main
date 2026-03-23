import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS configuration
      const serviceId = 'service_aomni84';
      const templateId = 'template_lil0gr7';
      const publicKey = 'iarwc3ySVBw62bKxF';

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'fear.agency.contact@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="min-h-screen py-24 sm:py-28 md:py-32 px-4 sm:px-6 md:px-8 flex items-center justify-center relative overflow-hidden w-full max-w-full">
      {/* Animated Background Circles - Hidden on mobile and positioned safely */}
      <motion.div
        className="absolute top-20 right-4 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-fear-card/20 rounded-full blur-3xl hidden md:block"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-4 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-fear-card/20 rounded-full blur-3xl hidden md:block"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start w-full">
          {/* Left Side - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full max-w-full overflow-hidden"
          >
            <motion.div
              className="flex items-center gap-4 mb-6"
              variants={itemVariants}
            >
              <motion.div
                className="h-px w-12 bg-gray-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              <motion.p 
                className="text-sm text-gray-600"
              >
                Contact us
              </motion.p>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-black leading-tight"
              variants={itemVariants}
            >
              Let's talk about<br />what's next
            </motion.h1>

            <motion.div
              className="h-1 w-16 sm:w-20 md:w-24 bg-black mb-6 sm:mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />

            <motion.p 
              className="text-gray-600 text-base sm:text-lg mb-8 sm:mb-12 text-justify"
              variants={itemVariants}
            >
              Schedule a call with the FEAR team, or leave<br className="hidden sm:block" />
              us a message—we'll follow up within 48 hours.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-black mb-1 sm:mb-2">Email:</h3>
                  <a 
                    href="mailto:fear.agency.contact@gmail.com" 
                    className="text-sm sm:text-base md:text-lg text-gray-700 hover:text-black transition-colors break-all"
                  >
                    fear.agency.contact@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="mt-8 sm:mt-12"
              variants={itemVariants}
            >
              <h3 className="text-lg sm:text-xl font-medium text-black mb-4 sm:mb-6">Follow Us On:</h3>
              <div className="flex gap-3 sm:gap-4">
                <motion.a
                  href="https://www.instagram.com/fear_agency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://www.facebook.com/profile.php?id=61585103735284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-600 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-700 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={formVariants}
            className="relative w-full max-w-full overflow-hidden"
          >
            {/* Decorative Corner Elements - Hidden on mobile and positioned safely */}
            <motion.div
              className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-4 border-l-4 border-black/20 hidden sm:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-4 border-r-4 border-black/20 hidden sm:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            />

            <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden w-full" style={{ backgroundColor: '#BFBCB6' }}>
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '20px 20px']
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="NAME"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-fear-dark text-white placeholder-gray-400 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-fear-dark/50 text-sm sm:text-base"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-fear-dark text-white placeholder-gray-400 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-fear-dark/50 text-sm sm:text-base"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <textarea
                    name="message"
                    placeholder="MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    rows="8"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-fear-dark text-white placeholder-gray-400 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-fear-dark/50 resize-none text-sm sm:text-base"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-full text-base font-medium transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-fear-dark text-white hover:bg-fear-dark/90'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND EMAIL'}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-center text-sm font-medium"
                  >
                    ✓ Message sent successfully! We'll get back to you within 48 hours.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-center text-sm font-medium"
                  >
                    ✗ Failed to send message. Please try again or email us directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
