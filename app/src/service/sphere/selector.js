import name from './name'

const get = state => {
  return state[name]
}

const getVolume = state => {
  return get(state).volume
}

const getRadius = state => {
  return get(state).radius
}

export default { get, getVolume, getRadius }
