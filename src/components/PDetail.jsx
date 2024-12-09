// Responsible to Display more information about a product.

import Review from "./Review";
import ErrorPage from "./ErrorPage";
import NoProducts from "./NoProducts";
import "../assets/styles/pdetails.css";
import useFetch from "../utils/useFetch";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PDetailsShimmer from "./PDetailsShimmer";
import React, { useState, useEffect } from "react";
import { increment, decrement, addtoCart } from "../utils/feature";

export default function PDetail() {
  // To pull out the the product detail from the url so that product can be displayed.
  const { product } = useParams();

  // This is for to make sure that the images can be slideshowed. Makes the user see more images of the product.
  const [imageIndex, setImage] = useState(0);

  // To store the details of the specific product in the component's memory.
  const [obj, setOBJ] = useState(null);

  const dispatch = useDispatch();

  // Custom hook to pull data from API.
  const { data, error, loading } = useFetch(
    `https://dummyjson.com/products/${product}`
  );

  // As soon as the data has been received, store in the component's memory.
  useEffect(() => {
    if (data) {
      setOBJ(data);
    }

  }, [data]);

  // If an error has been received in pulling the details of the specific products, which is not present
  // This will show the "NOPRODUCT" page.
  if (error) {
    return <NoProducts />;
  }

  // Function which is able to add items to the cart.
  function handleAddCart(obj) {
    dispatch(addtoCart(obj));
  }

  // To control the slideshow of the images if clicked left arrow.
  function prev() {
    imageIndex == 0 ? setImage(2) : setImage(imageIndex - 1);
  }

  // To control the slideshow of the images if clicked right arrow.  
  function next() {
    imageIndex == 2 ? setImage(0) : setImage(imageIndex + 1);
  }

  // To calculate the original price of an item as only discountedPrice & discountPercentage has been provided
  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    return discountedPrice / (1 - discountPercentage / 100);
  }

  return (
    <div className="bdetails_section">
      {obj && obj.title ? (
        <>
          <button className="backButton" onClick={() => history.back()}>
            &larr; Back
          </button>
          <div className="bdetails_info">
            <div className="bdetails_img">
              <img
                src={
                  obj.images[imageIndex] ? obj.images[imageIndex] : setImage(3)
                }
                alt={obj.title + "images"}
              />
              <div className="bdetails_buttons">
                <p
                  onClick={() => handleAddCart(obj)}
                  className="heart_bdetails"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </p>
              </div>
              <button
              // To make sure if the image array is empty, then to hide the arrow button to avoid the confusing.
                onClick={prev}
                className={
                  obj.images.length <= 1 ? "angle-left-hidden" : "angle-left"
                }
              >
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
                // To make sure if the image array is empty, then to hide the arrow button to avoid the confusing.
                onClick={next}
                className={
                  obj.images.length <= 1 ? "angle-right-hidden" : "angle-right"
                }
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
            <div className="bdetails_written">
              <div className="bdetails_impo">
                <h1 className="bdetails_title">{obj.title}</h1>
                <h3 className="bdetails_author">{obj.brand}</h3>
                <div className="PDetails_ShowPrice">
                  <p className="bdetails_pages">${obj.price}</p>
                  <span className="actualPrice">
                    $
                    {calculateOriginalPrice(
                      obj.price,
                      obj.discountPercentage
                    ).toFixed(2)}
                  </span>
                  <p className="discountPercent">
                    {obj.discountPercentage}% off
                  </p>
                </div>
              </div>
              <p className="bdetails_rating">
                <b>Rating:&nbsp;&nbsp;&nbsp;</b>
                {obj.rating}{" "}
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
              </p>
              <p className="bdetails_rating">
                <b>Category:&nbsp;&nbsp;&nbsp;</b>
                {obj.category}
              </p>
              <p className="bdetails_format">
                <b>Dimension:&nbsp;&nbsp;&nbsp;</b>
                {obj.dimensions.width}m x {obj.dimensions.height}m x{" "}
                {obj.dimensions.depth}m
              </p>
              <p className="bdetails_summary">
                <b>Summary:&nbsp;&nbsp;&nbsp;</b>
                {obj.description}{" "}
              </p>
            </div>
          </div>
          <div className="extra_Info">
            <div className="delivery_container">
              <h2 className="extraInfoTitle">Delivery Information</h2>
              <p className="bdetails_format">
                <b>Availability:&nbsp;&nbsp;&nbsp;</b>
                {obj.availabilityStatus}
              </p>
              <p className="bdetails_format">
                <b>Warranty:&nbsp;&nbsp;&nbsp;</b>
                {obj.warrantyInformation}
              </p>
              <p className="bdetails_Language">
                <b>Minimum order:&nbsp;&nbsp;&nbsp;</b>
                {obj.minimumOrderQuantity} Quantity
              </p>
              <p className="bdetails_summary">
                <b>Return:&nbsp;&nbsp;&nbsp;</b>
                {obj.returnPolicy}{" "}
              </p>
              <p className="bdetails_summary">
                <b>Shipping:&nbsp;&nbsp;&nbsp;</b>
                {obj.shippingInformation}{" "}
              </p>
            </div>
            {/* The review container which takes the review components and renders all the review  */}
            <div className="review_container">
              <h2 className="extraInfoTitle">Reviews</h2>
              {obj
                ? obj.reviews.map((revi, index) => (
                    <Review
                      key={index}
                      reviewerName={revi.reviewerName}
                      reviewerEmail={revi.reviewerEmail}
                      comment={revi.comment}
                    />
                  ))
                : "No Reviews..."}
            </div>
          </div>
        </>
      ) : (
        // Until the data get's display show the shimmer effect.
        <PDetailsShimmer />
      )}
    </div>
  );
}
