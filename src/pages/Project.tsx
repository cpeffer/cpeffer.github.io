import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projectsData';

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
      <p>{project.longeDescription}</p>
    </div>
  );
};

export default Project;