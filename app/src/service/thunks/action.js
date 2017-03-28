import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-redux-app'
import { actionHub } from '../../loader'

const types = makeTypes(name, ['getAnswer'])
const actions = makeActions(types)

const thunksGetAnswer = actions.thunksGetAnswer
actions.thunksGetAnswer = () => {
  return async (dispatch, getState) => {
    dispatch(actionHub.SPINNER_ON())
    await dispatch(thunksGetAnswer())
    dispatch(actionHub.SPINNER_OFF())
  }
}

export { actions, types }
