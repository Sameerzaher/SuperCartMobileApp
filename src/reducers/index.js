import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import groceryReducer from "./groceryReducer";

export default combineReducers({
  error: errorReducer,
  groceryList: groceryReducer,
});