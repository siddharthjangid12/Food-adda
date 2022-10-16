import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Food from './pages/Food'
import Home from './pages/Home'
import Order from './pages/Order'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from "./components/Footer"

const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path ="/" element={<Home />}/>
    <Route path ="/food" element={<Food />}/>
    <Route path ="/order" element={<Order />}/>
    <Route path ="/about" element={<About />}/>
    <Route path ="/contact" element={<Contact />}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App