import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { generateTints, generateShades, convertColor } from '@/utils/colorUtils';
import { toast } from 'sonner';

interface CSSPreviewProps {
  baseColor: string;
  tintCount: number;
  shadeCount: number;
}

const CSSPreview: React.FC<CSSPreviewProps> = ({
  baseColor,
  tintCount,
  shadeCount,
}) => {
  const [copied, setCopied] = React.useState(false);

  const cssCode = useMemo(() => {
    const tints = generateTints(baseColor, tintCount);
    const shades = generateShades(baseColor, shadeCount);
    
    let css = `:root {\n  /* Base Color */\n  --color-base: ${convertColor(baseColor, 'hex')};\n\n`;
    
    if (tintCount > 0) {
      css += `  /* Tints - Lighter variations */\n`;
      tints.forEach((color, index) => {
        const colorName = `--color-tint-${(index + 1) * 50}`;
        css += `  ${colorName}: ${convertColor(color, 'hex')};\n`;
      });
      css += `\n`;
    }
    
    if (shadeCount > 0) {
      css += `  /* Shades - Darker variations */\n`;
      shades.forEach((color, index) => {
        const colorName = `--color-shade-${(index + 1) * 50}`;
        css += `  ${colorName}: ${convertColor(color, 'hex')};\n`;
      });
    }
    
    css += `}\n\n/* Usage Example:\n * background-color: var(--color-base);\n * color: var(--color-tint-100);\n * border-color: var(--color-shade-200);\n */`;
    
    return css;
  }, [baseColor, tintCount, shadeCount]);

  const hasVariants = tintCount > 0 || shadeCount > 0;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    toast.success('CSS variables copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  if (!hasVariants) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">CSS Variables</h2>
          <p className="text-sm text-muted-foreground mt-1">Copy these CSS variables directly into your stylesheet</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopy}
          className="flex items-center gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">Copy CSS</span>
            </>
          )}
        </Button>
      </div>
      
      <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6 overflow-hidden">
        <pre className="text-sm font-mono text-foreground overflow-x-auto">
          <code className="whitespace-pre">{cssCode}</code>
        </pre>
      </div>
    </motion.section>
  );
};

export default CSSPreview;

