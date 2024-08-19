import React from "react";
import "./card.css";

function Card({ imgSrc, name }) {
  // Users name
  const names = [
    "Mago Ozzy",
    "Fast&Furious96",
    "Greenbook00",
    "LoveCofféPage",
    "MacPower86",
    "Bobby Book",
  ];

  return (
    // Card Body
    <div className="card">
      <div>
        <img src={imgSrc} alt="Card Image" />
        <span className="name-box">{name}</span>
      </div>
    </div>
  );
}

export default Card;
