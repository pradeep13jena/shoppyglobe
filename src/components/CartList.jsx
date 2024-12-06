import React,{useState, useEffect} from 'react'
import CartItem from './CartItem'
import '../assets/styles/cartlist.css'

export default function CartList() {
  const [array, setArray] = useState(null)
  useEffect(() => {
    async function hello(){
      let a =  await fetch(`https://dummyjson.com/products/87`)
      let b = await a.json()
      let k = b
      setArray(k)
    }
    hello()
  }, [])

  return (
    <div className="cartSection">
      {array ? (<><div className="cart_list">
        <h1 className='cart_Name'>Cart</h1>
        <CartItem thumbnail={array.images[0]} title={array.title} brand={array.brand} price={array.price} discountPercentage={array.discountPercentage}/>
        <CartItem thumbnail={array.images[0]} title={array.title} brand={array.brand} price={array.price} discountPercentage={array.discountPercentage}/>
      </div>      
      <div className='cartPartDisplaypart2'>
        <div className="cart_priceDisplay">
          <h1 className='Price_details_Header'>Price Details</h1>
          <div className='PDH_first'>
            <div className="priceDetailsinBox">
              <p className='pdiMRP'>MRP</p>
              <p className='pdiMRP'>$32</p>
            </div>
            <div className="priceDetailsinBox">
              <p className='pdiMRP'>Discount</p>
              <p className='pdiMRP'>$332</p>
            </div>
            <div className="priceDetailsinBox">
              <p className='pdiMRP'>Delivery Fee</p>
              <p className='pdiMRP'>92</p>
            </div>
          </div>
          <div>
            <div className="priceDetailsinBox">
              <p className='totalAmt'>Total Amount</p>
              <p className='totalAmt'>$32</p>
            </div>
          </div>
        </div>
        <div className='button_DIV_Checkout'>
          <button>Place Order</button>
        </div>
      </div></>) : 'Loading...'}
    </div>
  )
}
