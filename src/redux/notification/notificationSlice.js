import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  
  name: "notification",

  initialState: {
    viewNoti: false,
    textNoti: ""
  },
  
  reducers: {
    showNotification: (state, action) => {
      state.viewNoti = true;
      state.textNoti = action.payload;
    },
    hideNotification: (state) => {
      state.viewNoti = false;
      state.textNoti = "";
    }
  }
})

export const { showNotification, hideNotification } = notificationSlice.actions

export default notificationSlice.reducer