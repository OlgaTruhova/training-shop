import React from 'react';
import PropTypes from "prop-types";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { ProductPageNav } from "../../components/ProductPageNav/ProductPageNav";
import filterOpen from "../../assets/png/filter-open.png";
import filterClosed from "../../assets/png/filter-closed.png";
import viewGrid from "../../assets/png/view-grid.png";
import viewList from "../../assets/png/view-list.png";
import squareLoading from "../../assets/png/square-loading.png";
import store from '../../redux/store';
import { FilterProductsByCategory } from '../../components/FilterProductsByCategory/FilterProductsByCategory';

import "./WomenMenPage.css";

export class WomenMenPage extends React.Component {
    initState = {
        colorsProduct: [],
        sizesProduct: [],
        brandsProduct: [],
        priceProduct: ['$ 500+', '$ 200-500', '$ 100-200', '$ 50-100', '$ 0-50'],
        isMenuOpen: false,
        filters: {
            color: [],
            size: [],
            brand: [],
            price: [],
        },
        filterProduct: [],
    };

    constructor (props) {
        super (props);

        this.state = { ...this.initState }; 
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.page !== this.props.page) {
            this.setState({
                ...this.initState,
                filters: {
                    color: [],
                    size: [],
                    brand: [],
                    price: [],
                }
            });
        }
    };

    toggleMenuMode = () => {
        this.setState({isMenuOpen: !this.state.isMenuOpen})
        this.state.isMenuOpen ? this.state.colorsProduct : this.addArrColorsProduct();
        this.state.isMenuOpen ? this.state.sizesProduct : this.addArrBrandsProduct();
        this.state.isMenuOpen ? this.state.brandsProduct : this.addArrSizesProduct();
    }

    addArrColorsProduct = () => {
        const {page} = this.props;
        const productType = page.toLowerCase();
        const PRODUCTS = store.getState().products.products;

        let colorProd = [...this.state.colorsProduct];
        PRODUCTS[productType].forEach(product => {
            product.images.forEach(color => {
                let res = colorProd.some(col => col === color.color);
                return res !== true ? colorProd.push(color.color) : null; 
            })
        })   
        this.setState({colorsProduct: colorProd});
    }

    addArrSizesProduct = () => {
        const {page} = this.props;
        const productType = page.toLowerCase();
        const PRODUCTS = store.getState().products.products;

        let sizeProd = [...this.state.sizesProduct];
        PRODUCTS[productType]?.forEach(product => {
            product.sizes.forEach(size => {
                let res = sizeProd.some(sizes => sizes === size);
                return res !== true ? sizeProd.push(size) : null; 
            })
        })   
        this.setState({sizesProduct: sizeProd})
    }

    addArrBrandsProduct = () => {
        const {page} = this.props;
        const productType = page.toLowerCase();
        let brandProd = [...this.state.brandsProduct];
        const PRODUCTS = store.getState().products.products;

        PRODUCTS[productType]?.forEach(product => {
                let res = brandProd.some(brand => brand === product.brand);
                return res !== true ? brandProd.push(product.brand) : null; 
        })   
        this.setState({brandsProduct: brandProd})
    }

    filterСategory = (e) => {
        let filter = this.state.filters;
        let res = filter[e.target.name].find(item => item === e.target.value);
    
        if (e.target.checked === true) {
            if (res === undefined) {
                filter[e.target.name].push(e.target.value);
            }
        } else {
            if (res === e.target.value) {
                filter[e.target.name].forEach((item, i) => {
                    if (item === res){
                        filter[e.target.name].splice(i, 1);
                    }
                })
            }
        }
        this.setState({filters: filter})

        this.filterProduct();
    };

    getDiscount = (price, discout) => {
        return discout ? price * (100 - discout.replace(/[\D]+/g, '')) / 100 : price;
    }

    filterByPrice = (key) => (price) => {
        const prices = {
            '$ 500+': price >= 500, 
            '$ 200-500': price >= 200 && price < 500,
            '$ 100-200': price >= 100 && price < 200,
            '$ 50-100': price >=50 && price < 100,
            '$ 0-50': price >= 0 && price < 50,
        };
        return prices[key];
    }

    filterProduct = () => {
        const {page} = this.props;
        const productType = page.toLowerCase();
        const PRODUCTS = store.getState().products.products;

        let filterProd = PRODUCTS[productType]?.filter(product =>  

            {
                let isFilter =
                (this.state.filters.color.length > 0 ? product.images.some(item => this.state.filters.color.some(col => col === item.color)) : true)
                &&
                (this.state.filters.size.length > 0 ? product.sizes.some(size => this.state.filters.size.some(siz => siz === size)) : true)
                &&
                (this.state.filters.brand.length > 0 ? this.state.filters.brand.some(bran => bran === product.brand) : true)
                &&
                (this.state.filters.price.length > 0 ? this.state.filters.price.some(pric => this.filterByPrice(pric)(this.getDiscount(product.price, product.discount))) : true)
                return isFilter === true ? product : null;
            }
        ) 

        this.setState({filterProduct: filterProd})  
    }

    render () {
        const {page} = this.props;
        const productType = page.toLowerCase();
        const PRODUCTS = store.getState().products.products;

        return (

            <section className='products-page' data-test-id={`products-page-${productType}`}>
                <ProductPageNav page={page} />
            
                <div className='wrapper-products-page_title'>
                    <div className='products-page_title'>{page.toUpperCase()}</div>
                </div>
                
                <div className='products-page_filters'>
                    <button className="products-page_filter-btn" onClick={this.toggleMenuMode} data-test-id="filter-button">
                        <img src={!this.state.isMenuOpen ? filterOpen : filterClosed} alt='img'/>FILTER
                    </button>
                    <div className='products-page_view'>
                        <button><img src={viewList} alt='img'/></button>
                        <button><img src={viewGrid} alt='img'/></button>
                    </div>
                </div>
                <FilterProductsByCategory 
                    productType={productType}
                    colorsProduct={this.state.colorsProduct} 
                    sizesProduct={this.state.sizesProduct}
                    brandsProduct={this.state.brandsProduct}
                    priceProduct={this.state.priceProduct}
                    isMenuOpen={this.state.isMenuOpen}
                    filterСategory={this.filterСategory}
                />
                <div className='show-filter-result'>
                    {
                        this.state.filterProduct.length > 0 ? 
                        <>
                            <span className='show-filter-result-bold'>{this.state.filterProduct.length}</span>
                            <span className='show-filter-result-bold'>items Found</span>
                        </>
                        : null
                    }
                    {
                        this.state.filters.color.length > 0 ? 
                        <>
                            <span className='show-filter-result-opasity'>Color:</span>
                            {this.state.filters.color.map(color => (
                                <span className='show-filter-result-opasity' key={color}>{color}</span>
                            ))}
                        </>
                        : null
                    }
                    {
                        this.state.filters.size.length > 0 ? 
                        <>
                            <span className='show-filter-result-opasity'>Size:</span>
                            {this.state.filters.size.map(size => (
                                <span className='show-filter-result-opasity' key={size}>{size}</span>
                            ))}
                        </>
                        : null
                    }
                    {
                        this.state.filters.brand.length > 0 ? 
                        <>
                            <span className='show-filter-result-opasity'>Brand:</span>
                            {this.state.filters.brand.map(brand => (
                                <span className='show-filter-result-opasity' key={brand}>{brand}</span>
                            ))}
                        </>
                        : null
                    }
                    {
                        this.state.filters.price.length > 0 ? 
                        <>
                            <span className='show-filter-result-opasity'>Price:</span>
                            {this.state.filters.price.map(price => (
                                <span className='show-filter-result-opasity' key={price}>{price}</span>
                            ))}
                        </>
                        : null
                    }
                    
                </div>
                <div className='products-page_card-product'>
                    
                    {                
                        this.state.filterProduct.length > 0 ? 
                        
                        this.state.filterProduct.map(product => (
                            <CardProduct product={product} key={product.id} />
                        ))
                        : 
                        this.state.filterProduct.length === 0 &&
                        this.state.filters.color.length > 0 ||
                        this.state.filters.size.length > 0 ||
                        this.state.filters.brand.length > 0 ||
                        this.state.filters.price.length > 0 ? null :
                    
                        PRODUCTS[productType].map(product => (
                            <CardProduct product={product} key={product.id} />
                        ))
                    }
                </div>
                <div className='products-page_loading'><img src={squareLoading} alt='img' /></div>
            </section>
        )
    }  
}

WomenMenPage.propTypes = {
    page: PropTypes.string.isRequired,
}