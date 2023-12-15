export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

export const addToCart = (helicopter, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: { helicopter, quantity },
  };
};

export const removeFromCart = (helicopterId) => ({
  type: REMOVE_FROM_CART,
  payload: helicopterId,
});

export const updateQuantity = (helicopterId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { helicopterId, quantity },
});