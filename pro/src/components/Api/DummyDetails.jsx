import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";

import"./Api.css"
function DummyDetails() {
    let {id} =useParams()
    let details_url=`https://dummyjson.com/products/${id}`
    let [DummyApi,setDummyApi ]=useState({})
    async function getDetailsApi () {
        let {data}=await axios.get(details_url)
        setDummyApi(data)
    }
    useEffect(()=>{getDetailsApi()},[])
  return (
    <div className='details container my-5 h-100'>
      <div className="row">
        <div className="col-lg-5 col-sm-12">
            <div className='details_img'>
                <img src={DummyApi.thumbnail} alt="" />
            </div>
        </div>
        <div className="col-lg-7 col-sm-12">
            <div className='description'>
                 <b className='text-center '>{DummyApi.category}</b>
            <strong> Product Name : <span>{DummyApi.title}</span></strong>
            <p> {DummyApi.description}</p>
            <b>Price : ${DummyApi.price}.00 </b>
            <button className='btn btnn w-25'> <FaCartPlus /> Add To Card</button>
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default DummyDetails
