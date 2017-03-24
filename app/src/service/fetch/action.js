import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-redux-app'

const api = makeTypes(name, ['fromApi'])
const local = makeTypes(name, ['fromLocal'])

const actions = {...makeActions(api), ...makeActions(local, {local: true})}
const types = {...api, ...local}

export { actions, types }
