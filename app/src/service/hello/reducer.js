const reducer = (state = {}, action) => {
  const {type, types, data} = action
  switch (type) {
    case types.hello_init:
      return {...state, message: data, source: 'initial state delivered by the api'}
    case types.helloFetchMessageResponse:
      return {...state, message: data, source: 'data payload sourced and delivered by api'}
    case types.helloWorld:
      return {...state, message: data, source: 'data sent locally by the app'}
    default:
      return state
  }
}

export default reducer
