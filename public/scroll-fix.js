// IMMEDIATE SCROLL FIX - Runs before React loads
(function() {
  'use strict';
  
  // NUCLEAR OPTION: Force enable scrolling immediately
  function forceEnableScrolling() {
    // Apply to document elements immediately
    if (document.documentElement) {
      document.documentElement.style.touchAction = 'auto';
      document.documentElement.style.webkitOverflowScrolling = 'touch';
      document.documentElement.style.overflowY = 'auto';
      document.documentElement.style.overflowX = 'hidden';
    }
    
    if (document.body) {
      document.body.style.touchAction = 'auto';
      document.body.style.webkitOverflowScrolling = 'touch';
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
      document.body.style.height = 'auto';
      document.body.style.minHeight = '100vh';
    }
    
    // Apply to root when it exists
    const root = document.getElementById('root');
    if (root) {
      root.style.touchAction = 'auto';
      root.style.webkitOverflowScrolling = 'touch';
      root.style.overflowY = 'auto';
      root.style.overflowX = 'hidden';
    }
  }
  
  // Apply immediately
  forceEnableScrolling();
  
  // Apply when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forceEnableScrolling);
  }
  
  // Apply when page is fully loaded
  window.addEventListener('load', forceEnableScrolling);
  
  // Apply repeatedly to ensure it sticks
  setTimeout(forceEnableScrolling, 100);
  setTimeout(forceEnableScrolling, 500);
  setTimeout(forceEnableScrolling, 1000);
})();