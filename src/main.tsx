import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Ensure favicon is loaded from public/favicon.ico
// In Vite, files in public folder are served from root, so /favicon.ico is correct
const ensureFavicon = () => {
  // Explicit path to favicon in public folder - no fallbacks
  const faviconPath = '/favicon.ico';
  
  // Remove any existing favicon links to avoid duplicates
  const existingIcons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
  existingIcons.forEach(icon => icon.remove());
  
  // Create main favicon link - points directly to public/favicon.ico
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/x-icon';
  favicon.href = faviconPath; // /favicon.ico resolves to public/favicon.ico in Vite
  document.head.appendChild(favicon);
  
  // Create shortcut icon link - same path
  const shortcutIcon = document.createElement('link');
  shortcutIcon.rel = 'shortcut icon';
  shortcutIcon.type = 'image/x-icon';
  shortcutIcon.href = faviconPath; // /favicon.ico resolves to public/favicon.ico in Vite
  document.head.appendChild(shortcutIcon);
  
  // Create apple touch icon - same path
  const appleIcon = document.createElement('link');
  appleIcon.rel = 'apple-touch-icon';
  appleIcon.href = faviconPath; // /favicon.ico resolves to public/favicon.ico in Vite
  document.head.appendChild(appleIcon);
};

// Set favicon before rendering
ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
