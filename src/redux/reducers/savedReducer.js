import { createSlice } from "@reduxjs/toolkit";
import initialState from "../InitialState";

const savedSlice = createSlice({
  name: 'saved',
  initialState: initialState.saved,
  reducers: {
    addToSaved: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addToSaved } = savedSlice.actions
export default savedSlice.reducer