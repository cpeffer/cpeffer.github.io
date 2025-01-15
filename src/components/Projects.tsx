import React from 'react';
import projects from '../data/projectsData';
import '../styles/Projects.css';

const Projects: React.FC = () => {
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
                  <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>{project.briefDescription}</p>
                  <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>Click to Learn More</p>
                </div>
              </div>
              <h2 className="project-title">{project.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;