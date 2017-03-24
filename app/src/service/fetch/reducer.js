const reducer = (state = {}, action) => {
  const {type, types, data} = action
  switch (type) {
    case types.fetch_init:
      return {...state, data, source: 'initial state pushed by the api'}
    case types.fetchFromLocal:
      return {...state, data, source: 'data fetched locally from the app'}
    case types.fetchFromApiResponse:
      return {...state, data, source: 'data fetched via the application api'}
    default:
      return state
  }
}

export default reducer
