import React from 'react';
import './Card.css';

const Card = ({ title, content, icon }) => {
  return (
    <div className="card">
      {icon && <div className="card-icon">{icon}</div>}
      <h2>{title}</h2>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
