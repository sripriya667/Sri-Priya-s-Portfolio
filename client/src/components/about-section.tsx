import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Frontend Development", color: "primary" },
    { name: "Backend Architecture", color: "secondary" },
    { name: "Database Design", color: "accent" },
    { name: "API Development", color: "primary" },
    { name: "Performance Optimization", color: "secondary" },
    { name: "User Experience", color: "accent" }
  ];

  const technologies = [
    { name: "JavaScript", color: "primary" },
    { name: "React", color: "secondary" },
    { name: "Node.js", color: "accent" },
    { name: "MongoDB", color: "primary" },
    { name: "TypeScript", color: "secondary" },
    { name: "Express.js", color: "accent" }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about creating seamless connections between creative vision and technical execution
          </p>
        </motion.div>

        {/* Profile Image - Centered below header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
            alt="Professional headshot"
            className="rounded-2xl shadow-2xl w-64 h-64 object-cover"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Full-Stack Web Developer</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm Priya, a passionate full-stack web developer who thrives on building digital experiences that are clean, impactful, and purpose-driven.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                With a strong foundation in JavaScript, React, Node.js, and MongoDB, I enjoy crafting end-to-end solutions that combine design, logic, and usability.
                Whether I'm building a landing page or architecting an API, I care deeply about performance, user experience, and writing code that scales.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm not just here to code — I'm here to create, learn, and contribute to meaningful projects.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      skill.color === 'primary' ? 'bg-primary' :
                      skill.color === 'secondary' ? 'bg-secondary' :
                      'bg-accent'
                    }`} />
                    <span className="text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      tech.color === 'primary' ? 'bg-primary/10 text-primary' :
                      tech.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                      'bg-accent/10 text-accent'
                    }`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
