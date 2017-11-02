import name from './name'

const get = state => {
  return state[name]
}

const getTotal = state => {
  return get(state).total
}

export default { getTotal }
