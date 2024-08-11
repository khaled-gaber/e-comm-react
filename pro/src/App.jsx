import React, { useEffect, useState } from 'react'
import "./App.css"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import {BrowserRouter,Routes,Route,Outlet, json}from "react-router-dom"
import About from"./components/About/About"
import Shop from './components/Shop/Shop'
import Fakeapi from "./components/Api/Fakeapi"
import Dummyapi from "./components/Api/Dummyapi"
import axios from"axios"
import FakeDetails from './components/Api/FakeDetails'
import DummyDetails from './components/Api/DummyDetails'
import Contact from"./components/Contact/Contact"
import Cart from "./components/Cart/Cart"
import Swal from"sweetalert2"

function App() {
  
  let fakeurl="https://fakestoreapi.com/products"

  let dummyurl="https://dummyjson.com/products"

  const [fakeApi,setFakeApi]=useState([])

  const [dummyApi,setDummyApi]=useState([])
  
  async function getFakeProduct() {
    let {data} = await axios.get(fakeurl)
     setFakeApi(data)
  }

  async function getDummyApi() {
    let {data}=await axios.get(dummyurl)
    setDummyApi(data.products)
  }
  
  useEffect(()=>{getFakeProduct()},[])
  useEffect(()=>{getDummyApi()},[])



  //---------start cart--------
  
  
  let[cart,setCart]=useState([])
  useEffect(()=>{let chackedCart=localStorage.getItem("cart")
  if(chackedCart){setCart(JSON.parse(localStorage.getItem("cart")))}
  else{setCart([])}},[])
  

  function addToCart(pro){
    let productSelect =cart.find((product)=>product.title==pro.title)
    if(productSelect){
      Swal.fire({
        title: `this product <span class="text-success">(${pro.title})</span> already added!`,
        text: "You clicked the button!",
        icon: "info",
        
      });
    }else{
      Swal.fire({
        title: `your product <span class="text-success">(${pro.title})</span> added sucssfuly`,
        text: "You clicked the button!",
        icon: "success",
        showConfirmButton:false,
        timer:1000,
        
      });
      setCart([...cart , {...pro,amount:1}])
    }
   
  }

  function deleteProductFromCart(index){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton:false,
          timer:1000,
        });
        cart.splice(index,1)
        setCart([...cart])
      }
    });
   
  }
  function increaseAmount(pro){
  ++pro.amount
  setCart([...cart])
  }
  function decreaceAmount(pro){
    if(pro.amount>1){
      --pro.amount
      setCart([...cart])
    }
    else{deleteProductFromCart()}
    
  }

  useEffect(()=>{localStorage.setItem("cart", JSON.stringify(cart))},[cart])
  return (
    <div>
      <BrowserRouter>
      <Navbar cart={cart}/>

      <Routes>



        <Route path='' element={<Home addToCart={addToCart} addToHeart={addToCart}/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='Fakeapi' element={<Outlet/>}>
        <Route path='' element={<Fakeapi fakeApi={fakeApi} getFakeProduct={getFakeProduct} addToCart={addToCart}/>}/>
        <Route path='products/:id' element={<FakeDetails/>}/>
        </Route>
        <Route path='dummyapi' element={<Outlet/>}>
        <Route path=''  element={<Dummyapi dummyApi={dummyApi} addToCart={addToCart}/>}/>
        <Route path='products/:id'  element={<DummyDetails/>}/>
        </Route>
        <Route path='contact' element={<Contact/>}/>
        <Route path='cart' element={<Cart cart={cart} deleteProductFromCart={deleteProductFromCart} increaseAmount={increaseAmount} decreaceAmount={decreaceAmount}/>}/>
  
      </Routes>
      
      <Footer/>
      
      </BrowserRouter>
     
      
     
    </div>
  )
}

export default App
