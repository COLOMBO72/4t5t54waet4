import React from 'react';
import CardWrapper from '../../Components/CardWrapper/CardWrapper';
import searchicon from '../../assets/search-icon.png';
import './Catalog.css';
const Catalog = () => {
  return (
    <div className="catalog_wrapper">
      <div className="search_wrapper">
        <img src={searchicon} alt="search" />
        <input type="text" placeholder="Mercedes..." />
      </div>
      <h2>Модели авто</h2>
      <CardWrapper />
    </div>
  );
};

export default Catalog;
