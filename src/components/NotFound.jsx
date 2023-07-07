import React from 'react'
import './NotFound.css'
import Footer from './Footer';
import Navbar from './Navbar';
import Button from './Button'
const NotFound = () => {
  return (
    <>
    <Navbar/>

    <div className="error-section">
<div className="error-top">
<h1>URL NOT FOUND</h1>
</div>
<div className="error-bottom">
  <div className="error-position">
  <h1>404</h1>
  <div className="oops-error">
  <span>OOPS!</span>
  </div>
  </div>
<h2>WE ARE SORRY! <span>ERROR 404!</span><br/>  THIS PAGE COULD NOT BE FOUND.</h2>
<h3>CAN'T FIND WHAT YOU NEED? TAKE A MOMENT AND DO<br/>
A SEARCH BELOW OR START FROM <span>HOMEPAGE.</span></h3>
<div className="search-error">
  <input type="text" placeholder= 'To search type and hit enter'/>
  {/* <button>SEARCH</button> */}
  <Button klasAdi='error-button' butonunIcindekiDeyer='SEARCH'/>
</div>
</div>
    </div>

    <Footer/>
    </>
  )
}

export default NotFound