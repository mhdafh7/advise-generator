import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "../features/api/apiSlice"

const initialQuery = {
    value: "",
}

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})