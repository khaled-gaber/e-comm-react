import React from 'react'
import "./Category.css"
import img_1 from "../../assets/imgs/cat-1.jpg"
import img_2 from "../../assets/imgs/cat-2.jpg"
import img_3 from "../../assets/imgs/cat-3.jpg"
import img_4 from "../../assets/imgs/cat-4.jpg"
function Category() {
  return (
    <div className='Category container'>
      <p className='title my-5 '>CATEGORIES</p>
      <div className='row my-5 g-2'>
        <div className="col-lg-3 col-md-6 col-sm-12 ">
          <div className='cat_card p-1'>
            <img src={img_1} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_3} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_2} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_4} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_3} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_2} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_4} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_1} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_4} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_2} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_3} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className='cat_card p-1'>
            <img src={img_4} alt="" />
            <div className='text-center' >
              <b>Category Name</b>
              <p>100 Products</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Category
