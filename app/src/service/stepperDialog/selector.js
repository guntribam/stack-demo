import name from './name'

const get = state => {
  return state[name]
}

const getStepOpen = state => {
  return get(state).isStepOpen
}

const getStepIndex = state => {
  return get(state).stepIndex
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

const getStepperInput = state => {
  return {
    firstName: get(state).firstName,
    lastName: get(state).lastName,
    age: get(state).age,
    email: get(state).email,
    sex: get(state).sex,
    employed: get(state).employed
  }
}

export default {
  getStepOpen,
  getStepIndex,
  getErrorMessages,
  getSubmitted,
  getStepperInput
}
