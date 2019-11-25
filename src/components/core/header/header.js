import React, { Component } from 'react';
import netflix from '../../../../assets/Netflix-Logo.png';
import './header.css';

class Header extends Component {
  render() {
    return (
      <img 
        className="header__logo"
        src={netflix} 
        alt="Netflix"
      />
    )
  }
}

export default Header