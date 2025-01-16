import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projectsData';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const renderStars = (difficulty: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < difficulty ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-card">
        <div className="project-grid">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="project-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="project-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-description">
                  <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>{project.briefDescription}</p>
                  <div className="project-difficulty" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    Difficulty: {renderStars(project.difficulty)}
                  </div>
                  <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>Click to Learn More</p>
                </div>
              </div>
              <h2 className="project-title">{project.title}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;