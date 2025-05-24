
import { Link } from 'react-router-dom';
import ProfileHeader from '@/components/ProfileHeader';
import RecentPosts from '@/components/RecentPosts';
import RecentProjects from '@/components/RecentProjects';
import { blogPosts, projects } from '@/lib/data';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  // Get the 3 most recent posts
  const recentPosts = blogPosts.slice(0, 3).map(post => ({
    id: post.id,
    title: post.title,
    date: post.date,
    slug: post.slug
  }));

  // Get the 3 most recent projects
  const recentProjects = projects.slice(0, 3).map(project => ({
    id: project.id,
    title: project.title,
    slug: project.slug,
    tags: project.tags || ['kubernetes', 'cloud-native', 'sre']
  }));
  
  return (
    <div className="min-h-[calc(100vh-8rem)] mx-auto bg-purple-gradient text-white p-8 md:p-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <ProfileHeader 
          name="stafot" 
          imageUrl="/lovable-uploads/14764fa4-1492-46b0-84a9-9f6b2fdafec1.png"
          title=""
        />
        
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://github.com/stafot" target="_blank" rel="noopener noreferrer" 
            className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/stafot" target="_blank" rel="noopener noreferrer" 
            className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:stafot@gmail.com" 
            className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto">
          <section className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-white/90 leading-relaxed">
              Senior Site Reliability Engineer II at Mattermost, specializing in cloud-native solutions with a focus on data sovereignty, reliability, and FinOps practices.
            </p>
            <div className="mt-4">
              <Link to="/about" className="inline-flex items-center text-white/80 hover:text-white text-sm hover:underline transition-all duration-300 group">
                More about me <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>

          <div className="space-y-8">
            <RecentPosts posts={recentPosts} />
            <RecentProjects projects={recentProjects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
