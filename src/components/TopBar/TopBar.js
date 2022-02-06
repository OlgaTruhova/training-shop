import React from 'react';
import tel from "../../assets/png/tel.png";
import location from "../../assets/png/location.png";
import clock from "../../assets/png/clock.png";
import facebook from "../../assets/png/facebook.png";
import twitter from "../../assets/png/twitter.png";
import instagram from "../../assets/png/instagram.png";
import pinterest from "../../assets/png/pinterest.png";

import './TopBar.css';

const TopBar = () => {
    return (
        <section className='container-top-bar'>
            <aside className='top-bar'>
                <div className='top-bar_contacts'>
                    <div className='top-bar-tel'>
                        <img src={tel} alt='img'/>
                        <span>+375 29 100 20 30</span>
                    </div>
                    <div className='top-bar-location'>
                        <img src={location} alt='img'/>
                        <span>Belarus, Gomel, Lange 17</span>
                    </div>
                    <div className='top-bar-clock'>
                        <img src={clock} alt='img'/>
                        <span>All week 24/7</span>
                    </div>
                </div>
                <div className='top-bar_social-networks'>
                    <a href="#"><img src={facebook} alt='img'/></a>
                    <a href="#"><img src={twitter} alt='img'/></a>
                    <a href="#"><img src={instagram} alt='img'/></a>
                    <a href="#"><img src={pinterest} alt='img'/></a>
                </div>
            </aside>
        </section>
    )
}
export {TopBar};