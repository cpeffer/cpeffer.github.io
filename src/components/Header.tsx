import React from 'react';
import { Link } from 'react-router-dom';
import ContactTooltip from './ContactToolTip';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Colton Peffer</Link>
      </h1>
      <div>
        <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About </Link>
        <ContactTooltip/> 
        {/* <button style={{ marginLeft: '10px' }}>Contact</button> */}
        <a href="https://www.linkedin.com/in/coltonpeffer" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px',  textDecoration: 'none', color: 'inherit' }}>
            LinkedIn
        </a>
      </div>
    </header>
  );
};

export default Header;
