import name from './name'

const get = state => {
  return state[name]
}

const getTodos = state => {
  return get(state).list
}

export default { getTodos }
