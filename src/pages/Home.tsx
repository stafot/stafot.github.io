
import { Link } from 'react-router-dom';
import ProfileHeader from '@/components/ProfileHeader';
import RecentPosts from '@/components/RecentPosts';
import RecentProjects from '@/components/RecentProjects';
import { blogPosts, projects } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

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
    tags: ['kubernetes', 'cloud-native', 'sre']
  }));
  
  return (
    <div className="min-h-[calc(100vh-8rem)] max-w-2xl mx-auto bg-purple-gradient text-white rounded-lg p-8 md:p-12 shadow-xl">
      <ProfileHeader 
        name="stafot" 
        imageUrl="/lovable-uploads/14764fa4-1492-46b0-84a9-9f6b2fdafec1.png"
      />
      
      <div className="mt-8 max-w-lg mx-auto">
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

        <RecentPosts posts={recentPosts} />
        <RecentProjects projects={recentProjects} />
      </div>
    </div>
  );
};

export default Home;
