import React from 'react';

import arrowLeft from '../../assets/png/arrow-left.png'
import arrowRight from '../../assets/png/arrow-right.png'
import './PartOne.css';

const PartOne = () => {
    return (
        <section className='header-part-one'>
            <div className='header-banner'>
                <div className='header-circle'><img src={arrowLeft} alt='img' /></div>
                <div className='header-banner-text'>
                    <span>BANNER</span>
                    <span className='text'>YOUR TITLE TEXT</span>
                </div>
                <div className='header-circle'><img src={arrowRight} alt='img' /></div>
            </div>
            <div className='header-group'>
                <div className='header-women'>
                    <div>
                        <span>WOMEN</span>
                    </div>
                </div>
                <div className='header-men'>
                    <div>
                        <span>MEN</span>
                    </div>
                </div>
                <div className='header-accessories'>
                    <div>
                        <span>ACCESSORIES</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export {PartOne}