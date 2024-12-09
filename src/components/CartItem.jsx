// This component is responsible to render all the cart items.

import React, { useEffect } from "react";
import "../assets/styles/cartitem.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addtoCart } from "../utils/feature";
import { Link } from "react-router-dom";

export default function CartItem(Props) {
  const dispatch = useDispatch();

  // As the APIdata do not provide the real amount of the product which was 
  // necessary for my UI, i had to makes this function to calculate this.
  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    return discountedPrice / (1 - discountPercentage / 100); //returns the actual amount.
  }

  // Function for increasing quantity of cart item.
  function handleIncrement() {
    dispatch(increment(Props.id));
  }

  // Function for Decreasing quantity of cart item.
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
          {/* On clicking it triggers the handle increment function*/}
          <p onClick={() => handleIncrement()}>
            <i className="fa-solid fa-plus"></i>
          </p>
          <p>{Props.quantity}</p>
          {/* On clicking it triggers the handle decrement function*/}
          <p onClick={() => handleDecrement()}>
            {Props.quantity < 2 ? (
              // This is the code which switch the logo from trash can to minus sign as soon as the quantity of the item gets to 1
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
