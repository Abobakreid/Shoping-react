import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAdd, faHeart as heart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { addElement } from "../../../Redux/CartSlice/CartSlice";
import {
  addFavElement,
  deletedFavElement,
} from "../../../Redux/FavoriteSlice/FavoriteSlice";
import img1 from "./../../../assets/0.jpg";
import img2 from "./../../../assets/02.jpg";
import img3 from "./../../../assets/3.jpg";
import img4 from "./../../../assets/4.jpg";
import img5 from "./../../../assets/5.jpg";
import img6 from "./../../../assets/6.png";
import img7 from "./../../../assets/7.jpg";
import img8 from "./../../../assets/8.jpg";
import img9 from "./../../../assets/9.jpg";

const PCard = () => {
  const cardData = [
    {
      id: "1",
      img: img1,
      title: "Helmar Chair",
      category: "Chair",
      price: 90,
      fav: "",
    },
    {
      id: "2",
      img: img2,
      title: "Helmar Chair",
      category: "Chair",
      price: 90,
      fav: "",
    },
    {
      id: "3",
      img: img3,
      title: "Helmar Chair",
      category: "Chair",
      price: 90,
      fav: "",
    },
    {
      id: "4",
      img: img4,
      title: "Iphone",
      category: "phone",
      price: 90,
      fav: "",
    },
    {
      id: "5",
      img: img5,
      title: "Iphone",
      category: "phone",
      price: 90,
      fav: "",
    },
    {
      id: "6",
      img: img6,
      title: "Iphone",
      category: "phone",
      price: 90,
      fav: "",
    },
    {
      id: "7",
      img: img7,
      title: "Sofa",
      category: "Sofa",
      price: 90,
      fav: "",
    },
    {
      id: "8",
      img: img8,
      title: "Sofa",
      category: "Sofa",
      price: 90,
      fav: "",
    },
    {
      id: "9",
      img: img9,
      title: "Sofa",
      category: "Sofa",
      price: 90,
      fav: "",
    },
  ];
  const dispatch = useDispatch();
  const handelClick = (ele) => {
    dispatch(addElement(ele));
  };

  return (
    <>
      {cardData.map((item, index) => {
        return (
          <div className="p_card" key={item.id}>
            <div className="card_img">
              <img src={item.img} alt="" />
            </div>
            <div className="card_detail">
              <h3>{item.title}</h3>
              <div className="category content">
                {item.category}
                <div className="heart">
                  <span className="one active">
                    <FontAwesomeIcon
                      onClick={(e) => {
                        dispatch(deletedFavElement(item));
                        e.target.closest("span").style.display = "none";
                        e.target.closest(
                          "span"
                        ).nextElementSibling.style.display = "block";
                      }}
                      icon={heart}
                    />
                  </span>
                  <span className="two">
                    <FontAwesomeIcon
                      className="test"
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(addFavElement(item));
                        e.target.closest("span").style.display = "none";
                        e.target.closest(
                          "span"
                        ).previousElementSibling.style.display = "block";
                      }}
                      icon={faHeart}
                    />
                  </span>
                </div>
              </div>
              <div className="price">
                <span>{item.price}$</span>
                <span
                  className="add"
                  onClick={() => {
                    handelClick(item);
                  }}
                >
                  <FontAwesomeIcon icon={faAdd} />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PCard;
