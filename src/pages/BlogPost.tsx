
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';
import BlogContent from '@/components/BlogContent';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-8">The post you're looking for doesn't exist.</p>
        <Link to="/blog" className="text-primary hover:underline">
          Back to all posts
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all posts
      </Link>
      
      <article>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
          <p className="text-muted-foreground mt-2">{post.date}</p>
        </div>
        
        <BlogContent content={post.content} />
      </article>
    </div>
  );
};

export default BlogPost;
