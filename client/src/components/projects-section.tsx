import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Book, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Creative Analytics Dashboard",
      description: "Interactive dashboard helping creative agencies track project performance, team productivity, and client satisfaction in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "D3.js", "MongoDB"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Team Communication Platform",
      description: "Unified platform for creative teams to collaborate, share feedback, and maintain project timelines with integrated client communication.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Socket.io", "PostgreSQL"],
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Data Integration API",
      description: "RESTful API service enabling technical teams to seamlessly integrate creative project data with existing enterprise systems.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Node.js", "Express", "Redis"],
      githubUrl: "#",
      docsUrl: "#"
    }
  ];

  const techColors = {
    "React": "primary",
    "D3.js": "secondary",
    "MongoDB": "accent",
    "Next.js": "primary",
    "Socket.io": "secondary",
    "PostgreSQL": "accent",
    "Node.js": "primary",
    "Express": "secondary",
    "Redis": "accent"
  };

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative data tools and creative solutions that bridge the gap between teams
          </p>
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
              <Card className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          techColors[tech as keyof typeof techColors] === 'primary' ? 'bg-primary/10 text-primary' :
                          techColors[tech as keyof typeof techColors] === 'secondary' ? 'bg-secondary/10 text-secondary' :
                          'bg-accent/10 text-accent'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
                      <Github className="mr-2" size={16} />
                      GitHub
                    </button>
                    {project.demoUrl ? (
                      <button className="flex items-center text-secondary hover:text-secondary/80 transition-colors">
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </button>
                    ) : (
                      <button className="flex items-center text-secondary hover:text-secondary/80 transition-colors">
                        <Book className="mr-2" size={16} />
                        Documentation
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <FolderOpen className="mr-2" size={18} />
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
