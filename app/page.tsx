import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageModal } from "@/components/image-modal"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/animated-text"
import { FloatingElements } from "@/components/floating-elements"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Database,
  Globe,
  Smartphone,
  BarChart3,
  Users,
  Video,
  Brain,
  BotIcon as Robot,
  ShoppingCart,
  Award,
  Calendar,
  MapIcon,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { TypewriterOnScroll } from "@/components/typewriter-on-scroll"

export default function Portfolio() {
  const projects = [
    {
      title: "Placement Launchpad with Data Analytics",
      description:
        "Created 3 role-specific dashboards for TPOs, companies, and students, enabling real-time tracking of 150+ student registrations, tests, and placements. Integrated student profiles, class ranks, feedback, and skill gap analysis using Google Charts.",
      tech: ["JavaScript","EJS","React", "Google Charts", "Node.js", "MySQL", "Email Integration"],
      github: "https://github.com/KomalHiremath/Placement-Launchpad-using-data-analytics",
      image: "/launchpad.jpeg",
      icon: <BarChart3 className="w-6 h-6" />,
      highlights: [
        "150+ student registrations tracked",
        "3 role-specific dashboards",
        "Branch-wise alerts & automated emails",
        "5+ companies streamlined",
      ],
    },
    {
      title: "Multi-Tenant SaaS Platform",
      description:
        "Serviced a scalable SaaS platform serving 4 domains: e-commerce, dining, pharmacy, and grocery. Designed responsive UI with 10+ modular components and real-time user interactions. Ranked in top 5 out of 45 teams.",
      tech: ["JavaScript","MySQL","Tailwind CSS", "Real-time APIs", "Multi-tenant Architecture"],
      github: "https://github.com/KomalHiremath/Multi_Tenant-SaaS-System",
      image: "/saas.png",
      icon: <Users className="w-6 h-6" />,
      highlights: [
        "4 domain verticals supported",
        "10+ modular components",
        "Top 5 out of 45 teams",
        "Real-time user interactions",
      ],
    },
    {
      title: "Web-based Video Editing Platform",
      description:
        "A browser-based video editor built entirely with frontend technologies. Features drag-and-drop video uploads, visual audio and cutscene rearrangement, subtitle and text overlays, styled images, and real-time preview with simulated export functionality.",
      tech: ["React","Next.js","Tailwind CSS", "ShadCN UI","Redux Toolkit","React Dropzone","React DnD"],
      github: "https://github.com/KomalHiremath/Video-Editing-platform",
      image: "/videoediting.jpeg",
      icon: <Video className="w-6 h-6" />,
      highlights: [
        "Upload custom videos via drag-and-drop",
        "Rearrange audio and cutscenes visually",
        "Add subtitles, text overlays, and styled images",
        "Preview changes in real-time",
        "Simulate exporting and downloading the final video",
      ],
    },
  ]

  const experiences = [
    {
      title: "AI/ML Intern",
      company: "Edunet Foundation - IBM SkillsBuild",
      location: "Remote",
      duration: "Jun 2025 - Jul 2025",
      description:
        "Engineered and deployed machine learning models using IBM Watson Studio, AutoAI, and Jupyter Notebooks. Applied NLP and computer vision techniques including CNNs and GANs for real-world applications.",
      skills: ["IBM Watson Studio", "AutoAI", "NLP", "Computer Vision", "CNNs", "GANs", "Prompt Engineering"],
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      highlights: [
        "Deployed ML models with IBM Watson Studio",
        "Applied CNNs and GANs for chatbots and image recognition",
        "Implemented prompt engineering for LLMs",
        "Completed 15 hours of IBM-certified training",
      ],
    },
    {
      title: "Autonomous Navigation Intern",
      company: "Humanoid.AI Lab, IIIT Dharwad",
      location: "Dharwad, KA",
      duration: "Nov 2024 - May 2025",
      description:
        "Reduced mapping latency by 18% using ROS2-based SLAM techniques in Gazebo simulations. Built virtual test environments and custom ROS2 nodes, improving navigation accuracy by 30%.",
      skills: ["ROS2", "SLAM", "Gazebo", "Linux", "DSA", "Object Detection", "Path Planning"],
      icon: <Robot className="w-5 h-5 text-blue-400" />,
      highlights: [
        "18% reduction in mapping latency",
        "30% improvement in navigation accuracy",
        "Built multiple virtual test environments",
        "Created version-controlled SDLC documentation",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Acmegrade",
      location: "Bangalore, KA",
      duration: "Dec 2022 - Feb 2023",
      description:
        "Enhanced robust e-commerce application improving load times by 40% through responsive design. Automated user engagement pipelines increasing active user retention by 25%.",
      skills: ["HTML", "CSS", "JavaScript", "Agile", "GitHub", "Low-code Tools"],
      icon: <ShoppingCart className="w-5 h-5 text-green-400" />,
      highlights: [
        "40% improvement in load times",
        "25% increase in user retention",
        "Agile development with daily stand-ups",
        "Automated user engagement pipelines",
      ],
    },
  ]

  const achievements = [
    {
      title: "Top 10 out of 475 teams",
      event: "Hack2Future 32-Hour Hackathon",
      organization: "IIIT Dharwad",
      type: "Hackathon",
    },
    {
      title: "Top 70 out of 56,254 participants",
      event: "i.mobilothon 4.0",
      organization: "Volkswagen Group (Unstop)",
      type: "Competition",
    },
  ]

  const certifications = [
    {
      title: "McKinsey Forward Program",
      organization: "McKinsey & Company",
      description:
        "12-week program building skills in structured problem-solving, effective communication, resilience, and digital fluency",
      duration: "12 weeks",
    },
    {
      title: "Software Engineering Job Simulation",
      organization: "Goldman Sachs",
      description: "Hands-on simulation of software engineering practices at Goldman Sachs",
    },
    {
      title: "Wave 2.0 National Level Hackathon",
      organization: "BEC Bagalkot",
      description: "National level hackathon participation",
    },
    {
      title: "Flipkart GriD 6.0 Software Development Track",
      organization: "Flipkart",
      description: "Software development track participation",
    },
    {
      title: "Google DEVFEST 2022",
      organization: "Google Developers Group",
      description: "Developer festival participation and learning",
    },
  ]

  const techStack = [
    {
      category: "Programming Languages",
      skills: ["C++", "Python"],
    },
    {
      category: "AI/ML (Beginner)",
      skills: ["IBM Watson Studio", "AutoAI", "NLP (basics)", "Computer Vision", "CNNs", "GANs"],
    },
    {
      category: "Robotics",
      skills: ["ROS2", "SLAM", "Gazebo", "Linux", "Object Detection", "Path Planning", "Autonomous Navigation"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    },
    {
      category: "Backend & Database",
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "AWS (Beginner)", "Jupyter Notebooks", "Colcon", "Agile", "SDLC"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <FloatingElements />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <ScrollReveal direction="left" className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                  <AnimatedText text="Komal Hiremath" delay={100} />
                </h1>
                <ScrollReveal delay={500} direction="up">
                  <p className="text-xl md:text-2xl text-blue-400 font-light flex items-center gap-2">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                    Aspiring Software Engineer | Building Real Projects & Real Skills
                  </p>
                </ScrollReveal>

                {/* New Description */}
                <ScrollReveal delay={700} direction="up" className="space-y-4">
                  <p className="text-lg text-gray-300 leading-relaxed font-medium">
                    I enjoy breaking down complex problems and creating simple, scalable solutions. My focus is on writing clean and efficient code while learning rapidly from each challenge. I approach development with intention, designing with clarity and delivering results purposefully. I simplify complexity, adapt quickly, and aim to build systems that have a meaningful impact. Although I am at the beginning of my career, I take ownership of my work and consistently strive for improvement.

                  </p>
                  
                </ScrollReveal>
              </div>
            </ScrollReveal>

            {/* Profile Picture */}
            <ScrollReveal direction="right" delay={200} className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/Komalphoto.jpg"
                      alt="Komal Hiremath"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
<div className="flex justify-center mt-6">
  <div className="w-64 bg-gray-900 border border-gray-700 rounded-md shadow p-4 text-xs text-gray-300">
    <p className="text-gray-400 mb-2">
      🎓 College: <span className="text-white font-semibold">SGBIT Belagavi, KA</span>
    </p>
    <p className="text-gray-400 mb-2">
      📚 Specalization: <span className="text-white font-semibold">B.E CSE</span>
    </p>
    <p className="text-gray-400">
      📈 CGPA: <span className="text-white font-semibold">8.24</span>
    </p>
  </div>
</div>


                  
                   
                </div>
                {/* Animated decorative elements */}
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-blue-600/20 rounded-full blur-xl animate-bounce"
                  style={{ animationDelay: "0s", animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/20 rounded-full blur-xl animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "4s" }}
                ></div>
                <div
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-cyan-400/10 rounded-full blur-lg animate-ping"
                  style={{ animationDuration: "2s" }}
                ></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-gray-900/50 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">PROFESSIONAL EXPERIENCE</h2>
            <p className="text-lg text-gray-300">
              My journey through cutting-edge internships in AI/ML, Robotics, and Full-stack development.
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <Card className="rounded-2xl border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-700 rounded-lg hover:scale-110 transition-transform duration-300">
                          {exp.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-white hover:text-blue-400 transition-colors duration-300">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-400">{exp.company}</CardDescription>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapIcon className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">Key Achievements</h4>
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="rounded-full bg-gray-700 text-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">PROJECTS</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A showcase of my technical projects demonstrating Full-stack development and Database capabilities.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 80} direction="up">
                <Card className="rounded-2xl border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="aspect-video rounded-t-2xl overflow-hidden relative">
                    <ImageModal src={project.image || "/placeholder.svg"} alt={project.title} title={project.title} />
                    <div className="absolute top-4 left-4 p-2 bg-gray-900/80 rounded-lg backdrop-blur-sm pointer-events-none z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-blue-400">{project.icon}</div>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="rounded-full bg-gray-700 text-gray-200 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-full border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-transparent hover:text-white w-full bg-transparent transition-all duration-300 hover:scale-105"
                      >
                        <Link href={project.github} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section className="py-20 px-4 bg-gray-900/50 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ACHIEVEMENTS & CERTIFICATIONS</h2>
            <p className="text-lg text-gray-300">
              Recognition for Technical excellence and continuous learning in cutting-edge technologies.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Achievements */}
            <ScrollReveal direction="left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-yellow-400 animate-pulse" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <ScrollReveal key={index} delay={index * 50}>
                      <Card className="rounded-2xl border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-yellow-400/10 rounded-lg hover:scale-110 transition-transform duration-300">
                              <Award className="w-5 h-5 text-yellow-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white hover:text-yellow-400 transition-colors duration-300">
                                {achievement.title}
                              </h4>
                              <p className="text-blue-400 font-medium">{achievement.event}</p>
                              <p className="text-gray-400 text-sm">{achievement.organization}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Certifications */}
            <ScrollReveal direction="right">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Code className="w-6 h-6 text-green-400 animate-pulse" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <ScrollReveal key={index} delay={index * 50}>
                      <Card className="rounded-2xl border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/10">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-green-400/10 rounded-lg hover:scale-110 transition-transform duration-300">
                              <Code className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white hover:text-green-400 transition-colors duration-300">
                                {cert.title}
                              </h4>
                              <p className="text-green-400 font-medium">{cert.organization}</p>
                              {cert.description && <p className="text-gray-400 text-sm mt-1">{cert.description}</p>}
                              {cert.duration && (
                                <Badge
                                  variant="outline"
                                  className="mt-2 border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400 transition-colors duration-300"
                                >
                                  {cert.duration}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">TECH STACK</h2>
            <p className="text-lg text-gray-300">
              Comprehensive technology expertise across programming languages, AI/ML, robotics, and full-stack
              development.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((category, index) => (
              <ScrollReveal key={index} delay={index * 60} direction="up">
                <Card className="rounded-2xl border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-xl text-white hover:text-blue-400 transition-colors duration-300">
                      {category.category === "AI/ML" && <Brain className="w-6 h-6 text-purple-400 animate-pulse" />}
                      {category.category === "Robotics" && <Robot className="w-6 h-6 text-blue-400 animate-pulse" />}
                      {category.category === "Frontend" && <Globe className="w-6 h-6 text-green-400 animate-pulse" />}
                      {category.category === "Backend & Database" && (
                        <Database className="w-6 h-6 text-orange-400 animate-pulse" />
                      )}
                      {category.category === "Tools & DevOps" && (
                        <Smartphone className="w-6 h-6 text-red-400 animate-pulse" />
                      )}
                      {category.category === "Programming Languages" && (
                        <Code className="w-6 h-6 text-cyan-400 animate-pulse" />
                      )}
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="rounded-full border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-transparent hover:text-white transition-all duration-300 hover:scale-110"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Animated background decorative elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl animate-bounce"
              style={{ animationDuration: "3s" }}
            ></div>

            <ScrollReveal className="relative z-10 space-y-7">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
                <TypewriterOnScroll text="Let's Build Something Great with Purpose" speed={80} />
              </h2>

              <div className="max-w-3xl mx-auto space-y-6">
                <ScrollReveal delay={400}>
                  <div className="relative inline-block">
                    <p className="text-xl text-yellow-400 font-bold tracking-wide relative z-10">
                      I'M HERE TO ADD VALUE — WITH VISION, OWNERSHIP AND IMPACT.
                    </p>
                    {/* Simple animated underline */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
                    {/* Subtle side glow */}
                    <div
                      className="absolute inset-0 bg-yellow-400/10 rounded-lg blur-lg animate-pulse"
                      style={{ animationDuration: "3s" }}
                    ></div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    What sets me apart isn't just my ability to learn tech fast, but how I approach challenges with full
                    ownership and a growth mindset. I stay committed when things get tough, ask the right questions, and
                    never wait to be told twice, because I believe accountability is everything.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={800}>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I thrive in teams that move with purpose, where communication is clear and results matter. I bring
                    integrity, adaptability, and the mindset to not just fit in but to raise the bar.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={1000}>
                  <div className="mt-8 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
                    <p className="text-xl text-white font-medium">
                      "Ready to contribute from day one and grow into something exceptional."
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Icons */}
      <section className="py-16 px-4 bg-gray-950 relative">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal className="space-y-8">
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide leading-relaxed">
              Open to opportunities, collaborations, or just a great conversation.
            </p>
            <div className="flex justify-center gap-8">
              <Link
                href="https://github.com/KomalHiremath"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 text-white hover:text-yellow-400 transition-all duration-300 p-4 rounded-xl bg-gray-800/70 hover:bg-gray-700 hover:scale-110 transform shadow-lg hover:shadow-yellow-400/20"
              >
                <Github className="w-8 h-8" />
                <span className="text-sm font-medium transition-opacity duration-300">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/komalhiremath"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 text-white hover:text-blue-400 transition-all duration-300 p-4 rounded-xl bg-gray-800/70 hover:bg-gray-700 hover:scale-110 transform shadow-lg hover:shadow-blue-400/20"
              >
                <Linkedin className="w-8 h-8" />
                <span className="text-sm font-medium transition-opacity duration-300">LinkedIn</span>
              </Link>
              <div className="relative group flex flex-col items-center gap-3 text-white transition-all duration-300 p-4 rounded-xl bg-gray-800/70 hover:bg-gray-700 hover:scale-110 transform shadow-lg hover:shadow-green-400/20">
  <a
    href="mailto:komalhiremath713@gmail.com"
    className="flex flex-col items-center text-white hover:text-green-400"
  >
    <Mail className="w-8 h-8" />
    <span className="text-sm font-medium">Email</span>
  </a>

  {/* Tooltip that stays visible and copyable */}
  <div className="absolute bottom-0 translate-y-12 z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-300 bg-gray-900 text-xs text-white px-3 py-1 rounded-md pointer-events-auto">
    komalhiremath713@gmail.com
  </div>
</div>

              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 text-white hover:text-purple-400 transition-all duration-300 p-4 rounded-xl bg-gray-800/70 hover:bg-gray-700 hover:scale-110 transform shadow-lg hover:shadow-purple-400/20"
              >
                <Download className="w-8 h-8" />
                <span className="text-sm font-medium transition-opacity duration-300">Resume</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
