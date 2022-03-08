import React, { useState } from "react";
import { CardProduct } from "../CardProduct/CardProduct";
import { clothesMenuButtons } from "../../data/CLOTHES_MENU_BUTTONS";
import { PRODUCTS } from "../../data/PRODUCTS";

import "./Clothes.css";

const Clothes = (typeCategory) => {
    const typeProduct = typeCategory.typeCategory;
    const [particulars, setParticulars] = useState('isNewArrivals');
    
    const changeClothesMenuButtons = (e) => {
        setParticulars(e.target.value);
    }

    return (
        <>
                <div className="clothes" data-test-id={`clothes-${typeProduct}`} key={typeProduct}>
                <div className="clothes-wrapper-title">
                    <div className="clothes-title">{typeProduct.toUpperCase()}{"'S"}</div>
                    <div className="clothes-filter-menu">
                        {clothesMenuButtons.map(({particulars, name}) => (
                                <button type="button" className={"clothes-filter-btn"} key={particulars} onClick={changeClothesMenuButtons} value={particulars} data-test-id={`clothes-${typeProduct}-${particulars}`}>{name}</button>
                        ))}
                    </div>
                </div>
                <div className="clothes-card">
                    {PRODUCTS[typeProduct].map(product => (
                        
                        product.particulars[particulars] === true ?
                        <CardProduct product={product} key={product.id} />
                        : null
                    ))}
                </div>
                <div className="clothes-btn-see-all"><button>SEE ALL</button></div>
            </div>
        </>
    )
}

export {Clothes}

