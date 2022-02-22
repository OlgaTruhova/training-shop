import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import './PartOne.css';
import './SwiperPartOne.css';

const PartOne = () => {
    return (
        <section className='header-part-one'>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" data-test-id='main-slider'>
                <SwiperSlide>
                    <div className='header-banner'>
                        <div className='header-banner-text'>
                            <span>BANNER</span>
                            <span className='text'>YOUR TITLE TEXT</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='header-banner'>   
                    <div className='header-banner-text'>
                        <span>BANNER</span>
                        <span className='text'>YOUR TITLE TEXT</span>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='header-banner'>     
                    <div className='header-banner-text'>
                        <span>BANNER</span>
                        <span className='text'>YOUR TITLE TEXT</span>
                    </div>     
                </div>
                </SwiperSlide>
            </Swiper>
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