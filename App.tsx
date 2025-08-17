import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HeroSection } from "./components/HeroSection";
import { EducationSection } from "./components/EducationSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { CustomCursor } from "./components/CustomCursor";
import { LoadingScreen } from "./components/LoadingScreen";
import { CinematicNavigation } from "./components/CinematicNavigation";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Smooth scrolling for all anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden cursor-none">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Enhanced Navigation */}
          <CinematicNavigation />

          {/* Hero Section with Parallax */}
          <section id="about" className="relative">
            <HeroSection />
            
            {/* Transition gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
          </section>

          {/* Education Section */}
          <motion.section 
            id="education" 
            className="relative bg-gradient-to-b from-black via-purple-950/10 to-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <EducationSection />
            
            {/* Floating orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 bg-purple-500/5 rounded-full blur-xl"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section 
            id="skills" 
            className="relative bg-gradient-to-b from-black via-purple-950/20 to-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <SkillsSection />
            
            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section 
            id="projects" 
            className="relative bg-gradient-to-b from-black via-purple-950/10 to-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ProjectsSection />
            
            {/* Spotlight effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            id="contact" 
            className="relative bg-gradient-to-b from-black via-purple-950/20 to-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <ContactSection />
          </motion.section>

          {/* Enhanced Footer */}
          <motion.footer 
            className="relative bg-black border-t border-purple-500/20 py-12 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Animated background particles */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, 10],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  Rohit Sah
                </div>
                <p className="text-gray-400 mb-4">
                  © 2024 Rohit Sah. Crafted with passion using React, Tailwind CSS, and Motion.
                </p>
                <motion.p 
                  className="text-purple-400 italic text-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  "Bridging technology, research, and creativity through practical applications and continuous learning."
                </motion.p>
                
                {/* Social links with hover effects */}
                <motion.div 
                  className="flex justify-center space-x-6 mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="https://github.com/Sniper860"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors interactive"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://snipvault.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors interactive"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    SnipVault
                  </motion.a>
                  <motion.a
                    href="https://kernify.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors interactive"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Kernify
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.footer>

          {/* Back to top button */}
          <motion.button
            className="fixed bottom-8 right-8 w-12 h-12 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center text-purple-400 hover:bg-purple-500/30 transition-all duration-300 interactive z-40"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ↑
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}