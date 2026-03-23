import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/BlogCard';
import SubscribeBox from '../components/SubscribeBox';
import { ARTICLES, BLOGS } from '../data/blogsData';

// Reused for both /articles and /blogs
const ContentListPage = ({ type }) => {
  const isArticles = type === 'article';
  const items = isArticles ? ARTICLES : BLOGS;
  const categories = ['All', ...Array.from(new Set(items.map((i) => i.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? items
    : items.filter((i) => i.category === activeCategory);

  const heading = isArticles ? 'Articles' : 'Blogs';
  const subheading = isArticles
    ? 'Deep dives on AI, technology, and product building.'
    : 'Thoughts, opinions, and behind-the-scenes from Team FEAR.';

  return (
    <div className="min-h-screen bg-radial-gray pt-24 pb-20 px-4 sm:px-6 md:px-8 w-full max-w-full overflow-x-hidden">
      <div className="max-w-container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <p className="text-fear-text-gray text-xs font-medium tracking-[0.25em] uppercase mb-4">
            FEAR Studio
          </p>
          <h1 className="font-serif text-fear-dark text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-4">
            {heading}
          </h1>
          <p className="text-fear-text-gray text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </motion.div>

        {/* Subscribe at top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <SubscribeBox />
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-fear-dark text-white shadow-md'
                  : 'bg-fear-card/50 text-fear-dark hover:bg-fear-card'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filtered.map((item, i) => (
            <BlogCard key={item.id} blog={item} index={i} />
          ))}
        </div>

        {/* Subscribe at bottom */}
        <SubscribeBox />
      </div>
    </div>
  );
};

export default ContentListPage;
