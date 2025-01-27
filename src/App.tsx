import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './components/Projects';
import AboutMe from './pages/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;