import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productsSlice'

export const store = configureStore({
  reducer: {
    products: productReducer
  }
})
