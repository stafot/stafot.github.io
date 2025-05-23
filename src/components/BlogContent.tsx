
import React from 'react';

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  // Transform markdown-like content to JSX
  const createMarkup = () => {
    let html = content
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
    <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={createMarkup()} />
  );
};

export default BlogContent;
