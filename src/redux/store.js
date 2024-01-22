import { createStore } from 'redux';
import reducers from './reducers/index';  // this coming from reducers/index.js file

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// here, createStore takes two parameters, first is reducers and second is initial state and third is redux devtools extension.
// we will pass empty object as initial state and redux devtools extension is optional.
// we are not taking middeleware here, but we can take it like this also as:  middleware: [thunk] // thunk is a middleware
// now, we have created our store, lets use it in our App.js file.

export default store;