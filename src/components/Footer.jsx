import React from 'react'
import "./footer.css"
import { NavLink } from 'react-router-dom'
import Lastfooter from './Lastfooter'

const Footer = () => {
  return (
<header className='footer'>
  <div className="footer--">
    <div className="footer-list">
       <ul className="footer-nav-list">
       <li>
            <NavLink className="footer-icon" to ="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="footer-icon" to ="/product">Product</NavLink>
          </li>
          <li>
            <NavLink className="footer-icon" to ="/order">Order</NavLink>
          </li>
          <li>
            <NavLink className="footer-icon" to ="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="footer-icon" to ="/service">Service</NavLink>
          </li>
       </ul>
    </div>

    <div className="footer-list">
       <ul className="footer-nav-list">
         <li>Privacy policy</li>
         <li>Terms and conditions</li>
         <li>Report a problem</li>
         <li>Ask a question</li>
         <li>About us</li>
       </ul>
    </div>

    <div className="footer-list">
      <form action="" className='footer--input'>
        <input type="email" name="" id="" placeholder='Enter Your E-Mail' className='input-footer' />

        <button className='footer-btn'>Subscribe</button>
      </form>
    </div>
  </div>

  <Lastfooter />
 
</header>
  )
}

export default Footer