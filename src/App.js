import "./App.css";
import Header from "./containers/Header";
// container folder holds all the components
// redux folder holds all the redux related files
// redux folder having [ actions, reducers, constants ] folders and store file

// Now, we add routing to our app. We will use react-router-dom for this.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// BrowserRouter is the router component
// Switch is used to switch between different routes
// Route is used to define a route
// We will define routes in App.js
// We will define components for these routes in containers folder

import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
