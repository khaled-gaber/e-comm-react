import React from 'react'
import "./Slider2.css"
import img_1 from "../../assets/imgs/img1.jpeg"
import img_2 from "../../assets/imgs/img2.jpeg"
import img_3 from "../../assets/imgs/img3.jpeg"
import img_4 from "../../assets/imgs/img4.jpg"
import img_5 from "../../assets/imgs/img5.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Slider2() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
 
  var settings = {
    infinite: true,
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
  return (
    <div className='Slider2 container my-5'>
      <Slider {...settings} className='sliding p-4'>
        <div><img src={img_1} alt="" /> </div>
        <div><img src={img_2} alt="" /></div>
         <div> <img src={img_3} alt="" /></div>
         <div> <img src={img_4} alt="" /></div>
         <div> <img src={img_5} alt="" /></div>
         
      </Slider>
    </div>
  )
}

export default Slider2
