import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { ButtonCart } from "../ButtonCart/ButtonCart";
import { MENU } from '../../data/MENU';

import search from "../../assets/png/search.png";
import globe from "../../assets/png/globe.png";
import user from "../../assets/png/user.png";

import "./NavMenu.css";

const NavMenu = () => {
    const [isMenuOpen, toggleMenu] = useState(false);
    function toggleMenuMode () {
        toggleMenu(!isMenuOpen);
    }

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
                    <ButtonCart />
                    
                    <button type="button" className={classNames("burger-menu-btn", {visible: isMenuOpen})} onClick={toggleMenuMode} data-test-id="burger-menu-btn">
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