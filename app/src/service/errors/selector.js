import name from './name'

const get = (state) => {
  return state[name]
}

const getText = (state) => {
  return get(state).text
}

export default {get, getText}
