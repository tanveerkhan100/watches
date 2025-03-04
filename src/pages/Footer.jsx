import logo from '../assets/logo.png.webp';
import { IoLogoTwitter } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';
import { BsBehance } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import React, { useState, useEffect } from 'react';
import { FaArrowTurnUp } from 'react-icons/fa6';
import '../Styles/Footer.css';

const Footer = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTimeout(() => setIsFixed(true), 100);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-box'>
          <img src={logo} alt='' className='footer-logo' />
          <p>
            Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed
            do eiusmod tem.
          </p>
        </div>
        <div className='footer-box'>
          <h6>Quick Links</h6>
          <p>About</p>
          <p>Offers & Discounts</p>
          <p>Get Coupon</p>
          <p>Contact Us</p>
        </div>
        <div className='footer-box'>
          <h6>New Products</h6>
          <p>Woman Cloth</p>
          <p>Fashion Accessories</p>
          <p>Man Accessories</p>
          <p>Rubber made Toys</p>
        </div>
        <div className='footer-box'>
          <h6>Support</h6>
          <p>Frequently Asked Questions</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Report a Payment Issue</p>
        </div>
      </div>
      <div className='copyright'>
        <div className='copyright-text'>
          <p>
            Copyright ©2025 All rights reserved | This template is made with{' '}
            <span>❤</span> by <span>Dreamer</span>
          </p>
        </div>
        <div className='copyright-icons'>
          <IoLogoTwitter className='icon' />
          <GrFacebookOption className='icon' />
          <BsBehance className='icon' />
          <TfiWorld className='icon' />
        </div>
      </div>
      <FaArrowTurnUp
        className={`up-icon ${isFixed ? 'fixed' : ''}`}
        onClick={scrollToTop}
      />
    </div>
  );
};

export default Footer;
