import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../Constants/cartConstant';

export const addItemToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

//localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
