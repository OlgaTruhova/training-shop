import React from "react";
import { SubscribeForm } from "../SubscribeForm/SubscribeForm";
import "./Subscribe.css";


const Subscribe = () => {

    const stopDefAction = (e) => {
        e.preventDefault();
    }
     
    return (
        <section className="container-subscribe">
            <div className="subscribe-wrapper">
                <div className="subscribe-img-woman"></div>
                <div className="subscribe-form">
                    <div className="subscribe-form_text">
                        <span className="title">Special Offer</span>
                        <div className="text">Subscribe <br/> And <span style={{color: '#E91E63'}}>Get 10% Off</span></div>
                    </div>
                    <form className="subscribe-form_form" onSubmit={stopDefAction}>
                        <SubscribeForm  
                            type='email'
                            placeholder='Enter your email'
                            textBtn='Subscribe'
                            test='main-subscribe-mail-field'
                            testBtn='main-subscribe-mail-button'
                        />
                    </form>
                    
                </div>
                <div className="subscribe-img-man"></div>
            </div>
        </section>
    )
}

export { Subscribe }