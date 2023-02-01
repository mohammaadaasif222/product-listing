import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./features/dataSlice";
import CartReducer from "./features/cartSlice"
import CounterReducer from "./features/counterSlice"
const store = configureStore({
    reducer:{
        data : DataReducer,
        cart: CartReducer,
        counter:CounterReducer
    },
})

export default store;