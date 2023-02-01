import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 1 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      if(state.value === 1){
        return;
      }
      state.value--
    },
    incrementByAmount(state, action) {
      
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer