import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight, FileText, FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
      <div className="min-h-screen bg-white text-slate-900">

        {/* Navigation is in Header component now */}

        {/* Hero Section */}
        <main className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6 leading-tight">
            Senior Site Reliability Engineer
          </h1>
          <p className="text-xl text-purple-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Specializing in cloud-native solutions with a strong focus on data sovereignty,
            reliability, and FinOps practices. Based in Ioannina, Greece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/about">
              <Button size="lg" className="group bg-purple-600 hover:bg-purple-500 text-white border-0">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" asChild className="border-purple-300 text-purple-600 hover:bg-purple-100 hover:text-purple-800">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/stafot" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all text-purple-600">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/stafot" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all text-purple-600">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:stafot@gmail.com" className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all text-purple-600">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </main>

        {/* Featured Work Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

            {/* Blog Posts Card */}
            <Link to="/posts" className="group block h-full">
              <div className="h-full flex flex-col justify-between p-8 bg-white rounded-lg border border-gray-200 shadow hover:shadow-lg transition">
                <div>
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 text-purple-600 mr-4" />
                    <h3 className="text-2xl font-semibold text-slate-800">
                      Blog Posts
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Read my latest insights on SRE practices, FinOps strategies, and cloud-native solutions.
                  </p>
                </div>
                <div className="flex items-center text-purple-600">
                  <span>View all posts</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Projects Card */}
            <Link to="/projects" className="group block h-full">
              <div className="h-full flex flex-col justify-between p-8 bg-white rounded-lg border border-gray-200 shadow hover:shadow-lg transition">
                <div>
                  <div className="flex items-center mb-4">
                    <FolderOpen className="h-8 w-8 text-purple-600 mr-4" />
                    <h3 className="text-2xl font-semibold text-slate-800">
                      Projects
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Explore my open source contributions and professional projects in infrastructure and automation.
                  </p>
                </div>
                <div className="flex items-center text-purple-600">
                  <span>View all projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

          </div>
        </section>


        {/* Quick Stats */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-100 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-700 mb-2">4+</div>
              <div className="text-purple-700">Years at Mattermost</div>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-700 mb-2">Multiple</div>
              <div className="text-purple-700">FinOps Certifications</div>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg border border-gray-200">
              <div className="text-3xl font-bold text-purple-700 mb-2">MSc</div>
              <div className="text-purple-700">Information Systems Security</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Interested in discussing cloud infrastructure, FinOps practices, or SRE principles?
              I'd love to hear from you.
            </p>
            <Button size="lg" variant="secondary" asChild className="bg-purple-600 text-white hover:bg-purple-500 border-0">
              <a href="mailto:stafot@gmail.com">Get In Touch</a>
            </Button>
          </div>
        </section>
      </div>
  );
};

export default Index;
