import React from 'react'
import './Shop.css'
import Footer from './Footer';
import Navbar from './Navbar';
import Collection from './Collection';
import MaplenecekElementler from '../ShopCard.json'
import ShopCard from './ShopCard';
const Shop = () => {
  return (
    <>
          <Navbar />
    <div className="shop-section">
      <div className="shop-left">
{
MaplenecekElementler.map(birmelumat=>(
  <ShopCard 
  image={birmelumat.ikon}
  information={birmelumat.title}
  qiymet={birmelumat.cost}
  />
))
}
      </div>
      <div className="shop-right">

      </div>
    </div>
      {/* <Collection/>
      <Footer /> */}
    </>

  )
}

export default Shop