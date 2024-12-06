import React from 'react'
import ReviewShimmer from './ReviewShimmer'


export default function PDetailsShimmer() {
  return (
    <div className='bdetails_section'>
      <><button className='backButton' >&larr; Back</button>
      <div className="bdetails_info">
        <div className="bdetails_img">
          <img src="https://dummyimage.com/500x500/EBEBEB/EBEBEB" alt="{obj.title + 'images'}" />
          <div className="bdetails_buttons">
          </div>
        </div>
        <div className="bdetails_written">
            <div className="bdetails_impo">
              <h1 style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}}className='bdetails_title'>Red Nail Polish</h1>
              <h3 style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_author'>Nail Couture</h3>
              <div className="PDetails_ShowPrice">
                <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_pages'>$8.99</p>
                <span style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='actualPrice'>$9.22</span>
                <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='discountPercent'>2.46% off</p>
              </div>
            </div>
            <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_rating'><b>Rating:&nbsp;&nbsp;&nbsp;</b> 3.91<span></span></p>
            <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_rating'><b>Category:&nbsp;&nbsp;&nbsp;</b>Beauty</p>
            <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_format'><b>Dimension:&nbsp;&nbsp;&nbsp;</b>29.06m x 10.89m x 8.11m</p>
            <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_summary'><b>Summary:&nbsp;&nbsp;&nbsp;</b>The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.</p>
        </div>
      </div>
      <div className="extra_Info">
        <div className="delivery_container">
          <h2 style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='extraInfoTitle'>Delivery Information</h2>
          <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_format'><b>Availability:&nbsp;&nbsp;&nbsp;</b>In Stock</p>
          <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_format'><b>Warranty:&nbsp;&nbsp;&nbsp;</b>1 year warranty</p>
          <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_Language'><b>Minimum order:&nbsp;&nbsp;&nbsp;</b>46 Quantity</p>
          <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_summary'><b>Return:&nbsp;&nbsp;&nbsp;</b>No return policy</p>
          <p style={{backgroundColor: '#EBEBEB', color: '#EBEBEB'}} className='bdetails_summary'><b>Shipping:&nbsp;&nbsp;&nbsp;</b>Ships in 1 week</p>
        </div>
        <div className="review_container">
          <h2 className='extraInfoTitle'>Reviews</h2>
          <ReviewShimmer key={1} reviewerName={'Leo Rivera'} reviewerEmail={'leo.rivera@x.dummyjson.com'} comment={'Very pleased!'}/>
          <ReviewShimmer key={2} reviewerName={'Leo Rivera'} reviewerEmail={'leo.rivera@x.dummyjson.com'} comment={'Very pleased!'}/>
          <ReviewShimmer key={3} reviewerName={'Leo Rivera'} reviewerEmail={'leo.rivera@x.dummyjson.com'} comment={'Very pleased!'}/>
        </div>
      </div></>
    </div>
  )
}
