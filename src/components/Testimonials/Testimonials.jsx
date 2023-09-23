import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const transition = {type: "spring", duration: 3}
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className='Testimonials'>
        <div className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'>what they</span>
            <span>say about us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color: "var(--orange)"}}>
                    {testimonialsData[selected].name}
                </span>
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className='right-t'>
            <motion.div
            initial={{opacity : 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            >

            </motion.div>
            <motion.div
            initial={{opacity : 0, x: 100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            >

            </motion.div>
            <motion.img
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}
             src={testimonialsData[selected].image} alt="" />
            <div className='arrows'>
                <img onClick={() => {
                    selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1)
                }} src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/leftArrow.png?raw=true" alt="" />
                <img onClick={() => {
                    selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                }} src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/rightArrow.png?raw=true" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Testimonials
