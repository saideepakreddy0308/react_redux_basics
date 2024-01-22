import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import store from './redux/store';

// now, we need to provide redux store to our application, so we will use Provider from react-redux. 
// Provider is a component which will provide redux store to our application.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
  </React.StrictMode>
);
