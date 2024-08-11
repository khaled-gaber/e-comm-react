import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Img from "../../assets/imgs/dd.png"
function Footer() {
  return (
    <div className='Footer '>
      <div className='row container p-2'>
        <div className="col-lg-3 col-md-6 col-sm-12 get">
          <b>Get In Touch</b>
              <p>No dolore ipsum accusam no lorem. <br /> Invidunt sed clita kasd clita et et 
               <br /> dolor sed dolor.  Rebum tempor <br /> no vero est magna amet no</p>
              </div>
            <div className='col-lg-3 col-md-6 col-sm-12 get'>
              <b>QUICK SHOP</b>
              <p>Home</p>
              <p>about</p>
              <p>shop</p>
              <p>cart</p>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 get'>
              <b>shop media</b>
              <div className='icons'>
                <FaFacebook />
                <FaTwitter/>
                <FaInstagram/>
                <FaGithub/>
                <FaLinkedin/>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 get' >
              <b>NEWSLETTER</b>
              <p>Duo stet tempor ipsum sit amet <br /> magna ipsum tempor est</p>
              <div className='hello'>
                <input className='inp' type="email" placeholder ='enter your email' />
                <button className='btn  btn-outline-success p-2 '>button</button>
              </div>
            </div>
          <hr className='text-light' />
          
             <p>@ copywrite By khaledgaber494@gmail.com , All Right Reserved</p>
             
          
        </div>
     

    </div>
  )
}

export default Footer
