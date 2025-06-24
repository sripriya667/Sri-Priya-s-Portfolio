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
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with React frontend, Node.js backend, and MongoDB database. Features include user authentication, shopping cart, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    githubUrl: "https://github.com/sripriya/ecommerce-platform",
    demoUrl: "https://ecommerce-demo.vercel.app"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and responsive design for all devices.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/sripriya/task-manager",
    demoUrl: "https://taskmanager-demo.netlify.app"
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, charts and graphs, weather alerts, and beautiful animated backgrounds that change based on weather conditions.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
    githubUrl: "https://github.com/sripriya/weather-dashboard",
    demoUrl: "https://weather-dashboard-demo.netlify.app"
  }
];