import React, { useState } from 'react';
import '../Styles/shop.css';
import banner from '../assets/banner.jpg';
import products from '../produts';
import '../Styles/productDetails.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(5);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setPrice(price + 5);
  };
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setPrice(price - 5);
    }
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
  };
  return (
    <div className='product-details'>
      <div className='banner'>
        <img src={banner} alt='img' />
        <div>
          <h1 className='overlay-text'>Watch Shop</h1>
        </div>
      </div>

      <div className='product-detail-img'>
        <Slider {...settings}>
          {products.map((p, id) => (
            <div className='img' key={id}>
              <img src={p.img} alt='' />
            </div>
          ))}
        </Slider>
      </div>

      {/* text container  */}
      <div className='detail-text'>
        <h2>Foam filling cotton slow</h2>
        <h2>rebound pillows</h2>
        <p>
          Seamlessly empower fully researched growth strategies and
          interoperable internal or “organic” sources. Credibly innovate
          granular internal or “organic” sources whereas high standards in
          web-readiness. Credibly innovate granular internal or organic sources
          whereas high standards in web-readiness. Energistically scale
          future-proof core competencies vis-a-vis impactful experiences.
          Dramatically synthesize integrated schemas. with optimal networks.
        </p>
        <div className='quantity-container'>
          <p>Quantity</p>
          <div className='quantity-box'>
            <button className='quantity-btn' onClick={decreaseQuantity}>
              -
            </button>
            <span className='quantity'>{quantity}</span>
            <button className='quantity-btn' onClick={increaseQuantity}>
              +
            </button>
          </div>
          <p>${price}</p>
        </div>
        <button className='add-btn'>ADD TO CART</button>
      </div>

      {/* promotion */}
      <div className='promotion-container'>
        <div className='text'>
          <h2>Get promotions & updates!</h2>
          <p>
            Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources credibly innovate
            granular internal .
          </p>
        </div>
        <div className='input-container'>
          <input type='email' name='' id='' placeholder='Enter your mail' />
          <button className='subscribe-btn'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
