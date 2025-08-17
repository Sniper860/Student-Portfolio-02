import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Github, Mail, ExternalLink, User } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto rounded-full"></div>
        <p className="text-gray-300 mt-6 text-lg">
          Let's connect and explore opportunities in technology and development
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Card className="bg-gradient-to-br from-gray-900/50 to-purple-900/20 border-purple-500/20 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Rohit Sah</h3>
                <p className="text-purple-300">BCA Student & Full-Stack Developer</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border-purple-500/40 text-purple-200 hover:bg-purple-500/30 hover:border-purple-400/60 transition-all duration-200 h-12"
                  onClick={() => window.open('https://github.com/Sniper860', '_blank')}
                >
                  <Github className="w-5 h-5 mr-3" />
                  GitHub: Sniper860
                </Button>

                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-500/40 text-blue-200 hover:bg-blue-500/30 hover:border-blue-400/60 transition-all duration-200 h-12"
                  onClick={() => window.location.href = 'mailto:rohitsah@example.com'}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </Button>
              </div>

              <div className="pt-6 border-t border-purple-500/20">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">Featured Projects</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <Button
                    variant="ghost"
                    className="justify-between text-gray-300 hover:text-purple-300 hover:bg-purple-500/10"
                    onClick={() => window.open('https://snipvault.netlify.app', '_blank')}
                  >
                    <span>SnipVault</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-between text-gray-300 hover:text-purple-300 hover:bg-purple-500/10"
                    onClick={() => window.open('https://kernify.netlify.app', '_blank')}
                  >
                    <span>Kernify</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}