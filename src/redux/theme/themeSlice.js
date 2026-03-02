import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  
  name: 'theme',

  initialState: {
    bgColor: 'white',
    txtColor: 'black'
  },
  
  reducers: {
    changeTheme: (state, action) => {
      state.bgColor = action.payload.bgColor;
      state.txtColor = action.payload.txtColor;
    }
  }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer