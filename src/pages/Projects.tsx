
import { useState } from 'react';
import { projects } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';
import SearchInput from '@/components/SearchInput';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
      <p className="text-muted-foreground mb-8">
        Open source contributions and personal projects in cloud infrastructure and Kubernetes
      </p>
      
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search projects..."
      />
      
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No projects found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              slug={project.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
