// Reducers always take initial state and action as parameters and return a new state.
// We created this file to hold all the action types, and after productActions.js and action-types.js, we will create productReducer.js file.
import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [],
};

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}

// now, we have created our first reducer, lets create our store and firstly, index.js

export const selectedProductReducer = (state = {}, {type, payload}) => { // here we have used empty object as initial state
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}