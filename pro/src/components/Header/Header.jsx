import React from 'react'
import "./Header.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Header() {
  var settings = {
    infinite: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,

  };
  return (
    <div className='Header container my-5'>
     <div className='row g-5'>
      <div className="col-lg-8 col-md-12">
        <Slider {...settings} className='sliding'>
          <div className='men'>
            <div>
              <b>men fasion</b>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ratione, 
                aperiam voluptate deserunt asperiores, beatae laboriosam doloribus expedita quos ex 
                sit esse harum, doloremque animi perferendis rerum magni neque et? Lorem, ipsum dolor sit amet consectetur</p>
                <button className='btnn'>shop now</button>
            </div>
          </div>
          <div className='women'>
            <div>
              <b>women fasion</b>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ratione, 
                aperiam voluptate deserunt asperiores, beatae laboriosam doloribus expedita quos ex 
                sit esse harum, doloremque animi perferendis rerum magni neque et?Lorem, ipsum dolor sit amet consectetur</p>
                <button className='btnn'>shop now</button>
            </div>
          </div>
          <div className='kids'>
            <div>
              <b>kids fasion</b>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ratione, 
                aperiam voluptate deserunt asperiores, beatae laboriosam doloribus expedita quos ex 
                sit esse harum, doloremque animi perferendis rerum magni neque et?Lorem, ipsum dolor sit amet consectetur</p>
                <button className='btnn'>shop now</button>
            </div>
          </div>
        </Slider>
      </div>
      <div className="col-lg-4 col-md-12">
        <div className='details'>
          <div className='card_1'>
            <span>save 20%</span>
            <p>Special Offer</p>
            <button className='btnn'>shop now</button>
          </div>
          <div className='card_2'>
            <span>save 20%</span>
            <p>Special Offer</p>
            <button className='btnn'>shop now</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Header
