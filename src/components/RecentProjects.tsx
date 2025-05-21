
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  slug: string;
  tags?: string[];
}

interface RecentProjectsProps {
  projects: Project[];
}

const RecentProjects = ({ projects }: RecentProjectsProps) => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-xl font-semibold mb-4">Recent projects:</h2>
      <div className="space-y-3">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="bg-white/10 rounded-md p-4 hover:bg-white/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
          >
            <Link 
              to={`/projects/${project.slug}`} 
              className="block text-white hover:text-primary-foreground transition-colors"
            >
              <div className="font-medium mb-2">{project.title}</div>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="bg-white/20 text-white border-none text-xs py-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-white/80 hover:text-white text-sm hover:underline transition-all duration-300 hover:translate-x-1"
        >
          View all projects →
        </Link>
      </div>
    </section>
  );
};

export default RecentProjects;
