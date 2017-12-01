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

const getErrorMessages = state => {
  return get(state).errorMessages
}
const getForm = state => {
  return {
    firstName: get(state).firstName,
    lastName: get(state).lastName,
    age: get(state).age,
    email: get(state).email
  }
}

export default {
  get,
  getOpen,
  getSubmitted,
  getForm,
  getErrorMessages
}
