
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { FileText, BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎨</span>
            <span className="font-bold text-lg">Shade Tint Genie</span>
          </Link>
          
          <nav className="flex items-center gap-4 md:gap-6">
            <Link to="/documentation">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Documentation</span>
              </Button>
            </Link>
            <Link to="/privacy-policy">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Privacy</span>
              </Button>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
      
      <div className="text-center space-y-6 py-8">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">🎨 Shade Tint Genie: Free Online Color Shades & Tints Generator</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg px-4">
          Create stunning color variations instantly with Shade Tint Genie — the ultimate tool for designers, developers, and artists. Generate accessible tints and shades from any HEX or RGB color for web design, UI mockups, branding palettes, and more. Fast, intuitive, and completely free.
        </p>
      </div>
    </header>
  );
};

export default Header;
