import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../containers/header/Header';
import Footer from '../containers/footer/Footer';
import { removeFromCart, updateQuantity } from '../components/redux/actions';
import HelicopterCardCartPage from '../HelicopterCardCartPage/HelicopterCardCartPage';
import './CartPage.styles.css';

const CartPage = ({itemId}) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (helicopterId, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity(helicopterId, newQuantity));
    }
  };

  const totalPrice = cartItems.reduce((total, item) => {
    if (item.helicopter && typeof item.helicopter.price === 'number') {
      return total + item.quantity * item.helicopter.price;
    }
    return total;
  }, 0);
  

  return (
      <div>
          <Header />
          <div className="cart-page">
              <h1>Shopping Cart</h1>
              <a href='/exclusive_models'>	&#8592; Back to catalogue</a>
              <ul className="cart-items-list">
              {cartItems.map((item, id) => (
              
              <li key={id} className="cart-item">
              
                {item.helicopter && item.helicopter.id && (
                  <HelicopterCardCartPage
                    id={item.helicopter.id}
                    image={item.helicopter.image}
                    title={item.helicopter.title}
                    price={item.helicopter.price}
                  />
                )}
                <div className='action-panel'>
                  <div className='cart-quantity'>
                    <button onClick={() => handleQuantityChange(item.helicopter.id, item.quantity - 1)}>-</button>
                    <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.helicopter.id, parseInt(e.target.value))} />
                    <button onClick={() => handleQuantityChange(item.helicopter.id, item.quantity + 1)}>+</button>
                  </div>
                  {item.helicopter && typeof item.helicopter.price === 'number' && (
                    <p>Price: {item.helicopter.price * item.quantity}$</p>
                  )}
                  <button onClick={() => handleRemoveFromCart(item.helicopter.id)}>
                    Remove from cart
                  </button>
                </div>
               </li>
                ))}
              </ul>
              <div className='total_amount'>
                <p>Total price: {totalPrice}$</p>
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default CartPage;
