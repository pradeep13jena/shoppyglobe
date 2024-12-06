import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/styles/pdetails.css'
import Review from './Review'

export default function PDetail() {
  const {product} = useParams()
  const [itemD, setItem] = useState(null)
  const [imageIndex, setImage] = useState(0)
  useEffect(() => {
    async function hello(){
      let a =  await fetch(`https://dummyjson.com/products/${product}`)
      let b = await a.json()
      setItem(b)
    }
    hello()
  }, [])

  // console.log(itemD.images.length)

  function prev(){
    imageIndex == 0 ? setImage(2) : setImage(imageIndex-1)
  }

  function next(){
    imageIndex == 2 ? setImage(0) : setImage(imageIndex+1)
  }

  function calculateOriginalPrice(discountedPrice, discountPercentage) {
    return discountedPrice / (1 - discountPercentage / 100);
  }

  return (
    itemD ? (<div className='bdetails_section'>
      <button className='backButton' onClick={() => history.back()}>&larr; Back</button>
      <div className="bdetails_info">
        <div className="bdetails_img">
          <img src={itemD.images[imageIndex] ? itemD.images[imageIndex] : setImage(0)} alt={itemD.title + 'images'} />
          <div className="bdetails_buttons">
            <p className='heart_bdetails'><i className="fa-solid fa-cart-shopping"></i></p>
          </div>
            <button onClick={prev} className={itemD.images.length <= 1 ? 'angle-left-hidden' : 'angle-left'}><i className="fa-solid fa-angle-left"></i></button>
            <button onClick={next} className={itemD.images.length <= 1 ? 'angle-right-hidden' : 'angle-right'}><i className="fa-solid fa-angle-right"></i></button>
        </div>
        <div className="bdetails_written">
            <div className="bdetails_impo">
              <h1 className='bdetails_title'>{itemD.title}</h1>
              <h3 className='bdetails_author'>{itemD.brand}</h3>
              <div className="PDetails_ShowPrice">
                <p className='bdetails_pages'>${itemD.price}</p>
                <span className='actualPrice'>${calculateOriginalPrice(itemD.price, itemD.discountPercentage).toFixed(2)}</span>
                <p className='discountPercent'>{itemD.discountPercentage}% off</p>
              </div>
            </div>
            <p className='bdetails_rating'><b>Rating:&nbsp;&nbsp;&nbsp;</b>{itemD.rating} <span><i className="fa-solid fa-star"></i></span></p>
            <p className='bdetails_rating'><b>Category:&nbsp;&nbsp;&nbsp;</b>{itemD.category}</p>
            <p className='bdetails_format'><b>Dimension:&nbsp;&nbsp;&nbsp;</b>{itemD.dimensions.depth}m x {itemD.dimensions.height}m x {itemD.dimensions.width}m</p>
            <p className='bdetails_summary'><b>Summary:&nbsp;&nbsp;&nbsp;</b>{itemD.description} </p>

        </div>
      </div>
      <div className="extra_Info">
        <div className="delivery_container">
          <h2 className='extraInfoTitle'>Delivery Information</h2>
          <p className='bdetails_format'><b>Availability:&nbsp;&nbsp;&nbsp;</b>{itemD.availabilityStatus}</p>
          <p className='bdetails_format'><b>Warranty:&nbsp;&nbsp;&nbsp;</b>{itemD.warrantyInformation}</p>
          <p className='bdetails_Language'><b>Minimum order:&nbsp;&nbsp;&nbsp;</b>{itemD.minimumOrderQuantity} Quantity</p>
          <p className='bdetails_summary'><b>Return:&nbsp;&nbsp;&nbsp;</b>{itemD.returnPolicy} </p>
          <p className='bdetails_summary'><b>Shipping:&nbsp;&nbsp;&nbsp;</b>{itemD.shippingInformation} </p>
        </div>
        <div className="review_container">
          <h2 className='extraInfoTitle'>Reviews</h2>
          {itemD ? (itemD.reviews.map((revi, index) => <Review key={index} reviewerName={revi.reviewerName} reviewerEmail={revi.reviewerEmail} comment={revi.comment}/>)) : 'No Reviews...'}
        </div>
      </div>
    </div>) : 'Loading...'
  )
}
