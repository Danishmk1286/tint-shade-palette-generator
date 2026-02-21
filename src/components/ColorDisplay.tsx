
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import ColorCard from './ColorCard';
import { generateTints, generateShades, convertColor } from '@/utils/colorUtils';
import { Button } from './ui/button';
import { Download, Figma, Info } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ColorDisplayProps {
  baseColor: string;
  tintCount: number;
  shadeCount: number;
  className?: string;
}

type ColorFormat = 'hex' | 'rgb' | 'hsl';

const ColorDisplay: React.FC<ColorDisplayProps> = ({
  baseColor,
  tintCount,
  shadeCount,
  className,
}) => {
  const [activeFormat, setActiveFormat] = useState<ColorFormat>('hex');
  const [showFigmaDialog, setShowFigmaDialog] = useState(false);
  
  // Generate color variants
  const tints = generateTints(baseColor, tintCount);
  const shades = generateShades(baseColor, shadeCount);
  
  // Check if we have any variants to display
  const hasVariants = tintCount > 0 || shadeCount > 0;

  // Format button handler
  const handleFormatChange = (format: ColorFormat) => {
    setActiveFormat(format);
  };

  // Helper function to convert color to RGB values
  const colorToRgb = (color: string): { r: number; g: number; b: number } => {
    if (color.startsWith('#')) {
      const cleanHex = color.replace('#', '');
      return {
        r: parseInt(cleanHex.substring(0, 2), 16),
        g: parseInt(cleanHex.substring(2, 4), 16),
        b: parseInt(cleanHex.substring(4, 6), 16),
      };
    }
    if (color.startsWith('rgb')) {
      const matches = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/i);
      if (matches) {
        return {
          r: parseInt(matches[1]),
          g: parseInt(matches[2]),
          b: parseInt(matches[3]),
        };
      }
    }
    if (color.startsWith('hsl')) {
      const matches = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+\.?\d*)%\)/i);
      if (matches) {
        const h = parseInt(matches[1]) / 360;
        const s = parseInt(matches[2]) / 100;
        const l = parseInt(matches[3]) / 100;
        
        let r, g, b;
        if (s === 0) {
          r = g = b = l;
        } else {
          const hueToRgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
          };
          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          r = hueToRgb(p, q, h + 1/3);
          g = hueToRgb(p, q, h);
          b = hueToRgb(p, q, h - 1/3);
        }
        return {
          r: Math.round(r * 255),
          g: Math.round(g * 255),
          b: Math.round(b * 255),
        };
      }
    }
    return { r: 0, g: 0, b: 0 };
  };


  // Prepare Figma export data (does not download)
  const prepareFigmaData = () => {
    const figmaStyles: any[] = [];
    
    // Add base color
    const baseRgb = colorToRgb(baseColor);
    figmaStyles.push({
      name: `Base`,
      fills: [{
        type: 'SOLID',
        color: {
          r: Math.round((baseRgb.r / 255) * 1000) / 1000,
          g: Math.round((baseRgb.g / 255) * 1000) / 1000,
          b: Math.round((baseRgb.b / 255) * 1000) / 1000,
        },
        opacity: 1,
      }],
      hex: convertColor(baseColor, 'hex').toUpperCase(),
      rgb: `rgb(${baseRgb.r}, ${baseRgb.g}, ${baseRgb.b})`,
    });
    
    // Add tints (ordered from lightest to darkest)
    tints.forEach((color, index) => {
      const rgb = colorToRgb(color);
      figmaStyles.push({
        name: `Tint ${(index + 1) * 50}`,
        fills: [{
          type: 'SOLID',
          color: {
            r: Math.round((rgb.r / 255) * 1000) / 1000,
            g: Math.round((rgb.g / 255) * 1000) / 1000,
            b: Math.round((rgb.b / 255) * 1000) / 1000,
          },
          opacity: 1,
        }],
        hex: convertColor(color, 'hex').toUpperCase(),
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      });
    });
    
    // Add shades
    shades.forEach((color, index) => {
      const rgb = colorToRgb(color);
      figmaStyles.push({
        name: `Shade ${(index + 1) * 50}`,
        fills: [{
          type: 'SOLID',
          color: {
            r: Math.round((rgb.r / 255) * 1000) / 1000,
            g: Math.round((rgb.g / 255) * 1000) / 1000,
            b: Math.round((rgb.b / 255) * 1000) / 1000,
          },
          opacity: 1,
        }],
        hex: convertColor(color, 'hex').toUpperCase(),
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      });
    });
    
    // Create Figma-compatible format
    const figmaData = {
      version: '1.0',
      name: `Color Palette - ${baseColor.toUpperCase()}`,
      document: {
        type: 'DOCUMENT',
        children: [{
          type: 'PAGE',
          name: 'Color Styles',
          children: figmaStyles.map((style, index) => ({
            type: 'RECTANGLE',
            name: style.name,
            fills: style.fills,
            x: 0,
            y: index * 100,
            width: 100,
            height: 100,
          })),
        }],
      },
      styles: figmaStyles.map(style => ({
        name: style.name,
        fills: style.fills,
        hex: style.hex,
        rgb: style.rgb,
      })),
      metadata: {
        baseColor: baseColor.toUpperCase(),
        tintCount: tintCount,
        shadeCount: shadeCount,
        totalColors: figmaStyles.length,
        exportedAt: new Date().toISOString(),
        tool: 'Shade Tint Genie',
        format: 'figma-v1',
      },
      // Simple format for plugins that expect a flat array
      colors: figmaStyles.map(style => ({
        name: style.name,
        hex: style.hex,
        rgb: style.rgb,
        rgba: {
          r: style.fills[0].color.r,
          g: style.fills[0].color.g,
          b: style.fills[0].color.b,
          a: 1,
        },
      })),
      // Instructions
      instructions: {
        method1: 'Use Figma plugins like "Import Colors", "Color Styles", or "Color Palette" to import',
        method2: 'The "colors" array contains a simple format compatible with most plugins',
        method3: 'Each color includes hex, rgb, and rgba values for maximum compatibility',
      },
    };
    
    return figmaData;
  };

  // Download Figma file (only called when user clicks download button)
  const handleDownloadFigmaFile = () => {
    try {
      const figmaData = prepareFigmaData();
      const dataStr = JSON.stringify(figmaData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `figma-palette-${baseColor.replace('#', '')}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast.success('Figma palette downloaded!');
    } catch (error) {
      console.error('Figma export error:', error);
      toast.error('Failed to export Figma palette. Please try again.');
    }
  };

  // Export palette as JSON
  const handleExport = () => {
    const palette = {
      baseColor,
      format: activeFormat,
      tints: tints.map(color => convertColor(color, activeFormat)),
      shades: shades.map(color => convertColor(color, activeFormat)),
    };
    const dataStr = JSON.stringify(palette, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `color-palette-${baseColor.replace('#', '')}.json`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success('Palette exported successfully');
  };
  
  return (
    <div className={cn('space-y-8', className)}>
      {/* Format selector with actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-2">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-base font-medium">Color Format:</span>
          <div className="flex items-center gap-3">
            {(['hex', 'rgb', 'hsl'] as const).map((format) => (
              <Button
                key={format}
                variant={activeFormat === format ? "default" : "outline"}
                size="sm"
                onClick={() => handleFormatChange(format)}
                className={cn(
                  "transition-all duration-300 uppercase text-sm font-medium min-w-[70px] sm:min-w-[80px]",
                  activeFormat === format ? "shadow-md" : ""
                )}
              >
                {format}
              </Button>
            ))}
          </div>
        </div>
        {hasVariants && (
          <div className="flex flex-wrap items-center gap-2">
            <Dialog open={showFigmaDialog} onOpenChange={setShowFigmaDialog}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Figma className="w-4 h-4" />
                  <span className="hidden sm:inline">Export to Figma</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Figma className="w-5 h-5" />
                    How to Import Colors into Figma
                  </DialogTitle>
                  <DialogDescription>
                    Follow these steps to export and import your color palette into Figma.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Install a Figma Plugin</h4>
                        <p className="text-sm text-muted-foreground">
                          Install one of these recommended plugins in Figma:
                        </p>
                        <div className="mt-2 space-y-2">
                          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                            <p className="text-sm font-semibold text-primary mb-1">✨ Recommended: Our Official Plugin</p>
                            <p className="text-xs text-muted-foreground mb-2">
                              Use the <strong>Tint and Shades Generator</strong> Figma plugin for the best experience. 
                              It's designed specifically for this tool and creates organized frames automatically.
                            </p>
                            <a
                              href="https://www.figma.com/community/plugin/1580741581746260039"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs font-medium hover:bg-primary/90 transition-colors"
                            >
                              Install Plugin
                            </a>
                          </div>
                          <p className="text-xs text-muted-foreground">Or use these alternative plugins:</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                            <li>
                              <a 
                                href="https://www.figma.com/community/plugin/735098309454883951/import-colors" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Import Colors
                              </a>
                            </li>
                            <li>
                              <a 
                                href="https://www.figma.com/community/plugin/782713260363070260/color-styles" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Color Styles
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Open the Plugin in Figma</h4>
                        <p className="text-sm text-muted-foreground">
                          In Figma, go to <strong>Plugins → Your installed plugin</strong> and open it.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Import the JSON File</h4>
                        <p className="text-sm text-muted-foreground">
                          Use the plugin's import feature to upload the downloaded JSON file. The plugin will create color styles in your Figma file.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4 border border-border">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold mb-1">Alternative Method:</p>
                        <p className="text-muted-foreground">
                          You can also manually create color styles in Figma using the HEX values from the JSON file. 
                          The JSON includes all color information in the <code className="bg-background px-1 rounded">colors</code> array.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter className="flex-col sm:flex-row gap-2 pt-4">
                  <Button
                    onClick={handleDownloadFigmaFile}
                    className="w-full sm:w-auto"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Figma File
                  </Button>
                  <p className="text-xs text-muted-foreground text-center sm:text-left w-full sm:w-auto">
                    Click to download the Figma export file.
                  </p>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export JSON</span>
            </Button>
          </div>
        )}
      </div>
      
      {/* Variants */}
      {hasVariants && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Tints */}
          {tintCount > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tints</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-4">
                {tints.map((color, index) => (
                  <ColorCard 
                    key={`tint-${index}`} 
                    color={color} 
                    index={index} 
                    type="tint"
                    delay={index}
                    format={activeFormat}
                    weight={(index + 1) * 50}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Shades */}
          {shadeCount > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Shades</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 sm:gap-4">
                {shades.map((color, index) => (
                  <ColorCard 
                    key={`shade-${index}`} 
                    color={color} 
                    index={index} 
                    type="shade"
                    delay={index}
                    format={activeFormat}
                    weight={(index + 1) * 50}
                  />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
      
      {/* Instructions */}
      {!hasVariants && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-muted-foreground p-8"
        >
          <p>Adjust the sliders above to generate tints and shades</p>
        </motion.div>
      )}
    </div>
  );
};

export default ColorDisplay;
