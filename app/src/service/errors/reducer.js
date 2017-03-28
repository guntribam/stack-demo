const reducer = (state = {answer: 'unknown'}, action) => {
  const {type, types, data} = action
  switch (type) {
    case types.errorsThrownFromLocal:
      return {...state, error: data.error}
    default:
      return state
  }
}

export default reducer
