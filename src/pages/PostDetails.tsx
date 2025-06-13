import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blogPosts } from "@/lib/data";

export default function PostDetails() {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold">Post not found</h1>
                <Link to="/posts" className="text-blue-600 hover:underline">
                    ← Back to all posts
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
                {/* Title & Date */}
                <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                <p className="text-sm text-gray-500 mb-6">{post.date}</p>

                {/* Markdown Content */}
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h2: ({ node, ...props }) => (
                            <h2
                                className="text-2xl font-bold text-slate-800 mb-4 mt-6"
                                {...props}
                            />
                        ),
                        h3: ({ node, ...props }) => (
                            <h3
                                className="text-xl font-semibold text-slate-700 mb-3 mt-4"
                                {...props}
                            />
                        ),
                        p: ({ node, ...props }) => (
                            <p className="text-base text-slate-700 mb-4" {...props} />
                        ),
                        a: ({ node, ...props }) => (
                            <a
                                className="text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                                {...props}
                            />
                        ),
                        ul: ({ node, ...props }) => (
                            <ul className="list-disc ml-6 mb-4" {...props} />
                        ),
                        li: ({ node, ...props }) => (
                            <li className="ml-4 mb-1" {...props} />
                        ),
                        // you can add more (tables, code, etc.) here
                    }}
                >
                    {post.content}
                </ReactMarkdown>

                {/* Back Link */}
                <div className="mt-8">
                    <Link to="/posts" className="inline-flex items-center text-blue-600 hover:underline">
                        ← Back to all posts
                    </Link>
                </div>
            </div>
        </div>
    );
}

