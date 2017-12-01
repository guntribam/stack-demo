const reducer = (
  state = {
    open: false,
    submitted: 'Not Submitted'
  },
  action
) => {
  const { type, types, data } = action
  switch (type) {
    case types.formDialogOpenDialog:
      return { ...state, open: true }
    case types.formDialogCloseDialog:
      return { ...state, submitted: 'No Data Entry', open: false }
    case types.formDialogSubmitResponse:
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
