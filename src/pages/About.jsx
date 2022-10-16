import React from 'react'
import "./about.css"
import {motion} from "framer-motion"

const About = () => {
  return (
    <header className="about">
      <h3><i class="fa-solid fa-utensils"></i>Food adda</h3>
      <p>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.</p>


      <h2>How we Best</h2>
      <div className="about-list">
        <motion.div animate ={{scale: 0.9}} className="about--">
          <img src="./images/work-1.jpg" alt="" className='about-work-image' />
          <h4>Order online</h4>
        </motion.div>

        <motion.div animate ={{scale: 0.9}} className="about--">
          <img src="./images/work-2.jpg" alt="" className='about-work-image' />
          <h4>free delivery</h4>
        </motion.div>

        <motion.div animate ={{scale: 0.9}} className="about--">
          <img src="./images/work-3.jpg" alt="" className='about-work-image' />
          <h4>cash on delivery</h4>
        </motion.div>

        <motion.div animate ={{scale: 0.9}} className="about--">
          <img src="./images/work-4.jpg" alt="" className='about-work-image' />
          <h4>enjoy your order</h4>
        </motion.div>
      </div>
    </header>
  )
}

export default About