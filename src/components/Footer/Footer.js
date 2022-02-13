import React from "react";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../data/CATEGORIES";
import { INFORMATION } from "../../data/INFORMATION";
import { USEFULLINKS } from "../../data/USEFUL_LINKS";
import pay from "../../assets/png/pay.png";

import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer" data-test-id="footer">
            <div className="wrapper-footer-contact-form">
                <div className="footer-contact-form">
                    <span>BE IN TOUCH WITH US:</span>
                    <form className="contact-form">
                        <input type="text" placeholder="Enter your email"  />
                        <button>Join Us</button>
                    </form>
                    <SocialNetworks />
                </div>
            </div>
            
            <div className="wrapper-footer-nav">
                <div className="footer-nav">
                    <strong>CATEGORIES</strong>
                    {CATEGORIES.map(({ id, path }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <span>{path}</span>
                        </Link>
                    ))}
                </div>
                <div className="footer-nav">
                    <strong>INFORMATION</strong>
                    {INFORMATION.map(({ id, path }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <span>{path}</span>
                        </Link>
                    ))}
                </div>
                <div className="footer-nav">
                    <strong>USEFUL LINKS</strong>
                    {USEFULLINKS.map(({ id, path }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <span>{path}</span>
                        </Link>
                    ))}
                </div>
                <div className="footer-nav">
                    <strong>CONTACT US</strong>
                </div>
            </div>

            <div className="wrapper-footer-contact-inform">
                <div className="footer-contact-inform">
                    <span>Copyright © 2032 all rights reserved</span>
                    <div><img src={pay} alt="img" /></div>
                    <a href="#">Clevertec.ru/training</a>
                </div>
            </div>
           
        </section>
    )
}

export {Footer}