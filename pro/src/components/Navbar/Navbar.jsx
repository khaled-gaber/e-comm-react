import React from 'react'
import "./Navbar.css"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
function Navbar({cart}) {
  return (
    <div className='Navbar sticky-top'>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">bravo <span>shop</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to= "About" className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link to="shop" className="nav-link" href="#">shop</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            products
          </a>
          <ul className="dropdown-menu">
            <li><Link to="fakeapi" className="dropdown-item" href="#">Fake API</Link></li>
            <li><Link to="dummyapi" className="dropdown-item" href="#">Dummy API</Link></li>
           
          </ul>
        </li>
        <li className="nav-item">
          <Link to="contact" className="nav-link" href="#">Contact</Link>
        </li>
      </ul>
      <div className='d-flex align-items-center justify-contenet-center gap-3'>
        <Link to="heart"  className='icon text-decoration-none'>
          <FaHeart />
          <sub>(0)</sub>
        </Link>
        <Link to="cart" className='icon text-decoration-none'>
          <FaShoppingCart />
          <sub>({cart.length})</sub>
        </Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
