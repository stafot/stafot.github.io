
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto animate-fade-in">
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary opacity-10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
          </div>
        </div>
        
        <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button asChild variant="default" className="group">
            <Link to="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/blog">Browse Blog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
