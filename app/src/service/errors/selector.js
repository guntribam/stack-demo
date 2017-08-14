import name from './name'

const get = (state) => {
  console.info('state', state)
  return state[name]
}

const getText = (state) => {
  return get(state).text
}

export default {get, getText}
