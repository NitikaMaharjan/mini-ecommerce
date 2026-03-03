import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  
  name: "content",

  initialState: {
    contentChoice: "shop"
  },
  
  reducers: {
    changeContent: (state, action) => {
      state.contentChoice = action.payload;
    }
  }
})

export const { changeContent } = contentSlice.actions

export default contentSlice.reducer