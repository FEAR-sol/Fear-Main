# Google Analytics 4 Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create GA4 Property

1. Go to https://analytics.google.com/
2. Click "Admin" (gear icon, bottom left)
3. Click "Create Property"
4. Enter property name: "FEAR Agency Website"
5. Select timezone and currency
6. Click "Next"
7. Fill business information
8. Click "Create"

### Step 2: Get Measurement ID

1. In Admin → Property → Data Streams
2. Click "Add stream" → "Web"
3. Enter website URL: `https://fearagency.in`
4. Stream name: "FEAR Website"
5. Click "Create stream"
6. **Copy the Measurement ID** (looks like `G-XXXXXXXXXX`)

### Step 3: Add to Your Project

Create or update `.env` file in project root:

```
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### Step 4: Deploy

1. Push to GitHub (already done)
2. Add the environment variable to Vercel:
   - Go to Vercel Dashboard
   - Select your project
   - Settings → Environment Variables
   - Add: `REACT_APP_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
3. Redeploy

---

## What's Already Integrated

✅ Google Analytics initialization code
✅ Automatic page view tracking
✅ Custom event tracking functions
✅ Ready to use - just add Measurement ID

---

## Available Tracking Functions

### Track Page Views (Automatic)
Already tracks every page navigation automatically.

### Track Custom Events

```javascript
import { trackEvent, trackButtonClick, trackFormSubmit, trackBlogView, trackSubscribe } from './utils/analytics';

// Track button clicks
trackButtonClick('Get Started Button');

// Track form submissions
trackFormSubmit('Contact Form');

// Track blog views
trackBlogView('Blog Title Here');

// Track subscriptions
trackSubscribe('Blog Page');

// Track custom events
trackEvent('custom_event_name', {
  parameter1: 'value1',
  parameter2: 'value2'
});
```

---

## Testing

### 1. Check if GA is Working

1. Add Measurement ID to `.env`
2. Run `npm start`
3. Open browser console
4. Navigate between pages
5. Check for gtag calls in Network tab

### 2. Real-time Reports

1. Go to GA4 Dashboard
2. Click "Reports" → "Realtime"
3. Visit your website
4. You should see yourself in real-time!

---

## What You'll See in GA4

### Automatic Tracking:
- Page views
- Session duration
- Bounce rate
- User demographics
- Device types
- Traffic sources
- Geographic location

### Custom Events (when implemented):
- Button clicks
- Form submissions
- Blog views
- Newsletter subscriptions

---

## Recommended Events to Track

Add these to your components:

### Contact Form
```javascript
import { trackFormSubmit } from '../utils/analytics';

const handleSubmit = () => {
  // ... form logic
  trackFormSubmit('Contact Form');
};
```

### Subscribe Button
```javascript
import { trackSubscribe } from '../utils/analytics';

const handleSubscribe = () => {
  // ... subscribe logic
  trackSubscribe('Blog Page');
};
```

### CTA Buttons
```javascript
import { trackButtonClick } from '../utils/analytics';

<button onClick={() => trackButtonClick('Get Started')}>
  Get Started
</button>
```

---

## Privacy & GDPR

### Cookie Consent (Optional)

If you need cookie consent for GDPR:

1. Install a consent library:
```bash
npm install react-cookie-consent
```

2. Add consent banner to App.jsx
3. Only initialize GA after consent

---

## Troubleshooting

### GA not tracking?
- Check Measurement ID is correct
- Check `.env` file exists
- Restart dev server after adding `.env`
- Check browser console for errors
- Verify in GA4 Realtime reports

### Events not showing?
- Events may take 24-48 hours to appear in reports
- Check Realtime reports for immediate feedback
- Verify event names match GA4 conventions (lowercase, underscores)

---

## Next Steps

1. ✅ Add Measurement ID to `.env`
2. ✅ Add to Vercel environment variables
3. ✅ Deploy and test
4. Add custom event tracking to key actions
5. Set up conversion goals in GA4
6. Create custom reports
7. Set up alerts for traffic drops

---

## Resources

- GA4 Documentation: https://support.google.com/analytics/
- Event naming conventions: https://support.google.com/analytics/answer/9267735
- GA4 vs Universal Analytics: https://support.google.com/analytics/answer/11583528

Your analytics setup is ready! Just add the Measurement ID and deploy. 📊
