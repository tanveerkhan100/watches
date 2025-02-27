import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png.webp';
import { CiSearch } from 'react-icons/ci';
import { GoPerson } from 'react-icons/go';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import '../Styles/Navbar.css';
import { FaCaretUp } from 'react-icons/fa';
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setTimeout(() => setIsSticky(true), 100);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`Navbar ${isSticky ? 'sticky' : ''}`}>
      <nav>
        <img src={logo} alt='' className='logo' />
        <ul className='nav-links'>
          <li>
            <Link className='link'>Home</Link>
          </li>
          <li>
            <Link className='link'>Shop</Link>
          </li>
          <li>
            <Link className='link'>About</Link>
          </li>
          <li className='latest'>
            <p className='hot'>HOT</p>
            <Link className='link'>Latest</Link>
            <ul className='submenu'>
              <FaCaretUp className='up' />
              <li>
                <Link className='submenu-link'>Product List</Link>
              </li>
              <li>
                <Link className='submenu-link'>Product Details</Link>
              </li>
            </ul>
          </li>
          <li className='blog'>
            <Link className='link'>Blog</Link>
            <ul className='submenu'>
              <FaCaretUp className='up' />
              <li>
                <Link className='submenu-link'>Blog</Link>
              </li>
              <li>
                <Link className='submenu-link'>Blog Details</Link>
              </li>
            </ul>
          </li>
          <li className='pages'>
            <Link className='link'>Pages</Link>
            <ul className='submenu'>
              <FaCaretUp className='up' />
              <li>
                <Link className='submenu-link'>Log in</Link>
              </li>
              <li>
                <Link className='submenu-link'>Cart</Link>
              </li>
              <li>
                <Link className='submenu-link'>Element</Link>
              </li>
              <li>
                <Link className='submenu-link'>Confirmation</Link>
              </li>
              <li>
                <Link className='submenu-link'>Product Checkout</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className='link'>Contact</Link>
          </li>
        </ul>
        <div className='hamburger'>
          <FaBars />
        </div>
        <div className='accounts'>
          <CiSearch className='search icon' />
          <GoPerson className='person icon' />
          <MdOutlineLocalGroceryStore className='shop icon' />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
