import React from "react";
import { About, Carousel, Products } from "../../Components";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <About />
      <Products title={"Trending Products"} />
      <Products title={"Best Sales"} />
      <Products title={"New Arrivals"} />
      <Products title={"Popular Category"} />
    </div>
  );
};

export default Home;
