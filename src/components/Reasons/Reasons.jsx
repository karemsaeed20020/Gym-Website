import React from 'react';
import './Reasons.css';

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className='left-r'>
        <img src="https://fitclub-1my.pages.dev/static/media/image1.1091417d32e491f0bbb6.png" alt="" />
        <img src="https://fitclub-1my.pages.dev/static/media/image2.82da8b2725df896d8a8e.png" alt="" />
        <img src="https://fitclub-1my.pages.dev/static/media/image3.69484cb0ee7687a8c28b.png" alt="" />
        <img src="https://fitclub-1my.pages.dev/static/media/image4.2c0d30b9ce1579eb1109.png" alt="" />
      </div>
      <div className='right-r'>
        <span>some reasons</span>
        <div>
            <span className='stroke-text'>Why</span>
            <span>choose us?</span>
        </div>
        <div className='details-r'>
            <div>
                <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/tick.png?raw=true" alt="" />
                <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div>
                <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/tick.png?raw=true" alt="" />
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/tick.png?raw=true" alt="" />
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
                <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/tick.png?raw=true" alt="" />
                <span>RELIABLE PARTNERS</span>
            </div>
        </div>
        <span style={{
            color: "var(--gray)",
            fontWeight: "normal"
        }}>OUR PARTNERS</span>
        <div className='partners'>
            <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/adidas.png?raw=true" alt="" />
            <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/nb.png?raw=true" alt="" />
            <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/nike.png?raw=true" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
