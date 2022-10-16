import React from 'react'
import "./home.css"
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"
import About from "./About"
import Contact from "./Contact"

const Home = () => {
  return (
    <header className='home'>
      <div className="home-text">
        <div className="home-data">
          <h4>We are always here <span>to serve you</span></h4>
          <p>Food is any substance consumed to provide nutritional support for an organism. Food is usually of plant, animal, or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals.</p>

            <NavLink  className ="main-btn" to = "/product">Order Now</NavLink>
        </div>

        <motion.div animate ={{scale: 0.9}} className="home-text">
          <img src="./images/food-banner.png" alt="" className='home-banner' />
        </motion.div>
      </div>
    <About />
    <Contact />
    </header>
  )
}

export default Home