import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getLikes, getLikeCounts, toggleLike, CATEGORY_COLORS } from '../data/blogsData';

const ShareMenu = ({ blog, onClose }) => {
  const url = `${window.location.origin}/${blog.type === 'blog' ? 'blogs' : 'articles'}/${blog.slug}`;
  const text = encodeURIComponent(`${blog.title} — FEAR`);
  const encodedUrl = encodeURIComponent(url);

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      onClose('copied');
    });
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({ title: blog.title, url });
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute bottom-full right-0 mb-2 bg-fear-dark rounded-xl p-3 flex gap-2 shadow-2xl z-20 border border-white/10"
      onClick={(e) => e.stopPropagation()}
    >
      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${text}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-white/10 hover:bg-green-500/30 flex items-center justify-center transition-colors"
        title="Share on WhatsApp"
      >
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600/30 flex items-center justify-center transition-colors"
        title="Share on LinkedIn"
      >
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      {/* Twitter/X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 rounded-full bg-white/10 hover:bg-sky-500/30 flex items-center justify-center transition-colors"
        title="Share on X"
      >
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className="w-8 h-8 rounded-full bg-white/10 hover:bg-fear-card/30 flex items-center justify-center transition-colors"
        title="Copy link"
      >
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
      {/* Native share (mobile) */}
      {navigator.share && (
        <button
          onClick={handleNativeShare}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-fear-card/30 flex items-center justify-center transition-colors"
          title="More options"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      )}
    </motion.div>
  );
};

const BlogCard = ({ blog, index = 0 }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showShare, setShowShare] = useState(false);
  const [copyMsg, setCopyMsg] = useState('');

  useEffect(() => {
    const likes = getLikes();
    const counts = getLikeCounts();
    setLiked(!!likes[blog.id]);
    setLikeCount(counts[blog.id] || 0);
  }, [blog.id]);

  const handleLike = (e) => {
    e.stopPropagation();
    const nowLiked = toggleLike(blog.id);
    setLiked(nowLiked);
    setLikeCount((c) => nowLiked ? c + 1 : Math.max(0, c - 1));
  };

  const handleShareClose = (msg) => {
    setShowShare(false);
    if (msg === 'copied') {
      setCopyMsg('Link copied!');
      setTimeout(() => setCopyMsg(''), 2000);
    }
  };

  const handleCardClick = () => {
    const path = blog.type === 'blog' ? `/blogs/${blog.slug}` : `/articles/${blog.slug}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(path);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-fear-bg rounded-2xl overflow-hidden border border-fear-card/40 cursor-pointer flex flex-col"
      style={{ boxShadow: '0 2px 16px rgba(26,26,26,0.06)' }}
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(26,26,26,0.14)', transition: { duration: 0.3 } }}
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 sm:h-52 bg-fear-card/30">
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
        {/* Category badge */}
        <span className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full ${CATEGORY_COLORS[blog.category]}`}>
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-fear-text-light text-xs mb-3">
          <span>{blog.date}</span>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>

        <h3 className="font-serif text-fear-dark text-lg font-medium leading-snug mb-2 group-hover:text-fear-dark/80 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-fear-text-gray text-sm leading-relaxed line-clamp-3 flex-1 mb-4">
          {blog.description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3 border-t border-fear-card/40">
          <motion.span
            className="text-fear-dark text-xs font-medium tracking-wide flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            Read More
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.span>

          <div className="flex items-center gap-3 relative">
            {/* Like */}
            <button
              onClick={handleLike}
              className="flex items-center gap-1 text-xs text-fear-text-gray hover:text-red-500 transition-colors"
              aria-label="Like article"
            >
              <motion.svg
                className={`w-4 h-4 ${liked ? 'text-red-500' : ''}`}
                fill={liked ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </motion.svg>
              <span>{likeCount}</span>
            </button>

            {/* Share */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setShowShare((s) => !s); }}
                className="text-fear-text-gray hover:text-fear-dark transition-colors"
                aria-label="Share article"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              {showShare && <ShareMenu blog={blog} onClose={handleShareClose} />}
            </div>

            {copyMsg && (
              <motion.span
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-7 right-0 text-xs bg-fear-dark text-white px-2 py-1 rounded-lg whitespace-nowrap"
              >
                {copyMsg}
              </motion.span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
