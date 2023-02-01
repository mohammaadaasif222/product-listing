import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    addToCart(state, action) { 
      state.push(action.payload);
    },
    removeToCart(state, action) {
      console.log("cart",action);
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
