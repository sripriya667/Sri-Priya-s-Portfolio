# How to Add New Projects

To add new projects to your portfolio, follow these simple steps:

## 1. Edit the Projects File

Open `client/src/data/projects.ts` and add your new project to the `projects` array.

### Project Structure

```typescript
{
  title: "Your Project Name",
  description: "Brief description of what your project does and its key features",
  image: "https://your-image-url.com/image.jpg", // Use Unsplash or your own images
  technologies: ["React", "Node.js", "MongoDB"], // List of technologies used
  githubUrl: "https://github.com/your-username/project-name", // Optional
  demoUrl: "https://your-demo-url.com", // Optional
  docsUrl: "https://your-docs-url.com" // Optional - only if no demoUrl
}
```

## 2. Image Guidelines

- Use high-quality images (recommended: 800x400px)
- Free images from [Unsplash](https://unsplash.com/) work great
- Make sure images are relevant to your project
- Example Unsplash URL format: `https://images.unsplash.com/photo-[ID]?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400`

## 3. Technology Colors

The following technologies have predefined colors:
- **Primary (Purple)**: React, Node.js, JWT, Express, CSS3
- **Secondary (Pink)**: TypeScript, Socket.io, Chart.js
- **Accent (Green)**: MongoDB, PostgreSQL, Stripe, Weather API

If you use a new technology, add it to the `techColors` object in `client/src/components/projects-section.tsx`.

## 4. Example: Adding a New Project

```typescript
// Add this to the projects array in client/src/data/projects.ts
{
  title: "Blog Platform",
  description: "Modern blog platform with markdown support, user authentication, comment system, and SEO optimization. Built with performance and user experience in mind.",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  technologies: ["React", "Node.js", "PostgreSQL", "Markdown"],
  githubUrl: "https://github.com/sripriya/blog-platform",
  demoUrl: "https://myblog-demo.vercel.app"
}
```

## 5. Links (Optional)

- **githubUrl**: Link to your GitHub repository
- **demoUrl**: Link to live demo/deployed version
- **docsUrl**: Link to documentation (only shows if no demoUrl)

You can include any combination of these links, or none at all.

## 6. Automatic Updates

Once you save the `projects.ts` file, your changes will appear immediately on your portfolio website. No other files need to be modified!

## Tips

- Keep descriptions concise but informative (2-3 sentences)
- Highlight key features and technologies
- Use action words to make projects sound engaging
- Order projects by importance/recency in the array
- Test all links before adding them