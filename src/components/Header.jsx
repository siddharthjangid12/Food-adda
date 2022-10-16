import React from 'react'
import "./header.css"
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='header'>
      <h3>Food <span>Adda</span></h3>

      <Navbar />
    </header>
  )
}

export default Header