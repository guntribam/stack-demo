const reducer = (state = {}, action) => {
  const {type, types, data} = action
  switch (type) {
    case types.fetch_init:
      return {...state, data, source: 'API'}
    case types.fetchFromLocal:
      return {...state, data, source: 'APP'}
    case types.fetchFromApiResponse:
      return {...state, data, source: 'API'}
    default:
      return state
  }
}

export default reducer
