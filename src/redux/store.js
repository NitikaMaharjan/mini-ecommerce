import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice.js";
import contentSlice from "./content/contentSlice.js";
import themeSlice from "./theme/themeSlice.js";
import notificationSlice from "./notification/notificationSlice.js";

export default configureStore({
  reducer: {
    products: productsSlice,
    content: contentSlice,
    theme: themeSlice,
    notification: notificationSlice
  }
})