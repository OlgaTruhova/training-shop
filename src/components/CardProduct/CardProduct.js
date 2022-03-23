import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Rating } from "../Rating/Rating";
import "./CardProduct.css";

const CardProduct = (product) => {

    const productInf = product.product;
    let ratingProduct = productInf.rating;
    
    return (
        <>
            <Link 
                to={`/${productInf.category}/${productInf.id}`}  
                className="cards-item" 
                data-test-id={`clothes-card-${productInf.category}`}
            >
                <div className="wrapper-card-product">
                    {productInf.discount !== null ? 
                        <div className="card-product-discount">
                            {productInf.discount}
                        </div> : null
                    }
                    
                    <div className="card-product-img"><img src={`https://training.cleverland.by/shop${productInf.images[0].url}`} alt="img" /></div>
                    <span className="card-product-name">{productInf.name}</span>

                    <div className="wrapper-card-product-price-starts">
                        <div className="wrapper-card-product-price">
                            {productInf.discount !== null ? 
                                <span className="card-product-price-discount">
                                    {`$ ${((productInf.price * (100 - +productInf.discount.replace(/[\D]+/g, '')))/100).toFixed(2) }`}
                                </span> : null
                            }
                            <span className={classNames("card-product-price", {active: productInf.discount !== null})}>$ {productInf.price}</span>
                        </div>
                        <div>
                            <Rating rating={ratingProduct} />
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export { CardProduct }