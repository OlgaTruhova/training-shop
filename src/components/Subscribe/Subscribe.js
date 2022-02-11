import React from "react";

import "./Subscribe.css";

const Subscribe = () => {
    return (
        <section className="container-subscribe">
            <div className="subscribe-wrapper">
                <div className="subscribe-img-woman"></div>
                <div className="subscribe-form">
                    <div className="subscribe-form_text">
                        <span className="title">Special Offer</span>
                        <div className="text">Subscribe <br/> And <span style={{color: '#E91E63'}}>Get 10% Off</span></div>
                    </div>
                    <form className="subscribe-form_form">
                        <input typeof="text" placeholder="Enter your email"></input>
                        <button>Subscribe</button>
                    </form>
                </div>
                <div className="subscribe-img-man"></div>
            </div>
        </section>
    )
}

export {Subscribe}