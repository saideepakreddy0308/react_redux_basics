import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.product);
  const {id,title} = products[0];


  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="image">
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductComponent;
