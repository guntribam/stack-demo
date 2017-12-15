import name from './name'

const get = state => {
  return state[name]
}

const getOpen = state => {
  return get(state).open
}

const getAnswer = state => {
  return get(state).answer
}

export default { get, getOpen, getAnswer }
