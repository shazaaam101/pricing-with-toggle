import React from "react";
import "../styles/Card.css";
const Card = ({ title, price, storage, userAllowed, sendUp }) => {
  return (
    <div className="Card">
      <header>
        <p className="title">{title}</p>
        <h1 className="price">${price}</h1>
      </header>
      <div className="features">
        <div className="storage">{storage} Storage</div>
        <div className="users-allowed">{userAllowed} Users Allowed</div>
        <div className="send-up">Send up to {sendUp} GB</div>
      </div>
      <button className="btn">LEARN MORE</button>
    </div>
  );
};

export default Card;
