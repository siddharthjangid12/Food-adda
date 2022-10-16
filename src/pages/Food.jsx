import React from 'react'
import "./food.css"
import {NavLink} from "react-router-dom"
import {motion} from "framer-motion"

const Food = () => {
  return (
   <header className="food">
  <h2>our foods</h2>
    <div className="food-list">
      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/indian.jpg" alt="" className='food-image'/>
        <h4>indian food</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>195 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/indian-2.jpg" alt="" className='food-image'/>
        <h4>indian food-02</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>115 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/pasta.jpg" alt="" className='food-image'/>
        <h4>pasta</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>135 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/pizza.jpg" alt="" className='food-image'/>
        <h4>pizza</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>225 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/burger.jpg" alt="" className='food-image'/>
        <h4>burger</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>267 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/khaman-dhokla.jpg" alt="" className='food-image'/>
        <h4>khaman-dhokla</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>567 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/mix-vegetable.jpg" alt="" className='food-image'/>
        <h4>mix-vegetable</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>95 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/south-indian.jpg" alt="" className='food-image'/>
        <h4>south-indian</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>432 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/tomato-soup.jpg" alt="" className='food-image'/>
        <h4>tomato soup</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>145 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/samosa.jpg" alt="" className='food-image'/>
        <h4>samosa</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>512 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/sandwich.jpg" alt="" className='food-image'/>
        <h4>sandwich</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>657 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/icecream.jpg" alt="" className='food-image'/>
        <h4>icecream</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>725 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/dessert.jpg" alt="" className='food-image'/>
        <h4>dessert</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>768 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/dessert-2.jpg" alt="" className='food-image'/>
        <h4>dessert-02</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>897 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/dessert-3.jpg" alt="" className='food-image'/>
        <h4>dessert-03</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>987 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/coffee.jpg" alt="" className='food-image'/>
        <h4>coffee</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>456 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>

      <motion.div animate ={{scale: 0.9}} className="food-name">
        <img src="./images/milkshake.jpg" alt="" className='food-image'/>
        <h4>milkshake</h4>
        <span>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </span>
        <p>876 Reviews</p>
        <NavLink className= 'food-btn' to ="/order">Order Now</NavLink>
      </motion.div>
    </div>
   </header>
  )
}

export default Food
  