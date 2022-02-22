import React from "react";
import { Link } from "react-router-dom";
import {CLOTHES} from "../../data/CLOTHES";
import stars from '../../assets/png/stars.png';

import "./CardProduct.css";

const CardProduct = (productType) => {
    const typeProduct = Object.values(productType).join();
    
    return (
        <>
            {CLOTHES.map(({id, name, price, img, category}) => (
                
                typeProduct === category ?
                <Link 
                    to={`/${typeProduct}/${id}`}  
                    className="cards-item" 
                    data-test-id={`clothes-card-${typeProduct}`}
                    key={`${category}${id}`}
                >
                        
                        <div className="wrapper-card-product">
                            <div className="card-product-img"><img src={img} alt="img" /></div>
                            <span className="card-product-name">{name}</span>
                            <div className="wrapper-card-product-price-starts">
                                <span className="card-product-price">{price}</span>
                                <img src={stars} alt="stars" />
                            </div>
                        </div>
                </Link>
                : null
            ))}
        </>
    )
}

export {CardProduct}