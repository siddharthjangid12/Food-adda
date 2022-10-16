import React from 'react'
import "./order.css"

const Order = () => {
  return (
  <header className='order'>
    <img src="./images/banner-4.jpg" alt="" className='order-image' />
    <div className="order-list">
      <h2>Your Order</h2>
      <div className="order--">
        <form action="" className='form-input'>
          <input type="text" name="" id="" placeholder='First name' className='input-order'/>
          <input type="text" name="" id=""  placeholder='Last name' className='input-order' />
          <input type="text" name="" id=""  placeholder='Order name' className='input-order' />
          <input type="number" name="" id=""  placeholder='Mobile no.' className='input-order' />
          <input type="email" name="" id=""  placeholder='E-mail' className='input-order' />
          <input type="text" name="" id=""  placeholder='Address' className='input-order' />
        </form>
      </div>
      <button>Submit Now</button>
    </div>
  </header>
  )
}

export default Order