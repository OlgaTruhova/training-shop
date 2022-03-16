import React from "react";
import './ItemsInCart.css';

const ItemsInCart = (quantity) => {
    const quantit = quantity.quantity;
    return (
        <div className="items-in-cart" data-test-id="cart-button">
            {quantit}
        </div>
    )
}
export { ItemsInCart }