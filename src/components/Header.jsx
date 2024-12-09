// Site's logo and all the navigational link.
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import { useSelector } from "react-redux";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [item, setItem] = useState(0);
  const cartArray = useSelector((state) => state.cart.cart);

  // This function calculates the total item in the cart so that you can know directly, How many items are there.
  function countItem(array) {
    return array.reduce((total, current) => {
      return total + (current.quantity || 0);
    }, 0);
  }

  useEffect(() => {
    setItem(countItem(cartArray));
  }, [cartArray]);

  return (
    <header id="header" className="header">
      <div className="logoDiv">
        <Link to={"/"} className="companName">
          Shoppyglobe
        </Link>
      </div>
      <div className={`navLink ${isMenuOpen ? "open" : ""}`}>
        <Link to={"/"} className="home">
          Home
        </Link>
        <Link to={"/Products"} className="browse">
          Products
        </Link>
        <Link to={"/cart"} className="wishlist">
          <span
            className={
              // To make sure as soon as the numbers of item gets in two digit it display them beautifully!
              item > 9 ? "wishlist_cartItem-double" : "wishlist_cartItem-single"
            }
          >
            {item}
          </span>
          Cart
        </Link>
      </div>
      <div className="burgerIcon">
        {/* To display the navigation bar in Mobile phone. */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-icon"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
