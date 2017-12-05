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
    case types.stepperDialogOpenStepper:
      return { ...state, isStepOpen: true }
    case types.stepperDialogCloseStepper:
      return {
        ...state,
        isStepOpen: false,
        stepIndex: 0,
        submitted: 'No Data Entry'
      }
    case types.stepperDialogPreviousStep:
      return { ...state, stepIndex: state.stepIndex - 1 }
    case types.stepperDialogNextStep:
      return { ...state, stepIndex: state.stepIndex + 1 }
    case types.stepperDialogSubmitResponse:
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
