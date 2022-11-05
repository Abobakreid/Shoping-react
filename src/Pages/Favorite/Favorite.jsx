import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedFavElement } from "../../Redux/FavoriteSlice/FavoriteSlice";

const Favorite = () => {
  const { favoriteElements } = useSelector((state) => state.FavoriteSlice);
  const dispatch = useDispatch();

  const handelClick = (ele) => {
    dispatch(deletedFavElement(ele));
  };
  return (
    <>
      <div className="favorite">
        <div className="container">
          <div className="head content">
            <div className="detail">Details</div>
            <div>Price</div>
          </div>
          {favoriteElements.length ? (
            favoriteElements.map((item, index) => {
              return (
                <div className="f_card content" key={index}>
                  <div className="c_img">
                    <img src={item.img} alt="" />
                  </div>
                  <div
                    className="fav"
                    onClick={() => {
                      handelClick(item);
                    }}
                  >
                    {item.fav ? (
                      <FontAwesomeIcon icon={heart} />
                    ) : (
                      <FontAwesomeIcon icon={faHeart} />
                    )}
                  </div>
                  <div className="price">{item.price}</div>
                </div>
              );
            })
          ) : (
            <div>Opps....Not found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorite;
