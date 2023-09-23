import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import { motion } from 'framer-motion';
import { type } from '@testing-library/user-event/dist/type';

const Hero = () => {
    const transition = {type: "spring", duration: 3}
  return (
    <div className='hero'>
        <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header />
        <div className='the-best-add'>

            <motion.div
            initial={{left: "238px"}}
            whileInView={{left: "8px"}}
            transition={{...transition, type: "tween"}}
        
            >

            </motion.div>
            <span>the best fitness club in the town</span>
        </div>
        <div className='hero-text'>
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
            <div>
                <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
        </div>
        <div className='figures'>
            <div>
                <span>+ 140 </span>
                <span>expert coaches</span>
            </div>
            <div>
                <span>+ 978 </span>
                <span>members joind</span>
            </div>
            <div>
                <span>+ 50 </span>
                <span>fitness programs</span>
            </div>
        </div>
        <div className='hero-buttons'>
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>
        <motion.div className='heart-rate'
        initial={{right: "-1rem"}}
        transition={transition}
        whileInView={{right: "4rem"}}
        >
            <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/heart.png?raw=true" alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
        </motion.div>

        <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/hero_image.png?raw=true" alt="" className='hero-image' />
        <motion.img
        initial={{right: "11rem"}}
        whileInView={{right: "20rem"}}
        transition={transition}
         src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/hero_image_back.png?raw=true" alt="" className='hero-image-back' />

        <motion.div className='calories'
        initial={{right: "37rem"}}
        whileInView={{right: "28rem"}}
        transition={transition}
        >
            <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/calories.png?raw=true" alt="" />
            <div>
                <span>Calories burned</span>
                <span>220 kcal</span>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
