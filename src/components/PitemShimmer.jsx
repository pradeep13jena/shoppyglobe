// Shimmer effect for the items getting displayed in the list.
// In case it takes longer than expected time to display the details.
import React from "react";

export default function () {
  return (
    <div className="bcard">
      <div className="book_img">
        <img src="https://dummyimage.com/180x180/EBEBEB/EBEBEB" />
      </div>
      <div className="book_details">
        <h1
          style={{ backgroundColor: "#EBEBEB", color: "#EBEBEB" }}
          className="book_title"
        >
          Lorem Ipsum Dolor Ipsum
        </h1>
        <p
          style={{ backgroundColor: "#EBEBEB", color: "#EBEBEB" }}
          className="book_author"
        >
          Lorem Ipsum
        </p>
        <div className="shoePrice">
          <p
            style={{ backgroundColor: "#EBEBEB", color: "#EBEBEB" }}
            className="book_price"
          >
            $9.99
          </p>
          <span
            style={{ backgroundColor: "#EBEBEB", color: "#EBEBEB" }}
            className="OGPrice"
          >
            $10.76
          </span>
        </div>
        <p
          style={{ backgroundColor: "#EBEBEB", color: "#EBEBEB" }}
          className="book_discount"
        >
          7.17% off
        </p>
        {/* <p className='book_rating'><b>Rating: </b>{Props.rating}</p> */}
      </div>
    </div>
  );
}
