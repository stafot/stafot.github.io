
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

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
  
  // Transform markdown-like content to JSX
  const createMarkup = () => {
    let html = project.content
      // Headers
      .replace(/^# (.*$)/gm, '<h1 class="blog-heading">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="blog-subheading">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-3">$1</h3>')
      // Paragraphs
      .replace(/^(?!<h[1-6]|<ul|<ol|<li|<blockquote|<pre)(.+$)/gm, '<p class="blog-text">$1</p>')
      // Lists
      .replace(/^- (.*)$/gm, '<li class="ml-6 list-disc">$1</li>')
      // Line breaks
      .replace(/\n\n/g, '<br />')
      // Convert list items into proper lists
      .replace(/<li class="ml-6 list-disc">(.*?)<\/li>(?:\n<li class="ml-6 list-disc">(.*?)<\/li>)+/gs, 
        match => `<ul class="mb-6">${match}</ul>`);
    
    return { __html: html };
  };
  
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
        
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={createMarkup()} />
      </article>
    </div>
  );
};

export default ProjectDetail;
