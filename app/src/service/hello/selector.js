import name from './name'

const get = (state) => {
  return state[name]
}

const getMessage = (state) => {
  return get(state).message
}

const getSource = (state) => {
  return get(state).source
}

export default {get, getMessage, getSource}
