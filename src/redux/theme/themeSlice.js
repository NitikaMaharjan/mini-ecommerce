import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  
  name: "theme",

  initialState: {
    themeChoice: "light"
  },
  
  reducers: {
    changeTheme: (state) => {
      state.themeChoice = state.themeChoice==="light"?"dark":"light";
      document.documentElement.setAttribute("data-theme", state.themeChoice);
    }
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer