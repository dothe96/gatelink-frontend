import { configureStore } from "@reduxjs/toolkit";
import web3Slice from "../web3/Web3Slice";

const store = configureStore({
    reducer: {
        web3: web3Slice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export default store;