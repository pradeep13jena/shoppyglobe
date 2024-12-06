import React, { useEffect } from 'react'
import '../assets/styles/cartitem.css'

export default function CartItem(Props) {
  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    return discountedPrice / (1 - discountPercentage / 100);
  }
  return (
    <div className="cart_Item_section">
      <div className='cart_item_info'>
        <div className="cart_Item_Image">
          <img src={Props.thumbnail} alt="" />
        </div>
        <div className="cart_Item_writtenDetails">
          <div>
          <h1 className='cartItem-title'>{Props.title}</h1>
          <h3 className='cartItem-brand'>{Props.brand}</h3>
          </div>
          <div className="cartItem_showPrice">
            <p className='cartItem_Price'>${Props.price}</p>
            <p className='cartItem_OGPrice'>${calculateOriginalPrice(Props.price, Props.discountPercentage).toFixed(2)}</p>
            <p className='cartItem_bookDiscount'>{Props.discountPercentage}% off</p>
          </div>
        </div>
      </div>
      <div className='cart_item_button'>
        <div className="cartItem_buttonSection">
          <p><i className="fa-solid fa-plus"></i></p>
          <p>2</p>
          <p><i className="fa-solid fa-minus"></i></p>
        </div>
      </div>
    </div>
  )
}
