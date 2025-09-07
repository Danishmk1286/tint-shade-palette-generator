import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const PrivacyPolicy = () => {
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
              <h1 className="text-xl font-semibold">Privacy Policy</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Privacy Policy for Shade Tint Genie</CardTitle>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                Shade Tint Genie is designed to work entirely in your browser. We do not collect, store, or transmit any personal information or color data to our servers.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>No color values or generated palettes are stored on our servers</li>
                <li>No personal information is collected or stored</li>
                <li>All color processing happens locally in your browser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. Cookies and Local Storage</h2>
              <p className="text-muted-foreground mb-4">
                We use minimal local storage for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Remembering your theme preference (dark/light mode)</li>
                <li>Storing your GDPR consent choice</li>
                <li>No tracking cookies or analytics cookies are used</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. Third-Party Services</h2>
              <p className="text-muted-foreground">
                This tool operates entirely client-side and does not integrate with any third-party analytics, tracking, or data collection services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
              <p className="text-muted-foreground">
                Since no data is transmitted to our servers, your color choices and generated palettes remain completely private and secure on your device.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. Contact Information</h2>
              <p className="text-muted-foreground mb-2">
                Created by Danish Khan
              </p>
              <div className="flex gap-4">
                <a 
                  href="http://linkedin.com/danishmk286" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </section>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PrivacyPolicy;