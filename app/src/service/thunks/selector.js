import name from './name'

const get = state => {
  return state[name]
}

const getAnswer = state => {
  return get(state).answer
}

const getIsRunning = state => {
  return get(state).isRunning
}

export default { getAnswer, getIsRunning }
