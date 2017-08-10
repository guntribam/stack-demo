const reducer = (state = {}, action) => {
  const {type, types, data} = action
  switch (type) {
    case types.timer_init:
    case types.timerGetTimeResponse:
      console.info('type', type)
      console.info('state', state)
      console.info('data', data)
      return {...state, time: data.time}
    default:
      return state
  }
}

export default reducer
