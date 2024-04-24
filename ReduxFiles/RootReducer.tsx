import { combineReducers } from 'redux';
import { Reducer } from './Reducer'; // Assuming Reducer is the name of your reducer file

const rootReducer = combineReducers({
  cart: Reducer, // Assuming Reducer handles the cart state
  // Add other reducers here if needed
});

export default rootReducer;
