import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./styles/index.scss"
import { store } from "./app/store"
import { Provider } from "react-redux"
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { apiSlice } from "./features/api/apiSlice"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <ApiProvider api={apiSlice}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ApiProvider>
        </Provider>
    </React.StrictMode>
)
