import name from './name'

const get = (state) => {
  return state[name]
}

const getError = (state) => {
  return get(state).error
}

export default {get, getError}
