const reducer = (state = {}, action) => {
  const { type, types, data } = action
  switch (type) {
    case types.sphere_init:
    case types.sphereGetVolumeResponse:
      return { ...state, ...data }
    default:
      return state
  }
}

export default reducer
