import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/actions";
import Loader from '../Loader/Loader';
import Header from '../../containers/header/Header';
import '../../styles.css';
import './item.styles.css';
import { getAllHelicopters } from '../api/api';

const ItemPage = () => {
  
  const [exclusiveModelsList, setExclusiveModelsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const helicopters = await getAllHelicopters();
      setExclusiveModelsList(helicopters);
      setLoading(false);
    };

    fetchData();
  }, []);

  const { id: idFromParams } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const item = exclusiveModelsList.find((item) => item.id === parseInt(idFromParams));
    setSelectedItem(item);
  }, [exclusiveModelsList, idFromParams]);

  const handleAddToCart = () => {
    if (selectedItem && quantity > 0) {
      dispatch(addToCart(selectedItem, quantity));
    } else {
      console.error("Selected item is undefined, null, or quantity is invalid");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!selectedItem) {
    return (
      <div>
        <Header />
        <div className="main-page">
          <p>Helicopter not found.</p>
          <Link to="/exclusive_models">Go back to models</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="main-page">
        <div className="item-card">
          <img src={selectedItem.image} alt={selectedItem.title} className="hotel-card-image" />
          <div className="item-content">
          
            <h2 className="item-title">{selectedItem.title}</h2>
            <h3 className="item-price">{selectedItem.price}$</h3>
            <p className="item-description">{selectedItem.description}</p>
            <div className="quantity-selector">
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        </div>
            <div className="item-buttons">
              
              <Link to="/exclusive_models" className="go-back">
                Go back
              </Link>
              {/* Use Link to navigate to the CartPage */}
              <Link to="/cart" className="add-to-cart" onClick={handleAddToCart}>
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
