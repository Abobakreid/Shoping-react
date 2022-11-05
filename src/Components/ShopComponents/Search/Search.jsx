import React from "react";

const Search = ({ setCategory, setSearch }) => {
  return (
    <div className="shop_search">
      <div className="container content">
        <div className="s_input">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="s_option">
          <select
            name="select"
            id="select"
            onChange={(e) => {
              if (e.target.value === "Filter by category") {
                setCategory("");
              } else {
                setCategory(e.target.value);
              }
            }}
          >
            <option value="Filter by category">Filter by Category</option>
            <option value="Sofa">Sofa</option>
            <option value="Phone">Phone</option>
            <option value="Chair">Chair</option>
            <option value="Head Phone">Head Phone</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Search;
