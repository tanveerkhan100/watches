import React from 'react';
import banner from '../assets/banner.jpg';
import '../Styles/contact.css';
import { TfiHome } from 'react-icons/tfi';
import { CiMobile3 } from 'react-icons/ci';
import { TfiEmail } from 'react-icons/tfi';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='banner'>
        <img src={banner} alt='img' />
        <div>
          <h1 className='overlay-text'>Contact</h1>
        </div>
      </div>
      <div className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.1481785092415!2d71.48461158451097!3d34.00591035697643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917297595a497%3A0x548945be3851d4b2!2sRehman%20Baba%20Hostel%202!5e0!3m2!1sen!2s!4v1740998991412!5m2!1sen!2s'
          width='90%'
          height='450'
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className='contact-box'>
        <div className='contact-form'>
          <h3>Get in Touch</h3>
          <textarea name='' id='' placeholder='Enter Message' rows='8'></textarea>
          <div className='two-input'>
            <input type='text' name='' id='' placeholder='Enter your name' />
            <input type='email' name='' id='' placeholder='Email' />
          </div>
          <input type='text' name='' id='' placeholder='Enter Subject' />
          <button className='send-btn'>SEND</button>
        </div>
        <div className='contact-us'>
          <div className='contact-us-box'>
            <TfiHome className='icons'/>
            <div className='text'>
              <p>Buttonwood, California.</p>
              <p className='para'>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className='contact-us-box'>
            <CiMobile3 className='icons'/>
            <div className='text'>
              <p>+1 253 565 2365</p>
              <p className='para'>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className='contact-us-box'>
            <TfiEmail className='icons'/>
            <div className='text'>
              <p>support@colorlib.com</p>
              <p className='para'>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
