import React, { useState } from "react";
import { ShopCards, ShopCarousel, ShopSearch } from "../../Components";

const Shop = () => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  return (
    <div className="shop">
      <ShopCarousel />
      <ShopSearch setCategory={setCategory} setSearch={setSearch} />
      <ShopCards category={category} search={search} />
    </div>
  );
};

export default Shop;
