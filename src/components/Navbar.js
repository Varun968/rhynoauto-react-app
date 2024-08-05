import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to='/contact-us'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to='/rentals'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Rentals
              </Link>
            </li>
            <li>
              <Link
                to='/prebook'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Pre-book now
              </Link>
            </li>
          </ul>
          <div className='social-icons'>
            <a href='https://www.instagram.com/rhyno.in/' className='social-icon-link instagram' target='_blank' aria-label='Instagram' rel='noopener noreferrer'><i className='fa-brands fa-instagram'></i></a>
            <a href='https://in.linkedin.com/company/rhyno-wheels' className='social-icon-link linkedin' target='_blank' aria-label='LinkedIn' rel='noopener noreferrer'><i className='fa-brands fa-linkedin'></i></a>
          </div>
        </div>
        {button && <Button buttonStyle='btn--outline'>Pre-book now</Button>}
      </nav>
    </>
  );
}

export default Navbar;
