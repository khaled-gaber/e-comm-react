import React from 'react'
import "./Services.css"
import { MdDone } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

function Services() {
  return (
    <div className='Services container'>
      <div className='row g-3' >
        <div className="col-lg-3 col-md-6 col-sm-12 ">
          <div className='P-4 ser_card'>
          <MdDone className='ser_icon' />
            Quality Product
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='P-4 ser_card'>
          <FaTruck className='ser_icon'/>
           Free Shipping
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='P-4 ser_card'>
          <MdDone className='ser_icon' />
           14-Day Return
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='P-4 ser_card'>
          <FaTruck className='ser_icon'/>
           24/7 Support
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Services
