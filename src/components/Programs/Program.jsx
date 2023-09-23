import React from 'react';
import './Program.css';
import { programsData } from '../../data/programsData';

const Program = () => {
  return (
    <div className='Program' id='program'>
        <div className='program-header'>
            <span className='stroke-text '>explore our</span>
            <span>programs</span>
            <span className='stroke-text '>to shape you</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program) => (
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className='join-now'>
                        <span>Join Now</span>
                        <img src="https://github.com/ZainRk/FitClub-Starter/blob/master/src/assets/rightArrow.png?raw=true" alt="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Program
