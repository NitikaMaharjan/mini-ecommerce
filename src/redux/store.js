import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter/counterSlice.js'
import themeSlice from './theme/themeSlice.js'

export default configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice
  }
})