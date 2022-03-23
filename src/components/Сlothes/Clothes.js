import React, { useState, useEffect } from "react";
import { CardProduct } from "../CardProduct/CardProduct";
import { clothesMenuButtons } from "../../data/CLOTHES_MENU_BUTTONS";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Clothes.css";

const Clothes = (typeCategory) => {
    const typeProduct = typeCategory.typeCategory;
    const PRODUCTS = useSelector(state => state.products.products);
    const [particulars, setParticulars] = useState('isNewArrivals');
 
    const changeClothesMenuButtons = (e) => {
        setParticulars(e.target.value);
        isChecked();
    }

    const isChecked = () => {
        const butonsClothesMenu = document.getElementsByClassName("clothes-filter-btn");
        [...butonsClothesMenu].forEach(btn => btn.children[0].checked ? btn.style.opacity = '100%' :  btn.style.opacity = '60%' )
    }

    useEffect(() => {
        isChecked()
    }, [isChecked]);

    return (
        <>
            <div className="clothes" data-test-id={`clothes-${typeProduct}`} key={typeProduct}>
                <div className="clothes-wrapper-title">
                    <div className="clothes-title">{typeProduct.toUpperCase()}{"'S"}</div>
                    <div className="clothes-filter-menu">
                            <label key="isNewArrivals" onChange={changeClothesMenuButtons} className={`clothes-filter-btn`} data-test-id={`clothes-${typeProduct}-isNewArrivals`}> 
                            NEW ARRIVALS
                                <input type="radio" name={typeProduct} value='isNewArrivals' className="button-clothes-menu" defaultChecked/>
                            </label>
                        {clothesMenuButtons.map(({particulars, name}) => (
                            <label key={particulars} onChange={changeClothesMenuButtons} className={`clothes-filter-btn`} data-test-id={`clothes-${typeProduct}-${particulars}`}> {name}
                                <input type="radio" name={typeProduct} value={particulars} className="button-clothes-menu" />
                            </label>
                        ))}
                    </div>
                </div>             
                     <div className="clothes-card">
                        {
                            PRODUCTS[typeProduct].map(product => (
                            product.particulars[particulars] === true ?
                            <CardProduct product={product} key={product.id} />
                            : null))
                        }
                    </div>
                <label className="clothes-btn-see-all">
                    <Link to={`/${typeProduct}`}>
                            <button>SEE ALL</button>
                    </Link>
                </label>
            </div>
        </>
    )
}

export { Clothes }

