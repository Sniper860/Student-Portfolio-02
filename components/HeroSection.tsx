import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Computer Applications student focused on full-stack development and practical software solutions. Passionate about building efficient applications and exploring emerging technologies.";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-purple-800/30"
        style={{ y }}
      />
      
      {/* 3D Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] transform perspective-1000 rotateX-10" />
      </div>

      {/* Enhanced floating particles with 3D movement */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Cinematic light rays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent transform rotate-12" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent transform -rotate-12" />
      </div>

      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3.5 }}
        >
          {/* 3D Rotating Name */}
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent perspective-1000"
            initial={{ opacity: 0, scale: 0.5, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 4 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              transition: { duration: 0.3 } 
            }}
          >
            Rohit Sah
          </motion.h1>
          
          {/* Animated subtitle with stagger */}
          <motion.div
            className="text-xl md:text-2xl text-purple-300 mb-6 space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4.5 }}
          >
            {["BCA", "Student", "|", "3rd", "Semester", "|", "Age", "19"].map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 4.5 + index * 0.1 }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Typewriter effect for description */}
          <motion.div
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed min-h-[120px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 5 }}
          >
            <span>{typewriterText}</span>
            <motion.span
              className="inline-block w-0.5 h-6 bg-purple-400 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>

          {/* Enhanced quote with cinematic reveal */}
          <motion.div
            className="text-center italic text-purple-200 text-lg relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 8 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2, delay: 8.5 }}
            />
            "Bridging technology, research, and creativity through practical applications and continuous learning."
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced scroll indicator with bounce animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer interactive"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ opacity }}
        onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center space-y-2">
          <ChevronDown className="w-6 h-6 text-purple-400" />
          <div className="text-xs text-purple-300">Scroll Down</div>
        </div>
      </motion.div>
    </section>
  );
}