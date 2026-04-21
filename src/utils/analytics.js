// Google Analytics 4 Setup
// To use: Add your GA4 Measurement ID to .env as REACT_APP_GA_MEASUREMENT_ID

export const initGA = () => {
  const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
  
  if (!measurementId) {
    // GA not configured — skip silently in development
    return;
  }

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId);

  window.gtag = gtag;
};

// Track page views
export const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag('config', process.env.REACT_APP_GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Common event trackers
export const trackButtonClick = (buttonName) => {
  trackEvent('button_click', { button_name: buttonName });
};

export const trackFormSubmit = (formName) => {
  trackEvent('form_submit', { form_name: formName });
};

export const trackBlogView = (blogTitle) => {
  trackEvent('blog_view', { blog_title: blogTitle });
};

export const trackSubscribe = (source) => {
  trackEvent('subscribe', { source });
};
