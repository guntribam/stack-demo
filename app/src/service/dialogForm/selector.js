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
  return {
    wordsError: 'Please only use letters',
    numericError: 'Please provide a number',
    urlError: 'Please provide a valid URL',
    emailError: 'Please provide a valid Email'
  }
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
