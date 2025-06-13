import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projects } from "@/lib/data";

export default function ProjectDetails() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <Link to="/projects" className="text-blue-600 hover:underline">
                    ← Back to all projects
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
                {/* Title & Repo Link */}
                <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mb-6 inline-block"
                    >
                        ↗ View repository
                    </a>
                )}

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
                    }}
                >
                    {project.content}
                </ReactMarkdown>

                {/* Back Link */}
                <div className="mt-8">
                    <Link to="/projects" className="inline-flex items-center text-blue-600 hover:underline">
                        ← Back to all projects
                    </Link>
                </div>
            </div>
        </div>
    );
}
