import React from "react";
import share from "../../assets/png/share.png";
import { Link } from "react-router-dom";

import "../../pages/WomenMenPage/WomenMenPage.css";

const ProductPageNav = (page) => {
    const typePage = page.page;
    const nameProduct = page.nameProduct;

    return (
        <div className='wrapper-products-page-nav'>
            <div className='products-page-nav'>
                <div className='products-page-nav_page'>
                <Link to={`/`}><span className="text">Home</span></Link> 
                ► <Link to={`/${typePage}`}><span>{typePage}</span></Link> 
                {nameProduct ? <span>{`► ${nameProduct}`}</span> : null}
                </div>
                <div className='products-page-nav_share'><img src={share} alt='img'/>Share</div>
            </div>
        </div>
    )
}

export {ProductPageNav}