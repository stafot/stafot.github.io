
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
      <div className="space-y-1">
        {posts.map((post) => (
          <div key={post.id}>
            <Link 
              to={`/blog/${post.slug}`}
              className="block text-white hover:text-primary-foreground transition-colors py-1"
            >
              {post.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
