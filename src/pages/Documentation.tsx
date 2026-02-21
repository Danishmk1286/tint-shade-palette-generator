import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead';
import { Palette, Eye, Copy, Download, Lightbulb, BookOpen, Code, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Documentation = () => {
  const features = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Color Input Support",
      description: "Support for HEX, RGB, and 3-digit HEX color formats. Automatically normalizes and validates all color inputs.",
      examples: ["#FF5733", "#F53", "rgb(255, 87, 51)", "FF5733"],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Tints & Shades Generation",
      description: "Generate 10 tints (lighter variants) and 10 shades (darker variants) of any base color with precise mathematical calculations.",
      examples: ["Tints: Add white incrementally", "Shades: Add black incrementally", "Smooth gradient transitions"],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Real-time Preview",
      description: "Instant visual feedback with color swatches, HEX codes, and responsive design that works on all devices.",
      examples: ["Live color picker", "Interactive sliders", "Instant updates"],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: <Copy className="h-5 w-5" />,
      title: "One-Click Copy",
      description: "Copy any generated color's HEX code to clipboard with a single click for seamless workflow integration.",
      examples: ["Click any color to copy", "Toast notifications", "Clipboard integration"],
      gradient: 'from-orange-500/20 to-amber-500/20',
    },
    {
      icon: <Download className="h-5 w-5" />,
      title: "Export Options",
      description: "Export your color palettes as JSON for Figma, CSS variables, or use the built-in Figma plugin integration.",
      examples: ["Figma export", "CSS variables", "JSON format"],
      gradient: 'from-indigo-500/20 to-violet-500/20',
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "CSS Preview",
      description: "See your color palette as CSS custom properties ready to use in your projects.",
      examples: ["CSS variables", "Copy CSS code", "Production ready"],
      gradient: 'from-teal-500/20 to-cyan-500/20',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Documentation - Complete User Guide"
        description="Complete guide to using the Tint and Shades Generator. Learn all features, how to use the tool, and best practices for creating color palettes."
        keywords="tint and shades generator documentation, how to use color generator, color tool guide, design tool tutorial"
        canonical="https://tintandshadesgenerator.com/documentation"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-b">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center overflow-visible"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">User Guide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-[1.1] pb-2">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete guide to using the Tint and Shades Generator. Learn all features, workflows, and best practices for creating professional color palettes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="space-y-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Palette className="w-8 h-8 text-primary" />
                  Tint and Shades Generator
                </CardTitle>
                <p className="text-muted-foreground text-lg mt-2">
                  A powerful, free tool designed for designers, developers, and artists to generate beautiful color variations.
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Create professional color palettes with precise tints (lighter variants) and shades (darker variants) from any base color. 
                  Perfect for building design systems, creating accessible interfaces, and establishing consistent brand colors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="px-3 py-1">Free Tool</Badge>
                  <Badge variant="secondary" className="px-3 py-1">No Registration</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Privacy Focused</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Mobile Friendly</Badge>
                  <Badge variant="secondary" className="px-3 py-1">Figma Integration</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Problem Statement & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Problem Statement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  UI teams often need consistent tint and shade scales for design systems, states, and accessible contrast
                  checks. Manually generating these scales is slow, error-prone, and leads to inconsistent palettes across
                  files and products.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This problem exists because most workflows rely on manual color tweaking and ad hoc tools that do not
                  enforce consistent steps. In accessibility work, inconsistent scales make it harder to validate contrast
                  ratios and maintain predictable visual hierarchy.
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The Tint and Shades Generator creates reliable, evenly spaced variants from a single base color using
                    a consistent algorithm. It produces ready-to-use swatches and CSS variables so designers can move
                    quickly from exploration to production.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    By standardizing how tints and shades are generated, the tool reduces rework and supports accessible
                    design decisions. It is practical because it requires no setup, works instantly, and outputs values
                    that fit directly into modern design systems.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* How to Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary" />
                  How to Use
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                      <h3 className="font-semibold text-lg">Input Your Color</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Enter any color using HEX code (#FF5733), RGB format (rgb(255,87,51)), or use the visual color picker. 
                      The tool supports multiple input formats and automatically normalizes them.
                    </p>
                  </div>
                  <div className="space-y-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                      <h3 className="font-semibold text-lg">Generate Variants</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Instantly see 10 tints (lighter) and 10 shades (darker) of your color with smooth gradients. 
                      Adjust the count using sliders (0-20 for each).
                    </p>
                  </div>
                  <div className="space-y-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                      <h3 className="font-semibold text-lg">Copy & Export</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Click any generated color to copy its HEX code, export as CSS variables, or download as JSON for Figma integration.
                    </p>
                  </div>
                  <div className="space-y-3 p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                      <h3 className="font-semibold text-lg">Use in Projects</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Apply the generated colors in web design, UI mockups, branding, or any creative project. 
                      Use the <Link to="https://www.figma.com/community/plugin/1580741581746260039" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Figma plugin</Link> for seamless integration.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:border-primary/30 transition-all hover:shadow-lg">
                    <div className={`h-2 bg-gradient-to-r ${feature.gradient}`} />
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-primary`}>
                          {feature.icon}
                        </div>
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {feature.examples.map((example, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Technical Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      Color Calculation
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Mathematical color mixing algorithms using HSL color space</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Precise RGB to HEX conversion with proper rounding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Smooth gradient transitions maintaining color harmony</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Accessibility-focused color generation for WCAG compliance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Shield className="w-5 h-5 text-primary" />
                      Privacy & Performance
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Client-side processing only - no server requests</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>No data sent to servers - complete privacy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Instant color generation - no loading delays</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Works offline after initial page load</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Perfect For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "Web Designers", desc: "Create cohesive color schemes for websites and web applications" },
                    { title: "UI/UX Designers", desc: "Generate accessible color variations for interface design" },
                    { title: "Brand Designers", desc: "Develop comprehensive brand color palettes and guidelines" },
                    { title: "Developers", desc: "Quickly generate CSS color values for development projects" },
                    { title: "Digital Artists", desc: "Explore color relationships and create harmonious palettes" },
                    { title: "Students", desc: "Learn color theory and practice with real-time feedback" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="text-center p-6 rounded-xl border-2 hover:border-primary/30 hover:bg-muted/50 transition-all"
                    >
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">About the Creator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Created by Danish Khan</strong> - A passionate developer and designer focused on creating useful, 
                    accessible tools for the creative community.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="http://linkedin.com/danishmk286" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This tool is open-source and free to use. Feedback and contributions are welcome!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
