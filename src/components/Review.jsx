import React from "react";
import "../assets/styles/reviewer.css";

export default function Review(Props) {
  return (
    <div className="review_section">
      <div className="reviewer_allDetails">
        <p className="user_logo">
          <i className="fa-regular fa-circle-user"></i>
        </p>
        <div className="userDetails_section">
          <p className="reviewer_name">{Props.reviewerName}</p>
          <p className="reviewer_email">{Props.reviewerEmail}</p>
        </div>
      </div>
      <p className="reviewer_comment">{Props.comment}</p>
    </div>
  );
}
