import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartOpen } from "../../redux/cart/cartReducers";

import { Cart } from "../Cart/Cart";
import { ItemsInCart } from "../ItemsInCart/ItemsInCart";
import shoppingBag from "../../assets/png/shopping-bag.png";
import './ButtonCart.css';


const ButtonCart = () => {
    const productInCart = useSelector(state => state.cart.productInCart);
    const dispatch = useDispatch();
    function toggleCartMode () {
        dispatch(cartOpen(true));
    }

    return (
        <> 
        <div className="container-button-cart">
            {productInCart.length > 0 ? <ItemsInCart quantity={productInCart.length} /> : null}
            <button type="button" className="button-cart" onClick={toggleCartMode} data-test-id='cart-button'><img src={shoppingBag} alt='img'/></button>
        </div>
            
            <Cart />
        </>
    )
        
}

export { ButtonCart }