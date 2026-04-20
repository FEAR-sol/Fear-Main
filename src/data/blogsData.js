// ─── ARTICLES (long-form, deep-dive) ────────────────────────────────────────
export const ARTICLES = [
  {
    id: 'a1',
    slug: 'test-article-notification',
    title: 'Testing Article Notifications',
    description: 'Verifying that email notifications work for articles just like they do for blogs.',
    category: 'AI',
    date: 'April 20, 2026',
    readTime: '2 min read',
    author: 'Team FEAR',
    image: '/AI.jpg',
    type: 'article',
    content: `This is a test article to verify that our email notification system works for articles too.

**Testing articles**

The notification system automatically detects whether new content is a blog or an article and sends the appropriate email. Articles are typically longer, more in-depth pieces compared to blogs.

**What happens**

When we push this article to GitHub, all subscribers should receive an email with:
- Subject: "New Article from FEAR Agency: Testing Article Notifications"
- The article description
- A link to read the full article

If you receive this email, it confirms that notifications work perfectly for both blogs and articles!`,
  },
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
