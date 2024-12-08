import React from "react";
import "../assets/styles/cartlist.css";
import { useSelector, useDispatch } from "react-redux";

export default function Checkout() {
  const cartArray = useSelector((state) => state.cart);
  function addMRP(hwhe) {
    return hwhe.reduce((total, item) => {
      return total + (item.quantity * item.price || 0);
    }, 0);
  }
  return (
    <div className="checkoutDIV">
      <i className="fa-solid fa-circle-check"></i>
      <p className="checkoutHeader">
        Order successfully placed of ${(addMRP(cartArray.cart) + 35).toFixed(1)}
      </p>
    </div>
  );
}
