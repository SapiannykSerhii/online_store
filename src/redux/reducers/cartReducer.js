import { createSlice } from "@reduxjs/toolkit";
import initialState from "../InitialState";

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState.cart,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id)
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer