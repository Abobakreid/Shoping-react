import React from "react";
import PCard from "./PCard";
const Products = ({ title }) => {
  return (
    <div className="product">
      <div className="container">
        <div className="text-center title">
          <h2>{title}</h2>
        </div>
        <div className="p_row">
          <PCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
