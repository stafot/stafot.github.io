
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  const backgroundClass = isHome 
    ? "min-h-screen bg-purple-gradient text-white" 
    : "min-h-screen bg-white text-gray-800";
    
  return (
    <div className={backgroundClass}>
      {!isHome && (
        <nav className="bg-blog-purple p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="font-bold text-xl">stafot</Link>
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/blog" className="hover:text-primary-foreground transition-colors">Blog</Link>
              <Link to="/projects" className="hover:text-primary-foreground transition-colors">Projects</Link>
            </div>
          </div>
        </nav>
      )}
      
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
      
      <footer className={`p-4 ${isHome ? 'text-white/80' : 'text-gray-500'} text-sm text-center mt-12`}>
        <p>© {new Date().getFullYear()} stafot. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
