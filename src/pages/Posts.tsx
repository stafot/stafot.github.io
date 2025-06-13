import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/data";
import {Button} from "@/components/ui/button.tsx";
import {ArrowLeft} from "lucide-react";

export default function Posts() {
  return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
            <div className="mb-8">
                <Link to="/">
                    <Button variant="ghost" className="mb-4">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
            </div>
          <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
          <div className="grid gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
                <Link
                    to={`/posts/${post.slug}`}
                    key={post.id}
                    className="block hover:underline"
                >
                  <article className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-700">{post.excerpt}</p>
                  </article>
                </Link>
            ))}
          </div>
        </div>
      </div>
  );
}
