// Shop.js

import React, { useState } from 'react';
import './Shop.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Collection from './Collection';
import MapleNecekElementler from '../ShopCard.json';
import ShopCard from './ShopCard';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <Navbar />
      <div className="shop-section">
        <div className="shop-left">
          {MapleNecekElementler.map((birmelumat, index) => (
            <ShopCard
              key={index}
              image={birmelumat.ikon}
              information={birmelumat.title}
              qiymet={birmelumat.cost}
              addToCart={() => addToCart(birmelumat)}
            />
          ))}
        </div>
        <div className="shop-right">
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <h2>{item.title}</h2>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
          {cartItems.length > 0 && (
            <button onClick={() => setCartItems([])}>Clear Cart</button>
          )}
        </div>
      </div>
      {/* <Collection/>
      <Footer /> */}
    </>
  );
};

export default Shop;
