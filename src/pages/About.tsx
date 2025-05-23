
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const projects = [
    { name: "Kubernetes Node Local DNS Cache Service", url: "https://github.com/kubernetes/kubernetes/pull/88412" },
    { name: "Ingress NGINX Controller Improvements", url: "https://github.com/kubernetes/ingress-nginx/pull/10731" },
    { name: "Prometheus Operator Enhancements", url: "https://github.com/prometheus-operator/prometheus-operator/pull/3899" },
    { name: "Prometheus Community Charts - Kube Prometheus Stack", url: "https://github.com/prometheus-community/helm-charts/pull/639" },
    { name: "Prometheus Community Charts - Node Exporter", url: "https://github.com/prometheus-community/helm-charts/pull/641" },
    { name: "Prometheus Community Charts - Alertmanager", url: "https://github.com/prometheus-community/helm-charts/pull/644" }
  ];

  const mentoring = [
    { role: "Technical Mentor at Tupu.io", period: "Apr 2022 - Feb 2023", description: "Mentored underrepresented minorities in tech, focusing on SRE, Cloud, and DevOps practices" },
    { role: "Technical Advisor", description: "Provided guidance on cloud-native transformations and infrastructure modernization" }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <img 
            src="https://avatars0.githubusercontent.com/u/2853082?s=400&u=4ae924ca30ec2631de243c8dddb0a7b9bb1e8fae&v=4" 
            alt="Stavros Foteinopoulos profile" 
            className="rounded-lg w-full max-w-[250px] mx-auto"
          />
          
          <div className="mt-6 flex flex-col space-y-3">
            <a href="https://github.com/stafot" target="_blank" rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-primary hover:underline">
              <Github size={18} />
              <span>github.com/stafot</span>
            </a>
            
            <a href="https://linkedin.com/in/stafot" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary hover:underline">
              <Linkedin size={18} />
              <span>linkedin.com/in/stafot</span>
            </a>
            
            <a href="mailto:stafot@gmail.com" 
              className="flex items-center space-x-2 text-primary hover:underline">
              <Mail size={18} />
              <span>stafot@gmail.com</span>
            </a>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <section className="mb-8">
            <p className="mb-4">
              Hello! I'm Stavros Foteinopoulos, a Senior Site Reliability Engineer II at Mattermost, based in Ioannina, Greece. 
              With over 4 years at Mattermost, I specialize in cloud-native solutions with a strong focus on data sovereignty, 
              reliability, and FinOps practices.
            </p>
            
            <p className="mb-4">
              In my current role, I lead initiatives in:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Cloud SaaS cost optimization and FinOps best practices implementation</li>
              <li>Disaster Recovery tooling and minimal downtime strategies</li>
              <li>Enterprise cloud infrastructure design and implementation</li>
              <li>Team mentorship in SRE principles and cost management</li>
            </ul>
            
            <p>
              I'm passionate about creating practical solutions that balance innovation with reliability, 
              always focusing on sustainable and efficient infrastructure management. My expertise extends 
              to cloud technologies, infrastructure automation, and building self-serve cultures within 
              engineering teams.
            </p>
          </section>
        </div>
      </div>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Open Source Contributions</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <li key={index} className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
              <a href={project.url} target="_blank" rel="noopener noreferrer" 
                className="flex justify-between items-center group">
                <span className="font-medium group-hover:text-primary transition-colors">{project.name}</span>
                <ExternalLink size={16} className="opacity-70 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Mentoring & Community</h2>
        <p className="mb-4">
          I'm passionate about giving back to the tech community and helping underrepresented minorities succeed in technology careers.
          Through my involvement with Tupu.io, I've had the privilege of mentoring aspiring SRE and DevOps engineers,
          helping them transition into cloud-native roles and develop their technical skills.
        </p>
        
        <p className="mb-4">My mentoring focus includes:</p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Site Reliability Engineering principles and practices</li>
          <li>Cloud-native technologies and Kubernetes</li>
          <li>DevOps methodologies and tools</li>
          <li>Career guidance and professional development</li>
        </ul>
        
        <p>
          Additionally, I provide technical advisory services to teams transitioning to cloud-native architectures,
          sharing knowledge and best practices in infrastructure modernization.
        </p>
        
        <div className="mt-6 space-y-4">
          {mentoring.map((item, index) => (
            <div key={index} className="bg-card/50 border border-border rounded-lg p-4">
              <h3 className="font-medium mb-1">{item.role}</h3>
              {item.period && <p className="text-sm text-muted-foreground mb-2">{item.period}</p>}
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <Link 
              key={index} 
              to={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
              className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors hover:shadow-sm"
            >
              <h3 className="font-medium hover:text-primary transition-colors">{project.name}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link 
            to="/projects" 
            className="text-primary hover:underline inline-flex items-center"
          >
            View all projects
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
