import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteElement } from "../../Redux/CartSlice/CartSlice";

const Cart = () => {
  const { cartelemnts, totalQuntaty, totalAmount } = useSelector(
    (state) => state.CartSlice
  );
  const dispatch = useDispatch();
  const handelClick = (ele) => {
    dispatch(deleteElement(ele));
  };
  return (
    <>
      <div className="carts">
        <div className="container">
          <div className="head content">
            <div className="detail">Details</div>
            <div>Price</div>
          </div>
          {cartelemnts.length ? (
            cartelemnts.map((item, index) => {
              return (
                <div className="card content" key={index}>
                  <div className="c_img">
                    <img src={item.img} alt="" />
                  </div>
                  <div
                    className="del"
                    onClick={() => {
                      handelClick(item);
                    }}
                  >
                    {<FontAwesomeIcon icon={faTrash} />}
                  </div>
                  <div className="price">{item.price}$</div>
                </div>
              );
            })
          ) : (
            <div>Opps....Not found</div>
          )}
          {cartelemnts.length ? (
            <div className="total">
              <span> Total : {totalQuntaty}$</span>
              <span> Amount : {totalAmount}</span>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Cart;
