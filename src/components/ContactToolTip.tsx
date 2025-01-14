import React from 'react';
import '../styles/ContactToolTip.css'; 

const ContactTooltip: React.FC = () => {
  return (
    <div>
    <div className="container">
    <span className="tooltiptext">
      <p>coltpeffer@gmail.com</p>
      <p>(310) 741-9002</p>
    </span>

    Contact

    </div>
    </div>
  );
};

export default ContactTooltip;