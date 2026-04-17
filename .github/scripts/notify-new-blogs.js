const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, where, getDocs } = require('firebase/firestore');
const { execSync } = require('child_process');
const fs = require('fs');

// Firebase config from environment
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get all subscribers
async function getAllSubscribers() {
  const subscribersRef = collection(db, 'subscribers');
  const q = query(subscribersRef, where('active', '==', true));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => doc.data().email);
}

// Send email via Resend
async function sendEmail(subscribers, blog) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'FEAR Agency <onboarding@resend.dev>',
      to: subscribers,
      subject: `New ${blog.type === 'blog' ? 'Blog' : 'Article'} from FEAR Agency: ${blog.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1a1a1a; padding: 20px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #BFBCB6; margin: 0; font-size: 24px;">FEAR Agency</h1>
          </div>
          <div style="background: #f5f5f5; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1a1a1a; margin-top: 0;">${blog.title}</h2>
            <p style="color: #666; line-height: 1.6; font-size: 16px;">${blog.excerpt}</p>
            <a href="https://fearagency.in/${blog.type === 'blog' ? 'blogs' : 'articles'}/${blog.slug}" 
               style="display: inline-block; background: #1a1a1a; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; margin-top: 20px; font-weight: 500;">
              Read Full ${blog.type === 'blog' ? 'Blog' : 'Article'} →
            </a>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px; margin: 0;">
              You're receiving this because you subscribed to FEAR Agency updates.<br/>
              <a href="https://fearagency.in" style="color: #666;">Visit our website</a>
            </p>
          </div>
        </div>
      `
    })
  });

  return response.json();
}

// Detect new blogs by comparing git diff
function getNewBlogs() {
  try {
    // Get the diff of blogsData.js
    const diff = execSync('git diff HEAD~1 HEAD -- src/data/blogsData.js', { encoding: 'utf-8' });
    
    if (!diff) {
      console.log('No changes in blogsData.js');
      return [];
    }

    // Read current blogsData.js
    const blogsDataContent = fs.readFileSync('src/data/blogsData.js', 'utf-8');
    
    // Extract new blog entries (simple detection - looks for new slugs in diff)
    const newBlogs = [];
    const slugMatches = diff.match(/\+\s*slug:\s*['"]([^'"]+)['"]/g);
    
    if (slugMatches) {
      slugMatches.forEach(match => {
        const slug = match.match(/['"]([^'"]+)['"]/)[1];
        
        // Extract blog details from blogsData.js
        const blogMatch = blogsDataContent.match(new RegExp(
          `{[^}]*slug:\\s*['"]${slug}['"][^}]*title:\\s*['"]([^'"]+)['"][^}]*excerpt:\\s*['"]([^'"]+)['"][^}]*}`,
          's'
        ));
        
        if (blogMatch) {
          newBlogs.push({
            slug,
            title: blogMatch[1],
            excerpt: blogMatch[2],
            type: blogsDataContent.includes(`BLOGS`) && blogsDataContent.indexOf(slug) < blogsDataContent.indexOf('ARTICLES') ? 'blog' : 'article'
          });
        }
      });
    }

    return newBlogs;
  } catch (error) {
    console.error('Error detecting new blogs:', error);
    return [];
  }
}

// Main function
async function main() {
  console.log('Checking for new blogs...');
  
  const newBlogs = getNewBlogs();
  
  if (newBlogs.length === 0) {
    console.log('No new blogs detected');
    return;
  }

  console.log(`Found ${newBlogs.length} new blog(s):`, newBlogs.map(b => b.title));

  const subscribers = await getAllSubscribers();
  
  if (subscribers.length === 0) {
    console.log('No subscribers to notify');
    return;
  }

  console.log(`Sending notifications to ${subscribers.length} subscribers...`);

  for (const blog of newBlogs) {
    const result = await sendEmail(subscribers, blog);
    console.log(`Sent notification for "${blog.title}":`, result);
  }

  console.log('All notifications sent!');
}

main().catch(console.error);
