import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/refund-policy'>Refund Policy</Link>
            <Link to='/website-policy'>Website Policy</Link>
            <Link to='/contact-us'>Contact Us</Link>
            <Link to='/products'>Products</Link>
            <a href='https://in.linkedin.com/company/rhyno-wheels' target='_blank' rel='noopener noreferrer'>
              Career
            </a>
            <Link to='/rentals'>Rentals</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>Your Company © 2024</small>
          <div className='social-icons'>
            <a
              className='social-icon-link instagram'
              href='https://www.instagram.com/rhyno.in/'
              target='_blank'
              aria-label='Instagram'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className='social-icon-link linkedin'
              href='https://in.linkedin.com/company/rhyno-wheels'
              target='_blank'
              aria-label='LinkedIn'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
