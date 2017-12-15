const reducer = (state = { open: false, answer: '' }, action) => {
  const { type, types, data } = action
  switch (type) {
    case types.dialogSimpleOpenDialog:
      return { ...state, open: true }
    case types.dialogSimpleCloseDialog:
      return { ...state, open: false }
    case types.dialogSimpleSubmitResponse:
      return { ...state, answer: data, open: false }
    case types.dialogSimpleDeleteResponse:
      return { ...state, answer: data, open: false }
    default:
      return state
  }
}

export default reducer
