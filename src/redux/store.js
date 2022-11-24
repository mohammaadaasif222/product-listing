import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./features/dataSlice";

export default configureStore({
    reducer:{
        data : DataReducer
    },
})