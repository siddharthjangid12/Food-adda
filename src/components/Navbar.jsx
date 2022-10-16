import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <header className='navbar'>
      <nav className="navbar-list">
        <ul className="nav-list">
          <li>
            <NavLink className="navbar-icon" to ="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="navbar-icon" to ="/food">Food</NavLink>
          </li>
          <li>
            <NavLink className="navbar-icon" to ="/order">Order</NavLink>
          </li>
          <li>
            <NavLink className="navbar-icon" to ="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="navbar-icon" to ="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default Navbar