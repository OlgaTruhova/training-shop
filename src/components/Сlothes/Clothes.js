import React from "react";
import { CardProduct } from "../CardProduct/CardProduct";
import { productType } from "../../data/PRODUCT_TYPE";
import { filterButtons } from "../../data/FILTER_BUTTONS";

import "./Clothes.css";

const Clothes = () => {

    return (
        <>
            {productType.map(productType => (
                 <div className="clothes" data-test-id={`clothes-${productType}`} key={productType}>
                    <div className="clothes-wrapper-title">
                        <div className="clothes-title">{productType.toUpperCase()}{"'S"}</div>
                        <div className="clothes-filter-menu">
                            {filterButtons.map(btnName => (
                                 <button className="clothes-filter-btn" key={btnName}>{btnName}</button>
                            ))}
                        </div>
                    </div>
                    <div className="clothes-card">
                        <CardProduct productType={productType} />
                    </div>
                    <div className="clothes-btn-see-all"><button>SEE ALL</button></div>
                </div>
            ))}
        </>
    )
}

export {Clothes}

