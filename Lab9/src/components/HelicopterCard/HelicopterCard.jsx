import React, { useState } from 'react';
import '../../styles.css';
import './HelicopterCard.styles.css';
import { Link } from 'react-router-dom';

function HelicopterCard(props) {
  const [id, setId] = useState(props.id);

  return (
    <div className="info-card">
      <img src={props.image} alt={props.title} className="info-card-image" />
      <div className="info-card-content">
        <h2 className="info-card-title">{props.title}</h2>
        <h3 className='info-card-price'>${props.price}</h3>
        <p className="info-card-description">{props.description}</p>
        <Link to={`/item/${id}`} className='info-card-button'>View more</Link>
      </div>
    </div>
  );
}

export default HelicopterCard;
