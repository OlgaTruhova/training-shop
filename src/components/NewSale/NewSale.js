import React from "react";

import "./NewSale.css";

const NewSale = () => {
    return (
        <section className="container-new-sale">
            <div className="new-sale_new">
                <div className="new">
                    <span>New Season</span>
                    <span className="text">lookbook collection</span>
                </div>
            </div>
            <div className="new-sale_sale">
                <div className="sale">
                    <span>Sale</span>
                    <div className="text">Get UP to <span className="text" style={{color: '#E91E63', display: 'inline'}}>50% off</span></div>
                </div>
            </div>
        </section>
    )
}

export {NewSale}