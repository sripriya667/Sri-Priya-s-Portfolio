import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techColors: { [key: string]: string } = {
    "React": "primary",
    "Node.js": "secondary",
    "MongoDB": "accent",
    "JavaScript": "primary",
    "TypeScript": "secondary",
    "PostgreSQL": "accent",
    "Express": "primary",
    "Socket.io": "secondary",
    "Stripe": "accent",
    "HTML5": "secondary",
    "Chart.js": "secondary",
    "Weather API": "accent",
    "CSS3": "accent"
    
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 scroll-mt-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exciting projects currently in development - check back soon for live demos and code
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
           
<Card className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
  <div className="relative overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
  <CardContent className="p-6 flex flex-col flex-1">
    <div className="flex-1 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
    </div>
    <div className="mt-auto">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={`px-2 py-1 rounded text-sm font-medium ${
              techColors[tech] === 'primary' ? 'bg-primary/10 text-primary' :
              techColors[tech] === 'secondary' ? 'bg-secondary/10 text-secondary' :
              'bg-accent/10 text-accent'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        {project.githubUrl && (
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <Github className="mr-2" size={16} />
            GitHub
          </a>
        )}
        {project.demoUrl && (
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90"
          >
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2" size={16} />
              Live Demo
            </a>
          </Button>
        )}
        {project.docsUrl && (
          <a
            href={project.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-secondary hover:text-secondary/80 transition-colors"
          >
            <Book className="mr-2" size={16} />
            Documentation
          </a>
        )}
      </div>
    </div>
  </CardContent>
</Card>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}