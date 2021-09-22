import { configureStore } from "@reduxjs/toolkit";

import bankReducer from "./bank/bank-reducer";

const store = configureStore({
    reducer: {
        banks: bankReducer
    }
})

export default store