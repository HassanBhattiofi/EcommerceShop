import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getCart = async () => {
  await AsyncStorage.getItem('cartItems');
};

const initialState = {
  cartItems: getCart,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);

      const setCart = async () => {
        await AsyncStorage.setItem(
          'cartItems',
          JSON.stringify(state.cartItems),
        );
      };
      setCart();
    },
  },
});

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;
