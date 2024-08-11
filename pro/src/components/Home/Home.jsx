import React from 'react'
import "./Home.css"
import Header from '../Header/Header'
import Services from "../Services/Services"
import Category from "../Category/Category"
import Products from '../Products/Products'
import Slider2 from '../Slider2/Slider2'
function Home({addToCart ,addToHeart}) {
  return (
    <div className='Home'>
      <Header/>
      <Services/>
      <Category/>
      <Products addToCart={addToCart} addToHeart={addToHeart}/>
      <Slider2/>
    </div>
  )
}

export default Home
