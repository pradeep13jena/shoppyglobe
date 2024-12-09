import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import "../assets/styles/cartlist.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addtoCart } from "../utils/feature";
import { Link } from "react-router-dom";

export default function CartList() {
  const [array, setArray] = useState(null);
  const DeliveryFee = 35;
  const [mrp, setMRP] = useState(0);
  const [tPrice, SetTPrice] = useState(0);
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => state.cart);

  useEffect(() => {
    setArray(cartArray.cart);

    // This function does the job of calculating of total MRP of the items in the cart array.
    // It is inside of useEFfect to make sure as soon as the cart gets changed. Render the new Price.
    function addMRP(hwhe) {
      return hwhe.reduce((total, item) => {
        return total + (item.quantity * item.price || 0);
      }, 0);
    }

    setMRP(addMRP(cartArray.cart).toFixed(1));
  }, [cartArray]);

  useEffect(() => {
    // This function does the job of calculating of total MRP of the items in the cart array + Delivery fee.
    // It is inside of useEFfect to make sure as soon as the cart gets changed. Render the new Price.
    SetTPrice(Number(mrp) + DeliveryFee);
  }, [mrp]);

  return (
    <div className="cartSection">
      {/* This makes sure that only when array has updates then to render the cart item. */}
      {/* Or else render the "No cart in the item" part. */}
      {array && array.length > 0 ? ( 
        <>
          <div className="cart_list">
            <h1 className="cart_Name">Cart</h1>
            {array.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                quantity={item.quantity}
                thumbnail={item.images[0]}
                title={item.title}
                brand={item.brand}
                price={item.price}
                discountPercentage={item.discountPercentage}
              />
            ))}
          </div>
          <div className="cartPartDisplaypart2">
            <div className="cart_priceDisplay">
              <h1 className="Price_details_Header">Price Details</h1>
              <div className="PDH_first">
                <div className="priceDetailsinBox">
                  <p className="pdiMRP">MRP</p>
                  <p className="pdiMRP">${mrp}</p>
                </div>
                <div className="priceDetailsinBox">
                  <p className="pdiMRP">Delivery Fee</p>
                  <p className="pdiMRP">${DeliveryFee}</p>
                </div>
              </div>
              <div>
                <div className="priceDetailsinBox">
                  <p className="totalAmt">Total Amount</p>
                  <p className="totalAmt">${tPrice}</p>
                </div>
              </div>
            </div>
            <div className="button_DIV_Checkout">
              <Link to={`/checkout`}>
                <button>Place Order</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="noItem">
          <img src="https://ik.imagekit.io/kf28wicizj/category_images/App%20Illustrations.jpeg?updatedAt=1733551357296" />
          <p>
            Your cart is cartastrophically empty, better start{" "}
            <Link to={"/products"}>shopping</Link>!
          </p>
        </div>
      )}
    </div>
  );
}
