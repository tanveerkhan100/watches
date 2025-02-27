import React from 'react';
import '../Styles/PopularItems.css';
import popular1 from '../assets/popular3.png.webp';
import popular2 from '../assets/popular4.png.webp';
import popular3 from '../assets/popular5.png.webp';
import popular4 from '../assets/popular6.png.webp';
import popular5 from '../assets/popular7.png.webp';
import popular6 from '../assets/popular8.png.webp';

const PopularItems = () => {
  return (
    <div className='popular'>
      <div className='popular-text'>
        <h2>Popular Items</h2>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>
      <div className='popular-container'>
        <div className='popular-box'>
          <div className='image-box'>
            <img src={popular2} alt="" />
            <button className="cart-btn">
                Add to cart
            </button>
          </div>
          <div className='text-box'>
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
          </div>
        </div>
        <div className='popular-box'>
          <div className='image-box'>
            <img src={popular3} alt="" />
            <button className="cart-btn">
                Add to cart
            </button>
          </div>
          <div className='text-box'>
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
          </div>
        </div>
        <div className='popular-box'>
          <div className='image-box'>
            <img src={popular4} alt="" />
            <button className="cart-btn">
                Add to cart
            </button>
          </div>
          <div className='text-box'>
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
          </div>
        </div>
        <div className='popular-box'>
          <div className='image-box'>
            <img src={popular5} alt="" />
            <button className="cart-btn">
                Add to cart
            </button>
          </div>
          <div className='text-box'>
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
          </div>
        </div>
        <div className='popular-box'>
          <div className='image-box'>
            <img src={popular6} alt="" />
            <button className="cart-btn">
                Add to cart
            </button>
          </div>
          <div className='text-box'>
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
          </div>
        </div>
        <div className='popular-box'>
          <div className='image-box'>
            <img src={popular1} alt="" />
            <button className="cart-btn">
                Add to cart
            </button>
          </div>
          <div className='text-box'>
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
          </div>
        </div>
      </div>
      <button className="more-btn">
        VIEW MORE PRODUCTS
      </button>
    </div>
  );
};

export default PopularItems;
