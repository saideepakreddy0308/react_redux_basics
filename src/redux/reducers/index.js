import {combineReducers} from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReducers({
    // here, combineReducers takes an object as a parameter and that object will have all the reducers.
    // productReducer is a function, so we will call it as a function.

    allProducts: productReducer,
    // here, allProducts is a key and productReducer is a value.
    // now for creating the store, we will create a file called store.js in redux folder.

    
});