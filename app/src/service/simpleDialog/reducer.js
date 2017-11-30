const reducer = (state = { open: false, answer: '' }, action) => {
  const { type, types, data } = action
  switch (type) {
    case types.simpleDialog_init:
      return { ...state, ...data }
    case types.simpleDialogOpenDialog:
      return { ...state, open: true }
    case types.simpleDialogCloseDialog:
      return { ...state, open: false }
    case types.simpleDialogSubmitResponse:
      return { ...state, answer: 'Submitted', open: false }
    case types.simpleDialogDeleteResponse:
      return { ...state, answer: 'Deleted', open: false }
    default:
      return state
  }
}

export default reducer
