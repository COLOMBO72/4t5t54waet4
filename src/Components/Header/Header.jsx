import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_wrapper">
        <h2>NEVSKY toys</h2>
        <div className="urls">
          <a href="#">Каталог</a>
          <a href="#">О нас</a>
          <a href="#">Адрес</a>
          <a href="#">Вход</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
