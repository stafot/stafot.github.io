
import ProfileHeader from '@/components/ProfileHeader';
import RecentPosts from '@/components/RecentPosts';
import RecentProjects from '@/components/RecentProjects';
import { blogPosts, projects } from '@/lib/data';

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
    slug: project.slug
  }));
  
  return (
    <div className="min-h-[calc(100vh-8rem)] max-w-2xl mx-auto bg-purple-gradient text-white rounded-lg p-8 md:p-12 shadow-xl">
      <ProfileHeader 
        name="stafot" 
        imageUrl="/lovable-uploads/14764fa4-1492-46b0-84a9-9f6b2fdafec1.png"
      />
      
      <div className="mt-12 max-w-lg mx-auto">
        <RecentPosts posts={recentPosts} />
        <RecentProjects projects={recentProjects} />
      </div>
    </div>
  );
};

export default Home;
