
import { Link } from 'react-router-dom';

interface Post {
  id: string;
  title: string;
  date: string;
  slug: string;
}

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <section className="mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-xl font-semibold mb-4">Recent posts:</h2>
      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-white/10 rounded-md p-3 hover:bg-white/20 transition-colors">
            <div className="text-xs text-white/70 mb-1">{post.date}</div>
            <Link 
              to={`/blog/${post.slug}`}
              className="block text-white hover:text-primary-foreground transition-colors"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-4 text-right">
        <Link to="/blog" className="text-white/80 hover:text-white text-sm hover:underline">
          View all posts →
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;
