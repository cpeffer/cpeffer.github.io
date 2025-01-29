import React from 'react';
import Projects from '../components/Projects';

const Home: React.FC = () => {
  return (
    <div className="home">
        <div className='welcome-message'>
            <h1>Welcome!</h1>
            <p>My name is <strong>Colton Peffer</strong> and I am a computer scientist passionate about tackling challenging problems. Currently, I'm a software engineer at Ford Motor Company, contributing to the Subscriptions and Memberships team. I graduated from the <strong>University of Michigan</strong> in May 2024 with a <strong>3.86 GPA</strong>, earning a degree in Computer Science with minors in Business and Entrepreneurship. While I love coding, my greatest strengths lie in the blend of traditional computer science skills and less conventional attributes. I believe my career path will flourish most from combining programming with my leadership abilities and business mindset. My goal is to leverage these strengths to make a real impact in the tech world, and I see programming as the perfect vehicle to do that.</p>
            <p>My coursework and professional experience have provided a robust foundation in full-stack development, machine learning, and data structures and algorithms. My expertise spans several technologies, including React, TypeScript, C++, Python, PyTorch, Pandas, and TensorFlow. Beyond my technical skills, five years of tutoring experience (self employed, Juni Learning, and Mathnasium) has sharpened my communication, problem-solving, and adaptability, and above all, my patience.</p>
            <p>Outside of work, I'm an avid soccer player and fan, a dedicated reader of mostly nonfiction, a chess enthusiast (around 1300 Elo), and an intermediate guitarist. I also enjoy video games and cooking. My free time is often filled with these activities, and occasionally with travel, snowboarding, and camping. I embrace new opportunities and strive to maintain a positive and hardworking approach to everything I do.</p>
        </div>
        <Projects/>
    </div>
  );
};

export default Home;
