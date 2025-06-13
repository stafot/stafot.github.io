
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Projects</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Open source contributions and professional projects focused on infrastructure automation, monitoring, and cloud optimization.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Kubernetes</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">DevOps</span>
                <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">Cloud</span>
              </div>

              <Button variant="outline" size="sm" asChild>
                <Link to={`/projects/${project.slug}`}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
