import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Slider.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import arrowTop from '../../assets/png/arrow-top.png';
import arrowBottom from '../../assets/png/arrow-bottom.png';

const Slider = (img) => {
    const images = img.img;
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (

        <div className='product-slider' data-test-id="product-slider">
            <Swiper
                style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="product-slider-first"
            >
                {
                    images.map((img, i) => (
                        <SwiperSlide key={i}>
                            <img src={`https://training.cleverland.by/shop${img.url}`} alt="img" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="product-slider-second">
                <div className="button-slider">
                    <button className="btn-slider-top"><img src={arrowTop} alt="img" /></button>
                    <button className="btn-slider-bottom"><img src={arrowBottom} alt="img" /></button>
                </div>
                
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={20}
                    slidesPerView={3}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="product-slider-second"
                    breakpoints={{
                        470:{
                            spaceBetween: 30,
                            slidesPerView: 4
                        }
                    }} 
                    navigation={{
                        nextEl: '.btn-slider-bottom', 
                        prevEl: '.btn-slider-top',
                    }}
                    direction={'vertical'}
                >
                    {
                        images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <img src={`https://training.cleverland.by/shop${img.url}`} alt="img" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export {Slider}