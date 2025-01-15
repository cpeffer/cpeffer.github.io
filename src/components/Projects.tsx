import React from 'react';
import project1Image from '../images/Screenshot 2025-01-15 at 10.04.07 AM.png';
import project2Image from '../images/Screenshot 2025-01-15 at 10.04.15 AM.png';
import project3Image from '../images/Screenshot 2025-01-15 at 10.04.22 AM.png';
import project4Image from '../images/Screenshot 2025-01-15 at 10.10.07 AM.png';
import '../styles/Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string; // Add image property
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Project One",
      description: "This is a brief description of project one.",
      technologies: ["React", "TypeScript", "Node.js"],
      image: project1Image // Add image source
    },
    {
      id: 2,
      title: "Project Two",
      description: "This is a brief description of project two.",
      technologies: ["Python", "Django", "PostgreSQL"],
      image: project2Image // Add image source
    },
    {
      id: 3,
      title: "Project Three",
      description: "This is a brief description of project three.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      image: project3Image // Add image source
    },
    {
      id: 4,
      title: "Project Three",
      description: "This is a brief description of project three.",
      technologies: ["Java", "Spring Boot", "MySQL"],
      image: project4Image // Add image source
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-card">
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-description">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;