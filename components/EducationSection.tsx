import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { GraduationCap, MapPin, BookOpen } from "lucide-react";

export function EducationSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 border-purple-500/20 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-purple-500/20 p-4 rounded-full">
                <GraduationCap className="w-8 h-8 text-purple-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Computer Applications
                </h3>
                <div className="flex items-center gap-2 text-purple-300 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>National Institute of Electronics & Information Technology</span>
                </div>
                <div className="text-gray-400 mb-4">
                  Currently in 3rd Semester
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span className="font-medium">Focus Areas:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-6">
                    {["Programming", "Database Management", "Web Development"].map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}