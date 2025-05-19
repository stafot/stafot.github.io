
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
      <p className="text-muted-foreground mb-8">
        Open source contributions and personal projects in cloud infrastructure and Kubernetes
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            slug={project.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
