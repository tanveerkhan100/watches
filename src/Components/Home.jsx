import React, { useEffect, useState } from 'react';
import watch from '../assets/watch.png.webp';
import '../Styles/Home.css';
import { Link } from 'react-router-dom';
import NewArrival from '../pages/NewArrival';
import Grid from '../pages/Grid';
import PopularItems from '../pages/PopularItems';
import Video from '../pages/Video';
import Choice from '../pages/Choice';
import Advertisement from '../pages/Advertisement';

const Home = () => {
  return (
    <div className='container'>
      <div className='home'>
        <div className='hero-text'>
          <h1>Select Your New Perfect Style</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            laudantium ex quasi dolorum amet eum deserunt sint ipsam totam
            architecto!
          </p>
          <Link to='/shop'>
            <button className='home-btn'>SHOP NOW</button>
          </Link>
        </div>
        <div className='watch'>
          <img src={watch} alt='img' className='watch-image' />
        </div>
      </div>
      <NewArrival />
      <Grid />
      <PopularItems />
      <Video />
      <Choice />
      <Advertisement />
    </div>
  );
};

export default Home;
