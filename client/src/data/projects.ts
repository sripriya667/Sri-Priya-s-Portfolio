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
    title: "HopNGo - Full-Stack Travel Booking Platform",
    description: "Developed a full-stack web application for discovering and booking accommodations worldwide, including rooms, hotels, and unique stays. Integrated Leaflet API for interactive maps to display location details, and implemented a review system for users to share their experiences.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/sripriya667/HopNGo",
    demoUrl: "https://wanderlust-davj.onrender.com/listings",
  },
  {
    title: "Simon Says Game - Web-based Memory Challenge", 
    description: "Another exciting project in development that will demonstrate my expertise in creating responsive, user-friendly applications with clean code and modern design principles.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/sripriya667/SimonSaysGame",
    demoUrl: "https://simonsaysgam.netlify.app/",
    
  },
  {
    title: "Coming Soon - Project 3",
    description: "A comprehensive web application currently in development that will showcase my ability to build scalable, efficient solutions from concept to deployment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "MongoDB", "Node.js", "Express"],
    githubUrl: "https://github.com/sripriya",
  }
];