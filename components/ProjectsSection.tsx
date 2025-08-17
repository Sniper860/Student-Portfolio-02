import { motion, useInView } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Code, Globe, FileText, Gamepad2, Github, Eye } from "lucide-react";
import { useRef, useState } from "react";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: "snipvault",
      title: "SnipVault",
      description: "A sophisticated code snippet management platform that allows developers to store, organize, categorize, and share code snippets efficiently. Features include syntax highlighting, search functionality, and collaborative sharing.",
      type: "Web Application",
      liveDemo: "https://snipvault.netlify.app",
      github: "https://github.com/Sniper860/snipvault",
      icon: Code,
      gradient: "from-blue-500 to-purple-600",
      tags: ["React", "Node.js", "MongoDB", "Code Management"],
      stats: { users: "500+", snippets: "2K+", languages: "15+" }
    },
    {
      id: "kernify",
      title: "Kernify",
      description: "An advanced AI-powered document summarization tool that extracts key insights and creates concise, meaningful summaries from lengthy documents. Supports multiple file formats and provides intelligent content analysis.",
      type: "AI Web Application",
      liveDemo: "https://kernify.netlify.app",
      github: "https://github.com/Sniper860/kernify",
      icon: FileText,
      gradient: "from-green-500 to-blue-600",
      tags: ["AI", "NLP", "Document Processing", "React"],
      stats: { documents: "1K+", accuracy: "95%", languages: "10+" }
    },
    {
      id: "games",
      title: "Interactive Games Collection",
      description: "A comprehensive collection of interactive web games including Tic-tac-toe with AI opponent, Bird Catch with physics engine, and other engaging games showcasing advanced game development skills and user interaction design.",
      type: "Game Development",
      github: "https://github.com/Sniper860/games",
      icon: Gamepad2,
      gradient: "from-orange-500 to-red-600",
      tags: ["JavaScript", "Game Development", "Canvas API", "Physics"],
      stats: { games: "5+", plays: "10K+", rating: "4.8⭐" }
    },
    {
      id: "database",
      title: "Database-Driven Applications",
      description: "A collection of sophisticated database-driven applications demonstrating expertise in database design, API architecture, real-time data synchronization, and scalable backend solutions for modern web applications.",
      type: "Full-Stack Development",
      github: "https://github.com/Sniper860",
      icon: Globe,
      gradient: "from-purple-500 to-pink-600",
      tags: ["MySQL", "Node.js", "REST API", "Real-time"],
      stats: { apps: "8+", queries: "1M+", uptime: "99.9%" }
    }
  ];

  return (
    <section ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        <motion.p
          className="text-gray-300 mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Showcase of innovative projects demonstrating technical expertise and creative problem-solving
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            className="perspective-1000"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateY: hoveredProject === project.id ? 2 : 0,
                rotateX: hoveredProject === project.id ? 2 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/50 to-purple-900/20 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 group overflow-hidden relative">
                {/* Animated background effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Floating particles on hover */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [-10, -30],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 1,
                        }}
                      />
                    ))}
                  </div>
                )}

                <CardHeader className="pb-4 relative z-10">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <motion.div 
                      className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-20 relative overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <project.icon className="w-6 h-6 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                    <div>
                      <motion.div 
                        className="text-white group-hover:text-purple-300 transition-colors"
                        animate={{ 
                          x: hoveredProject === project.id ? 5 : 0 
                        }}
                      >
                        {project.title}
                      </motion.div>
                      <div className="text-sm text-purple-300 font-normal">
                        {project.type}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 relative z-10 m-[0px]">
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    animate={{
                      y: hoveredProject === project.id ? -2 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Project stats */}
                  <motion.div 
                    className="grid grid-cols-3 gap-4 p-4 bg-black/20 rounded-lg border border-purple-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: (index * 0.2) + 0.5 }}
                  >
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <motion.div 
                          className="text-lg font-bold text-purple-400"
                          whileHover={{ scale: 1.1 }}
                        >
                          {value}
                        </motion.div>
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: (index * 0.2) + (tagIndex * 0.1) }}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/30 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveDemo && (
                      <Button
                        variant="outline"
                        className="flex-1 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border-purple-500/40 text-purple-200 hover:bg-purple-500/30 hover:border-purple-400/60 transition-all duration-200 interactive group/btn mx-[0px] my-[10px]"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <Eye className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                        Live Demo
                        <motion.div
                          className="ml-2"
                          animate={{ x: hoveredProject === project.id ? 3 : 0 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      </Button>
                    )}
                    
                    {project.github && (
                      <Button
                        variant="outline"
                        className="flex-1 bg-gradient-to-r from-gray-500/20 to-gray-600/20 border-gray-500/40 text-gray-200 hover:bg-gray-500/30 hover:border-gray-400/60 transition-all duration-200 interactive group/btn m-[0px] mx-[0px] my-[10px]"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 blur-xl`}
                  animate={{
                    opacity: hoveredProject === project.id ? 0.1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Achievement banner */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1 }}
      >
        <Card className="bg-gradient-to-r from-purple-900/30 via-purple-800/20 to-purple-900/30 border-purple-500/30 backdrop-blur-sm max-w-4xl mx-auto">
          <CardContent className="p-8">
            <motion.div
              className="text-2xl font-bold text-purple-300 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              🚀 Project Impact & Recognition
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-purple-400">15K+</div>
                <div className="text-sm text-gray-400">Total Users</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-purple-400">50K+</div>
                <div className="text-sm text-gray-400">Code Lines</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-purple-400">99%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-3xl font-bold text-purple-400">4.9⭐</div>
                <div className="text-sm text-gray-400">Avg Rating</div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}