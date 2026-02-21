import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { FileText, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="banner">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Tint and Shades Generator - Free Color Palette Tool Logo" 
                className="w-9 h-9 rounded-lg object-contain transition-transform duration-300 group-hover:scale-110"
                width="36"
                height="36"
                loading="eager"
              />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Tint and Shades Generator
            </span>
          </Link>
          
          <nav className="flex items-center gap-2 md:gap-4">
            <Link to="/documentation">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-accent/50">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Documentation</span>
              </Button>
            </Link>
            <Link to="/privacy-policy">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-accent/50">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Privacy</span>
              </Button>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;