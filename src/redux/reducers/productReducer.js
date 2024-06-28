import { createSlice } from "@reduxjs/toolkit";
import initialState from "../InitialState";

const productSlice = createSlice({
  name: 'products',
  initialState: initialState.products,
})

export const { actions: productActions } = productSlice

export default productSlice.reducer
