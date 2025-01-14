import React from 'react';
import '../styles/ContactToolTip.css'; 

const ContactTooltip: React.FC = () => {
  return (
    <div className="tooltip-container">
      <span className="tooltip-trigger">Contact</span>
      {/* <div className="tooltip-content">
        <p>Email: colton@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Location: City, Country</p>
      </div> */}
    </div>
  );
};

export default ContactTooltip;