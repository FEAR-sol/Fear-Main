// ─── ARTICLES (long-form, deep-dive) ────────────────────────────────────────
export const ARTICLES = [
  {
    id: 'a1',
    slug: 'website-mistakes-holding-businesses-back',
    title: 'Website Mistakes That Are Quietly Holding Businesses Back',
    description: 'Websites have the power to captivate, convert, and grow a business — is this potential fully realized? Discover the common mistakes that reduce engagement and how to fix them.',
    category: 'Web',
    date: 'April 20, 2026',
    readTime: '6 min read',
    author: 'Team FEAR',
    image: '/Fear.jpeg',
    type: 'article',
    content: `A website is like a business's digital storefront. In the first few seconds, visitors decide whether to explore further or move on. Small hiccups — sluggish loading, outdated design, confusing messaging, or low visibility — can quietly reduce engagement, leads, and conversions.

The good news? Most of these issues are fixable with smart tweaks, turning a website into a business growth engine.

## 1. Outdated Website Design

Imagine stepping into a store that hasn't changed since 2014. The impression is the same online if a website feels stuck in the past. Visitors form judgments in 0.05 seconds¹, and a cluttered or old-fashioned design can make a business seem less credible.

**Impact**
- Trust diminishes
- Leads slip away
- Opportunities are missed

## 2. Slow Website Performance

Slow-loading websites frustrate visitors before they even see the content. Search engines like Google also notice, ranking lagging sites lower and reducing traffic².

**Impact**
- Higher bounce rates³
- Lower search visibility
- Reduced visitor engagement

## 3. Unclear Messaging

Websites that don't clearly communicate services and value leave visitors guessing. Quick understanding is key:
- What the business offers
- Who it serves
- What sets it apart from competitors

Without clarity, visitors often leave without interacting⁴.

**Impact**
- Visitor confusion
- Lower engagement
- Missed leads

## 4. Poor Search Visibility

Even the most polished website is ineffective if it cannot be found. Without strong SEO, a website may remain hidden from Google or AI tools like ChatGPT, missing opportunities⁵.

**Impact**
- Reduced online visibility
- Lost business potential
- Lower traffic and conversions

## Transforming a Website into a Growth Engine

Addressing these challenges turns a website into a true business asset. FEAR Agency specializes in:
- Modern, eye-catching websites that instantly build credibility
- Optimized speed and smooth performance to keep visitors engaged
- Clear, compelling messaging that sparks action
- SEO and AI discoverability so the business can be found easily

A website that works effectively can attract visitors, earn trust, and convert clicks into clients — becoming a business's most important digital salesperson.

---

**References**

1. Users form opinions about a website in approximately 0.05 seconds; design heavily impacts first impressions. (beaconwebworks.com)
2. Slow websites are ranked lower by Google, reducing visibility. (orpiv.com)
3. Slow-loading pages increase bounce rates and reduce engagement. (wifitalents.com)
4. Confusing messaging decreases engagement and conversions. (beaconwebworks.com)
5. SEO and discoverability are crucial for appearing on Google and AI platforms like ChatGPT. (gitnux.org)`,
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
