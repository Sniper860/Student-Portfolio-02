import { motion, useInView } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, Database, Globe, Cpu } from "lucide-react";
import { useRef, useState } from "react";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "C", level: 75 },
        { name: "BASH", level: 70 },
      ],
      color: "from-blue-400 to-purple-600"
    },
    {
      title: "Development & Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "Supabase", level: 75 },
        { name: "XAMPP", level: 70 },
        { name: "API Design", level: 80 },
      ],
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Technologies",
      icon: Globe,
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "AI Integration", level: 85 },
        { name: "Web Frameworks", level: 85 },
        { name: "REST APIs", level: 80 },
      ],
      color: "from-green-400 to-blue-600"
    },
    {
      title: "Core Competencies",
      icon: Cpu,
      skills: [
        { name: "Full-stack Development", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Database Design", level: 85 },
        { name: "Cross-platform Development", level: 80 },
        { name: "Self-directed Learning", level: 100 },
      ],
      color: "from-orange-400 to-red-600"
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
          Technical Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        <motion.p
          className="text-gray-300 mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Interactive visualization of my technical expertise and proficiency levels
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: 2,
              transition: { duration: 0.3 }
            }}
          >
            <Card className="h-full bg-gradient-to-br from-gray-900/50 to-purple-900/20 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 group perspective-1000">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <motion.div 
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-white group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-purple-200 text-sm font-medium">
                        {skill.name}
                      </span>
                      <motion.span 
                        className="text-purple-300 text-xs"
                        animate={{ 
                          scale: hoveredSkill === skill.name ? 1.1 : 1,
                          color: hoveredSkill === skill.name ? "#a855f7" : "#d1d5db"
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: (index * 0.2) + (skillIndex * 0.1) + 0.5,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                          scale: 1.02
                        }}
                      />
                      
                      {/* Animated glow effect */}
                      <motion.div
                        className={`absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent`}
                        initial={{ x: "-100%" }}
                        animate={isInView ? { x: "400%" } : {}}
                        transition={{ 
                          duration: 2, 
                          delay: (index * 0.2) + (skillIndex * 0.1) + 1,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Interactive skill summary */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5 }}
      >
        <Card className="bg-gradient-to-r from-purple-900/30 to-purple-800/30 border-purple-500/30 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent className="p-6">
            <motion.div
              className="text-lg text-purple-200 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              💡 Pro Tip: Hover over skill bars to see interactive effects!
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">3+</div>
                <div className="text-sm text-gray-400">Years Learning</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">85%</div>
                <div className="text-sm text-gray-400">Avg Proficiency</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}