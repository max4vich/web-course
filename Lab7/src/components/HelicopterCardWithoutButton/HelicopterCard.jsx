import React from 'react';
import '../../styles.css';
import './HelicopterCard.styles.css';
import { Link } from 'react-router-dom';

function HelicopterCardWithoutButton(props) {
  return (
    <div className="info-card">
      <img src={props.image} alt={props.title} className="info-card-image" />
      <div className="info-card-content">
        <h2 className="info-card-title">{props.title}</h2>
        <h3 className='info-card-price'>${props.price}</h3>
        <p className="info-card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default HelicopterCardWithoutButton;