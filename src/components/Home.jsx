import React from 'react'
import Business from './Business';
import Button from './Button';
import Categories from './Categories';
import Collection from './Collection';
import Countup from './CountUp';
import Footer from './Footer';
import GunsAmmo from './GunsAmmo';
import Navbar from './Navbar';
import PopularNews from './PopularNews';
import Products from './Products';

const Home = () => {
  return (
    <>
    <Navbar/>
<Button/>
<Categories/>
<Products/>
<Countup/>
<GunsAmmo/>
<PopularNews/>
<Business/>
<Collection/>
<Footer/>
    </>
  )
}

export default Home