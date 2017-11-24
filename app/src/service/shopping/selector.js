import name from './name'

const get = state => {
  return state[name]
}

const getProducts = state => {
  return get(state).products
}

export default { getProducts }
