
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/lib/data';
import { ArrowLeft } from 'lucide-react';

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
  
  // Transform markdown-like content to JSX
  const createMarkup = () => {
    let html = post.content
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
      <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to all posts
      </Link>
      
      <article>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
          <p className="text-muted-foreground mt-2">{post.date}</p>
        </div>
        
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={createMarkup()} />
      </article>
    </div>
  );
};

export default BlogPost;
