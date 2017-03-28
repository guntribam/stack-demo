import name from './name'

const get = (state) => {
  return state[name]
}

const getAnswer = (state) => {
  return get(state).answer
}

export default {get, getAnswer}
