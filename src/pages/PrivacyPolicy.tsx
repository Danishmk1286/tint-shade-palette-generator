import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEOHead from '@/components/SEOHead';
import { Shield, Lock, Eye, FileText, AlertCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Information We Collect",
      content: "Tint and Shades Generator is designed to work entirely in your browser. We do not collect, store, or transmit any personal information or color data to our servers.",
      points: [
        "No color values or generated palettes are stored on our servers",
        "No personal information is collected or stored",
        "All color processing happens locally in your browser",
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Cookies and Local Storage",
      content: "We use minimal local storage for essential functionality only:",
      points: [
        "Remembering your theme preference (dark/light mode)",
        "Storing your GDPR consent choice",
        "No tracking cookies or analytics cookies are used",
      ],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Third-Party Services",
      content: "This tool operates entirely client-side and does not integrate with any third-party analytics, tracking, or data collection services.",
      points: [],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Data Security",
      content: "Since no data is transmitted to our servers, your color choices and generated palettes remain completely private and secure on your device.",
      points: [],
      gradient: 'from-orange-500/20 to-amber-500/20',
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Changes to This Privacy Policy",
      content: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.",
      points: [],
      gradient: 'from-indigo-500/20 to-violet-500/20',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Contact Information",
      content: "Created by Danish Khan",
      points: [],
      gradient: 'from-teal-500/20 to-cyan-500/20',
      links: [
        { href: "http://linkedin.com/danishmk286", text: "LinkedIn Profile" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy - Your Data is Safe"
        description="Privacy policy for Tint and Shades Generator. Learn how we protect your data - all processing happens locally in your browser with no data collection."
        keywords="privacy policy, data protection, no tracking, client-side processing, GDPR compliant"
        canonical="https://tintandshadesgenerator.com/privacy-policy"
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
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Privacy & Security</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-[1.1] pb-2">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy is important to us. Learn how we protect your data and ensure complete privacy when using our color generator tool.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-sm">Last updated: {new Date().toLocaleDateString()}</Badge>
            <Badge variant="outline" className="text-sm border-green-500/50 text-green-600 dark:text-green-400">
              <Shield className="w-3 h-3 mr-1" />
              GDPR Compliant
            </Badge>
          </div>
        </motion.div>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="border-2 hover:border-primary/30 transition-all hover:shadow-lg">
                <div className={`h-2 bg-gradient-to-r ${section.gradient}`} />
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.gradient} flex items-center justify-center text-primary`}>
                      {section.icon}
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                  {section.points.length > 0 && (
                    <ul className="space-y-2">
                      {section.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.links && (
                    <div className="flex gap-4 pt-2">
                      {section.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium transition-colors"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Privacy Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-muted-foreground">All processing happens in your browser - no server requests</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-muted-foreground">No tracking, analytics, or data collection</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-muted-foreground">Your color choices remain completely private</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-muted-foreground">GDPR compliant - minimal local storage only</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
