import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Palette, Eye, Copy, Download, Lightbulb } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Documentation = () => {
  const features = [
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Color Input Support",
      description: "Support for HEX, RGB, and 3-digit HEX color formats. Automatically normalizes and validates all color inputs.",
      examples: ["#FF5733", "#F53", "rgb(255, 87, 51)", "FF5733"]
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Tints & Shades Generation",
      description: "Generate 10 tints (lighter variants) and 10 shades (darker variants) of any base color with precise mathematical calculations.",
      examples: ["Tints: Add white incrementally", "Shades: Add black incrementally", "Smooth gradient transitions"]
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Real-time Preview",
      description: "Instant visual feedback with color swatches, HEX codes, and responsive design that works on all devices.",
      examples: ["Live color picker", "Interactive sliders", "Instant updates"]
    },
    {
      icon: <Copy className="h-5 w-5" />,
      title: "One-Click Copy",
      description: "Copy any generated color's HEX code to clipboard with a single click for seamless workflow integration.",
      examples: ["Click any color to copy", "Toast notifications", "Clipboard integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Tool
                </Button>
              </Link>
              <h1 className="text-xl font-semibold">Documentation</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                🎨 Shade Tint Genie Documentation
              </CardTitle>
              <p className="text-muted-foreground">
                Complete guide to using the free online color shades and tints generator
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Shade Tint Genie is a powerful, free tool designed for designers, developers, and artists to generate beautiful color variations. 
                Create professional color palettes with precise tints (lighter variants) and shades (darker variants) from any base color.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Free Tool</Badge>
                <Badge variant="secondary">No Registration</Badge>
                <Badge variant="secondary">Privacy Focused</Badge>
                <Badge variant="secondary">Mobile Friendly</Badge>
              </div>
            </CardContent>
          </Card>

          {/* How to Use */}
          <Card>
            <CardHeader>
              <CardTitle>How to Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="font-semibold">Step 1: Input Your Color</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter any color using HEX code (#FF5733), RGB format (rgb(255,87,51)), or use the visual color picker.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Step 2: Generate Variants</h3>
                  <p className="text-sm text-muted-foreground">
                    Instantly see 10 tints (lighter) and 10 shades (darker) of your color with smooth gradients.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Step 3: Copy Colors</h3>
                  <p className="text-sm text-muted-foreground">
                    Click any generated color to copy its HEX code to your clipboard for use in design tools.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold">Step 4: Use in Projects</h3>
                  <p className="text-sm text-muted-foreground">
                    Apply the generated colors in web design, UI mockups, branding, or any creative project.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      {feature.icon}
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.examples.map((example, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Color Calculation</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Mathematical color mixing algorithms</li>
                    <li>• Precise RGB to HEX conversion</li>
                    <li>• Smooth gradient transitions</li>
                    <li>• Accessibility-focused color generation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Privacy & Performance</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Client-side processing only</li>
                    <li>• No data sent to servers</li>
                    <li>• Instant color generation</li>
                    <li>• Works offline after initial load</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle>Perfect For</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Web Designers</h3>
                  <p className="text-sm text-muted-foreground">Create cohesive color schemes for websites and web applications</p>
                </div>
                <div className="text-center p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">UI/UX Designers</h3>
                  <p className="text-sm text-muted-foreground">Generate accessible color variations for interface design</p>
                </div>
                <div className="text-center p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Brand Designers</h3>
                  <p className="text-sm text-muted-foreground">Develop comprehensive brand color palettes and guidelines</p>
                </div>
                <div className="text-center p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Developers</h3>
                  <p className="text-sm text-muted-foreground">Quickly generate CSS color values for development projects</p>
                </div>
                <div className="text-center p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Digital Artists</h3>
                  <p className="text-sm text-muted-foreground">Explore color relationships and create harmonious palettes</p>
                </div>
                <div className="text-center p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Students</h3>
                  <p className="text-sm text-muted-foreground">Learn color theory and practice with real-time feedback</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About the Creator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="flex-1 space-y-3">
                  <p className="text-muted-foreground">
                    <strong>Created by Danish Khan</strong> - A passionate developer and designer focused on creating useful, 
                    accessible tools for the creative community.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="http://linkedin.com/danishmk286" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      LinkedIn Profile
                    </a>
                    <a 
                      href="https://github.com/danishmk286" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      GitHub Profile
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This tool is open-source and free to use. Feedback and contributions are welcome!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  );
};

export default Documentation;