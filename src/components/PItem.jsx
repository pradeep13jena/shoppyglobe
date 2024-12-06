import React from 'react'
import '../assets/styles/pitem.css'
import { Link } from 'react-router-dom'

export default function PItem(Props) {
  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    return discountedPrice / (1 - discountPercentage / 100);
}
  return (
    <div className="bcard">
      <div className="book_img">
        <img src={Props.src} alt={Props.title + 'image'} />
        <div className="books_buttons">
          <p className='squareArrow'><Link className='squareArr' to={`/products/${Props.id}`}><i className="fa-solid fa-arrow-up-right-from-square"></i></Link></p>
          <p className='heart'><i className="fa-solid fa-cart-shopping"></i></p>
        </div>
      </div>
      <div className="book_details">
        <h1 className='book_title'>{Props.title}</h1>
        <p className='book_author'>{Props.brand}</p>
        <div className="shoePrice">
          <p className='book_price'>${Props.price}</p>
          <span className='OGPrice'>${calculateOriginalPrice(Props.price,Props.discountPercentage).toFixed(2)}</span>
        </div>
        <p className='book_discount'><b></b>{Props.discountPercentage}% off</p>
        {/* <p className='book_rating'><b>Rating: </b>{Props.rating}</p> */}
      </div>
    </div>
  )
}
