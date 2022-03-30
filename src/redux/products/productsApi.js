import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://training.cleverland.by/shop/'}),
    endpoints: build => ({
        getProducts: build.query({ query: () => 'products'}),

        addUserEmail: build.mutation({
            query: body => ({
                url: 'email',
                method: 'POST',
                body,
            })
        }),

        getProductReview: build.query({ query: () => 'product/review'}),

        submitProductReview: build.mutation({
            query: body => ({
                url: 'product/review',
                method: 'POST',
                body,
            })
        })
    }),
});

export const { useGetProductsQuery, useGetProductReviewQuery, useAddUserEmailMutation, useSubmitProductReviewMutation } = productsApi;