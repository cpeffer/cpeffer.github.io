import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>Hello! I'm [Your Name], a software engineer based in [Your Location].</p>
      <h2>My Skills</h2>
      <ul>
        <li>JavaScript/TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Python</li>
        {/* Add more skills */}
      </ul>
      <h2>My Experience</h2>
      <p>I have [X] years of experience in software development, working on projects ranging from [type of projects].</p>
      <h2>Education</h2>
      <p>I graduated from [University Name] with a degree in [Your Degree].</p>
    </div>
  );
};

export default About;
