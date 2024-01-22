// This is going to have list of our products

import React from "react";
import { useSelector } from "react-redux";

const ProductListing = () => {
  // we now fetch the product we have in our redux store
  // we will use useSelector hook to fetch the products, useSelector hook takes a function as an argument, this function takes state as an argument
  // we will return the products from this function
  // useSelector hook returns the products from the redux store
  // useSelector hook is similar to mapStateToProps function
  // useSelector hook is used to fetch the data from the redux store

  const products = useSelector((state) => state);
  console.log(products);

  return (
    <div className="ui grid container">
      <h1>Product Listing</h1>
    </div>
  );
};

export default ProductListing;
