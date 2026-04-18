import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import { ARTICLES, BLOGS, findBySlug, getLikes, getLikeCounts, toggleLike, CATEGORY_COLORS } from '../data/blogsData';
import SubscribeBox from '../components/SubscribeBox';
import BlogCard from '../components/BlogCard';

// Sticky scroll progress bar
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-fear-card/30">
      <motion.div
        className="h-full bg-fear-dark origin-left"
        style={{ scaleX: progress / 100, transformOrigin: 'left' }}
        transition={{ duration: 0 }}
      />
    </div>
  );
};

// Share panel for article page
const ArticleSharePanel = ({ blog }) => {
  const [copied, setCopied] = useState(false);
  const url = `${window.location.origin}/articles/${blog.slug}`;
  const encodedUrl = encodeURIComponent(url);
  const text = encodeURIComponent(`${blog.title} — FEAR`);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-fear-text-gray text-xs font-medium tracking-wide">Share:</span>
      <a href={`https://wa.me/?text=${text}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-fear-card/50 hover:bg-green-100 flex items-center justify-center transition-colors" title="WhatsApp">
        <svg className="w-4 h-4 text-fear-dark" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-fear-card/50 hover:bg-blue-100 flex items-center justify-center transition-colors" title="LinkedIn">
        <svg className="w-4 h-4 text-fear-dark" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`} target="_blank" rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-fear-card/50 hover:bg-sky-100 flex items-center justify-center transition-colors" title="X / Twitter">
        <svg className="w-4 h-4 text-fear-dark" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <button onClick={handleCopy}
        className="w-8 h-8 rounded-full bg-fear-card/50 hover:bg-fear-card flex items-center justify-center transition-colors relative" title="Copy link">
        <svg className="w-4 h-4 text-fear-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        <AnimatePresence>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: -28 }}
              exit={{ opacity: 0 }}
              className="absolute text-xs bg-fear-dark text-white px-2 py-1 rounded-lg whitespace-nowrap pointer-events-none"
            >
              Copied!
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = findBySlug(slug);
  const isArticle = blog?.type === 'article';
  const backPath = isArticle ? '/articles' : '/blogs';
  const backLabel = isArticle ? 'All Articles' : 'All Blogs';
  const relatedPool = isArticle ? ARTICLES : BLOGS;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    if (!blog) return;
    const likes = getLikes();
    const counts = getLikeCounts();
    setLiked(!!likes[blog.id]);
    setLikeCount(counts[blog.id] || 0);
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-radial-gray flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-fear-text-gray mb-4">Article not found.</p>
          <Link to={backPath} className="text-fear-dark underline underline-offset-4 text-sm">
            {backLabel}
          </Link>
        </div>
      </div>
    );
  }

  const handleLike = () => {
    const nowLiked = toggleLike(blog.id);
    setLiked(nowLiked);
    setLikeCount((c) => nowLiked ? c + 1 : Math.max(0, c - 1));
  };

  // Related (same category, excluding current)
  const related = relatedPool.filter((b) => b.category === blog.category && b.id !== blog.id).slice(0, 3);

  // Render content with basic markdown-like bold support
  const renderContent = (text) => {
    return text.split('\n\n').map((para, i) => {
      if (para.startsWith('**') && para.endsWith('**')) {
        return (
          <h3 key={i} className="font-serif text-fear-dark text-xl sm:text-2xl font-medium mt-8 mb-3">
            {para.replace(/\*\*/g, '')}
          </h3>
        );
      }
      // Inline bold
      const parts = para.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="text-fear-dark/80 text-base sm:text-lg leading-relaxed mb-0">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="text-fear-dark font-semibold">{part}</strong> : part
          )}
        </p>
      );
    });
  };

  return (
    <>
      <SEO 
        title={`${blog.title} - FEAR Agency`}
        description={blog.excerpt}
        keywords={`${blog.category}, ${blog.title}, FEAR agency blog, web development, technology`}
        image={blog.image}
        type="article"
      />
      <ScrollProgress />
      <div className="min-h-screen bg-radial-gray pt-20 pb-20 w-full max-w-full overflow-x-hidden">

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden relative"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fear-bg/80 via-transparent to-transparent" />
        </motion.div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 mb-6"
          >
            <button
              onClick={() => { window.scrollTo({ top: 0, behavior: 'instant' }); navigate(backPath); }}
              className="flex items-center gap-2 text-fear-text-gray text-sm hover:text-fear-dark transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              {backLabel}
            </button>
          </motion.div>

          {/* Category + meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${CATEGORY_COLORS[blog.category]}`}>
              {blog.category}
            </span>

            <h1 className="font-serif text-fear-dark text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-fear-text-gray text-sm mb-6">
              <span>{blog.author}</span>
              <span>·</span>
              <span>{blog.date}</span>
              <span>·</span>
              <span>{blog.readTime}</span>
            </div>

            {/* Like + Share row */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-fear-card/40 mb-10">
              <button
                onClick={handleLike}
                className="flex items-center gap-2 text-sm text-fear-text-gray hover:text-red-500 transition-colors"
                aria-label="Like article"
              >
                <motion.svg
                  className={`w-5 h-5 ${liked ? 'text-red-500' : ''}`}
                  fill={liked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </motion.svg>
                <span>{likeCount} {likeCount === 1 ? 'like' : 'likes'}</span>
              </button>
              <ArticleSharePanel blog={blog} />
            </div>
          </motion.div>

          {/* Article body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose-custom space-y-5 mb-14"
          >
            {renderContent(blog.content)}
          </motion.div>

          {/* Subscribe box inline */}
          <div className="mb-16">
            <SubscribeBox compact />
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-fear-text-gray text-xs font-medium tracking-[0.2em] uppercase mb-6">
                More {isArticle ? 'Articles' : 'Blogs'} in {blog.category}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((b, i) => (
                  <BlogCard key={b.id} blog={b} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
