import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa6';
import '../Styles/Video.css';
import image from '../assets/video.jpg';
import { RxCross2 } from 'react-icons/rx';

const Video = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div>
      <div className='video-container'>
        <img src={image} alt='img' />
        <div className='play-button'>
          <FaPlay  className='play-icon' onClick={toggleModal} />
        </div>
        <div className='next-btn'>
          <button onClick={toggleModal}>NEXT VIDEO</button>
          <FaArrowRight className='icon' />
        </div>
      </div>
      {showModal && (
        <div className='modal-overlay' onClick={toggleModal}>
          <RxCross2
            className='close-btn'
            onClick={(e) => {
              e.stopPropagation();
              toggleModal();
            }}
          />
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <iframe
              width='100%'
              height='700px'
              src='https://www.youtube.com/embed/3x4Z2tktme8?si=Gtnd5SBPJFP542uD'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
