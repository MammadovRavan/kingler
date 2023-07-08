import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import './ProductsNavbar.css'
import { ImCross } from 'react-icons/im'
import { BsFillSquareFill } from 'react-icons/bs'
import Button from './Button'
import MaplenecekElementler from '../ProductsNavbar.json'
import ProductsNavbarCard from './ProductsNavbarCard';
import { BiChevronDown } from 'react-icons/bi'
import Collection from './Collection';
import { Link } from 'react-router-dom';
const ProductsNavbar = () => {
  return (
    <>
      <Navbar />
      <div className="nvproducts-section">
        <div className="nvproducts-top">
          <h1>SHOP</h1>
          <h2>HOME /<span>SHOP</span></h2>
        </div>
        <div className="nvproducts-bottom">
          <div className="bottom-left">
            <div className="nv-card">
              <h1>CART <span>//</span></h1>
              <div className="nv-text">
                <p><ImCross className='nv-icon' />Glock double 9mm 3.4" 6+1 FS<br /> Integral</p>
                <h4>1 x $ 821.00</h4>
              </div>
              <div className="nv-text">
                <p><ImCross className='nv-icon' />Beretta JMN9S15CTC BU9<br />Nano 6+1.9mm 3.07"</p>
                <h4>1 x $ 120.00</h4>
              </div>
              <div className="nv-subtotal">
                <p>SUBTOTAL:  $941.00</p>
                <Button klasAdi="error-button" butonunIcindekiDeyer="VIEW CARD" />
                <Button butonunIcindekiDeyer="CHECKOUT" klasAdi="error-button" />
              </div>
            </div>
            <div className="nv-categories">
              <h1>CATEGORIES <span>//</span></h1>
              <p><BsFillSquareFill className='nv-square' />Ammunation</p>
              <div className="firearms">
                <p><BsFillSquareFill className='nv-square' />Firearms</p>
                <h4>Remington 1911 R1</h4>
                <h4>Revolvers</h4>
                <h4>Semi-Auto Handguns</h4>
              </div>
              <p><BsFillSquareFill className='nv-square' />Handguns</p>
              <p><BsFillSquareFill className='nv-square' />Knives</p>
              <p><BsFillSquareFill className='nv-square' />Recent Products</p>
              <p><BsFillSquareFill className='nv-square' />Rifles</p>
              <p><BsFillSquareFill className='nv-square' />Shotguns</p>
            </div>
            <div className="nv-filter">
              <h1>FILTER BY PRICE <span>//</span></h1>
              <div className="nv-border">
                <BsFillSquareFill className='filter-square' />
                <p></p>
                <BsFillSquareFill className='filter-square' />
              </div>
              <div className="filter-text">
                <Button butonunIcindekiDeyer="FILTER" klasAdi="error-button" />
                <p>price:<span>$120-$821</span></p>
              </div>
            </div>
            <div className="nv-tags">
              <h1>PRODUCT TAGS <span>//</span></h1>
              <div className="product-tags">
                <div className="nv-gear">
                  <a href="">BERETTA</a>
                  <a href="">GEAR</a>
                </div>
                <div className="nv-hunting">
                  <a href="">GUNS</a>
                  <a href="">HUNTİNG</a>
                </div>
                <div className="nv-rifle">
                  <a href="">MAGAZİNES</a>
                  <a href="">RİFLE</a>
                </div>
                <a href="">STEEL</a>
                <a href="">TACTİCAL</a>
              </div>
            </div>
          </div>
          <div className="bottom-right">
            <div className="df-sorting">
              <h1>Showing 1-12 of 16 results</h1>
              <div class="dropdown">
                <button class="dropdown-button">
                  <p>Default sorting</p>
                  <BiChevronDown />
                </button>
                <div class="dropdown-content">
                  <a href="#">Default sorting</a>
                  <a href="#">Sort by popularity</a>
                  <a href="#">Sort by average rating</a>
                  <a href="#">Sort by newness</a>
                  <a href="#">Sort by price:low to high</a>
                  <a href="#">Sort by price:high to low</a>
                </div>
              </div>
            </div>
            <div className="json-card ">

              {
                MaplenecekElementler.map(birmelumat => (
                  <ProductsNavbarCard
                    ikon={birmelumat.icn}
                    information={birmelumat.text}
                    cost={birmelumat.cost}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <Collection />
      <Footer />

    </>
  )
}

export default ProductsNavbar