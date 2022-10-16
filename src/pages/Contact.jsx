import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <header className="contact">
      <img src="./images/banner-2.jpg" alt="" className='contact-banner' />
      
      <div className="contact-list">
        <div className="contact--">
          <img src="./images/banner-3.jpg" alt="" className='contact-image' />
        </div>

        <div className="contact-data-">
          <h4>feel free to contact us</h4>
          <p>35,C-Block,Sarojini Nagar,Delhi,U.P.</p>
          <p>Telephone No.-09876-54321</p>
          
          <span>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
          </span>
        </div>
      </div>


    </header>
  )
}

export default Contact