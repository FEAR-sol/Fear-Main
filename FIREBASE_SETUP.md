# Firebase + Email Subscription Setup Guide

## Part 1: Firebase Setup (5 minutes)

### 1. Create Firebase Project
1. Go to https://console.firebase.google.com/
2. Click "Add project"
3. Name it "FEAR-Agency" (or any name)
4. Disable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Firestore Database
1. In Firebase Console, click "Firestore Database" in left menu
2. Click "Create database"
3. Choose "Start in production mode"
4. Select location closest to you (e.g., `us-central`)
5. Click "Enable"

### 3. Set Firestore Rules
1. Go to "Firestore Database" → "Rules" tab
2. Replace with this:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to add subscribers
    match /subscribers/{document} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```
3. Click "Publish"

### 4. Get Firebase Config
1. Go to Project Settings (gear icon) → General
2. Scroll to "Your apps" section
3. Click the web icon `</>`
4. Register app with nickname "FEAR-Website"
5. Copy the `firebaseConfig` object
6. Paste it into `src/firebase/config.js` (replace the placeholder)

---

## Part 2: Email Service Setup (Resend - 3000 free emails/month)

### 1. Create Resend Account
1. Go to https://resend.com/
2. Sign up with GitHub or email
3. Verify your email

### 2. Add Your Domain (Optional but Recommended)
1. Go to "Domains" in Resend dashboard
2. Click "Add Domain"
3. Enter `fearagency.in`
4. Add the DNS records they provide to your domain registrar
5. Wait for verification (usually 5-10 minutes)

**OR use Resend's test domain for now:**
- You can send from `onboarding@resend.dev` without domain setup
- Limited to 100 emails/day

### 3. Get API Key
1. Go to "API Keys" in Resend dashboard
2. Click "Create API Key"
3. Name it "FEAR-Blog-Notifications"
4. Copy the API key (starts with `re_`)

### 4. Add API Key to Project
Create `.env` file in project root:
```
REACT_APP_RESEND_API_KEY=re_your_api_key_here
```

---

## Part 3: Testing the Subscription

1. Start the dev server: `npm start`
2. Go to Blogs or Articles page
3. Enter your email in subscribe box
4. Click "Subscribe"
5. Check Firebase Console → Firestore Database → `subscribers` collection
6. You should see your email there!

---

## Part 4: Sending Blog Notifications

### Option A: Manual (Simple)
When you publish a new blog:

1. Open browser console on your website
2. Run this code:
```javascript
import { sendBlogNotification } from './firebase/sendBlogNotification';

sendBlogNotification({
  title: "Your Blog Title",
  slug: "your-blog-slug",
  excerpt: "Short description of your blog..."
});
```

### Option B: Admin Panel (Recommended)
I can create a simple admin page where you:
1. Click "Send Notification" button
2. Select which blog to notify about
3. Preview the email
4. Click "Send to All Subscribers"

Want me to create the admin panel?

---

## Troubleshooting

### "Firebase not defined" error
- Make sure `npm install firebase` completed
- Restart dev server

### "Permission denied" in Firestore
- Check Firestore Rules are set correctly
- Make sure you published the rules

### Emails not sending
- Verify Resend API key is correct
- Check `.env` file exists and has correct format
- Restart dev server after adding `.env`

---

## Next Steps

1. Complete Firebase setup above
2. Test subscription on your website
3. Let me know if you want the admin panel for sending notifications
4. I can also set up automated emails when you add blogs to your data file
