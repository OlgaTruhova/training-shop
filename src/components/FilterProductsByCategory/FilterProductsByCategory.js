import React from 'react';
import classNames from "classnames";

function FilterProductsByCategory (productsCategory) {
    const filterСategory = productsCategory.filterСategory;

    return (

        <section className={classNames("filter", {visible: productsCategory.isMenuOpen})} data-test-id={`filters-${productsCategory.productType}`}>
            <div className='filter-block' data-test-id='filters-color'>
                <span className='filter-title'>COLOR</span>
                {productsCategory.colorsProduct.map((color, i) => (
                    <div key={i} data-test-id={`filter-color-${color}`}>
                        <input type='checkbox' name='color' value={color} id={color} onChange={filterСategory} />
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}
            </div>
            <div className='filter-block' data-test-id='filters-size'>
                <span className='filter-title'>SIZE</span>
                {productsCategory.sizesProduct.map((size, i) => (
                    <div key={i} data-test-id={`filter-size-${size}`}>
                        <input type='checkbox' name='size' value={size} id={size} onChange={filterСategory}  />
                        <label htmlFor={size}>{size}</label>
                    </div>
                ))}
            </div>
            <div className='filter-block' data-test-id='filters-brand'>
                <span className='filter-title'>BRAND</span>
                {productsCategory.brandsProduct.map((brand, i) => (
                    <div key={i} data-test-id={`filter-brand-${brand}`}>
                        <input type='checkbox' name='brand' value={brand} id={brand} onChange={filterСategory} />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                ))}
            </div>
            <div className='filter-block'>
                <span className='filter-title'>PRICE</span>
                {productsCategory.priceProduct.map((price, i) => (
                    <div key={i}>
                        <input type='checkbox' name='price' value={price} id={price} onChange={filterСategory} />
                        <label htmlFor={price}>$ {price}</label>
                    </div>
                ))}
            </div>
        </section>
    )
}

export {FilterProductsByCategory}