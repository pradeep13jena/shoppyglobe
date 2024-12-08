import React, { useEffect } from "react";
import "../assets/styles/cartitem.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addtoCart } from "../utils/feature";
import { Link } from "react-router-dom";

export default function CartItem(Props) {
  const dispatch = useDispatch();

  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    return discountedPrice / (1 - discountPercentage / 100);
  }

  function handleIncrement() {
    dispatch(increment(Props.id));
  }

  function handleDecrement() {
    dispatch(decrement(Props.id));
  }

  return (
    <div className="cart_Item_section">
      <div className="cart_item_info">
        <div className="cart_Item_Image">
          <img src={Props.thumbnail} alt="" />
        </div>
        <div className="cart_Item_writtenDetails">
          <div>
            <Link to={`/item/${Props.id}`} className="cartItem-title">
              {Props.title}
            </Link>
            <h3 className="cartItem-brand">{Props.brand}</h3>
          </div>
          <div className="cartItem_showPrice">
            <p className="cartItem_Price">${Props.price.toFixed(1)}</p>
            <p className="cartItem_OGPrice">
              $
              {calculateOriginalPrice(
                Props.price,
                Props.discountPercentage
              ).toFixed(1)}
            </p>
            <p className="cartItem_bookDiscount">
              {Props.discountPercentage}% off
            </p>
          </div>
        </div>
      </div>
      <div className="cart_item_button">
        <div className="cartItem_buttonSection">
          <p onClick={() => handleIncrement()}>
            <i className="fa-solid fa-plus"></i>
          </p>
          <p>{Props.quantity}</p>
          <p onClick={() => handleDecrement()}>
            {Props.quantity < 2 ? (
              <i className="fa-solid fa-trash"></i>
            ) : (
              <i className="fa-solid fa-minus"></i>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
