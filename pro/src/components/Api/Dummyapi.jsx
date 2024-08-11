import React from 'react'
import "./Api.css"

import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


function DummyApi({dummyApi,addToCart }) {
  return (
    <div className='Api container my-5'>
      <h1 className='head text-center'>dummy Products </h1>
      <p className='parg text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed sint dicta provident <br />  corporis 
        hic esse porro accusantium ullam.  Consectetur id mollitia ipsa <br /> tenetur  sequi exercitationem facere rem itaque error! Velit!</p>
      <div className="row g-3">
        {dummyApi.map((val,index)=>{
          return(
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
            <div className='one'>
             <Link to={`products/${val.id}`}  className='card_img'>
               <img src={val.thumbnail} alt="" />
             </Link>
             <b>{val.title.slice(0,15)}</b>
             <div className='proccess d-flex justify-content-between flex-row'>
                   <div className='icon'><FaHeart /></div>
                   <div className='icon'onClick={()=>{addToCart(val)}} ><FaShoppingCart /></div>
            
                 </div>
            </div>
            </div>
          )
        })}
      
      </div>
    </div>
  )
}

export default DummyApi
