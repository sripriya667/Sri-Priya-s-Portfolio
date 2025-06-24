export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Coming Soon - Project 1",
    description: "I'm currently working on exciting new projects that showcase my full-stack development skills. This space will feature my latest work with modern technologies and innovative solutions.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/sripriya",
  },
  {
    title: "Coming Soon - Project 2", 
    description: "Another exciting project in development that will demonstrate my expertise in creating responsive, user-friendly applications with clean code and modern design principles.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["JavaScript", "TypeScript", "Express"],
    githubUrl: "https://github.com/sripriya",
  },
  {
    title: "Coming Soon - Project 3",
    description: "A comprehensive web application currently in development that will showcase my ability to build scalable, efficient solutions from concept to deployment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "PostgreSQL", "CSS3"],
    githubUrl: "https://github.com/sripriya",
  }
];