import name from './name'

const get = state => {
  return state[name]
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

const getCheckoutCompleted = state => {
  return get(state).checkoutCompleted
}

export default {
  getProducts,
  getProductsInCart,
  getHandlingCheckout,
  getCheckoutCompleted,
  getCategories,
  getCartOpen
}
