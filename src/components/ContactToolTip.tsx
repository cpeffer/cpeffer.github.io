import React from 'react';
import '../styles/ContactToolTip.css'; 

const ContactTooltip: React.FC = () => {
  return (
    <div>
      <div className="container">
        <span className="tooltiptext">
          <a href="mailto:coltpeffer@gmail.com" style={{
            textDecoration: 'none',
            color: 'inherit',
            cursor: 'pointer'
          }}
          >
            coltpeffer@gmail.com
          </a>
          <p>(310) 741-9002</p>
        </span>
        Contact
      </div>
    </div>
  );
};

export default ContactTooltip;