import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { cartClosed } from "../../redux/cart/cartReducers";
import classNames from "classnames";
import { ItemCart } from '../ItemCart/ItemCart';
import closeCartImg from '../../assets/png/close-cart.png';

import './Cart.css';

const Cart = () => {
    const productsInCart = useSelector(state => state.cart.productInCart);
    const isCartOpen = useSelector(state => state.cart.isCartOpen);
    const totalPrice = +(productsInCart.reduce((total, prod) => total + +prod.price, 0)).toFixed(2);
    
    const dispatch = useDispatch();
    function toggleCartMode () {
        dispatch(cartClosed(false));
    }

    return (
        <section className={classNames("container-cart", {visible: isCartOpen})} data-test-id="cart">
            <div className='container-cart__cart-1' onClick={toggleCartMode}></div>
            <div className={classNames("container-cart__cart", {visible: isCartOpen})}>
                <div>
                    <div className='container-cart__cart_title'>
                        <span className='cart__title'>SHOPPING CART</span>
                        <button onClick={toggleCartMode}><img src={closeCartImg} alt='img' /></button>
                    </div>
                    {
                        productsInCart.length > 0 ?
                        <div className='container-cart__cart_menu'>
                            <button className='cart__menu_button activ'>Item in Cart</button>
                            <button className='cart__menu_button'>/ Delivery Info</button>
                            <button className='cart__menu_button'>/ Payment</button>
                        </div>
                        : null
                    }
                </div>
                <div className='container-part container-cart__cart_items-cart'>
                    { 
                        productsInCart.length > 0 ?
                        productsInCart.map((product, i) => (<ItemCart product={product} key={i} />))
                        : <span className='sorry'>Sorry, your cart is empty</span>
                    }
                </div>
                <div className='container-part'>
                    {
                        productsInCart.length > 0 ?
                        <>
                            <div className='container-cart__cart_total'><span className='cart__total_title'>Total</span><span className='cart__total_price'>{`$ ${ totalPrice }`}</span></div>
                            <div className='container-cart__cart_btn'><button className='one'>FURTHER</button></div>
                            <div className='container-cart__cart_btn'><button className='two' onClick={toggleCartMode}>VIEW CART</button></div>
                        </>   
                        :
                        <>
                            <div className='container-cart__cart_btn'><button onClick={toggleCartMode} className='one'>BACK TO SHOPPING</button></div>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export {Cart}
