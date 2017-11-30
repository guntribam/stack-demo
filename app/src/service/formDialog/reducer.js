const reducer = (
  state = { open: false, submitted: 'Not Submitted' },
  action
) => {
  const { type, types, data } = action
  switch (type) {
    case types.formDialog_init:
      return { ...state, ...data }
    case types.formDialogOpenDialog:
      return { ...state, open: true }
    case types.formDialogCloseDialog:
      return { ...state, submitted: 'No Data Entry', open: false }
    case types.formDialogSubmitResponse:
      return {
        ...state,
        submitted: 'Submitted',
        open: false
      }

    default:
      return state
  }
}

export default reducer
