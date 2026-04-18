import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = 'FEAR Agency - Face Everything And Rise',
  description = 'Premium web development, AI solutions, and branding services. We design, develop & deploy scalable digital solutions.',
  keywords = 'web development, app development, AI solutions, branding, digital agency',
  image = 'https://fearagency.in/og-image.jpg',
  type = 'website'
}) => {
  const location = useLocation();
  const url = `https://fearagency.in${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;
