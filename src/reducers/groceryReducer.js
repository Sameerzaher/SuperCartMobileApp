import {ADD_ITEM, DROP_LIST, REMOVE_ITEM, SET_LIST} from "../types";
import { storeGroceryList } from '../storage'

const initialState = [];

export default (state = initialState, action) => {
  let newState
  switch (action.type) {
    case  SET_LIST:
      newState = action.payload
      break;
    case ADD_ITEM:
      newState = [...state]
      newState.push(action.payload)
      break;
    case REMOVE_ITEM:
      newState = state.filter(element => element.id !== action.payload.id);
      break;
    case DROP_LIST:
      newState = []
      break;
    default:
      newState = state
  }
  console.log('__state', action.type, newState)
  storeGroceryList(newState)
  return newState
}