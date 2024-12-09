// This page get display if there's no item in the cart array.

import React from 'react'
import '../assets/styles/errorpage.css'

export default function NoProducts() {
  return (
    <div className='NoProductsDIV'>
      <img src="https://ik.imagekit.io/kf28wicizj/category_images/noProduct.png?updatedAt=1733718193022" alt="" />
      <h1>Sorry, No such Product...</h1>
    </div>
  )
}
