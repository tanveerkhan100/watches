import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { TfiReload } from 'react-icons/tfi';
import { TfiUnlock } from 'react-icons/tfi';
import '../Styles/Advertisement.css';

const Advertisement = () => {
  return (
    <div className='ad-container'>
      <div className='ad-box'>
        <BsBoxSeam className='ad-icon'/>
        <h6>Free Shipping Method</h6>
        <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
      </div>
      <div className='ad-box'>
        <TfiUnlock className='ad-icon'/>
        <h6>Secure Payment System</h6>
        <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
      </div>
      <div className='ad-box'>
        <TfiReload className='ad-icon'/>
        <h6>Secure Payment System</h6>
        <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
      </div>
    </div>
  );
};

export default Advertisement;
