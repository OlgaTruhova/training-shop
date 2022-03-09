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

    
    const buttonStyleChange = (e) => {
        let btnWomen = document.getElementsByClassName('clothes-filter-women-btn');
        [...btnWomen].forEach(btn => btn === e.target ? btn.className = "clothes-filter-women-btn activ" : btn.className = "clothes-filter-women-btn"
        );

        let btnMen = document.getElementsByClassName('clothes-filter-men-btn');
        [...btnMen].forEach(btn => btn === e.target ? btn.className = "clothes-filter-men-btn activ" : btn.className = "clothes-filter-men-btn"
        );
    }

    const func = (e) => {
        changeClothesMenuButtons(e);
        buttonStyleChange(e)
    }

    return (
        <>
                <div className="clothes" data-test-id={`clothes-${typeProduct}`} key={typeProduct}>
                <div className="clothes-wrapper-title">
                    <div className="clothes-title">{typeProduct.toUpperCase()}{"'S"}</div>
                    <div className="clothes-filter-menu">
                        {clothesMenuButtons.map(({particulars, name}) => (
                                <button type="button" className={`clothes-filter-${typeProduct}-btn`} key={particulars} 
                                onClick={func} 
                                value={particulars}
                                name={`${particulars}${typeProduct}`} 
                                data-test-id={`clothes-${typeProduct}-${particulars}`}>{name}</button>
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

