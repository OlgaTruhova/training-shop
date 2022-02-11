import React from "react";
import {CLOTHES} from "../../data/CLOTHES";
import stars from '../../assets/png/stars.png';

import "./CardProduct.css";

const CardProduct = (productType) => {
    const typeProduct = Object.values(productType).join();
    
    return (
        <>
            {CLOTHES.map(({id, name, price, img, category}) => (
                
                typeProduct === category ?
                <div key={`${category}${id}`} className="wrapper-card-product">
                    <div className="card-product-img"><img src={img} alt="img" /></div>
                    <span className="card-product-name">{name}</span>
                    <div className="wrapper-card-product-price-starts">
                        <span className="card-product-price">{price}</span>
                        <img src={stars} alt="stars" />
                    </div>
                </div>
                : null
            ))}
        </>
    )
}

export {CardProduct}