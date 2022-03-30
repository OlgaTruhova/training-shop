import { configureStore } from '@reduxjs/toolkit';
import cartReducers from './cart/cartReducers';
import productsReducers from './products/productsReducers';
import { productsApi } from './products/productsApi';

const store = configureStore({ 
    reducer: {
        cart: cartReducers,
        products: productsReducers,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

export default store;