import React from 'react';
import { ProjectData } from '../data/projectsData';
import '../styles/Project.css';

interface ProjectProps {
  project: ProjectData;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p><strong>Takeaway:</strong> {project.takeaway}</p>
      <p><strong>Context:</strong> {project.context}</p>
      <p><strong>Technologies/Concepts:</strong> {project.technologies.join(', ')}</p>
      {project.pdfLink && (
        <a href={project.pdfLink} download style={{ textDecoration: 'none', color: 'inherit' }}>
          <button>Download Full Paper</button>
        </a>
      )}
      {project.images && project.images.length > 0 && (
        <div className="project-images-grid">
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} className="project-image" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Project;