const reducer = (state = {}, action) => {
  const { type, types, data } = action
  console.info('type', type)
  console.info('state', state)
  console.info('data', data)
  switch (type) {
    case types.sphere_init:
    case types.sphereGetVolumeResponse:
      return { ...state, ...data }
    default:
      return state
  }
}

export default reducer
