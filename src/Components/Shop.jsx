import React, { useState } from 'react';
import banner from '../assets/banner.jpg';
import '../Styles/shop.css';
import ShopItems from '../pages/ShopItems';
import Advertisement from '../pages/Advertisement';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('Newest Arrivals');

  return (
    <div className='shop'>
      <div className='banner'>
        <img src={banner} alt='img' />
        <div>
          <h1 className='overlay-text'>Watch Shop</h1>
        </div>
      </div>
      <div className='category'>
        <div className='three-category'>
          <p
            className={activeCategory === 'Newest Arrivals' ? 'active' : ''}
            onClick={() => setActiveCategory('Newest Arrivals')}
          >
            NewestArrivals
          </p>
          <p
            className={activeCategory === 'Price High To Low' ? 'active' : ''}
            onClick={() => setActiveCategory('Price High To Low')}
          >
            Price High To Low
          </p>
          <p
            className={activeCategory === 'Most Popular' ? 'active' : ''}
            onClick={() => setActiveCategory('Most Popular')}
          >
            Most Popular
          </p>
        </div>
        <button className='category-btn'>40 per pages</button>
      </div>
      <ShopItems />
      <Advertisement />
    </div>
  );
};

export default Shop;
