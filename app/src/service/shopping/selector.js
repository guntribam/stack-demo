import name from './name'

const get = state => {
  return state[name]
}

const getAddedProduct = state => {
  return get(state).addedProduct
}

const getIsSnackBarOpen = state => {
  return get(state).isSnackBarOpen
}

const getCategories = state => {
  return get(state).categories
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
  getAddedProduct,
  getIsSnackBarOpen,
  getCartOpen
}
