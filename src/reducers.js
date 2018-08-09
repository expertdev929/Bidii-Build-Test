import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { productsReducer } from './products';


export default combineReducers({
  routing: routerReducer,
  products: productsReducer
});
