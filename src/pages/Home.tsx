import React from 'react';
import Projects from '../components/Projects';

const Home: React.FC = () => {
  return (
    <div className="home">
        <div className='welcome-message'>
            <h1>Welcome!</h1>
            <p>My name is Colton Peffer and this is my website. Here, you will find information about me and the various projects I have built over the years. Feel free to browse around and learn more about me.</p>
        </div>
        <Projects/>
    </div>
  );
};

export default Home;
