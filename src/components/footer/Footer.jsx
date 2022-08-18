import React from 'react';
import './footer.css';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>
        ADK
      </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="facebook.com"><BsFacebook/></a>
        <a href="instagram.com"><BsInstagram/></a>
        <a href="twitter.com"><BsTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; ADK LLC. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer