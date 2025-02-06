import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projectsData';
import '../styles/Project.css'; 

const Project: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Project not found</div>;
  }

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.longDescription}</p>
      {project.pdfLink && (
        <a href={project.pdfLink} download style={{ textDecoration: 'none', color: 'inherit' }}>
          <button>Download PDF</button>
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