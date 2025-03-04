import React from 'react';
import '../Styles/shop.css';
import banner from '../assets/banner.jpg';
import '../Styles/about.css';
import Video from './Video';
import Advertisement from './Advertisement';

const About = () => {
  console.log('about');
  return (
    <div className='about'>
      <div className='banner'>
        <img src={banner} alt='img' />
        <div>
          <h1 className='overlay-text'>About Us</h1>
        </div>
      </div>
      <div className='text'>
        <h2>Our Mission</h2>
        <p>
          Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
          labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus
          commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
          Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
          lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
          accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
          maecenas accumsan.
        </p>
        <h2>Our Vision</h2>
        <p>
          Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
          labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus
          commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
          Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
          lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
          accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
          maecenas accumsan.
        </p>
      </div>
      <Video />
      <Advertisement />
    </div>
  );
};

export default About;
