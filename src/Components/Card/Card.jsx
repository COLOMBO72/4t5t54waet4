import React from "react";
import "./Card.css";
import Merc from "../../assets/merc.jpg";

const Card = () => {
  return (
    <div class="card">
      <img src={Merc} alt="merc" />
      <span>Mercedes Benz C63</span>
      <p>570 р.</p>
      <p>1:24</p>
    </div>
  );
};

export default Card;
