import React from 'react';
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { ProductPageNav } from "../../components/ProductPageNav/ProductPageNav";
import filter from "../../assets/png/filter.png";
import viewGrid from "../../assets/png/view-grid.png";
import viewList from "../../assets/png/view-list.png";
import squareLoading from "../../assets/png/square-loading.png";

import "./WomenMenPage.css";

const WomenMenPage = (page) => {

    const typePage = page.page;
    const pageUpper = typePage.toUpperCase();
    const pageLower = typePage.toLowerCase();
    
    return (
        <section className='products-page' data-test-id={`products-page-${pageLower}`}>

            <ProductPageNav page={typePage} />
        
            <div className='wrapper-products-page_title'>
                <div className='products-page_title'>{pageUpper}</div>
            </div>
            
            <div className='products-page_filters'>
                <div className='products-page_filter'><img src={filter} alt='img'/>FILTER</div>
                <div className='products-page_view'>
                    <button><img src={viewList} alt='img'/></button>
                    <button><img src={viewGrid} alt='img'/></button>
                </div>
                <div className='products-page_select'>
                    <select>
                        <option value='bestsellers'>BESTSELLERS</option>
                        <option value='bestseller'>BESTSELLERS</option>
                        <option value='bestselle'>BESTSELLERS</option>
                    </select>
                </div>
            </div>
            <div className='products-page_card-product'>
                <CardProduct productType={pageLower} />
            </div>
            <div className='products-page_loading'><img src={squareLoading} alt='img' /></div>

        </section>
    )
}

export {WomenMenPage}