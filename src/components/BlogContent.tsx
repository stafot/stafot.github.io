
import React from 'react';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  // Transform markdown-like content to JSX
  const createMarkup = () => {
    let html = content
      // Bold text formatting
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
      
      // Headers
      .replace(/^# (.*$)/gm, '<h1 class="blog-heading">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="blog-subheading">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mb-3">$1</h3>')
      
      // Paragraphs
      .replace(/^(?!<h[1-6]|<ul|<ol|<li|<blockquote|<pre|<strong)(.+$)/gm, '<p class="blog-text">$1</p>')
      
      // Lists
      .replace(/^- (.*)$/gm, '<li class="ml-6 list-disc">$1</li>')
      
      // Line breaks
      .replace(/\n\n/g, '<br />')
      
      // Convert list items into proper lists
      .replace(/<li class="ml-6 list-disc">(.*?)<\/li>(?:\n<li class="ml-6 list-disc">(.*?)<\/li>)+/gs, 
        match => `<ul class="mb-6">${match}</ul>`)
      
      // Fix article footers - replace asterisks with proper styling
      .replace(/\*(This post summarizes.*?visit the original article\.)\*/g, 
        '<p class="blog-footer text-muted-foreground italic mt-6">$1</p>')
      .replace(/\*(This post summarizes.*?visit the original article\.)(.*?)\*/g, 
        '<p class="blog-footer text-muted-foreground italic mt-6">$1 <a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Read more</a></p>');
    
    return { __html: html };
  };

  return (
    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={createMarkup()} />
  );
};

export default BlogContent;
