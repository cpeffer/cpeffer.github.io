import React, { useState } from 'react';
import projects, {ProjectData} from '../data/projectsData';
import Modal from './Modal';
import Project from './Project';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

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

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-card">
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => handleProjectClick(project)} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="project-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-description">
                  <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>{project.overview}</p>
                  <div className="project-difficulty" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                    Difficulty: {renderStars(project.difficulty)}
                  </div>
                  <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>Click to Learn More</p>
                </div>
              </div>
              <h2 className="project-title">{project.title}</h2>
            </div>
          ))}
        </div>
      </div>

      <Modal show={!!selectedProject} onClose={handleCloseModal}>
        {selectedProject && (
          <Project project={selectedProject} />
        )}
      </Modal>
    </div>
  );
};

export default Projects;