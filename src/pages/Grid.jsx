import React from 'react';
import arrival4 from '../assets/product1.jpg';
import arrival5 from '../assets/product5.jpg';
import arrival6 from '../assets/product3.jpg';
import arrival7 from '../assets/product6.jpg';
import '../Styles/Grid.css';

const Grid = () => {
  return (
    <div className='grid'>
      <div className='grid-container'>
        <div className='first'>
          <img src={arrival4} alt='' />
        </div>
        <div className='second'>
          <img src={arrival5} alt='' />
        </div>
        <div className='third'>
          <div className='third-image'>
            <img src={arrival6} alt='' />
          </div>
          <div className='forth-image'>
            <img src={arrival7} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
