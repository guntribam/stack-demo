import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-redux-app'

const api = makeTypes(name, ['fetchGreeting'])
const local = makeTypes(name, ['greet'])

const actions = {...makeActions(api), ...makeActions(local, {local: true})}
const types = {...api, ...local}

export { actions, types }
