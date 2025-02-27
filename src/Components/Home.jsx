import React from 'react';
import watch from '../assets/watch.png.webp';
import '../Styles/Home.css';
import NewArrival from '../pages/NewArrival';
import Grid from '../pages/Grid';
import PopularItems from '../pages/PopularItems';
import Video from '../pages/Video';
import Choice from '../pages/Choice';
import Advertisement from '../pages/Advertisement';
import Footer from '../pages/Footer';

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
          <button className='btn'>SHOP NOW</button>
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
      <Footer />
    </div>
  );
};

export default Home;
