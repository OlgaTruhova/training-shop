import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './cart/cartReducers';

const store = configureStore({
    reducer: {
        cart: cartReducers,
    },
});

export default store;