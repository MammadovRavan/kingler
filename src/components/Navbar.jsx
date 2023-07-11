import React, { useRef } from 'react'
import './Navbar.css'
import { FaShippingFast } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { MdSearch } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { RxCrossCircled } from 'react-icons/rx'
import { MdLogin } from 'react-icons/md'
import { MdPerson } from 'react-icons/md'
import { MdLocationPin } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { TbClockHour5 } from 'react-icons/tb'
import { FaFacebookF } from 'react-icons/fa'
import { TfiGoogle } from 'react-icons/tfi'
import { TfiLinkedin } from 'react-icons/tfi'
import { TfiTwitterAlt } from 'react-icons/tfi'

import { Link } from 'react-router-dom'
const Navbar = () => {
  const overlayDivininRefi = useRef()
  const blackScreenRefi = useRef()
  const menyunuAc = e => {
    if (e.target.classList.contains('menyunuAc')) {
      overlayDivininRefi.current.classList.add('aktiv-overlay')
      blackScreenRefi.current.classList.add('aktiv-blackScreen')
    }
  }
  const menyunuBagla = e => {
    overlayDivininRefi.current.classList.remove('aktiv-overlay')
    blackScreenRefi.current.classList.remove('aktiv-blackScreen')
  }



  return (
    <>
      <div className="overlay" ref={overlayDivininRefi}>
        {/* <button><RxCrossCircled /></button> */}
        <div className="navlinks">
          <div className="home">
            <Link to='/'>HOME</Link>
          </div>
          <div className="pages">
            <a href=''>PAGES</a>
          </div>
          <div className="products">
            <Link to='/nvproducts'>PRODUCTS</Link>
          </div>
          <div className="promotion">
            <a href>PROMOTION</a>
          </div>
          <div className="blog">
            <a href=''>BLOG</a>
          </div>
          <div className="contact">
            <Link to='/contact'>CONTACT US</Link>
          </div>

        </div>

        <div className="overlaySearch">
          <input type="text" className='search-btn' placeholder="Search" />
          <MdSearch className='searchButon' />
        </div>

        <div className="login">
          <a href="">LOGIN</a>
          <MdLogin className='overlayImg' />
        </div>

        <div className="register">
          <a href="">REGISTER</a>
          <MdPerson className='overlayImg' />
        </div>

        <div className="information">
          <div className="location">
            <MdLocationPin className='overlayImg' />
            <h4>Chicago,IL 60606 123,New Lenox</h4>
          </div>
          <div className="telephone">
            <BsFillTelephoneFill className='overlayImg' />
            <h4>23-456-789 admin@mail.com</h4>
          </div>
          <div className="hours">
            <TbClockHour5 className='overlayImg' />
            <h4>Open hours: Mon-Sat 8.00-18.00</h4>
          </div>
        </div>

        <div className="media">
          <div className="facebook">
            <FaFacebookF className='mediaImg' />
          </div>
          <div className="google">
            <TfiGoogle className='mediaImg' />
          </div>
          <div className="tvitter">
            <TfiTwitterAlt className='mediaImg' />
          </div>
          <div className="linkedin">
            <TfiLinkedin className='mediaImg' />
          </div>
        </div>

      </div>
      <div className="blackScreen" ref={blackScreenRefi} onClick={menyunuBagla}>

      </div>

      <div className="navbar-full">
        <div className="navbar-top">
          <button className=" navbar-toggler menyunuAc" onClick={menyunuAc}>
            <FaBars className='barsIcon' />
          </button >
          <div className="left-side">
            <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1687584196/kingler-logo_glwhpo.png" alt="" />
          </div>
          <div className="overblack-img">
          <HiOutlineShoppingCart className='image' />
          <div className="overblack-image">
            <Link to='/shop' href="">shop</Link>
          </div>
          </div>
          <div className="right-side">
            <div className="shipping">
              <div className="img text-white">
                <FaShippingFast className='image-tip' />
              </div>
              <div className="text">
                <h5>Free Shipping!</h5>
                <h6>On order over $500.00</h6>
              </div>
            </div>

            <div className="tel">
              <div className="img text-white">
                <BsTelephone className='image-tip' />
              </div>
              <div className="text">
                <h5>23-456-789</h5>
                <h6>admin@mail.com</h6>
              </div>
            </div>

            <div className="cart">

              <div className="img text-white">
                <HiOutlineShoppingCart className='image-tip' />
              </div>
              <div className="text">
                <h5>Your cart</h5>
                <h6>2 items-$941.00</h6>
                <div className="overblack">
                  <Link to='/shop' href="">mm</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-bottom">
          <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">HOME</a>
                  </li> */}
                  <div class="dropdown">
                    <button class="dropdown-button">HOME</button>
                    <div class="dropdown-content">
                      <Link to="/">HOME 1</Link>
                      <a href="#">HOME 2</a>
                      <a href="#">HOME 3</a>
                      <a href="#">HOME 4</a>
                    </div>
                  </div>

                  {/* <li class="nav-item">
                    <a class="nav-link" href="#">PAGES</a>
                  </li> */}
                   <div class="dropdown">
                    <button class="dropdown-button pages">PAGES</button>
                    <div class="dropdown-content">
                      <a href="#">TYPOGRAPHY</a>
                      <a href="#">SHORTCODES</a>
                      <a href="#">ABOUT US</a>
                      <Link to="/ourteam">OUR TEAM</Link>
                      <a href="#">TEAM MEMBER</a>
                      <Link to="/error">404 PAGE</Link>
                      <a href="#">GALLERY</a>
                    </div>
                  </div>

                  
                  <li class="nav-item">
                    <Link class="nav-link" to="/nvproducts">PRODUCTS</Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">PROMOTION</a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="#">BLOG</a>
                  </li> */}
                  <div class="dropdown">
                    <button class="dropdown-button blog">BLOG</button>
                    <div class="dropdown-content">
                      <a href="#">POST FORMATS</a>
                      <a href="#">CLASSIC</a>
                      <a href="#">MASONRY</a>
                      <a href="#">PORTFOLIO</a>
                    </div>
                  </div>


                  <li class="nav-item">
                    <Link class="nav-link" to="/contact">CONTACT US</Link>
                  </li>


                </ul>

                <div className="search-button">
                  <button id="searchButton"><MdSearch className='searchButton' /></button>
                  <input type="text" id="searchInput" placeholder="Search" />




                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar