import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({baseUrl: 'https://training.cleverland.by/shop/products'}),
    endpoints: build => ({
        getProducts: build.query({ query: () => ''}),
    }),
})

export const { useGetProductsQuery } = productsApi;