import React from 'react';

import {FooterOverlay, Newsletter} from '../../components';
import {FiFacebook, FiTwitter, FiInstagram, FiMail} from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans' >Hill School Building, 213-50100 KAKAMEGA</p>
          <p className='p__opensans'>+254 725532384</p>
          <p style={{color:'#fff', fontSize:'1.2rem'}}> hillholdingsconstruction@gmail.com</p>
      </div>

      <div className='app__footer-links_logo'>
          <p className='headtext__cormorant logo_text'> Hill Holding Construction Limited </p>
          <p className='p__opensans'>&quot;We Believe in and Promote Quality Delivery&quot;</p>
          <div className='app__footer-links_icons'>
            <FiFacebook/>
            <FiTwitter/>
            <FiInstagram/>
            <FiMail/>
          </div>
          <p className='p__opensans'>@ hillholdingsconstruction</p>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans' >Mon - Fri: 8:00 am - 05:00 pm</p>
            <p className='p__opensans' >Sat - Sun: 8:00 am - 12:00 pm</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Hill Holdings Construction Limited | All Rights reserved</p>
  </div>
  </div>
);

export default Footer;
