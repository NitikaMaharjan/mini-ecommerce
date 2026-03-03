import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  
  name: "products",

  initialState: {
    items: [
      {
        id: 1,
        url: "/products/1.jpg",
        name: "One",
        price: 90
      },
      {
        id: 2,
        url: "/products/2.jpg",
        name: "Two",
        price: 85
      },
      {
        id: 3,
        url: "/products/3.jpg",
        name: "Three",
        price: 85
      },
      {
        id: 4,
        url: "/products/4.jpg",
        name: "Four",
        price: 85
      },
      {
        id: 5,
        url: "/products/5.jpg",
        name: "Five",
        price: 70
      },
      {
        id: 6,
        url: "/products/6.jpg",
        name: "Six",
        price: 75
      },
      {
        id: 7,
        url: "/products/7.jpg",
        name: "Seven",
        price: 70
      },
      {
        id: 8,
        url: "/products/8.jpg",
        name: "Eight",
        price: 90
      },
      {
        id: 9,
        url: "/products/9.jpg",
        name: "Nine",
        price: 90
      },
      {
        id: 10,
        url: "/products/10.jpg",
        name: "Ten",
        price: 95
      }
    ],
    favItems: [],
    cartItems: [],
    totalPrice: 0
  },
  
  reducers: {
    addToFav: (state, action) => {
      const exists = state.favItems.some(item => item.id === action.payload.id);
      if (!exists) {
        state.favItems.push({id: action.payload.id, url: action.payload.url, name: action.payload.name, price: action.payload.price});
      }
    },
    removeFromFav: (state, action) => {
      state.favItems = state.favItems.filter(item => item.id !== action.payload);
    },
    addToCart: (state, action) => {
      const exists = state.cartItems.some(item => item.id === action.payload.id);
      if (!exists) {
        state.cartItems.push({id: action.payload.id, url: action.payload.url, name: action.payload.name, price: action.payload.price});
        state.totalPrice += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      state.totalPrice -= action.payload.price;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    }
  }
})

export const { addToFav, removeFromFav, addToCart, removeFromCart, clearCart } = productsSlice.actions

export default productsSlice.reducer