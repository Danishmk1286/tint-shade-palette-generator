import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from 'sonner';
import SEOHead from '@/components/SEOHead';
import ColorPicker from '@/components/ColorPicker';
import VariantSlider from '@/components/VariantSlider';
import ColorDisplay from '@/components/ColorDisplay';
import CSSPreview from '@/components/CSSPreview';
import FAQSection from '@/components/FAQSection';
import { Separator } from '@/components/ui/separator';
import { Palette, Zap, Sparkles } from 'lucide-react';

const MAX_VARIANTS = 20;

// Preset colors for quick access
const PRESET_COLORS = [
  { name: 'Brand Blue', color: '#3b82f6' },
  { name: 'Forest Green', color: '#10b981' },
  { name: 'Sunset Orange', color: '#f97316' },
  { name: 'Royal Purple', color: '#8b5cf6' },
  { name: 'Crimson Red', color: '#ef4444' },
  { name: 'Amber Gold', color: '#f59e0b' },
];

const Index = () => {
  const [baseColor, setBaseColor] = useState('#3b82f6');
  const [tintCount, setTintCount] = useState(10);
  const [shadeCount, setShadeCount] = useState(10);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <SEOHead
        title="Free Tint and Shades Generator | Color Palette Tool"
        description="Generate perfect tints and shades from any color instantly. Free online color tool for designers and developers. Create accessible color palettes with HEX, RGB support. Export to Figma."
        keywords="tint and shades generator, color tint generator, shade creator, HEX color shades, design color tool, figma color tool, color palette generator, free color tools, design system colors"
        canonical="https://tintandshadesgenerator.com/"
      />
      <Toaster position="top-center" />
      
      
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 md:px-6 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="space-y-20 md:space-y-24">

          {/* Preset Colors */}
          <motion.section
            id="preset-colors-section"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {PRESET_COLORS.map((preset) => (
                <button
                  key={preset.color}
                  onClick={() => setBaseColor(preset.color)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    baseColor === preset.color
                      ? 'bg-primary text-primary-foreground border-primary shadow-sm scale-105'
                      : 'bg-card hover:bg-accent border-border hover:border-primary/50'
                  }`}
                  style={{
                    backgroundColor: baseColor === preset.color ? preset.color : undefined,
                    color: baseColor === preset.color ? '#fff' : undefined,
                  }}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </motion.section>
          
          {/* Grouped sections with tight spacing */}
          <div className="!mt-4 md:!mt-6 space-y-4">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl dark:shadow-2xl border-2 border-primary/60 dark:border-primary/40 p-6 sm:p-8 md:p-10 lg:p-12 color-picker-section scroll-mt-24 relative overflow-hidden ring-2 ring-primary/30 dark:ring-primary/20"
            style={{ scrollMarginTop: '100px' }}
          >
            {/* Enhanced background accent with glow - light mode enhanced */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/4 to-primary/8 dark:from-primary/10 dark:via-primary/5 dark:to-primary/10 pointer-events-none rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/6 via-transparent to-transparent dark:from-primary/5 pointer-events-none rounded-2xl" />
            {/* Glow effect - only for dark mode */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 dark:opacity-50 pointer-events-none -z-10" />
            <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Color picker */}
              <div className="md:col-span-5">
                <ColorPicker 
                  color={baseColor} 
                  onChange={setBaseColor} 
                />
              </div>
              
              <div className="md:col-span-1 flex justify-center items-center py-4">
                <Separator className="md:hidden" />
                <Separator orientation="vertical" className="hidden md:block h-full" />
              </div>
              
              {/* Variant controls */}
              <div className="md:col-span-6 space-y-6">
                <VariantSlider
                  value={tintCount}
                  onChange={setTintCount}
                  max={MAX_VARIANTS}
                  type="tint"
                />
                
                <VariantSlider
                  value={shadeCount}
                  onChange={setShadeCount}
                  max={MAX_VARIANTS}
                  type="shade"
                />
              </div>
            </div>
            </div>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <ColorDisplay
              baseColor={baseColor}
              tintCount={tintCount}
              shadeCount={shadeCount}
            />
          </motion.section>
          </div>

          {/* CSS Preview Section */}
          <CSSPreview
            baseColor={baseColor}
            tintCount={tintCount}
            shadeCount={shadeCount}
          />

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.3]">Perfect For</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group bg-card rounded-xl shadow-sm border border-border/50 p-8 text-center space-y-5 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl">Design Systems</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Build consistent color scales for your brand. Generate tints for backgrounds and shades for text in seconds.</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group bg-card rounded-xl shadow-sm border border-border/50 p-8 text-center space-y-5 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl">Code Ready</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Get HEX, RGB, and HSL codes instantly. Click to copy, paste into your CSS or design tools.</p>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group bg-card rounded-xl shadow-sm border border-border/50 p-8 text-center space-y-5 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl">No Setup</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">Start generating colors immediately. No sign-up, no limits, completely free.</p>
              </motion.div>
            </div>
          </motion.section>

          {/* What are Tints and Shades */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center leading-[1.3]">What are Tints and Shades?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
                    <span className="text-2xl">☀️</span>
                  </div>
                  <h3 className="text-xl font-semibold">Tints</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Tints are lighter versions of your color, made by adding white. Use them for backgrounds, highlights, and subtle accents.
                </p>
                <div className="flex gap-2 mt-4">
                  <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#3b82f6' }} />
                  <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#60a5fa' }} />
                  <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#93c5fd' }} />
                  <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#dbeafe' }} />
                </div>
              </div>
              
              <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <h3 className="text-xl font-semibold">Shades</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Shades are darker versions of your color, made by adding black. Use them for text, borders, shadows, and depth.
                </p>
                <div className="flex gap-2 mt-4">
                  <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#dbeafe' }} />
                  <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#93c5fd' }} />
                  <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#3b82f6' }} />
                  <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#1e40af' }} />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Quick Use Cases */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center leading-[1.3]">Quick Use Cases</h2>
            <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <div>
                  <p className="font-medium">Design System</p>
                  <p className="text-sm text-muted-foreground">Generate a complete color scale for your brand's primary color</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <div>
                  <p className="font-medium">UI Components</p>
                  <p className="text-sm text-muted-foreground">Create hover states and active states from your base color</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <div>
                  <p className="font-medium">Accessibility</p>
                  <p className="text-sm text-muted-foreground">Build contrast-compliant text colors from your background</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Bookmark Reminder */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
              <span className="text-lg">💾</span>
              <p className="text-sm font-medium">Bookmark this page to save your favorite color palettes</p>
            </div>
          </motion.section>

          <FAQSection />
        </div>
        
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-center space-y-6 pt-10 md:pt-12 border-t"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
              <p className="text-xs md:text-sm font-medium">
                💡 <span className="font-semibold">Quick tip:</span> Click any color to copy. Use format buttons to switch between HEX, RGB, and HSL.
              </p>
            </div>
          </div>
          <div className="pt-6 border-t space-y-2">
            <p className="text-xs md:text-sm text-muted-foreground">
              &copy; 2024 Shade Tint Genie. All rights reserved.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Created by{' '}
              <a 
                href="http://linkedin.com/danishmk286" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline font-medium transition-colors"
              >
                Danish Khan
              </a>
            </p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
};

export default Index;
