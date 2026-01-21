import { useEffect } from 'react';

export const useMobileScrollFix = () => {
  useEffect(() => {
    // NUCLEAR OPTION: Force enable scrolling everywhere
    const forceEnableScrolling = () => {
      // Remove ALL potential scroll blockers
      const allElements = document.querySelectorAll('*');
      
      allElements.forEach(element => {
        // Force enable touch scrolling on EVERY element
        element.style.touchAction = 'auto';
        element.style.webkitOverflowScrolling = 'touch';
        
        // CRITICAL: Hide scrollbars but keep functionality
        element.style.scrollbarWidth = 'none'; // Firefox
        element.style.msOverflowStyle = 'none'; // IE
        
        // Remove any potential pointer-events blockers
        if (element.style.pointerEvents === 'none' && !element.classList.contains('bg-')) {
          element.style.pointerEvents = 'auto';
        }
        
        // Remove any transform that might interfere
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.transform !== 'none' && computedStyle.transform !== 'matrix(1, 0, 0, 1, 0, 0)') {
          element.style.transform = 'none';
        }
      });

      // Force on critical elements
      const criticalElements = [
        document.documentElement,
        document.body,
        document.getElementById('root'),
        ...document.querySelectorAll('main'),
        ...document.querySelectorAll('section'),
        ...document.querySelectorAll('div'),
        ...document.querySelectorAll('[data-framer-component]'),
        ...document.querySelectorAll('[class*="motion-"]'),
        ...document.querySelectorAll('[class*="sticky"]')
      ].filter(Boolean);

      criticalElements.forEach(element => {
        if (element) {
          // FORCE enable scrolling
          element.style.touchAction = 'auto !important';
          element.style.webkitOverflowScrolling = 'touch !important';
          element.style.overflowY = 'auto !important';
          element.style.overflowX = 'hidden !important';
          
          // CRITICAL: Hide scrollbars but keep functionality
          element.style.scrollbarWidth = 'none !important'; // Firefox
          element.style.msOverflowStyle = 'none !important'; // IE
          
          // Remove any CSS that might block scrolling
          element.style.position = element.style.position === 'fixed' ? 'fixed' : element.style.position;
          element.style.height = element.style.height === '100vh' ? '100vh' : 'auto';
          
          // Ensure the element can be scrolled
          if (element === document.body || element === document.documentElement) {
            element.style.minHeight = '100vh';
            element.style.height = 'auto';
          }
        }
      });

      // Special fix for iOS Safari
      if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.body.style.webkitOverflowScrolling = 'touch';
        document.body.style.touchAction = 'manipulation';
        document.documentElement.style.webkitOverflowScrolling = 'touch';
        document.documentElement.style.touchAction = 'manipulation';
      }

      // CRITICAL: Inject CSS to hide all webkit scrollbars
      if (!document.head.querySelector('style[data-hide-scrollbars]')) {
        const hideScrollbarStyle = document.createElement('style');
        hideScrollbarStyle.setAttribute('data-hide-scrollbars', 'true');
        hideScrollbarStyle.textContent = `
          /* Hide all scrollbars but keep functionality */
          *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          
          html::-webkit-scrollbar,
          body::-webkit-scrollbar,
          #root::-webkit-scrollbar {
            display: none !important;
          }
          
          /* Ensure scrolling still works */
          html, body, #root {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
        `;
        document.head.appendChild(hideScrollbarStyle);
      }
    };

    // Apply immediately and repeatedly
    forceEnableScrolling();
    
    // Apply multiple times to ensure it sticks
    const timers = [
      setTimeout(forceEnableScrolling, 50),
      setTimeout(forceEnableScrolling, 100),
      setTimeout(forceEnableScrolling, 200),
      setTimeout(forceEnableScrolling, 500),
      setTimeout(forceEnableScrolling, 1000),
      setTimeout(forceEnableScrolling, 2000)
    ];

    // Apply on any DOM changes
    const observer = new MutationObserver(() => {
      setTimeout(forceEnableScrolling, 10);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });

    // Apply on events that might change layout
    const events = ['resize', 'orientationchange', 'scroll', 'touchstart', 'touchmove'];
    const handleEvent = () => setTimeout(forceEnableScrolling, 10);
    
    events.forEach(event => {
      window.addEventListener(event, handleEvent, { passive: true });
    });

    // Cleanup
    return () => {
      timers.forEach(clearTimeout);
      observer.disconnect();
      events.forEach(event => {
        window.removeEventListener(event, handleEvent);
      });
    };
  }, []);
};