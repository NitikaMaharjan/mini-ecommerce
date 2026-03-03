import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice.js";
import contentSlice from "./content/contentSlice.js";

export default configureStore({
  reducer: {
    products: productsSlice,
    content: contentSlice
  }
})