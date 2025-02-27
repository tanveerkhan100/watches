import React from 'react';
import logo from '../assets/logo.png.webp';
import { IoLogoTwitter } from 'react-icons/io';
import { GrFacebookOption } from 'react-icons/gr';
import { BsBehance } from 'react-icons/bs';
import { TfiWorld } from 'react-icons/tfi';
import '../Styles/Footer.css';

const Footer = () => {
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
          <IoLogoTwitter className='icon'/>
          <GrFacebookOption className='icon'/>
          <BsBehance className='icon'/>
          <TfiWorld className='icon'/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
