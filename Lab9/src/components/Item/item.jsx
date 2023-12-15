import React, { useState, useEffect } from 'react';
import '../../styles.css';
import './item.styles.css';
import Header from '../../containers/header/Header';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { getAllHelicopters } from '../api/api';

const ItemPage = () => {
  const [exclusiveModelsList, setExclusiveModelsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const allShoes = await getAllHelicopters();
      setExclusiveModelsList(allShoes);
      setLoading(false);
    };

    fetchData();
  }, []);

  const { id: idFromParams } = useParams();
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    const item = exclusiveModelsList.find((item) => item.id === parseInt(idFromParams));
    setSelectedItem(item || {});
  }, [exclusiveModelsList, idFromParams]);

  return (
    <div>
      <Header />
      <div className="main-page">
        {loading ? (
          <Loader />
        ) : (
          <div className="item-card">
            <img src={selectedItem.image} alt={selectedItem.title} className="hotel-card-image" />
            <div className="item-content">
              <h2 className="item-title">{selectedItem.title}</h2>
              <h3 className="item-price">{selectedItem.price}$</h3>
              <p className="item-description">{selectedItem.description}</p>
              <div className="item-buttons">
                <Link to="/exclusive_models" className="go-back">
                  Go back
                </Link>
                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemPage;
