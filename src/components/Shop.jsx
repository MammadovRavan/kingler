import React, { useState, useEffect } from 'react';
import './Shop.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Collection from './Collection';
import MaplenecekElementler from '../ShopCard.json';
import ShopCard from './ShopCard';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = sessionStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem !== item));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar />
      <div className="shop-section">
        <div className="shop-left ">
          {MaplenecekElementler.map((birmelumat) => (
            <ShopCard
              image={birmelumat.ikon}
              information={birmelumat.title}
              qiymet={birmelumat.cost}
              addToCart={addToCart}
              key={birmelumat.id}
            />
          ))}
        </div>
        <div className='shop-right cart-section'>
        <div className="shop-right">
          <h1>Your Cart <span>//</span></h1>
          {cartItems.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className='cart-info'>
                  <h1>{item.information}</h1>
                  </div>
                  <div className='cart-cost'>
                  <h2>{item.qiymet}</h2>
                  </div>
                  <button onClick={() => removeFromCart(item)} className="remove-btn">Remove from list</button>
                </li>
              ))}
            </ul>
          )}
          <button onClick={clearCart}>Clear cart</button>
        </div>
        </div>
        
        
      </div>
      <Collection/>
      <Footer />
    </>
  );
};

export default Shop;





