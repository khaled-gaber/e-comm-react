import React from 'react'
import "./About.css"
import Img from"../../assets/imgs/about.jpg"
function About() {
  return (
    <div className='About container my-5'>
      <h2>About <span>Us</span></h2>
      <div className='row '>
        <div className="col-lg-5 ">
          <div  > 
            <img  src={Img} alt="" className='w-100' />
          </div>
          
        </div>
        <div className="col-lg-7 det my-5">
            <b>Welcome To <span>Bravo Shop</span> </b>
            <p> <span>Bravo Shop</span> is Best online Shopping Company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita dolore omnis cumque
             ipsa vel nam non necessitatibus eius, molestiae officiis, rem et distinctio? Nisi voluptates amet in aliquam sapiente. </p>
             <button className='btn btn-primary w-25' > shop now</button>
          </div>
      </div>
    </div>
  )
}

export default About
