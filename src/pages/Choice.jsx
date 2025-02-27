import React from 'react';
import watch1 from '../assets/chioce_watch1.png';
import watch2 from '../assets/choice_watch2.png';
import '../Styles/Choice.css';

const Choice = () => {
  return (
    <div className='choice'>
      <div className='container'>
        <div className='choice-text'>
          <h2>Watch of Choice</h2>
          <p>
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <button className='show-btn'>SHOW WATCHES</button>
        </div>
        <img src={watch1} alt='watch-img' className='choice-image' />
      </div>
      <div className='container'>
        <img src={watch2} alt='watch-img' className='choice-image' />
        <div className='choice-text'>
          <h2>Watch of Choice</h2>
          <p>
            Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse.
          </p>
          <button className='show-btn'>SHOW WATCHES</button>
        </div>
      </div>
    </div>
  );
};

export default Choice;
