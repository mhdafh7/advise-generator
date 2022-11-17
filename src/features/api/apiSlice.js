import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.adviceslip.com/',
    }),
    keepUnusedDataFor: 30,
    endpoints: (builder) => ({
        getAdvice: builder.query({
            query: () => 'advice',
        }),
        getSearchAdvice: builder.query({
            query: (searchItem) => `advice/search/${searchItem}`,
        }),
    }),
});

export const { useGetAdviceQuery, useGetSearchAdviceQuery } = apiSlice;
