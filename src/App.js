import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import ProductsNavbar from './components/ProductsNavbar';
import ContactUs from './components/ContactUs';
import Shop from './components/Shop';
import OurTeam from './components/OurTeam';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  }, []);

  return (
    <>
      {loader ? (
        <div className='loader'>
          <div className='bar bar1'></div>
          <div className='bar bar2'></div>
          <div className='bar bar3'></div>
          <div className='bar bar4'></div>
          <div className='bar bar5'></div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/error' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/about' element={<About />} />
            <Route path='/nvproducts' element={<ProductsNavbar />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/ourteam' element={<OurTeam />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

