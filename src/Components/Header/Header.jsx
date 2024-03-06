import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <h2>NEVSKY toys</h2>
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
