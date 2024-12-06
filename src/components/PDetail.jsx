import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/styles/pdetails.css'
import Review from './Review'
import useFetch from '../utils/useFetch'

export default function PDetail() {
  const {product} = useParams()
  const [imageIndex, setImage] = useState(0)
  const [obj, setOBJ] = useState(null)

  const { data, error, loading } = useFetch(`https://dummyjson.com/products/${product}`);

  useEffect(() => {
    if(data){
      setOBJ(data)
      console.log(obj)
    }
  }, [data])

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
    <div className='bdetails_section'>
      {obj && obj.title ? (<><button className='backButton' onClick={() => history.back()}>&larr; Back</button>
      <div className="bdetails_info">
        <div className="bdetails_img">
          <img src={obj.images[imageIndex] ? obj.images[imageIndex] : setImage(3)} alt={obj.title + 'images'} />
          <div className="bdetails_buttons">
            <p className='heart_bdetails'><i className="fa-solid fa-cart-shopping"></i></p>
          </div>
            <button onClick={prev} className={obj.images.length <= 1 ? 'angle-left-hidden' : 'angle-left'}><i className="fa-solid fa-angle-left"></i></button>
            <button onClick={next} className={obj.images.length <= 1 ? 'angle-right-hidden' : 'angle-right'}><i className="fa-solid fa-angle-right"></i></button>
        </div>
        <div className="bdetails_written">
            <div className="bdetails_impo">
              <h1 className='bdetails_title'>{obj.title}</h1>
              <h3 className='bdetails_author'>{obj.brand}</h3>
              <div className="PDetails_ShowPrice">
                <p className='bdetails_pages'>${obj.price}</p>
                <span className='actualPrice'>${calculateOriginalPrice(obj.price, obj.discountPercentage).toFixed(2)}</span>
                <p className='discountPercent'>{obj.discountPercentage}% off</p>
              </div>
            </div>
            <p className='bdetails_rating'><b>Rating:&nbsp;&nbsp;&nbsp;</b>{obj.rating} <span><i className="fa-solid fa-star"></i></span></p>
            <p className='bdetails_rating'><b>Category:&nbsp;&nbsp;&nbsp;</b>{obj.category}</p>
            <p className='bdetails_format'><b>Dimension:&nbsp;&nbsp;&nbsp;</b>{obj.dimensions.depth}m x {obj.dimensions.height}m x {obj.dimensions.width}m</p>
            <p className='bdetails_summary'><b>Summary:&nbsp;&nbsp;&nbsp;</b>{obj.description} </p>

        </div>
      </div>
      <div className="extra_Info">
        <div className="delivery_container">
          <h2 className='extraInfoTitle'>Delivery Information</h2>
          <p className='bdetails_format'><b>Availability:&nbsp;&nbsp;&nbsp;</b>{obj.availabilityStatus}</p>
          <p className='bdetails_format'><b>Warranty:&nbsp;&nbsp;&nbsp;</b>{obj.warrantyInformation}</p>
          <p className='bdetails_Language'><b>Minimum order:&nbsp;&nbsp;&nbsp;</b>{obj.minimumOrderQuantity} Quantity</p>
          <p className='bdetails_summary'><b>Return:&nbsp;&nbsp;&nbsp;</b>{obj.returnPolicy} </p>
          <p className='bdetails_summary'><b>Shipping:&nbsp;&nbsp;&nbsp;</b>{obj.shippingInformation} </p>
        </div>
        <div className="review_container">
          <h2 className='extraInfoTitle'>Reviews</h2>
          {obj ? (obj.reviews.map((revi, index) => <Review key={index} reviewerName={revi.reviewerName} reviewerEmail={revi.reviewerEmail} comment={revi.comment}/>)) : 'No Reviews...'}
        </div>
      </div></>) : 'Loading Product Details...'}
    </div>)
}
