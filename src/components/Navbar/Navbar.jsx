import React from 'react'
import { Link } from 'react-router-dom';
import images from '../../constants/images';

import './Navbar.css';

const  Navbar = () => {
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <p className='app__navbar__logo p__cormorant'> Hill Holdings Construction</p>
            </div>
        <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to="/">Home</Link></li>
        <li className='p__opensans'><Link to="/about">About</Link></li>
        <li className='p__opensans'><Link to="/services">Services</Link></li>
        <li className='p__opensans'><Link to="/clients">Clients</Link></li>
        <li className='p__opensans'><Link to="/contact">Contact</Link></li>
        </ul>
        <div className='app__navbar-smallscreen'>
        <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#about'>About</a></li>
            <li className='p__opensans'><a href='#services'>Services</a></li>
            <li className='p__opensans'><a href='#clients'>Clients</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar;