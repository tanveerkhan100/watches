import React from 'react';
import '../Styles/NewArrival.css';
import arrival1 from '../assets/new_product1.png';
import arrival2 from '../assets/new_product2.png.webp';
import arrival3 from '../assets/new_product3.png.webp';


const NewArrival = () => {
  return (
    <div className='new-arrival-container'>
      <div className='new-arrival'>
        <div className='text'>
          <h2>New Arrival</h2>
        </div>
        <div className='image-container'>
          <div className='image-box'>
            <div className='img-container'>
              <img src={arrival1} alt='' />
            </div>
            <h4>Thermo Ball Etip Gloves</h4>
            <p>$ 45,743</p>
          </div>
          <div className='image-box'>
            <div className='img-container'>
              <img src={arrival2} alt='' />
            </div>
            <h4>Thermo Ball Etip Gloves</h4>
            <p>$ 45,743</p>
          </div>
          <div className='image-box'>
            <div className='img-container'>
              <img src={arrival3} alt='' />
            </div>
            <h4>Thermo Ball Etip Gloves</h4>
            <p>$ 45,743</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default NewArrival;
