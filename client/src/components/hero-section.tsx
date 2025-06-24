import { motion } from "framer-motion";
import { Rocket, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Creative Data Solutions for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Modern Teams
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bridging the gap between creative vision and technical implementation. 
              I help creative teams communicate effectively with clients and technical teams through powerful data tools and intuitive interfaces.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Rocket className="mr-2" size={18} />
              View My Work
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Download className="mr-2" size={18} />
              Download Portfolio
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-gray-600 mt-1">Creative Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">25+</div>
              <div className="text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-gray-600 mt-1">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
