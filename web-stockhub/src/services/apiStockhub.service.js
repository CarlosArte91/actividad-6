import axios from "axios";

const apiStockhub = axios.create({
  baseURL: 'http://localhost:9000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getAllProducts = () => {
  return apiStockhub.get('/products')
}

export const getProductsFiltered = (params) => {
  return apiStockhub.get(`/product?${params}`)
}

export const asignCategory = (category) => {
  return apiStockhub.post('/category', category)
}

export const createProduct = (product) => {
  return apiStockhub.post('/product', product)
}

export const getAllCategories = () => {
  return apiStockhub.get('/categories')
}

export const getCodesByCategory = (category) => {
  return apiStockhub.get(`/codes/${category}`)
}

export const getProductByCode = (code) => {
  return apiStockhub.get(`/product/${code}`)
}

export const updateStockProduct = (id, product) => {
  return apiStockhub.patch(`/product/${id}`, product)
}
