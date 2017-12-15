const reducer = (
  state = {
    open: false,
    submitted: 'Not Submitted'
  },
  action
) => {
  const { type, types, data } = action
  switch (type) {
    case types.dialogFormOpenDialog:
      return { ...state, open: true }
    case types.dialogFormCloseDialog:
      return { ...state, submitted: 'No Data Entry', open: false }
    case types.dialogFormSubmitResponse:
      return {
        ...state,
        ...data,
        submitted: 'Submitted',
        open: false
      }

    default:
      return state
  }
}

export default reducer
