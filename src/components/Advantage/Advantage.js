import React from "react";

import "./Advantage.css";

const Advantage = () => {
    return (
        <section className="container-advantage">
            <div className="free-shipping">
                <div className="img-free-shipping"></div>
                <div className="text-advantage">
                    <span className="title-advantage">FREE SHIPPING</span>
                    <span className="item-advantage">On all UA order or order above $100</span>
                </div>
            </div>
            <div className="days-return">
                <div className="img-days-return"></div>
                <div className="text-advantage">
                    <span className="title-advantage">30 DAYS RETURN</span>
                    <span className="item-advantage">Simply return it within 30 days for an exchange</span>
                </div>
            </div>
            <div className="support">
                <div className="img-support"></div>
                <div className="text-advantage">
                    <span className="title-advantage">SUPPORT 24/7</span>
                    <span className="item-advantage">Contact us 24 hours a day, 7 days a week</span>
                </div>
            </div>
        </section>
    )
}

export {Advantage}