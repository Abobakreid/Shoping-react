import React from "react";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="container">
        <div className="cont">
          <span>Trending Product in 2022</span>
          <h1>Light On Your Feet</h1>
          <p>
            Comfortable and very layerable, our Tree styles take you from crisp
            to cold.
          </p>
          <div className="c_btn">
            <NavLink to="/shopmen" className="shop">
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
