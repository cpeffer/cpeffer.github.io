import React, { useState } from 'react';
import projects, {Project} from '../data/projectsData';
import Modal from './Modal';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const handleProjectClick = (project: Project) => {
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
                  <p style={{ paddingLeft: '10px', paddingRight: '10px' }}>{project.briefDescription}</p>
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
          <div className="project-detail">
            <h1>{selectedProject.title}</h1>
            <p>{selectedProject.longDescription}</p>
            {selectedProject.pdfLink && (
              <a href={selectedProject.pdfLink} download style={{ textDecoration: 'none', color: 'inherit' }}>
                <button>Download PDF</button>
              </a>
            )}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="project-images-grid">
                {selectedProject.images.map((image, index) => (
                  <img key={index} src={image} alt={`${selectedProject.title} screenshot ${index + 1}`} className="project-image" />
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Projects;