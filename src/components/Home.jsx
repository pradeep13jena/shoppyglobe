// This home page is what creates the home page together with the app component.

import React from "react";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homeSection">
      {/* Creates a simple animation for the home page */}
      <div className="home_animate">
        <section className="rotatingText">
          <div className="rotatingText-content">
            <p className="rotatingText-description">
              Buy anything from wide range of...&hellip;
            </p>
            <div className="rotatingText-adjective">Shoes!</div>
            <div className="rotatingText-adjective">Cloths!</div>
            <div className="rotatingText-adjective">Groceries!</div>
            <div className="rotatingText-adjective">Furnitures!</div>
            <div className="rotatingText-adjective">Accessories!</div>
            <div className="rotatingText-adjective">Electronics!</div>
            <div className="rotatingText-adjective">Just Choose!</div>
          </div>
        </section>
      </div>
      {/* This part allows user to choose from multiple categories for shopping. */}
      <div className="homeSectionCategories">
        <div className="categoryDiv">
          <Link to={"./categories/mens-shirts"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/mens-shirt.png?updatedAt=1733242178122"
              alt=""
            />
            <div className="headerContainer">
              <h1>Men's Shirt</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/fragrances"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/fragnance.jpeg?updatedAt=1733316882070"
              alt=""
            />
            <div className="headerContainer">
              <h1>fragrances</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./Categories/furniture"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/furniture.jpeg?updatedAt=1733316662272"
              alt=""
            />
            <div className="headerContainer">
              <h1>Furniture</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/home-decoration"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/home-deco.jpeg?updatedAt=1733318073723"
              alt=""
            />
            <div className="headerContainer">
              <h1>Home Decoration</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./Categories/sports-accessories"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/sport-acce.jpeg?updatedAt=1733317857241"
              alt=""
            />
            <div className="headerContainer">
              <h1>Sport's Accessories</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/motorcycle"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/motorcycle.jpeg?updatedAt=1733316769856"
              alt=""
            />
            <div className="headerContainer">
              <h1>Bikes</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/vehicle"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/vehicles.jpeg?updatedAt=1733316555251"
              alt=""
            />
            <div className="headerContainer">
              <h1>Vehicles</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/womens-shoes"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/women-shoes.jpeg?updatedAt=1733317402894"
              alt=""
            />
            <div className="headerContainer">
              <h1>Women's shoes</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./Categories/skin-care"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/skincare.png?updatedAt=1733242178206"
              alt=""
            />
            <div className="headerContainer">
              <h1>Skincare</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/mens-watches"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/mens-watch.jpeg?updatedAt=1733316977089"
              alt=""
            />
            <div className="headerContainer">
              <h1>Men's Watch</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./Categories/sunglasses"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/sunglasses.webp?updatedAt=1733242180844"
              alt=""
            />
            <div className="headerContainer">
              <h1>Sunglasses</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/womens-bags"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/women-bag.jpeg?updatedAt=1733317228878"
              alt=""
            />
            <div className="headerContainer">
              <h1>Women's bags</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/womens-watches"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/women-watch.jpeg?updatedAt=1733317444063"
              alt=""
            />
            <div className="headerContainer">
              <h1>Women's watches</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/mens-shoes"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/mens-shoe.png?updatedAt=1733242178110"
              alt=""
            />
            <div className="headerContainer">
              <h1>Men's Shoes</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/womens-jewellery"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/women-jewel.jpeg?updatedAt=1733317357295"
              alt=""
            />
            <div className="headerContainer">
              <h1>Women's jewellery</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./categories/kitchen-accessories"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/accesories.png?updatedAt=1733242178203"
              alt=""
            />
            <div className="headerContainer">
              <h1>Kitchen Appliance</h1>
            </div>
          </Link>
        </div>
        <div className="categoryDiv">
          <Link to={"./Categories/smartphones"}>
            <img
              src="https://ik.imagekit.io/kf28wicizj/category_images/smartphones.webp?updatedAt=1733242178221"
              alt=""
            />
            <div className="headerContainer">
              <h1>Smart Phones</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
