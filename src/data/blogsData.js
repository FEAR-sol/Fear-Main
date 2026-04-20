// ─── ARTICLES (long-form, deep-dive) ────────────────────────────────────────
export const ARTICLES = [
  // Add your articles here
];

// ─── BLOGS (shorter, conversational, opinion-driven) ─────────────────────────
export const BLOGS = [
  // Add your blogs here
];

// ─── SHARED UTILITIES ────────────────────────────────────────────────────────

export const ALL_CONTENT = [...ARTICLES, ...BLOGS];

export const findBySlug = (slug) => ALL_CONTENT.find((item) => item.slug === slug);

export const getLikes = () => {
  try { return JSON.parse(localStorage.getItem('fear_likes') || '{}'); }
  catch { return {}; }
};

export const getLikeCounts = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('fear_like_counts') || '{}');
    const defaults = {};
    return { ...defaults, ...stored };
  } catch {
    return {};
  }
};

export const toggleLike = (id) => {
  const likes = getLikes();
  const counts = getLikeCounts();
  const liked = !!likes[id];
  if (liked) { delete likes[id]; counts[id] = Math.max(0, (counts[id] || 1) - 1); }
  else { likes[id] = true; counts[id] = (counts[id] || 0) + 1; }
  localStorage.setItem('fear_likes', JSON.stringify(likes));
  localStorage.setItem('fear_like_counts', JSON.stringify(counts));
  return !liked;
};

// NOTE: subscribeEmail() was removed — subscriptions are handled server-side
// via POST /api/subscribe. See src/utils/api.js → subscribeToNewsletter().

export const CATEGORY_COLORS = {
  AI: 'bg-fear-dark text-white',
  Web: 'bg-fear-card text-fear-dark',
  Branding: 'bg-fear-card text-fear-dark',
  Startups: 'bg-fear-dark text-white',
  'Case Study': 'bg-fear-card text-fear-dark',
  Studio: 'bg-fear-card text-fear-dark',
};
