
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MainLayout = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? 'dark' : 'light';
  });
  
  const isHome = location.pathname === '/';
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      isHome ? "bg-purple-gradient text-white" : "",
      !isHome && theme === 'dark' ? "bg-gray-900 text-white" : "",
      !isHome && theme === 'light' ? "bg-white text-gray-800" : ""
    )}>
      {!isHome && (
        <header className="bg-blog-purple p-4 text-white sticky top-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="font-bold text-xl">stafot</Link>
            <nav className="flex items-center space-x-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/blog" className="hover:text-primary-foreground transition-colors">Blog</Link>
              <Link to="/projects" className="hover:text-primary-foreground transition-colors">Projects</Link>
              <Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme} 
                className="text-white hover:bg-white/20"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </Button>
            </nav>
          </div>
        </header>
      )}
      
      <main className="container mx-auto px-4 py-6 animate-fade-in">
        <Outlet />
      </main>
      
      <footer className={cn(
        "p-4 text-sm text-center mt-12",
        isHome ? "text-white/80" : "",
        !isHome && theme === 'dark' ? "text-gray-400" : "",
        !isHome && theme === 'light' ? "text-gray-500" : ""
      )}>
        <p>© {new Date().getFullYear()} stafot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
