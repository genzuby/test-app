import React from 'react';
import './style.scss';
import Logo from '../../assets/img/smile.png';

function Header() {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
