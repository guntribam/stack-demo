const reducer = (
  state = {
    isStepOpen: false,
    stepIndex: 0,
    submitted: 'Not Submitted'
  },
  action
) => {
  const { type, types, data } = action
  switch (type) {
    case types.dialogStepperOpen:
      return { ...state, isStepOpen: true }
    case types.dialogStepperClose:
      return {
        ...state,
        isStepOpen: false,
        stepIndex: 0,
        submitted: 'No Data Entry'
      }
    case types.dialogStepperPrevious:
      return { ...state, stepIndex: state.stepIndex - 1 }
    case types.dialogStepperNext:
      return { ...state, stepIndex: state.stepIndex + 1 }
    case types.dialogStepperSubmitResponse:
      return {
        ...state,
        ...data,
        submitted: 'Submitted',
        isStepOpen: false,
        stepIndex: 0
      }

    default:
      return state
  }
}

export default reducer
