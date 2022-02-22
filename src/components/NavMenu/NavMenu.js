import React, { useState } from "react";
import classNames from "classnames";
import { MENU } from '../../data/MENU';
import { Link } from "react-router-dom";

import search from "../../assets/png/search.png";
import globe from "../../assets/png/globe.png";
import user from "../../assets/png/user.png";
import shoppingBag from "../../assets/png/shopping-bag.png";

import "./NavMenu.css";

const NavMenu = () => {
    const [isMenuOpen, toggleMenu] = useState(false);

    function toggleMenuMode () {
        toggleMenu(!isMenuOpen);
    }

    window.addEventListener('onClick', function(e) {
        if(e.target.className !== 'hamburger' && e.target.tagName !== 'button'){
            toggleMenuMode();
        }
    });

    return (
        <section className="wrapper-header-nav-menu">
            <nav className='header-nav-menu'>
                <Link to="/" className='header-nav-logo' data-test-id='header-logo-link'>CleverShop</Link>
                <div className={classNames("burger-menu", {visible: isMenuOpen})} data-test-id='burger-menu'>
                    {MENU.map(({ id, path, name }) => (
                        <Link key={id} to={`/${path}`} className='menu-item' onClick={toggleMenuMode} data-test-id={`menu-link-${path}`}>
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
                <div className='menu-nav'>
                    <a href="#"><img src={search} alt='img' /></a>
                    <a href="#"><img src={globe} alt='img' /></a>
                    <a href="#"><img src={user} alt='img' /></a>
                    <a href="#"><img src={shoppingBag} alt='img' /></a>
                    <button type="button" className={classNames("hamburger", {visible: isMenuOpen})} onClick={toggleMenuMode} data-test-id="burger-menu-btn">
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </button>
                </div>        
            </nav>
        </section>
        
    )
}

export {NavMenu}