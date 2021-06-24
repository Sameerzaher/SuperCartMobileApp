import { getProductsBuyBarcode } from '../superCartSevice';
import { ADD_ITEM, SET_LIST } from '../types';
import { getGroceryList } from '../storage';

export const initiateListFromStorage = () => (dispatch) => {
  getGroceryList()
    .then((list) => {
      dispatch({
        type: SET_LIST,
        payload: list,
      });
    })
    .catch((e) => console.log('error in initiateListFromStorage', e));
};

export const addItem = (barcode) => (dispatch) => {
  getProductsBuyBarcode([barcode])
    .then((response) => {
      const item = response?.data?.data?.[0];
      if (item) {
        console.log('inside if');
        dispatch({
          type: ADD_ITEM,
          payload: {
            id: item.product_barcode,
            item,
          },
        });
      }
    })
    .catch((e) => console.log('error inside add item', e));
};

export const removeItem = (id) => (dispatch) => {
  // todo implement
};
export const dropList = () => (dispatch) => {
  // todo implement
};
