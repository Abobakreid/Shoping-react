import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { addElement } from "../../../Redux/CartSlice/CartSlice";
import img1 from "./../../../assets/0.jpg";
import img2 from "./../../../assets/02.jpg";
import img3 from "./../../../assets/3.jpg";
import img4 from "./../../../assets/4.jpg";
import img5 from "./../../../assets/5.jpg";
import img6 from "./../../../assets/6.png";
import img7 from "./../../../assets/7.jpg";
import img8 from "./../../../assets/8.jpg";
import img9 from "./../../../assets/9.jpg";
const Cards = ({ category, search }) => {
  const cardData = [
    {
      id: "1",
      img: img1,
      title: "Helmar Chair",
      category: "Sofa Chair",
      price: "90",
    },
    {
      id: "2",
      img: img2,
      title: "Helmar Chair",
      category: "Chair",
      price: "90",
    },
    {
      id: "3",
      img: img3,
      title: "Helmar Chair",
      category: "Chair",
      price: "90",
    },
    {
      id: "4",
      img: img4,
      title: "Iphone",
      category: "Phona",
      price: "90",
    },
    {
      id: "5",
      img: img5,
      title: "Iphone",
      category: "Phone",
      price: "90",
    },
    {
      id: "6",
      img: img6,
      title: "Iphone",
      category: "Phone",
      price: "90",
    },
    {
      id: "7",
      img: img7,
      title: "Sofa",
      category: "Sofa",
      price: "90",
    },
    {
      id: "8",
      img: img8,
      title: "Sofa",
      category: "Sofa",
      price: "90",
    },
    {
      id: "9",
      img: img9,
      title: "Sofa",
      category: "Sofa",
      price: "90",
    },
  ];
  const dispatch = useDispatch();
  const handelClick = (ele) => {
    dispatch(addElement(ele));
  };
  console.log(search);
  return (
    <div className="s_cards">
      <div className="container">
        <div className="s_row">
          {!category && !search
            ? cardData.map((item, index) => {
                return (
                  <div className="s_card" key={item.id}>
                    <div className="card_img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="card_detail">
                      <h3>{item.title}</h3>
                      <span className="category">{item.category}</span>
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
              })
            : search
            ? cardData.map((item, index) => {
                if (item.category.toUpperCase().match(search.toUpperCase())) {
                  return (
                    <div className="s_card" key={item.id}>
                      <div className="card_img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="card_detail">
                        <h3>{item.title}</h3>
                        <span className="category">{item.category}</span>
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
                } else {
                  return null;
                }
              })
            : cardData.map((item, index) => {
                if (item.category === category) {
                  return (
                    <div className="s_card" key={item.id}>
                      <div className="card_img">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="card_detail">
                        <h3>{item.title}</h3>
                        <span className="category">{item.category}</span>
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
                } else {
                  return null;
                }
              })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
