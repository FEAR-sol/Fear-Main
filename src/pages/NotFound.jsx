import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="404 - Page Not Found | FEAR Agency"
        description="The page you're looking for doesn't exist. Explore FEAR Agency's services, blogs, and portfolio."
        keywords="404, page not found, FEAR agency"
      />
      <div className="min-h-screen bg-fear-dark flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[120px] sm:text-[180px] font-bold text-fear-card leading-none mb-4"
          >
            404
          </motion.h1>

          {/* Message */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-fear-card text-fear-dark px-8 py-3 rounded-full font-medium hover:bg-white transition-colors"
              >
                Go Home
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-fear-card text-fear-card px-8 py-3 rounded-full font-medium hover:bg-fear-card hover:text-fear-dark transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-500 text-sm mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/about" className="text-fear-card hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/blogs" className="text-fear-card hover:text-white transition-colors">
                Blogs
              </Link>
              <Link to="/articles" className="text-fear-card hover:text-white transition-colors">
                Articles
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFound;
