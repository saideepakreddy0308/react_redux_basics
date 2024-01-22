// This contains our actions

/* Here we are creating actions for our products, one is to set products and 
another is to select a product 
and other to remove the product. */

import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
}

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
}

 