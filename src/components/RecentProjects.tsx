
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  slug: string;
}

interface RecentProjectsProps {
  projects: Project[];
}

const RecentProjects = ({ projects }: RecentProjectsProps) => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-xl font-semibold mb-4">Recent projects:</h2>
      <div className="space-y-1">
        {projects.map((project) => (
          <div key={project.id}>
            <Link 
              to={`/projects/${project.slug}`} 
              className="block text-white hover:text-primary-foreground transition-colors py-1"
            >
              {project.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
