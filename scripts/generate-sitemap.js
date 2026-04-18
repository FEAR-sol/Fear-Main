const fs = require('fs');
const path = require('path');

// Import blogs data
const blogsDataPath = path.join(__dirname, '../src/data/blogsData.js');
let BLOGS = [];
let ARTICLES = [];

try {
  const blogsContent = fs.readFileSync(blogsDataPath, 'utf-8');
  // Extract BLOGS and ARTICLES arrays
  const blogsMatch = blogsContent.match(/export const BLOGS = (\[[\s\S]*?\]);/);
  const articlesMatch = blogsContent.match(/export const ARTICLES = (\[[\s\S]*?\]);/);
  
  if (blogsMatch) {
    eval(`BLOGS = ${blogsMatch[1]}`);
  }
  if (articlesMatch) {
    eval(`ARTICLES = ${articlesMatch[1]}`);
  }
} catch (error) {
  console.error('Error reading blogs data:', error);
}

const baseUrl = 'https://fearagency.in';

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blogs', priority: '0.9', changefreq: 'weekly' },
  { url: '/articles', priority: '0.9', changefreq: 'weekly' },
];

// Generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  // Add static pages
  staticPages.forEach(page => {
    xml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  });

  // Add blog pages
  BLOGS.forEach(blog => {
    xml += `  <url>
    <loc>${baseUrl}/blogs/${blog.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  // Add article pages
  ARTICLES.forEach(article => {
    xml += `  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  xml += `</urlset>`;

  // Write sitemap to public folder
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✓ Sitemap generated with ${staticPages.length + BLOGS.length + ARTICLES.length} URLs`);
  console.log(`  Location: ${sitemapPath}`);
}

generateSitemap();
