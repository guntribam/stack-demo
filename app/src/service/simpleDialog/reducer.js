const reducer = (state = { open: false, answer: '' }, action) => {
  const { type, types, data } = action
  switch (type) {
    case types.simpleDialogOpenDialog:
      return { ...state, open: true }
    case types.simpleDialogCloseDialog:
      return { ...state, open: false }
    case types.simpleDialogSubmitResponse:
      return { ...state, answer: data, open: false }
    case types.simpleDialogDeleteResponse:
      return { ...state, answer: data, open: false }
    default:
      return state
  }
}

export default reducer
