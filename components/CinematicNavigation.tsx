import { useState, useEffect } from "react";
import { motion } from "motion/react";

const sections = [
  { id: "about", label: "About", icon: "👨‍💻" },
  { id: "education", label: "Education", icon: "🎓" },
  { id: "skills", label: "Skills", icon: "⚡" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "contact", label: "Contact", icon: "📧" },
];

export function CinematicNavigation() {
  const [activeSection, setActiveSection] = useState("about");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = scrollPosition / (documentHeight - windowHeight);
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );

      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(sections[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-2xl border-b border-purple-500/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent interactive"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('about')}
            >
              Rohit Sah
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  className={`text-sm transition-all duration-300 interactive relative px-4 py-2 rounded-full ${
                    activeSection === section.id 
                      ? 'text-purple-400 bg-purple-500/20' 
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                  onClick={() => scrollToSection(section.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{section.icon}</span>
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute inset-0 bg-purple-500/20 rounded-full"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </motion.nav>

      {/* Floating navigation indicator */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-3"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 interactive ${
              activeSection === section.id
                ? 'bg-purple-500 border-purple-500 scale-125'
                : 'border-purple-500/50 hover:border-purple-400'
            }`}
            onClick={() => scrollToSection(section.id)}
            whileHover={{ scale: 1.2 }}
            title={section.label}
          />
        ))}
      </motion.div>
    </>
  );
}