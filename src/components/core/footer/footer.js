import React from 'react';
import netflix from '../../../../assets/Netflix-Logo.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <img 
      className="footer__logo"
      src={netflix} 
      alt="Netflix"
    />
    </footer>
    
  );
};

export default Footer;