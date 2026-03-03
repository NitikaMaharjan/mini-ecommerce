import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice.js";

export default configureStore({
  reducer: {
    products: productsSlice
  }
})