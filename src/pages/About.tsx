// src/pages/About.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ArrowLeft,
  ExternalLink,
  FolderOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/lib/data";

const About = () => {
  const certifications = [
    {
      title: "FinOps Certified FOCUS Analyst",
      issuer: "FinOps Foundation",
      date: "Jun 2025 - Jun 2027",
      credentialId: "cmbyisepw8qr",
      image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      url: "https://verify.skilljar.com/c/cmbyisepw8qr",
    },
    {
      title: "FinOps Certified Engineer",
      issuer: "FinOps Foundation",
      date: "May 2025 - May 2027",
      credentialId: "33p94wkvyefd",
      image:
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      url: "https://verify.skilljar.com/c/33p94wkvyefd",
    },
    {
      title: "Introduction to FOCUS",
      issuer: "FinOps Foundation",
      date: "May 2025 - May 2027",
      credentialId: "i7349vy3wsqi",
      image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      url: "https://verify.skilljar.com/c/i7349vy3wsqi",
    },
    {
      title: "Green Software for Practitioners LFC131",
      issuer: "The Linux Foundation",
      date: "Apr 2025 - Apr 2027",
      credentialId: "LF-xl8mnvwy0p",
      skills: "Sustainability",
      image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      url: "https://www.linkedin.com/in/stafot/details/certifications/1745768023532/single-media-viewer/?type=DOCUMENT&profileId=ACoAAAk4dEsBVvo0Ne_Bm6F89YkPuomI9BSqqnI",
    },
  ];

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link
                to="/"
                className="flex items-center text-slate-600 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="text-2xl font-bold text-slate-800">About Me</div>
            <div className="w-24" />
          </div>
        </nav>

        <main className="container mx-auto px-6 py-12 space-y-16">
          {/* Profile Section */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-48 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0 mx-auto md:mx-0">
                  <img
                      src="/lovable-uploads/c379057e-bb91-4413-b80d-5a2444ada1a1.png"
                      alt="Stavros Foteinopoulos"
                      className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-slate-800 mb-4">
                    Stavros Foteinopoulos
                  </h1>
                  <p className="text-xl text-slate-600 mb-6">
                    Hello! I'm Stavros Foteinopoulos, a Senior Site Reliability
                    Engineer II at Mattermost, based in Ioannina, Greece. With
                    over 4 years at Mattermost, I specialize in cloud-native
                    solutions with a strong focus on data sovereignty,
                    reliability, and FinOps practices.
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      In my current role, I lead initiatives in:
                    </h3>
                    <ul className="space-y-2 text-slate-600">
                      {[
                        "Cloud SaaS cost optimization and FinOps best practices implementation",
                        "Disaster Recovery tooling and minimal downtime strategies",
                        "Enterprise cloud infrastructure design and implementation",
                        "Team mentorship in SRE principles and cost management",
                      ].map((item) => (
                          <li
                              key={item}
                              className="flex items-start"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-slate-600 mb-8">
                    I'm passionate about creating practical solutions that
                    balance innovation with reliability, always focusing on
                    sustainable and efficient infrastructure management. My
                    expertise extends to cloud technologies, infrastructure
                    automation, and building self-serve cultures within
                    engineering teams.
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                          href="https://github.com/stafot"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                          href="https://linkedin.com/in/stafot"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:stafot@gmail.com" className="inline-flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Education
            </h2>
            <div className="space-y-6">
              {/* MSc */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-slate-600 font-bold text-lg">DUT</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        Democritus University of Thrace
                      </h3>
                      <p className="text-lg text-slate-600 mb-2">
                        Master of Science (MSc), Information Systems Security
                      </p>
                      <p className="text-slate-500 mb-3">2011 - 2014</p>
                      <p className="text-slate-600 mb-4">
                        <strong>Activities and societies:</strong> Participation
                        in 5th Student Conference of Electrical and Computer
                        Engineering, Xanthi April 2012
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Cloud (IaaS) Forensics</Badge>
                        <Badge variant="secondary">Malware Analysis</Badge>
                        <Badge variant="secondary">
                          Windows Registry Forensics
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* MEng */}
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-slate-600 font-bold text-lg">DUT</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        Democritus University of Thrace - Faculty of Engineering
                      </h3>
                      <p className="text-lg text-slate-600 mb-2">
                        MEng, Electrical and Computer Engineering
                      </p>
                      <p className="text-slate-500">2001 - 2010</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Licenses & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                  <Card
                      key={idx}
                      className="bg-white hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                          {cert.issuer.includes("FinOps") ? (
                              <span className="text-white font-bold text-xs">
                          FO
                        </span>
                          ) : (
                              <span className="text-white font-bold text-xs">
                          LF
                        </span>
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <h3 className="text-lg font-semibold text-slate-800">
                            {cert.title}
                          </h3>
                          <p className="text-slate-600">{cert.issuer}</p>
                          <p className="text-sm text-slate-500">{cert.date}</p>
                          <p className="text-sm text-slate-500">
                            Credential ID: {cert.credentialId}
                          </p>
                          {cert.skills && (
                              <Badge variant="outline">{cert.skills}</Badge>
                          )}
                        </div>
                      </div>
                      <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="mt-2"
                      >
                        <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                        >
                          Show credential
                          <ExternalLink className="h-3 w-3 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </section>

          {/* Open Source Contributions */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Open Source Contributions
            </h2>
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((proj) => (
                      <Link
                          key={proj.slug}
                          to={`/projects/${proj.slug}`}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                      >
                        <FolderOpen className="h-5 w-5 text-purple-600" />
                        <span className="text-slate-700">{proj.title}</span>
                        <ExternalLink className="h-4 w-4 text-slate-400 ml-auto" />
                      </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
  );
};

export default About;
