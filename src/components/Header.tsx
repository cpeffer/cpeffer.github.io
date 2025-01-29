import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import ContactTooltip from './ContactToolTip';


const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
          <FontAwesomeIcon icon={faHome} style={{ marginRight: '8px' }} />
          Colton Peffer
        </Link>
      </h1>
    <div style={{ display: 'flex', gap: '20px' }}>
      <ContactTooltip/> 
      <a href="https://www.linkedin.com/in/coltonpeffer" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        LinkedIn
      </a>
      <a href={"/pdfs/ColtonPefferResume.pdf"} download style={{ textDecoration: 'none', color: 'inherit' }}>
        Resume
        </a>
    </div>
    </header>
  );
};

export default Header;
