import React from 'react';
import tel from "../../assets/png/tel.png";
import location from "../../assets/png/location.png";
import clock from "../../assets/png/clock.png";
import { SocialNetworks } from "../../components/SocialNetworks/SocialNetworks";

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
                <SocialNetworks />
            </aside>
        </section>
    )
}
export {TopBar};