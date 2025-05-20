
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
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white/10 rounded-md p-3 hover:bg-white/20 transition-colors">
            <Link 
              to={`/projects/${project.slug}`} 
              className="block text-white hover:text-primary-foreground transition-colors"
            >
              {project.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <Link to="/projects" className="text-white/80 hover:text-white text-sm hover:underline">
          View all projects →
        </Link>
      </div>
    </section>
  );
};

export default RecentProjects;
