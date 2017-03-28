import name from './name'
import { makeActions, makeTypes } from '@gp-technical/stack-redux-app'

const api = makeTypes(name, ['throwFromApi'])
const local = makeTypes(name, ['throwFromLocal'])

const actions = {...makeActions(api), ...makeActions(local, {local: true})}
const types = {...api, ...local}

export { actions, types }
