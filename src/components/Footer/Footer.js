import React from "react";
import { SubscribeForm } from "../SubscribeForm/SubscribeForm";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../../data/CATEGORIES";
import { INFORMATION } from "../../data/INFORMATION";
import { USEFULLINKS } from "../../data/USEFUL_LINKS";
import { CONTACTUS } from "../../data/CONTACT_US";
import pay from "../../assets/png/pay.png";

import "./Footer.css";

const Footer = () => {

    const stopDefAction = (e) => {
        e.preventDefault();
    }

    return (
        <section className="footer" data-test-id="footer">
            <div className="wrapper-footer-contact-form">
                <div className="footer-contact-form">
                    <span>BE IN TOUCH WITH US:</span>
                    <form className="contact-form" onSubmit={stopDefAction}>
                        <SubscribeForm  
                            type='text'
                            placeholder='Enter your email'
                            textBtn='Join Us'
                            test='footer-mail-field'
                            testBtn='footer-subscribe-mail-button'
                        />
                    </form>
                    <SocialNetworks />
                </div>
            </div>
            
            <div className="wrapper-footer-nav">
                <div className="footer-nav">
                    <strong>CATEGORIES</strong>
                    {CATEGORIES.map(({ id, path, name }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
                <div className="footer-nav">
                    <strong>INFORMATION</strong>
                    {INFORMATION.map(({ id, path, name }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
                <div className="footer-nav">
                    <strong>USEFUL LINKS</strong>
                    {USEFULLINKS.map(({ id, path, name }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <span>{name}</span>
                        </Link>
                    ))}
                </div>
                <div className="footer-nav">
                    <strong>CONTACT US</strong>
                    {CONTACTUS.map(({ id, img, path, name }) => (
                        <Link key={id} to={`/${path}`} className='footer-nav-link' data-test-id={`footer-nav-link-${path}`}>
                            <img src={img} alt="img" /><span>{name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="wrapper-footer-contact-inform">
                <div className="footer-contact-inform">
                    <span>Copyright ?? 2032 all rights reserved</span>
                    <div><img src={pay} alt="img" /></div>
                    <a href="#">Clevertec.ru/training</a>
                </div>
            </div>
        </section>
    )
}

export { Footer }