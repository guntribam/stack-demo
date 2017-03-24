const reducer = (state = {}, action) => {
  const {type, types, data} = action
  switch (type) {
    case types.counter_init:
    case types.counterGetTotalResponse:
    case types.counterIncrementResponse:
    case types.counterDecrementResponse:
      return {...state, total: data}
    default:
      return state
  }
}

export default reducer
