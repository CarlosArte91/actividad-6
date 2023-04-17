import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  listProducts: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    refreshProducts: (state, action) => {
      state.listProducts = action.payload
    }
  },
})

export const { refreshProducts } = productsSlice.actions

export default productsSlice.reducer
