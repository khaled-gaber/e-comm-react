import React from 'react'
import "./Cart.css"


function Cart({cart ,deleteProductFromCart ,increaseAmount,decreaceAmount}) {
 let tottal=0
  return (
    <div className='Cart container my-5 '>
      <div className="row g-3">
        {cart.length>0?
        <>
        {cart.map((value,index)=>{
          return( <div className="col-lg-12 "key={index}>
           <span style={{display:"none"}}>{tottal+=( parseInt(value.price) * parseInt(value.amount))}</span> 
            <div className='one'>
              <b className='h4'>{value.title.slice(0,10)}</b>
              <img src={value.img||value.thumbnail||value.image} alt="" />
              <div>
              <p>price:{value.price}</p>
              <p>${ parseInt(value.price) * parseInt(value.amount)}</p>
            </div>
            <div>
              <button onClick={()=>{increaseAmount(value)}}>+</button>
              <span>{value.amount}</span>
              <button onClick={()=>{decreaceAmount(value)}}>-</button>
            </div>
            <button onClick={()=>{deleteProductFromCart(index)}} className='btn btn-danger'>Remove from Cart</button>
            </div>
            
          </div>)
        })}
       
        <div className="col-lg-8 mx-auto sticky-bottom">
          <div className='total '>
            <b>total cart : </b>
            <b>${tottal.toFixed(2)}</b>
          </div>
        </div>
        </>
        :
        <div className='h3 text-center text-danger'>there is no items</div>
        }
      </div>
    </div>
  )
}

export default Cart
