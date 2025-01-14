import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project One",
      description: "This is a brief description of project one.",
      technologies: ["React", "TypeScript", "Node.js"]
    },
    {
      id: 2,
      title: "Project Two",
      description: "This is a brief description of project two.",
      technologies: ["Python", "Django", "PostgreSQL"]
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>Technologies used: {project.technologies.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
