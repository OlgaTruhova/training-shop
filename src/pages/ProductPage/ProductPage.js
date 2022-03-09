import React, {useState, useEffect} from "react";
import classNames from "classnames";
import { ProductPageNav } from "../../components/ProductPageNav/ProductPageNav";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import stars from '../../assets/png/stars.png';
import notStars from '../../assets/png/not-star.png';
import { Slider } from '../../components/Slider/Slider';
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/PRODUCTS";


import arrowLeft from '../../assets/png/arrow-left.png';
import arrowRight from '../../assets/png/arrow-right.png';
import hanger from "../../assets/img/ProductPage/hanger.png";
import heart from "../../assets/img/ProductPage/heart.png";
import scale from "../../assets/img/ProductPage/scale.png";
import pay from "../../assets/img/ProductPage/pay.png";
import annotation from "../../assets/img/ProductPage/annotation.png";
import car from "../../assets/png/car2.png";
import arrowsCircle from "../../assets/png/arrows-circle2.png";
import mail from "../../assets/png/mail.png";

import "./ProductPage.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";

function ProductPage (page) {
    const pages = page.page;

    let idProduct = useParams();
    let product = PRODUCTS[pages.toLowerCase()].find(prod => prod.id===idProduct.id);
    let nameProduct = product.name;
    let materialProduct = product.material;
    let priceProduct = product.price;
    let sizesProduct = product.sizes;
    let reviewsProduct = product.reviews;
    let discountProduct = product.discount;
    let ratingProduct = product.rating;

    let colorProd = [];
    product.images.forEach(color => {
        let res = colorProd.some(col => col === color.color);
        return res !== true ? colorProd.push(color.color) : null; 
    })

    let colorImgProd = [];
    colorProd.forEach(color => {
        product.images.find(prodcol => prodcol.color === color ? colorImgProd.push([prodcol.url, prodcol.color]) : null)
    })

    const [colorImg, setColorImg] = useState(colorProd[0]);

    const colorImgProduct = (e) => {  
        setColorImg(e.target.name);
    }

    const [useSize, setUseSize] = useState([]);

    const selectedSize = (e) => {
        let arrSize = [...useSize];
        if(e.target.checked === true) {
            arrSize.push(e.target.value);
        } else {
            arrSize.forEach((size, i) => {
                size === e.target.value ? arrSize.splice(i, 1) : null;
            });
        }
        setUseSize(arrSize);
    }

    const buttonStyleChange = () => {
        let btnColorImg = document.getElementsByClassName("colorImages");
        [...btnColorImg].forEach(btn => btn.name === colorImg ? btn.style.border = '2px solid black' : btn.style.border = 'none');  
    }
    
    useEffect(() => {
        buttonStyleChange()
    }, [buttonStyleChange])


    const productType = pages.toLowerCase();
    const pageType = page.page + ` ► ${nameProduct}`;
    
    return (
        <section className="page-product"  data-test-id={`product-page-${productType}`}>
            <ProductPageNav page={pageType} />
            <div className='wrapper-page-products_title'>
                <div className='products-page_title'>{nameProduct}</div>
            </div>
            <div className="wrapper-rating">
                <div> 
                    {new Array(ratingProduct).fill(1).map((star, i) => (<img src={stars} alt="stars" key={star+i}/>))}
                    {new Array(5 - ratingProduct).fill(1).map((star, i) => (<img src={notStars} alt="stars" key={star+i}/>))}
                    <span>{reviewsProduct.length} Reviews</span>
                </div>
                <div className="wrapper-rating_availability">
                    <span>SKU:</span><span className="text">777</span>
                    <span>Availability:</span><span className="text">In Stock</span>
                </div>
            </div>
            <div className="wrapper-product-information">
    
                <div className="product-information-img">
                  <Slider img={product.images} />
                </div>
                <div className="product-information-information">
                    <div className="product-information-color">
                        <div><span className="text">COLOR:</span><span className="text1">{colorImg}</span></div>
                        <div className="product-information-color-img">
                            {
                                colorImgProd.map((img, i) => (
                                    <img src={`https://training.cleverland.by/shop${img[0]}`} className="colorImages" name={img[1]} onClick={colorImgProduct} alt='img' key={i}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product-information-size">
                        <div><span className="text">SIZE:</span>
                            {useSize.map((size, i) => (
                                <span key={i} className="text">{size}</span>
                            ))}
                        </div>
                        <div className="product-information-size-btn">
                            {sizesProduct.map((size, i) => (    
                                <label className="size-btn" htmlFor={size} key={i}>{size}
                                    <input className="size-btns" type='checkbox' name={size} value={size} key={i} id={size} onChange={selectedSize} />
                                </label>
                            ))}
                        </div>
                        <button className="button"><img src={hanger} alt='img' /><span>  Size guide</span></button>
                        <div className="product-information-price">
                            <div className="product-price">
                                {discountProduct !== null ? 
                                    <span className="card-product-price">{`$ ${((priceProduct * (100 - +discountProduct.replace(/[\D]+/g, '')))/100).toFixed(2) }`}</span> : null
                                }
                                <span className={classNames("card-product-price", {active: discountProduct !== null})}>$ {priceProduct}</span>
                            </div>
                            
                            <button>ADD TO CARD</button>
                            <img src={heart} alt='img' />
                            <img src={scale} alt='img' />
                        </div>
                        
                        <div className="product-information-services">
                            <div>
                                <img src={car} alt='img' />
                                <span>  Shipping & Delivery</span>
                            </div>
                            <div>
                                <img src={arrowsCircle} alt='img' />
                                <span>  Returns & Exchanges</span>
                            </div>
                            <div>
                                <img src={mail} alt='img' />
                                <span>  Ask a question</span>
                            </div>
                        </div>

                        <div className="product-information-pay">
                            <span className="title">GUARANTEED SAFE CHECKOUT</span>
                            <img src={pay} alt='img' />
                        </div>
                        <div className="product-information-description">
                            <button>DESCRIPTION</button>
                        </div>
                        <div className="product-information-additional">
                            <span className="title">ADDITIONAL INFORMATION</span>
                            <span className="text1">Color:</span>
                            <div>{colorProd.map(color => (<span className="text" key={color}>{color}</span>))}</div>
                            
                            <span className="text1">Size:</span>
                            <div>
                                {sizesProduct.map((size, i) => (<span key={i} className="text">{size}</span>))}
                            </div>
                            <span className="text1">Material:</span>
                            <span className="text">{materialProduct}</span>
                        </div>


                        <div className="product-information-reviews">
                            <span className="title">REVIEWS</span>
                            <div className="reviews-rating">
                                <div>
                                    <div className="reviews-rating-stars">
                                        {new Array(ratingProduct).fill(1).map((star, i) => (<img src={stars} alt="stars" key={star+i}/>))}
                                        {new Array(5 - ratingProduct).fill(1).map((star, i) => (<img src={notStars} alt="stars" key={star+i}/>))}
                                    </div>
                                    <span>{reviewsProduct.length} Reviews</span>
                                </div>
                                <div><img src={annotation} alt="stars" /><span>Write a review</span></div>
                            </div>
                            {reviewsProduct.map(reviews => (
                            <div key={reviews.id}>
                                <div className="reviews-rating2">
                                    <div><span className="text1">{reviews.name}</span></div>
                                    <div><span className="text">3 months ago </span>
                                        {new Array(reviews.rating).fill(1).map((star, i) => (<img src={stars} alt="stars" key={star+i}/>))}
                                        {new Array(5 - reviews.rating).fill(1).map((star, i) => (<img src={notStars} alt="stars" key={star+i}/>))}
                                        </div>
                                </div>
                                <div className="reviews-rating2-text">{reviews.text}</div>
                            </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
            <div className="related-products">
                <span className="title">RELATED PRODUCTS</span>
                <div className="related-products-btn">
                    <button className="btn-slider-left"><img src={arrowLeft} alt='img' /></button>
                    <button className="btn-slider-right"><img src={arrowRight} alt='img' /></button>
                </div>
            </div>
            <div className="related-products-card">

            <Swiper 
                slidesPerView={1} 
                spaceBetween={10} 
                slidesPerGroup={1} 
                modules={[Navigation]} 
                breakpoints={{
                    1200:{
                        slidesPerView: 4,
                    },
                    900:{
                        slidesPerView: 3,
                    },
                    600:{
                        slidesPerView: 2,
                    }
                }} 
                className="related-products-swiper" 
                data-test-id="related-slider"
                navigation={{
                    nextEl: '.btn-slider-left', 
                    prevEl: '.btn-slider-right'
                }}
            >
                {PRODUCTS[pages.toLowerCase()].map(product => 
                    <SwiperSlide to={`/${product.category}/${product.id}`} key={`${product.category}${product.id}`}>
                        <CardProduct product={product} key={product.id} />
                    </SwiperSlide> 
                )}
             </Swiper>
            </div>   
        </section>
    )
}

export {ProductPage}