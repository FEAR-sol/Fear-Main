# Automatic Blog Notification Setup

This system automatically sends emails to all subscribers when you push a new blog/article to GitHub.

## How It Works

1. You add a new blog to `src/data/blogsData.js`
2. You commit and push to GitHub
3. GitHub Actions detects the new blog
4. Automatically sends email to all subscribers
5. Done! No manual work needed.

---

## Setup (One-time, 5 minutes)

### Step 1: Add Secrets to GitHub

1. Go to your GitHub repo: https://github.com/FEAR-sol/Fear-Main
2. Click "Settings" tab
3. Click "Secrets and variables" → "Actions" in left menu
4. Click "New repository secret" and add these 4 secrets:

**Secret 1: FIREBASE_API_KEY**
```
AIzaSyCvegV7Nmbwlz2rpD7as1ZOvBcaOZI34is
```

**Secret 2: FIREBASE_PROJECT_ID**
```
project-ce28ce3b-386e-4e10-9af
```

**Secret 3: FIREBASE_APP_ID**
```
1:122441322837:web:e02e4e8bbc2e0a252c5fdc
```

**Secret 4: RESEND_API_KEY**
```
re_4xJZ6XCq_6G3APnmXAeRBMJ8SLjpmyaHg
```

### Step 2: Enable GitHub Actions

1. In your repo, go to "Actions" tab
2. If prompted, click "I understand my workflows, go ahead and enable them"
3. Done!

---

## How to Use

### Adding a New Blog

1. Open `src/data/blogsData.js`
2. Add your new blog to the `BLOGS` or `ARTICLES` array:

```javascript
{
  slug: 'my-new-blog',
  title: 'My Awesome New Blog',
  excerpt: 'This is what the blog is about...',
  // ... rest of blog data
}
```

3. Commit and push:
```bash
git add src/data/blogsData.js
git commit -m "Add new blog: My Awesome New Blog"
git push
```

4. **That's it!** GitHub Actions will:
   - Detect the new blog
   - Get all subscribers from Firebase
   - Send email to everyone automatically
   - You'll see the progress in "Actions" tab

---

## Testing

### Test the subscription first:

1. Go to your website blogs page
2. Subscribe with your email
3. Check Firebase Console → Firestore → `subscribers` collection
4. You should see your email there

### Test the notification:

1. Add a test blog to `blogsData.js`
2. Push to GitHub
3. Go to GitHub repo → "Actions" tab
4. Watch the workflow run
5. Check your email inbox!

---

## Monitoring

- **See workflow runs**: GitHub repo → Actions tab
- **See subscribers**: Firebase Console → Firestore → subscribers
- **Email delivery**: Resend dashboard → Emails

---

## Troubleshooting

### Workflow not running?
- Check "Actions" tab is enabled
- Make sure you pushed to `main` branch
- Verify you changed `src/data/blogsData.js`

### Emails not sending?
- Check GitHub Actions logs for errors
- Verify all 4 secrets are added correctly
- Check Resend dashboard for delivery status

### No subscribers?
- Test subscription on your website first
- Check Firebase Firestore rules are set correctly

---

## What Happens Behind the Scenes

1. **GitHub Actions** watches for changes to `blogsData.js`
2. When detected, it runs the notification script
3. Script compares old vs new file to find new blogs
4. Gets all subscribers from Firebase Firestore
5. Sends beautiful HTML email via Resend API
6. Subscribers get: "FEAR Agency posted: [Blog Title]" with link

---

## Cost

- **Firebase**: Free (up to 50K reads/day)
- **Resend**: Free (3000 emails/month)
- **GitHub Actions**: Free (2000 minutes/month)

All completely free for your use case!
