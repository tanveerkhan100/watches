import React, { useState } from 'react';
import '../Styles/login.css'; // Ensure you copy your CSS styles here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import login from '../assets/log.svg';
import signup from '../assets/register.svg';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  return (
    <div className={`login-container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className='forms-container'>
        <div className='signin-signup'>
          {/* Sign In Form */}
          <form action='#' className='sign-in-form'>
            <h2 className='title'>Sign in</h2>
            <div className='input-field'>
              <FontAwesomeIcon icon={faUser} className='log-icons'/>
              <input type='text' placeholder='Username' />
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faLock} className='log-icons'/>
              <input type='password' placeholder='Password' />
            </div>
            <Link to='/'>
            <input type='submit' value='Login' className='btn solid' />
            </Link>
            <p className='social-text'>Or Sign in with social platforms</p>
            <div className='social-media'>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>

          {/* Sign Up Form */}
          <form action='#' className='sign-up-form'>
            <h2 className='title'>Sign up</h2>
            <div className='input-field'>
              <FontAwesomeIcon icon={faUser} className='log-icons'/>
              <input type='text' placeholder='Username' />
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faEnvelope} className='log-icons'/>
              <input type='email' placeholder='Email' />
            </div>
            <div className='input-field'>
              <FontAwesomeIcon icon={faLock} className='log-icons'/>
              <input type='password' placeholder='Password' />
            </div>
            <input type='submit' className='btn' value='Sign up' />
            <p className='social-text'>Or Sign up with social platforms</p>
            <div className='social-media'>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href='#' className='social-icon'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Panels Section */}
      <div className='panels-container'>
        <div className='panel left-panel'>
          <div className='content'>
            <h3>New here?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className='btn transparent'
              onClick={() => setIsSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
          <img src={login} className='image' alt='Login' />
        </div>
        <div className='panel right-panel'>
          <div className='content'>
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className='btn transparent'
              onClick={() => setIsSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
          <img src={signup} className='image' alt='Register' />
        </div>
      </div>
    </div>
  );
};

export default Login;
