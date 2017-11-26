import name from './name'

const get = state => {
  return state[name]
}

const getProductsInCard = state => {
  return get(state).productsInCard
}

const getProducts = state => {
  return get(state).products
}

export default { getProducts, getProductsInCard }
