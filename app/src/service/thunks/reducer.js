const reducer = (state = {answer: 'unknown'}, action) => {
  const {type, types, data} = action
  switch (type) {
    case types.thunksGetAnswerResponse:
      return {...state, answer: data.answer}
    default:
      return state
  }
}

export default reducer
