import React from 'react';
import './Header.css';
import logo from '../../assets/logo-icon.jpg';

const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <img src={logo} alt="logo" />
        <div className="urls">
          <a href="catalog">Каталог</a>
          <a href="about">О нас</a>
          <a href="auth">Вход</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
