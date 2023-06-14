import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';
import images from '../../constants/images';

import './Navbar.css';

const  Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

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
        <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <FaTools fontsize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen-links'>
        <li className='p__opensans'><Link to="/">Home</Link></li>
        <li className='p__opensans'><Link to="/about">About</Link></li>
        <li className='p__opensans'><Link to="/services">Services</Link></li>
        <li className='p__opensans'><Link to="/clients">Clients</Link></li>
        <li className='p__opensans'><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
        )}
        </div>
    </nav>
  )
}

export default Navbar;