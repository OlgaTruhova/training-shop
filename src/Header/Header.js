import React from 'react';
import { TopBar } from '../components/TopBar/TopBar';
import { MENU } from '../data/MENU';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import search from "../assets/png/search.png";
import globe from "../assets/png/globe.png";
import user from "../assets/png/user.png";
import shoppingBag from "../assets/png/shopping-bag.png";
import './Header.css';
import '../index.css';

const Header = () => {

    return (
        <div className='header' data-test-id='header'>
            <TopBar />
            <section className='container-header-nav-menu'>
                <nav className='header-nav-menu'>
                    <Link to="/" className='header-nav-logo' data-test-id='header-logo-link'>CleverShop</Link>
                    <ul className='menu' data-test-id='menu'>
                        {MENU.map(({ id, path, name }) => (
                            <li><Link key={id} to={`/${path}`} className='menu-item' data-test-id={`menu-link-${path}`}>
                                <span>{name}</span>
                            </Link></li>
                        ))}
                    </ul>
                    <div className='menu-nav'>
                        <img src={search} alt='img' />
                        <img src={globe} alt='img' />
                        <img src={user} alt='img' />
                        <img src={shoppingBag} alt='img' />
                    </div>          
                </nav>
            </section>
        </div>
    )
}

export {Header};