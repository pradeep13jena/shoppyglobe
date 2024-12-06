import React from 'react'
import '../assets/styles/reviewer.css'

export default function ReviewShimmer(Props) {
  return (
    <div className='review_section'>
      <div className="reviewer_allDetails">
        <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='user_logo'><i className="fa-regular fa-circle-user"></i></p>
        <div className="userDetails_section">
          <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className="reviewer_name">{Props.reviewerName}</p>
          <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className="reviewer_email">{Props.reviewerEmail}</p>
        </div>
      </div>
      <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className="reviewer_comment">{Props.comment}</p>
    </div>
  )
}
