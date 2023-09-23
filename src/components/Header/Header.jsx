import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/logo.png?raw=true" alt="" className='header-logo' />
        <ul className='header-menu'>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header
