import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productInCart: [],
        isCartOpen: false,
    },

    reducers: {
        addOrder: (state, action) => {
            state.productInCart.push(action.payload)
        },
        removeOrder: (state, action) => {
            state.productInCart = state.productInCart.filter(order => (
                order.idProducta !== action.payload.idProducta
                || order.useColor !== action.payload.useColor
                || order.useSize !== action.payload.useSize
            ))
        },

        cartOpen: (state, action) => {
            state.isCartOpen = action.payload
        },
        cartClosed: (state, action) => {
            state.isCartOpen = action.payload
        },

        counterPlus: (state, action) => {
            state.productInCart.forEach(order => {
                if (
                    order.idProducta === action.payload.idProducta
                    && order.useColor === action.payload.useColor
                    && order.useSize === action.payload.useSize
                ) {
                    if (order.counter >= 1) {
                        order.counter = order.counter + 1;
                        order.price = +(order.price + order.discounProductPrice).toFixed(2);
                    }
                }
            })
        },
        counterMinus: (state, action) => {
            state.productInCart.forEach(order => {
                if (
                    order.idProducta === action.payload.idProducta
                    && order.useColor === action.payload.useColor
                    && order.useSize === action.payload.useSize
                ) {
                    if (order.counter > 1) {
                        order.counter = order.counter - 1;
                        order.price = +(order.price - order.discounProductPrice).toFixed(2);
                    }
                }
            })
        },
    },
});

export const {addOrder, removeOrder, cartOpen, cartClosed, counterPlus, counterMinus} = cartSlice.actions;
export default cartSlice.reducer;