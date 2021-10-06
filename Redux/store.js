import {createStore, combineReducers, applyMiddleware} from 'redux';
import cartItems from './Reducers/cartReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cartItems: cartItems,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
