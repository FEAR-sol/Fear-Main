/**
 * Manual notification trigger script
 * Run: node server/scripts/notify.js
 *
 * Edit the CONTENT object below before running.
 */

require('dotenv').config({ path: require('path').join(__dirname, '../.env') });

const CONTENT = {
  title: 'Your New Article or Blog Title',
  description: 'A short description of what this piece is about.',
  slug: 'your-slug-here',          // e.g. 'future-of-ai-in-product-building'
  type: 'article',                  // 'article' or 'blog'
};

const API_URL = `http://localhost:${process.env.PORT || 5000}/api/notify`;
const API_KEY = process.env.ADMIN_API_KEY;

if (!API_KEY) {
  console.error('ADMIN_API_KEY is not set in .env');
  process.exit(1);
}

(async () => {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify(CONTENT),
    });

    const data = await res.json();

    if (data.success) {
      console.log(`✓ ${data.message}`);
      if (data.failed > 0) {
        console.warn(`  ${data.failed} batch(es) failed:`, data.errors);
      }
    } else {
      console.error('✗ Failed:', data.message);
    }
  } catch (err) {
    console.error('✗ Request failed:', err.message);
  }
})();
