import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper";
import classNames from "classnames";
import { ProductPageNav } from "../../components/ProductPageNav/ProductPageNav";
import { CardProduct } from "../../components/CardProduct/CardProduct";
import { Slider } from '../../components/Slider/Slider';
import { Rating } from "../../components/Rating/Rating";
import { ByInCart } from "../../components/ByInCart/ByInCart";
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


const ProductPage = (page) => {
    const pages = page.page;
    const PRODUCTS = useSelector(state => state.products.products);
    const idProduct = useParams();
    const idProducta = idProduct.id;
    const product = PRODUCTS[pages.toLowerCase()].find(prod => prod.id===idProduct.id);
    const nameProduct = product.name;
    const materialProduct = product.material;
    const priceProduct = product.price;
    const sizesProduct = product.sizes;
    const reviewsProduct = product.reviews;
    const discountProduct = product.discount;
    const ratingProduct = product.rating;

    const colorProductText = [];
    product.images.forEach(color => {
        let res = colorProductText.some(col => col === color.color);
        return res !== true ? colorProductText.push(color.color) : null; 
    })

    const colorProductImg = [];
    colorProductText.forEach(color => {
        product.images.find(prodcol => prodcol.color === color ? colorProductImg.push([prodcol.url, prodcol.color]) : null)
    })

    const [useColor, setUseColor] = useState(colorProductText[0]);
    const [imgProduct, setImgProduct] = useState(`https://training.cleverland.by/shop${colorProductImg[0][0]}`);
    const colorImgProduct = (e) => {  
        setUseColor(e.target.name);
        setImgProduct(e.target.src);
    }

    const buttonStyleChangeColor = () => {
        let btnColorImg = document.getElementsByClassName("colorImages");
        [...btnColorImg].forEach(btn => btn.name === useColor ? btn.style.border = '2px solid black' : btn.style.border = 'none');  
    }
    
    useEffect(() => { buttonStyleChangeColor() }, [buttonStyleChangeColor])

    const [useSize, setUseSize] = useState('');
    const sizeImgProduct = (e) => {
        setUseSize(e.target.value);
    }

    const buttonStyleChangeSize = () => {
        let btnSize = document.getElementsByClassName("size-btn");
        [...btnSize].forEach(btn => btn.value === useSize ? btn.style.border = '2px solid black' : btn.style.border = 'none');  
    }
    useEffect(() => { buttonStyleChangeSize() }, [buttonStyleChangeSize])

    const [discounProductPrice, setDiscounProductPrice] = useState(0);
    
    const discountProductPrice = (price, discount) => {
        const pric =  discount !== null ? +((price * (100 - +discount.replace(/[\D]+/g, '')))/100).toFixed(2) : price;
        setDiscounProductPrice(pric);
    }
    useEffect(() => { discountProductPrice(priceProduct, discountProduct) }, [discountProductPrice])

    const defaultSelect = () => {
        setUseColor(colorProductText[0]);
        setUseSize(sizesProduct[0]);
        setImgProduct(`https://training.cleverland.by/shop${colorProductImg[0][0]}`);
    }
    
    useEffect(() => { defaultSelect() }, [colorProductText[0]])
    useEffect(() => { defaultSelect() }, [sizesProduct[0]])
    useEffect(() => { defaultSelect() }, [`https://training.cleverland.by/shop${colorProductImg[0][0]}`])

    const orderedProduct =  {idProducta, nameProduct, useColor, useSize, discounProductPrice, counter: 1, imgProduct, 
    price: discounProductPrice};
    const productType = pages.toLowerCase();
    const pageType = page.page;
    
  
        return (
            <section className="page-product"  data-test-id={`product-page-${productType}`}>
                <ProductPageNav page={pageType} nameProduct={nameProduct} />
                <div className='wrapper-page-products_title'>
                    <div className='products-page_title'>{nameProduct}</div>
                </div>
                <div className="wrapper-rating">
                    <div> 
                        <Rating rating={ratingProduct} />
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
                            <div><span className="text">COLOR:</span><span className="text1">{useColor}</span></div>
                            <div className="product-information-color-img">
                                {
                                    colorProductImg.map((img, i) => (
                                        <img src={`https://training.cleverland.by/shop${img[0]}`} className="colorImages" name={img[1]} onClick={colorImgProduct} alt='img' key={i}/>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="product-information-size">
                            <div><span className="text">SIZE:</span><span className="text1">{useSize}</span>
                            </div>
                            <div className="product-information-size-btn">
                                {sizesProduct.map((size, i) => (
                                    <button className="size-btn" key={i} onClick={sizeImgProduct} value={size}>{size}</button>
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
                                <ByInCart orderedProduct={orderedProduct} />
                                <div className="product-images">
                                    <img src={heart} alt='img' />
                                    <img src={scale} alt='img' />
                                </div>
                                
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
                                <div>{colorProductText.map(color => (<span className="text" key={color}>{color}</span>))}</div>
                                
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
                                            <Rating rating={ratingProduct} />
                                        </div>
                                        <span>{reviewsProduct.length} Reviews</span>
                                    </div>
                                    <div><img src={annotation} alt="stars" /><span>Write a review</span></div>
                                </div>
                                {reviewsProduct.map(reviews => (
                                <div key={reviews.id}>
                                    <div className="reviews-rating2">
                                        <div><span className="text1">{reviews.name}</span></div>
                                        <div>
                                            <span className="text">3 months ago </span>
                                            <Rating rating={reviews.rating}/>
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

export { ProductPage }