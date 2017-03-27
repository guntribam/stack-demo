const reducer = (state = {}, action) => {
  const {type, types, data} = action
  console.info('type', type)
  console.info('state', state)
  console.info('data', data)
  switch (type) {
    case types.gp_init:
      return {...state, folders: data.Locations}
    case types.gpGetDocumentsResponse:
      return {...state, documents: data}
    default:
      return state
  }
}

export default reducer
