import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './feature.js'

export const store = configureStore({
  reducer: {
    'cart': cartReducer
  },
})