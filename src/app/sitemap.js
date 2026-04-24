import { ARTICLES, BLOGS } from '../data/blogsData';

export default function sitemap() {
  return [
    { url: 'https://fearagency.in/', lastModified: '2026-04-21', changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://fearagency.in/about', lastModified: '2026-04-21', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://fearagency.in/contact', lastModified: '2026-04-21', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://fearagency.in/blogs', lastModified: '2026-04-21', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://fearagency.in/articles', lastModified: '2026-04-21', changeFrequency: 'weekly', priority: 0.9 },
    ...ARTICLES.map((a) => ({
      url: `https://fearagency.in/articles/${a.slug}`,
      lastModified: '2026-04-21',
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...BLOGS.map((b) => ({
      url: `https://fearagency.in/blogs/${b.slug}`,
      lastModified: '2026-04-21',
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ];
}
