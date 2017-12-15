import name from './name'

const get = state => {
  return state[name]
}

const getProductAdded = state => {
  return get(state).productAdded
}

const getIsSnackbarOpen = state => {
  return get(state).isSnackbarOpen
}

const getCategories = state => {
  return get(state).categories
}

const getPriceRange = state => {
  return get(state).priceRange
}

const getProductsInCart = state => {
  return get(state).productsInCart
}

const getProducts = state => {
  return get(state).products
}

const getCartOpen = state => {
  return get(state).cartOpen
}

const getHandlingCheckout = state => {
  return get(state).isHandlingCheckout
}

const getIsCheckoutCompleted = state => {
  return get(state).isCheckoutCompleted
}

export default {
  getProducts,
  getProductsInCart,
  getHandlingCheckout,
  getIsCheckoutCompleted,
  getCategories,
  getProductAdded,
  getIsSnackbarOpen,
  getCartOpen,
  getPriceRange
}
