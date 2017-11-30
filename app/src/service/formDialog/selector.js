import name from './name'

const get = state => {
  return state[name]
}

const getOpen = state => {
  return get(state).open
}

const getSubmitted = state => {
  return get(state).submitted
}

const getForm = state => {
  return get(state).form
}

export default {
  get,
  getOpen,
  getSubmitted,
  getForm
}
