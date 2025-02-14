import React from 'react';
import Projects from '../components/Projects';
import Highlight from '../components/Highlight';

const Home: React.FC = () => {
  return (
    <div className="home">
        <div className='welcome-message'>
          <div className="welcome-container">
            <img src="/images/CPUmich.jpg" alt="Photo 1" className="welcome-photo" />
            <h1>Welcome!</h1>
            <img src="/images/CPProfessional.jpg" alt="Photo 2" className="welcome-photo" />
          </div>
            <p>My name is <strong>Colton Peffer</strong> and I am a computer scientist passionate about tackling challenging problems. Currently, I'm in my <Highlight>first year as software engineer</Highlight> at <strong>Ford Motor Company</strong>, contributing to the Subscriptions and Memberships team. I graduated from the <strong>University of Michigan</strong> in May 2024 with a <Highlight>3.86 GPA</Highlight>, earning a degree in Computer Science with minors in Business Administration and Entrepreneurship. While I love coding, my greatest strengths lie in the blend of traditional computer science skills and less conventional attributes. I believe my career path will flourish most from combining programming with my leadership abilities and business mindset.</p>
            <p>My coursework and professional experience have provided a robust foundation in full-stack development, machine learning, and data structures and algorithms. My expertise spans several technologies, including <Highlight>React, TypeScript, Kotlin, C++, Python, PyTorch, Pandas, TensorFlow, and Test-Driven Development</Highlight>. Beyond my technical skills, <Highlight>six years of tutoring experience </Highlight>(self employed, Juni Learning, and Mathnasium) has sharpened my communication, problem-solving, and adaptability, and above all, my patience.</p>
            <p>Outside of work, I'm an avid soccer player and fan, a dedicated reader of mostly nonfiction, a chess enthusiast (around 1300 Elo), and an intermediate guitarist. I also enjoy video games and cooking. My free time is often filled with these activities, and occasionally with travel, snowboarding, and camping. I embrace new opportunities and strive to maintain a positive and hardworking approach to everything I do.</p>
        </div>
        <Projects/>
    </div>
  );
};

export default Home;
