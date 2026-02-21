import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <Link to="/documentation" className="text-muted-foreground hover:text-primary transition-colors">
              Documentation
            </Link>
          </div>
          <p>© {currentYear} Tint and Shades Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
