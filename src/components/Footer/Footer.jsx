import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr />
        <div className='footer'>
            <div className='social-links'>
                <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/github.png?raw=true" alt="" />
                <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/instagram.png?raw=true" alt="" />
                <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/linkedin.png?raw=true" alt="" />
            </div>
            <div className='logo-f'>
                <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/logo.png?raw=true" alt="" />
            </div>


        </div>
        <div className='blur blur-f-1'></div>
        <div className='blur blur-f-2'></div>
    </div>
  )
}

export default Footer
