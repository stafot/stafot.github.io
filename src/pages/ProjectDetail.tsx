
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import BlogContent from '@/components/BlogContent';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-8">The project you're looking for doesn't exist.</p>
        <Link to="/projects" className="text-primary hover:underline">
          Back to all projects
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link to="/projects" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all projects
      </Link>
      
      <article>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
        </div>
        
        <BlogContent content={project.content} />
      </article>
    </div>
  );
};

export default ProjectDetail;
