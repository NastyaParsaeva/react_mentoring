import React, { Component } from 'react';
import netflix from '../../../../assets/Netflix-Logo.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
      <img 
        className="footer__logo"
        src={netflix} 
        alt="Netflix"
      />
      </footer>
      
    )
  }
}

export default Footer