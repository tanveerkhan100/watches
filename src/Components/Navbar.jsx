import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png.webp';
import { CiSearch } from 'react-icons/ci';
import { GoPerson } from 'react-icons/go';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import '../Styles/Navbar.css';
import { FaCaretUp } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [active, setActive] = useState('home');

  const toggleMenu = (menu, event) => {
    if (event) event.stopPropagation();
    setIsOpen(!isOpen);
    setActive(menu);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  //  for navbar stickiness
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
        <Link to='/'>
          <img src={logo} alt='' className='logo' />
        </Link>
        <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
          <li>
            <Link
              className={`link ${active === 'home' ? 'active' : ''}`}
              to='/'
              onClick={() => toggleMenu('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${active === 'shop' ? 'active' : ''}`}
              to='/shop'
              onClick={() => toggleMenu('shop')}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              className={`link ${active === 'about' ? 'active' : ''}`}
              onClick={() => toggleMenu('about')}
              to='/about'
            >
              About
            </Link>
          </li>
          <li className='latest' onClick={() => toggleSubMenu('latest')}>
            <p className='hot'>HOT</p>
            <Link
              className={`link ${active === 'latest' ? 'active' : ''}`}
              onClick={() => toggleSubMenu('latest')}
            >
              Latest
            </Link>
            <ul className={`submenu ${openSubMenu === 'latest' ? 'open' : ''}`}>
              <FaCaretUp className='up' />
              <li>
                <Link className='submenu-link' to='/productList'>
                  Product List
                </Link>
              </li>
              <li>
                <Link className='submenu-link' to='/details'>
                  Product Details
                </Link>
              </li>
            </ul>
          </li>

          {/* its for mobile screen only  */}
          <li
            className='latest-sub'
            onClick={(event) => toggleSubMenu('latest-sub', event)}
          >
            <p className='hot'>HOT</p>
            <Link className='link'>Latest</Link>
            <ul
              className={`submenu ${
                openSubMenu === 'latest-sub' ? 'open' : ''
              }`}
            >
              {/* <FaCaretUp className='up' /> */}
              <li>
                <Link
                  className='submenu-link'
                  to='/productList'
                  onClick={() => setIsOpen(false)}
                >
                  Product List
                </Link>
              </li>
              <li>
                <Link
                  className='submenu-link'
                  to='/details'
                  onClick={() => setIsOpen(false)}
                >
                  Product Details
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              className={`link ${active === 'contact' ? 'active' : ''}`}
              to='/contact'
              onClick={() => toggleMenu('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className='accounts'>
          <Link to='/search'>
            <CiSearch className='search icon' />
          </Link>
          <Link to='/login'>
            <GoPerson className='person icon' />
          </Link>
          <MdOutlineLocalGroceryStore className='shop icon' />
          <div className='hamburger' onClick={toggleMenu}>
            {isOpen ? (
              <RxCross2 className='cross' onClick={toggleMenu} />
            ) : (
              <FaBars />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
