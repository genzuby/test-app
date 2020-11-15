import React from 'react';
import './style.scss';
import Logo from '../../assets/img/smile.png';

function Header() {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} className="logoimg" alt="logo" data-test="logoimg" />
        </div>
      </div>
    </header>
  );
}

export default Header;
