import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faClose, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [barsActive, setBarsActive] = useState(false);
  const { cartelemnts } = useSelector((state) => state.CartSlice);
  const { favoriteElements } = useSelector((state) => state.FavoriteSlice);

  const handelBars = () => {
    setBarsActive(!barsActive);
  };
  return (
    <div className="navbar">
      <div className="container content">
        <div
          className="bars"
          onClick={() => {
            handelBars();
          }}
        >
          {barsActive ? (
            <FontAwesomeIcon icon={faClose} size={"lg"} />
          ) : (
            <FontAwesomeIcon icon={faBars} size={"lg"} />
          )}
        </div>
        <div className="brand">
          <h2>
            <NavLink to={"/"}>Shop in</NavLink>
          </h2>
        </div>
        <nav className={barsActive ? "nav_links active" : "nav_links"}>
          <NavLink end to={"/"}>
            Home
          </NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/cart"}>Cart</NavLink>
          <NavLink to={"/cart"} className={"user"}>
            User
            <FontAwesomeIcon icon={faUser} size={"lg"} />
          </NavLink>
        </nav>
        <div className="nav_icons">
          <NavLink to={"/favorite"} className="add_favorite">
            <FontAwesomeIcon icon={faHeart} size={"lg"} />
            <span>{favoriteElements.length ? favoriteElements.length : null}</span>
          </NavLink>
          <NavLink to={"/shop"} className="add_cart">
            <FontAwesomeIcon icon={faLock} size={"lg"} />
            <span>{cartelemnts.length ? cartelemnts.length : null}</span>
          </NavLink>
          <div className="nav_user">
            <FontAwesomeIcon icon={faUser} size={"lg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
