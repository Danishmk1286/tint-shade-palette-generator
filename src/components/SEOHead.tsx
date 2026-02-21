import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://tintandshadesgenerator.com/og-image.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Tint and Shades Generator',
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = 'https://tintandshadesgenerator.com';
  // Ensure pathname has trailing slash for root, no trailing slash for others
  const pathname = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
  const fullUrl = `${baseUrl}${pathname}`;
  const finalTitle = title ? `${title} | Tint and Shades Generator` : 'Tint and Shades Generator | Free Color Palette Tool';
  const finalDescription = description || 'Generate perfect tints and shades from any color. Free online color tool for designers and developers. Create accessible color palettes instantly.';
  const finalCanonical = canonical || fullUrl;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Ensure favicon is set - verify it points to /favicon.ico (public/favicon.ico)
    const updateFavicon = () => {
      const faviconPath = '/favicon.ico'; // Explicit path to public/favicon.ico - no fallbacks
      let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/x-icon';
        favicon.href = faviconPath; // Points to public/favicon.ico
        document.head.appendChild(favicon);
      } else {
        // Verify and update if path is incorrect
        const currentPath = new URL(favicon.href, window.location.origin).pathname;
        if (currentPath !== faviconPath) {
          favicon.href = faviconPath; // Ensure it points to public/favicon.ico
        }
      }
    };
    updateFavicon();

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('description', finalDescription);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', finalTitle, 'property');
    updateMetaTag('og:description', finalDescription, 'property');
    updateMetaTag('og:url', finalCanonical, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:site_name', 'Tint and Shades Generator', 'property');

    if (type === 'article' && publishedTime) {
      updateMetaTag('article:published_time', publishedTime, 'property');
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, 'property');
      }
      if (author) {
        updateMetaTag('article:author', author, 'property');
      }
    }

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', '@tintandshades');
    updateMetaTag('twitter:creator', '@tintandshades');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);
  }, [finalTitle, finalDescription, finalCanonical, ogImage, type, publishedTime, modifiedTime, author, keywords]);

  return null;
};

export default SEOHead;

