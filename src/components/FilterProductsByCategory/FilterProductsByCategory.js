import React from 'react';
import classNames from "classnames";

function FilterProductsByCategory (productsCategory) {
    const filterСategory = productsCategory.filterСategory;

    return (

        <section className={classNames("filter", {visible: productsCategory.isMenuOpen})} data-test-id={`filters-${productsCategory.productType}`}>
            <div className='filter-block'>
                <span className='filter-title'>COLOR</span>
                <div data-test-id='filters-color'>
                    {productsCategory.colorsProduct.map((color, i) => (        
                        <div key={i}>
                             <input type='checkbox' data-test-id={`filter-color-${color}`} name='color' value={color} id={color} onChange={filterСategory} />
                            <label htmlFor={color}>{color}</label> 
                        </div>                     
                    ))}
                </div>
            </div>
            <div className='filter-block'>
                <span className='filter-title'>SIZE</span>
                <div data-test-id='filters-size'>
                    {productsCategory.sizesProduct.map((size, i) => (
                        <div key={i}>
                            <input type='checkbox' data-test-id={`filter-size-${size}`} name='size' value={size} id={size} onChange={filterСategory}  />
                            <label htmlFor={size}>{size}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className='filter-block'>
                <span className='filter-title'>BRAND</span>
                <div data-test-id='filters-brand'>
                    {productsCategory.brandsProduct.map((brand, i) => (
                        <div key={i}>
                             <input type='checkbox' data-test-id={`filter-brand-${brand}`} name='brand' value={brand} id={brand} onChange={filterСategory} />
                            <label htmlFor={brand}>{brand} </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className='filter-block'>
                <span className='filter-title'>PRICE</span>
                <div>
                    {productsCategory.priceProduct.map((price, i) => (
                        <div key={i}>
                            <input type='checkbox' name='price' value={price} id={price} onChange={filterСategory} />
                            <label htmlFor={price}>{price}</label>
                        </div>
                    ))}
                </div>
            </div>
        
        </section>
    )
}

export {FilterProductsByCategory}