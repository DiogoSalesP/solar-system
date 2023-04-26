import React from 'react';
import '../style/header.css';
import logo from '../images/logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={ logo } alt="Sistema Solar" />
      </div>
    );
  }
}

export default Header;
