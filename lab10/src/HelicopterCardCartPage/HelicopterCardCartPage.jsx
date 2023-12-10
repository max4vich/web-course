import React from 'react';
import { Link } from 'react-router-dom';
import './HelicopterCardCartPage.styles.css';

function HelicopterCardCartPage({ image, title, price, description, id }) {
  return (
    <div className="cartpage-card">
      <img src={image} alt={title} className="cartpage-card-image" />
      <div className='cartpage-info'>
        <Link to={`/item/${id}`}>{title}</Link>
        <h3 className='cartpage-card-price'>${price}</h3>
      </div>
    </div>
  );
}

export default HelicopterCardCartPage;
