// This is going to have list of our products

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from './ProductComponent';
import axios from "axios";

const ProductListing = () => {
  // we now fetch the product we have in our redux store
  // we will use useSelector hook to fetch the products, useSelector hook takes a function as an argument, this function takes state as an argument
  // we will return the products from this function
  // useSelector hook returns the products from the redux store
  // useSelector hook is similar to mapStateToProps function
  // useSelector hook is used to fetch the data from the redux store

  const products = useSelector((state) => state);
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(response.data);
  }

    useEffect(() => {
        fetchProducts();
        }, []);

  return (
    <div className="ui grid container">
        {/* Now, we will display the products in the ProductListing component */}
        < ProductComponent />
        {/* as we are using redux store, there is no need to pass the props to the ProductComponent */}
        {/* we will directly access the products from the redux store */}
        {/* we will use useSelector hook to fetch the products from the redux store */}
        

    </div>
  );
};

export default ProductListing;
