import React from 'react'
import "./Products.css"
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import product_API from './product';
function Products({addToCart}) {
  return (
    <div className='Products container '>
       <p className='h1 my-5 text-center fs-2' > PRODUCTS</p>
      <div className='row g-3'>
        {product_API.map((val ,index)=>{
          return(
            <div className="col-lg-3 col-md-6 col-sm-12 "key={index}>
            <div className='pro_card'>
              <div className='card_img'>
                 <img src={val.img} alt="" />
              </div>
              <div className='card_body'>
               <b className='fs-5'>{val.title}</b>
               <p > {val.price||hea.price} <del> {val.sale}</del></p>
              </div>
              <div className='icons'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <div className='proccess'>
                <div className='icon'><FaHeart /></div>
                <div className='icon'onClick={()=>{addToCart(val)}}><FaShoppingCart /></div>
         
              </div>
            </div>
         </div> 
          )
        }) }
       
      </div>
      
    </div>
  )
}

export default Products
