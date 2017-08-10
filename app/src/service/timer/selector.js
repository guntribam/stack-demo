import name from './name'

const get = (state) => {
  return state[name]
}

const getTime = (state) => {
  return get(state).time
}

export default {get, getTime}
