import React from "react";
import { useDispatch } from "react-redux";
import { counterPlus, counterMinus, removeOrder } from "../../redux/cart/cartReducers";
import trash from "../../assets/png/trash.png";
import "./ItemCart.css";

const ItemCart = (products) => {
    const product = products.product;
    const dispatch = useDispatch();
    
    function changeCounter (e) {
        e.target.textContent === '+' ? dispatch(counterPlus(product)) : dispatch(counterMinus(product));
    }
    
    const changeCart = () => {
        dispatch(removeOrder(product))
    }

    return (
        <section className="container-item-cart" data-test-id="cart-card">
            <div className="item-cart__img">
                <img src={product.imgProduct} alt="img"/>
            </div>
            <div className="item-cart__inform">
                <div>
                    <span className="item-cart__inform_name">{product.nameProduct}</span>
                    <span className="item-cart__inform_color-size">{`${product.useColor}, ${product.useSize}`}</span>
                </div>
              
                <div className="item-cart__price-block">
                    <div className="item-cart__counter">
                        <button onClick={changeCounter} data-test-id='minus-product'>-</button>
                        <span>{product.counter}</span>
                        <button onClick={changeCounter} data-test-id='plus-product'>+</button>
                    </div>
                    <span>{`$ ${product.price}`}</span>
                    <img className="item-cart__trash" src={trash} alt="img" onClick={changeCart} data-test-id='remove-product'/>
                </div>
            </div>
        </section>
    )
}

export { ItemCart }