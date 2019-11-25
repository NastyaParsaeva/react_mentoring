import React from 'react';
import netflix from '../../../../assets/Netflix-Logo.png';
import './header.css';

const Header = () => {
  return (
    <img 
      className="header__logo"
      src={netflix} 
      alt="Netflix"
    />
  );
};

export default Header;