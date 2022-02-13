import React from "react";
import { MENU } from '../../data/MENU';
import { Link } from "react-router-dom";

import search from "../../assets/png/search.png";
import globe from "../../assets/png/globe.png";
import user from "../../assets/png/user.png";
import shoppingBag from "../../assets/png/shopping-bag.png";

import "./NavMenu.css";

const NavMenu = () => {
    return (
        <section className='container-header-nav-menu'>
            <nav className='header-nav-menu'>
                <Link to="/" className='header-nav-logo' data-test-id='header-logo-link'>CleverShop</Link>
                <div className='menu' data-test-id='menu'>
                    {MENU.map(({ id, path }) => (
                        <Link key={id} to={`/${path}`} className='menu-item' data-test-id={`menu-link-${path}`}>
                            <span>{path}</span>
                        </Link>
                    ))}
                </div>
                <div className='menu-nav'>
                    <img src={search} alt='img' />
                    <img src={globe} alt='img' />
                    <img src={user} alt='img' />
                    <img src={shoppingBag} alt='img' />
                </div>          
            </nav>
        </section>
    )
}

export {NavMenu}