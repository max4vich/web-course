import React from 'react';
import '../../styles.css';
import './item.styles.css';
import Header from '../../containers/header/Header';
import { ExclusiveModelsList } from '../../pages/ExclusiveModels';
import {Link, useParams} from "react-router-dom";


const ItemPage = () => {
    const {id} = useParams();
    const selectedItem = ExclusiveModelsList.find((item) => item.id === parseInt(id));

    return (
      <div>
        <Header/>
        <div className='main-page'>
        <div className='item-card'>
            <img src={selectedItem.image} alt={selectedItem.title} className="hotel-card-image" />
            <div className="item-content">
                <h2 className="item-title">{selectedItem.title}</h2>
                <h3 className="item-price">{selectedItem.price}$</h3>
                <p className="item-description">{selectedItem.description}</p>
                <div className='item-buttons'>
                    <Link to="/exclusive_models" className="go-back">Go back</Link>
                    <button className='add-to-cart'>Add to cart</button>
                </div>
            </div>
        </div>
      </div>
      </div>
    )
}

export default ItemPage;