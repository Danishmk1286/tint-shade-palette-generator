import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const canonicalUrl = `https://tintandshadesgenerator.com${location.pathname}`;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <SEOHead
        title="404 - Page Not Found"
        description="The page you are looking for does not exist. Return to the Tint and Shades Generator homepage."
        canonical={canonicalUrl}
        keywords="404, page not found"
      />
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
